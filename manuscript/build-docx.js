// Builds a Scopus-style review manuscript (title page, highlights, abstract, keywords,
// introduction, references) from draft-abstract-introduction.md.
const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, Footer, PageNumber,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, LevelFormat, PageBreak,
  LineNumberRestartFormat,
} = require("docx");

const SRC = process.argv[2];
const OUT = process.argv[3];
const md = fs.readFileSync(SRC, "utf8").split("\n");

const FONT = "Times New Roman";
const BODY = 24; // 12 pt
const LINE = 480; // double spacing, the usual manuscript requirement
const TODO_FILL = "FFF2B3";

// Inline markdown: **bold**, *italic*, [todo] highlighted.
function runs(text, base = {}) {
  text = text.replace(/\*(\[[^\]]+\])\*/g, "$1");  // italic to-do notes become highlighted notes
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]*(?:Confirm|Insert|Authors to verify|check for)[^\]]*\])/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const t = m[0];
    if (t.startsWith("**")) out.push(new TextRun({ text: t.slice(2, -2), bold: true, ...base }));
    else if (t.startsWith("*")) out.push(new TextRun({ text: t.slice(1, -1), italics: true, ...base }));
    else out.push(new TextRun({ text: t, ...base, shading: { type: ShadingType.CLEAR, fill: TODO_FILL, color: "auto" } }));
    last = m.index + t.length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), ...base }));
  return out;
}

const body = (text, opts = {}) => new Paragraph({
  children: runs(text), alignment: AlignmentType.JUSTIFIED,
  spacing: { line: LINE, after: 0 }, indent: opts.noIndent ? undefined : { firstLine: 567 }, ...opts.p,
});
const label = (text) => new Paragraph({ children: [new TextRun({ text, bold: true })], spacing: { line: LINE, before: 240, after: 0 }, keepNext: true });
const todo = (text) => new Paragraph({ children: [new TextRun({ text, italics: true, shading: { type: ShadingType.CLEAR, fill: TODO_FILL, color: "auto" } })], spacing: { line: LINE, after: 0 } });

// ---------- Parse the draft ----------
const title = md.find(l => l.startsWith("# ")).slice(2).trim();
let abstract = "", keywords = "";
const intro = [];   // {type, ...}
const refs = [];
let section = null;
for (let i = 0; i < md.length; i++) {
  const l = md[i].replace(/\s*\*\(Atlas[^)]*\)\*/g, "");
  if (l.startsWith("## ")) { section = l.slice(3).trim(); continue; }
  if (/^\*\(.*\)\*$/.test(l.trim()) || l.trim() === "---") continue;   // atlas cross-refs, word-count notes, rules
  if (section === "Abstract") {
    if (l.startsWith("**Keywords:**")) keywords = l.replace("**Keywords:**", "").trim();
    else if (l.trim() && !l.startsWith("*")) abstract += (abstract ? " " : "") + l.trim();
  } else if (section && section.startsWith("1. Introduction")) {
    if (l.startsWith("### ")) intro.push({ type: "h2", text: l.slice(4).trim() });
    else if (/^\s*\|/.test(l)) {
      const cells = l.trim().slice(1, -1).split("|").map(s => s.trim());
      if (cells.every(c => /^-+$/.test(c))) continue;
      const lastBlock = intro[intro.length - 1];
      if (lastBlock && lastBlock.type === "table") lastBlock.rows.push(cells);
      else intro.push({ type: "table", rows: [cells] });
    } else if (/^\s*- /.test(l)) {
      const level = l.match(/^\s*/)[0].length >= 2 ? 1 : 0;
      intro.push({ type: "li", level, text: l.replace(/^\s*- /, "").trim() });
    } else if (/^\s{2,}\S/.test(l) && intro.length && intro[intro.length - 1].type === "li") {
      intro.push({ type: "li-cont", text: l.trim() });  // continuation paragraph inside a list item
    } else if (l.trim().startsWith("*[") || /^Literature was identified/.test(l)) {
      intro.push({ type: "p", text: l.trim() });
    } else if (l.trim()) intro.push({ type: "p", text: l.trim() });
  } else if (section && section.startsWith("References")) {
    const m = l.match(/^(\d+)\.\s+(.*)$/);
    if (m) refs.push({ n: +m[1], text: m[2] });
  }
}

// ---------- Build ----------
const children = [];
const words = abstract.split(/\s+/).length;

// Title page
children.push(new Paragraph({ children: [new TextRun({ text: "Review Article", italics: true, size: 22 })], spacing: { after: 240 } }));
children.push(new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun({ text: title })], alignment: AlignmentType.CENTER }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 240, line: 360 },
  children: [new TextRun({ text: "[Author One]", shading: { type: ShadingType.CLEAR, fill: TODO_FILL, color: "auto" } }), new TextRun({ text: "a,*", superScript: true }), new TextRun(", "),
    new TextRun({ text: "[Author Two]", shading: { type: ShadingType.CLEAR, fill: TODO_FILL, color: "auto" } }), new TextRun({ text: "a", superScript: true }), new TextRun(", "),
    new TextRun({ text: "[Author Three]", shading: { type: ShadingType.CLEAR, fill: TODO_FILL, color: "auto" } }), new TextRun({ text: "b", superScript: true })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, line: 360 }, children: [new TextRun({ text: "a ", superScript: true }), ...runs("[Faculty / School, Universiti Teknologi Malaysia, 81310 Johor Bahru, Johor, Malaysia — confirm affiliation]", { italics: true })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { line: 360 }, children: [new TextRun({ text: "b ", superScript: true }), ...runs("[Second affiliation, if any — confirm]", { italics: true })] }));
children.push(new Paragraph({ spacing: { before: 360, line: 360 }, children: [new TextRun({ text: "* Corresponding author. ", bold: true }), ...runs("[Name, email address, ORCID — confirm]")] }));
children.push(new Paragraph({ spacing: { before: 120, line: 360 }, children: [new TextRun({ text: "Article type: ", bold: true }), new TextRun("Review paper (narrative / systematic-style review)")] }));
children.push(new Paragraph({ spacing: { before: 120, line: 360 }, children: [new TextRun({ text: "Word count: ", bold: true }), new TextRun(`Abstract ${words} words; main text [complete after full draft]`)] }));
children.push(new Paragraph({ children: [new PageBreak()] }));

// Highlights
children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Highlights")] }));
[
  "Friction enhancement is compared as a route to lighter grasp-assist gloves.",
  "Five mechanisms are classified as passive or active by their contact physics.",
  "Active methods restore control but bring back pumps, heaters or high voltage.",
  "Reported gains of 1.4–2000× use incompatible metrics; common measures are proposed.",
  "Strain-activated kirigami skins are identified as an untested, power-free option.",
].forEach(t => children.push(new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [new TextRun(t)], spacing: { line: LINE, after: 0 } })));
children.push(new Paragraph({ children: [new TextRun({ text: "Each highlight is under 85 characters, the limit most Elsevier journals set. Remove this section if the target journal does not use highlights.", italics: true, size: 20, shading: { type: ShadingType.CLEAR, fill: TODO_FILL, color: "auto" } })], spacing: { before: 120 } }));

// Abstract + keywords
children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Abstract")] }));
children.push(body(abstract, { noIndent: true }));
children.push(new Paragraph({ spacing: { line: LINE, before: 240 }, children: [new TextRun({ text: "Keywords: ", bold: true }), new TextRun(keywords.replace(/;\s*/g, "; "))] }));
children.push(new Paragraph({ children: [new PageBreak()] }));

// Introduction
children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. Introduction")] }));
const TABLE_W = 9026; // A4 text width with 1-inch margins (DXA)
let tableNo = 0;
for (const b of intro) {
  if (b.type === "h2") children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(b.text)] }));
  else if (b.type === "p") {
    if (b.text.startsWith("[")) children.push(todo(b.text));
    else children.push(body(b.text));
  }
  else if (b.type === "li") children.push(new Paragraph({ numbering: { reference: "bullets", level: b.level }, children: runs(b.text), alignment: AlignmentType.JUSTIFIED, spacing: { line: LINE, after: 0 } }));
  else if (b.type === "li-cont") children.push(new Paragraph({ children: runs(b.text), indent: { left: 720 }, alignment: AlignmentType.JUSTIFIED, spacing: { line: LINE, after: 0 } }));
  else if (b.type === "table") {
    tableNo++;
    const cols = b.rows[0].length;
    const widths = cols === 3 ? [2300, 4626, 2100] : [1500, 7526];
    const caption = cols === 3 ? "Contributions of this review and the gaps each one addresses." : "Organisation of the review.";
    children.push(new Paragraph({ keepNext: true, spacing: { before: 240, after: 120 }, children: [new TextRun({ text: `Table ${tableNo}. `, bold: true }), new TextRun(caption)] }));
    const border = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
    const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
    children.push(new Table({
      width: { size: TABLE_W, type: WidthType.DXA }, columnWidths: widths,
      rows: b.rows.map((r, ri) => new TableRow({
        tableHeader: ri === 0,
        children: r.map((c, ci) => new TableCell({
          width: { size: widths[ci], type: WidthType.DXA },
          margins: { top: 60, bottom: 60, left: 100, right: 100 },
          borders: { top: ri === 0 ? border : none, bottom: (ri === 0 || ri === b.rows.length - 1) ? border : none, left: none, right: none },
          children: [new Paragraph({ children: runs(c, { size: 20, bold: ri === 0 ? true : undefined }) })],
        })),
      })),
    }));
    children.push(new Paragraph({ children: [], spacing: { after: 120 } }));
  }
}

// References
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("References")] }));
children.push(new Paragraph({ children: [new TextRun({ text: "Numbered in order of first citation (IEEE / Vancouver style). Reformat to the target journal's style and verify each entry against the full text before submission.", italics: true, size: 20, shading: { type: ShadingType.CLEAR, fill: TODO_FILL, color: "auto" } })], spacing: { after: 120 } }));
for (const r of refs) {
  children.push(new Paragraph({
    children: [new TextRun(`[${r.n}]`), new TextRun({ text: "\t" }), ...runs(r.text, { size: 22 })],
    tabStops: [{ type: "left", position: 567 }],
    indent: { left: 567, hanging: 567 }, spacing: { line: 276, after: 80 },
  }));
}

const doc = new Document({
  creator: "Draft",
  title,
  styles: {
    default: { document: { run: { font: FONT, size: BODY } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal", run: { font: FONT, size: 32, bold: true }, paragraph: { spacing: { before: 240, after: 240, line: 360 }, alignment: AlignmentType.CENTER, keepNext: true } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: FONT, size: 26, bold: true }, paragraph: { spacing: { before: 360, after: 120 }, keepNext: true, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { font: FONT, size: 24, bold: true, italics: true }, paragraph: { spacing: { before: 240, after: 60 }, keepNext: true, outlineLevel: 1 } },
    ],
  },
  numbering: { config: [{ reference: "bullets", levels: [
    { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
    { level: 1, format: LevelFormat.BULLET, text: "–", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
  ] }] },
  sections: [{
    properties: {
      page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } },
      lineNumbers: { countBy: 1, restart: LineNumberRestartFormat.CONTINUOUS },
    },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], size: 20 })] })] }) },
    children,
  }],
});

Packer.toBuffer(doc).then(buf => { fs.writeFileSync(OUT, buf); console.log("wrote", OUT, "abstract words", words, "refs", refs.length, "intro blocks", intro.length); });
