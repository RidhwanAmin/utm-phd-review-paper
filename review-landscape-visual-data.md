# Review Landscape — Data Behind the Visualizations

Companion to `research-brief-abstract-intro.md`. This file holds every number and rating that the visualization page plots, with its source, so each figure can be traced and rebuilt.

**Evidence rules**
- **[R] Reported:** taken from a paper abstract (Consensus search, Oct–Nov 2026). Check against the full text before you publish it.
- **[D] Derived:** calculated by us from reported numbers or from a standard physics model.
- **[J] Judgment:** our preliminary rating from the abstracts. It is a placeholder until the review's formal data extraction replaces it.
- **Sample counts:** papers found in our ~15 Consensus searches. They show where research effort sits. They are **not** totals for the whole field, so you need a Scopus/WoS search before quoting any count.

---

## Storyline (four parts → eight figures)

| Part | Question | Figures |
|---|---|---|
| 1. Context | Who needs grasp assistance, and why does friction matter? | Fig 1 Need · Fig 2 Friction lever |
| 2. Current work | What do today's devices do, and where is research concentrated? | Fig 3 Device mass · Fig 4 Coverage heatmap · Fig 5 Timeline |
| 3. What is lacking | Why can't the existing evidence answer "which mechanism suits a glove"? | Fig 6 Metric fragmentation · Fig 7 Wearability scorecard + positioning map |
| 4. How the review closes it | What the review delivers, and which gap each part addresses | Fig 8 Gap × contribution matrix |

---

## Part 1 — Context

### Fig 1 · The need

| Item | Value | Type | Source |
|---|---|---|---|
| Prevalent strokes worldwide (2021) | 93.8 million | R | Feigin et al., 2024, *Lancet Neurol*, 10.1016/s1474-4422(24)00369-7 |
| Stroke survivors with motor dysfunction | 55–75% | R | Tang et al., 2024, *Front Neurol*, 10.3389/fneur.2024.1449729 |
| …of whom have upper-limb impairment | ≈85% | R | Tang et al., 2024 |
| Upper-limb impairment in the chronic phase | 40–50% | R | Krumina et al., 2025, *JMIR Rehabil Assist Technol*, 10.2196/73533 |
| Grip force used by older vs young adults | ≈2× | R | Cole, 1991, *J Motor Behav*, 10.1080/00222895.1991.9942036 |
| Skin slipperiness and safety margin start rising | from age 50 | R | Cole et al., 1999, *J Neurosci*, 10.1523/jneurosci.19-08-03238.1999 |
| Drops with anaesthetised vs intact fingertips | 36% of trials vs 0% | R | Augurelle et al., 2003, *J Neurophysiol*, 10.1152/jn.00249.2002 |
| Human grip safety margin | 10–40% above slip force | R | Islek & Ozbay, 2021, *Int J Adv Robot Syst*, 10.1177/17298814211018055 |

**Chart:** a 100-person unit (waffle) chart of stroke survivors that highlights the 40–50 with chronic upper-limb impairment, plus a bar pair comparing young vs older grip force (1× vs 2×).

### Fig 2 · Friction is a lever [D]

The model is a two-finger pinch holding an object of mass *m* under Coulomb friction with a safety margin *SM*:

**N = m·g / (2·μ) × (1 + SM)** with m = 0.5 kg, g = 9.81 m/s², SM = 0.3 (mid-range of 10–40%).

| μ | Required normal force per finger (N) |
|---|---|
| 0.2 | 15.9 |
| 0.3 | 10.6 |
| 0.5 | 6.4 |
| 0.8 | 4.0 |
| 1.0 | 3.2 |
| 1.5 | 2.1 |
| 2.0 | 1.6 |

These are illustrative. The μ values are not measurements for any particular object.

**Reported assistive force levels to overlay [R]:**

| Device | Force | Source |
|---|---|---|
| Exo-Glove (tendon) | 20 N pinch | In et al., 2015, *IEEE RAM* |
| Portable exoskeleton glove | 16 N pinch | Popov et al., 2017, *IEEE/ASME TMech* |
| Textile glove, average finger assistance | 15.8 N | Suulker et al., 2024, *IEEE RA-L* |
| Modular pouch-motor glove | 2.34 N fingertip | Zhang et al., 2025, *Adv Intell Syst* |

**Insight:** each doubling of μ halves the squeezing force needed. Raising friction from 0.3 to 0.8 cuts the requirement by about 62%, which is more than a weak glove supplies.

---

## Part 2 — Current work

### Fig 3 · Device mass: force-actuated gloves vs friction/adhesion wearables [R]

| Device | Approach | Mass (g) | Mass basis | Source |
|---|---|---|---|---|
| Motorized exo-glove | Force (tendon + motor) | 562 | Full system | Gerez et al., 2019 |
| SMA rehabilitation glove | Force (SMA) | 490 | Full system | Sui et al., 2023 |
| Exo-Glove Poly III | Force (tendon) | 408 | Full system (318 actuator + 90 glove) | Kim et al., 2025 |
| Portable exoskeleton glove | Force (linear actuators) | 340 | Full system | Popov et al., 2017 |
| Body-powered exo-glove | Force (body-powered tendon) | 335 | Full system | Gerez et al., 2019 |
| Spring-steel glove | Force (linear actuators) | 196 | Reported device | Chizhik et al., 2021 |
| Exo-Glove | Force (tendon) | 194 | Glove only (actuator excluded) | In et al., 2015 |
| Customised fabric glove | Force (pneumatic) | 73 | Glove only (pump excluded) | Chen et al., 2025 |
| 3D-printed soft glove | Force (pneumatic/cable) | <50 | Glove only (actuation excluded) | Yi et al., 2017 |
| Tendon-jamming wrist support | Friction/stiffness (jamming) | 184 | Including actuators | Choi et al., 2020 |
| Ionogel adhesive glove (untethered) | Adhesion (thermo-switchable) | 72 | Full system | Wang et al., 2023 |
| Gear-jamming wrist prototype | Stiffness (jamming) | 64 | Prototype (vacuum excluded) | Zuo et al., 2022 |
| So-EAGlove (haptic) | Electroadhesive brake | 51 | Glove | Xiong et al., 2022 |
| Ionogel adhesive glove (rheumatic) | Adhesion (thermo-switchable) | 47 | Full system; "7.2× lighter than existing assistive gloves" | Wang et al., 2025 |

**Insight:** full-system force gloves cluster at 335–562 g. Several friction/adhesion devices are under 75 g as complete systems. The "glove-only" figures for pneumatic gloves leave out the pump and pack, which hides where the bulk really is.

### Fig 4 · Where research effort sits (sample counts)

Rows are mechanisms; columns are application contexts. Each cell is the number of papers in our search sample.

| Mechanism | Robot gripper | Robot locomotion / climbing | Haptic wearable | **Grasp-assist hand wearable** | Other body-worn |
|---|---|---|---|---|---|
| Electroadhesion | 9 | 0 | 4 | **1** | 0 |
| Adhesion (dry + stimulus-responsive) | 12 | 1 | 0 | **3** | 2 |
| Suction | 13 | 1 | 1 | **2** | 2 |
| Jamming | 10 | 0 | 3 | **3** | 3 |
| Kirigami | 8 | 7 | 0 | **0** | 1 |

**What was assigned where**
- **EA, gripper:** Shintake 2015; Guo 2018 ×2; Chen 2019; Chen 2021; Cacucciolo 2021; Mastrangelo 2023; Alizadehyazdi 2020; Xiong 2025.
- **EA, haptic:** Ramachandran 2018; Xiong 2022; Hinchet 2022; Levine 2023.
- **EA, grasp-assist:** Rosle 2024.
- **Adhesion, gripper:** Glick 2018; Ruotolo 2021; Hawkes 2018; Li 2020; Tian 2019; Li 2021 (load sharing); Li 2025; Wang 2025 (bio-toe); Park 2024; Wang 2026; Luo 2022; Zhu 2026.
- **Adhesion, locomotion:** Raut 2018.
- **Adhesion, grasp-assist:** Wang 2023; Wang 2025; Ma 2026.
- **Adhesion, other body-worn:** Hawkes 2015 (human climbing); Li 2021 (human climbing gripper).
- **Suction, gripper:** Jamali 2024; Mazzolai 2019; Wu 2022; Kim 2023; Shahabi 2023; Yuan 2025; Wang 2025; Grazioso 2024; Lee 2025; Yue 2025; Del Dottore 2026; Xie 2023; Hao 2019.
- **Suction, locomotion:** He 2026.
- **Suction, haptic:** Xie 2023 (suction-sensation teleoperation glove).
- **Suction, grasp-assist:** Kim 2024; Frey 2022.
- **Suction, other body-worn:** Chen 2026; Kang 2025 (skin electrodes).
- **Jamming, gripper:** Wei 2016; Fang 2021; Zhu 2023; Zhao 2023; Cardin-Catalan 2021; Huang 2025; Gao 2019; Zhang 2024; Nefti-Meziani 2018; Zhang 2025.
- **Jamming, haptic:** Michikawa 2023; Zubrycki 2016; Jadhav 2021.
- **Jamming, grasp-assist:** Gerez 2020; Kim 2026; Li 2023.
- **Jamming, other body-worn:** Liu 2021; Zuo 2022; Choi 2020.
- **Kirigami, gripper:** Yang 2021; Buzzatto 2022, 2023, 2024; Gomes 2025; Cho 2026; Yang 2024; Qi 2024.
- **Kirigami, locomotion:** Rafsanjani 2018, 2019; Branyan 2020, 2022; Tohidvand 2024; Seyidoğlu 2023, 2025.
- **Kirigami, other body-worn:** Babaee 2020 (shoe grips).

**Insight:** most of the research effort sits in robot grippers. The grasp-assist hand column is thin for every mechanism and empty for kirigami.

### Fig 5 · Timeline: robot-first, wearable-later [R]

Each paper's year plotted by mechanism; marker shows robot vs wearable.

| Mechanism | Robot gripper / locomotion | Other human-worn (haptic, wrist, shoe, climbing) | **Hand grasp-assist** | Lag: first robot → first hand aid |
|---|---|---|---|---|
| Electroadhesion | 2015, 2018, 2018, 2019, 2020, 2021, 2021, 2023, 2025 | 2018, 2022, 2022, 2023 | **2024** | 9 y |
| Adhesion | 2018, 2018, 2018, 2019, 2020, 2021, 2021, 2022, 2025, 2025, 2026 | 2015, 2021 (human climbing) | **2023, 2025, 2026** | 5 y |
| Suction | 2019, 2019, 2022, 2023, 2023, 2023, 2024, 2025, 2025, 2026, 2026 | 2023 (haptic glove) | **2022, 2024** | 3 y |
| Jamming | 2016, 2018, 2019, 2021, 2021, 2023, 2023, 2024, 2025, 2025 | 2016, 2020, 2021, 2021, 2022, 2023 | **2020, 2023, 2026** | 4 y |
| Kirigami | 2018, 2019, 2020, 2021, 2022, 2022, 2023, 2023, 2024, 2024, 2024, 2024, 2025, 2025, 2026 | 2020 (shoe grips) | **none** | not yet |

**Insight:** every mechanism appears in robots first. Hand grasp-assist wearables follow 3–9 years later, and kirigami has not yet crossed over to the hand.

---

## Part 3 — What is lacking

### Fig 6 · Metric fragmentation: headline "gains" reported in incompatible units [R/D]

| Mechanism | Study | Reported value | Ratio (×) | Metric type |
|---|---|---|---|---|
| Electroadhesion | Chen 2019 FinEA | +65% weight held at 4 kV | 1.65 | Force gain |
| Electroadhesion | Cacucciolo 2021 | Peel force <1 mN → >1 N depending on angle | 1000 | Adhesion variation (geometry) |
| Electroadhesion | Rosle 2024 (glove) | "increase friction force"; no number in abstract | — | Not quantified |
| Electroadhesion + jamming | Chen 2021 VSEA | Stiffness change 2200% | 23 | Stiffness ratio |
| Adhesion (thermo) | Wang 2023 | Switching ratio 4.9 | 4.9 | On/off switching |
| Adhesion (thermo) | Wang 2025 | 35 kPa vs 6.8 kPa | 5.1 | On/off switching |
| Adhesion (thermo) | Zhu 2026 | 143.5 kPa vs 5.4 kPa | 26.5 | On/off switching |
| Adhesion (dry) | Tian 2019 | ~20-fold | 20 | On/off switching |
| Adhesion (dry) | Li 2021 | ~54 | 54 | On/off switching |
| Adhesion (SMP) | Luo 2022 | >2000 (curved), ~115 (flat) | 2000 / 115 | On/off switching |
| Suction | Mazzolai 2019 | 1.4× air, 2.4× water, 12.5× oil | 1.4 / 2.4 / 12.5 | Force gain |
| Suction | He 2026 | >270× stress difference | 270 | On/off switching |
| Suction | Frey 2022 (glove) | >450× in <50 ms | 450 | On/off switching |
| Jamming | Wei 2016 | >10-fold stiffness | 10 | Stiffness ratio |
| Jamming | Zuo 2022 | 29× stiffness | 29 | Stiffness ratio |
| Jamming | Gao 2019 | 180× stiffness | 180 | Stiffness ratio |
| Kirigami | Branyan 2020 | COF ratio up to 3.3 | 3.3 | Friction-coefficient ratio |
| Kirigami | Branyan 2022 | Anisotropic ratio >4 | 4 | Friction-coefficient ratio |
| Kirigami | Liefferink 2021 | μ tunable by >10× | 10 | Friction-coefficient ratio |
| Soft glove (reference) | Lai 2023 | 8.4 N → 21.3 N grasp friction | 2.5 | Force gain |

**Insight:** the headline numbers run from 1.4× to 2000×, but they measure four different things. They cannot be ranked against each other. Only kirigami and one glove report friction itself, and almost nobody normalises by added mass or power.

### Fig 7a · Wearability scorecard [J]

Scale: 3 = strong, 2 = moderate, 1 = weak, 0 = no evidence or unknown. Rationale is in the notes.

| Mechanism | Power-free | Low added hardware/mass | On-demand switching | Surface generality | Skin/electrical safety | Preserves touch & dexterity | Evidence on the hand |
|---|---|---|---|---|---|---|---|
| Suction (active) | 1 | 1 | 3 | 2 | 3 | 1 | 2 |
| Jamming | 1 | 1 | 3 | 2 | 3 | 1 | 2 |
| Adhesion — dry (gecko) | 3 | 3 | 2 | 1 | 3 | 2 | 1 |
| Adhesion — stimulus-responsive | 1 | 2 | 2 | 2 | 2 | 2 | 3 |
| Electroadhesion | 2 | 2 | 3 | 2 | 1 | 3 | 1 |
| Kirigami | 3 | 3 | 2 | 2 | 3 | 0 | 0 |

**Notes on the ratings**
- **Suction:** needs a pump or thermal actuation (Kim 2024). Passive variants are emerging (He 2026). Works well on wet and smooth surfaces but struggles on porous ones. The cups are bulky on the fingerpad.
- **Jamming:** needs vacuum (positive-pressure variants exist, Liu 2021). It controls stiffness rather than surface friction directly, and it stiffens the hand.
- **Dry adhesion:** power-free but weak on rough, dirty or fouled surfaces (Glick 2018; Sikdar 2022). On the hand it has only been shown for climbing (Hawkes 2015).
- **Stimulus-responsive adhesion:** needs 4 V heaters at 45 °C and takes about 4 s to switch. It works on various materials (≈35 kPa) and is the only one tested with patients (Wang 2025).
- **Electroadhesion:** draws little power (mW) but needs high voltage (<400 V in Rosle 2024, kV in many grippers). Low-voltage ionoelastomer clutches at ±7.5 V are emerging (Levine 2023). Thin pads leave touch largely intact. Only one grasp-glove study exists.
- **Kirigami:** passive and strain-triggered, and works on ice and rough ground in shoes (Babaee 2020). Its effect on touch and its use on the hand are untested.

### Fig 7b · Positioning map [D from 7a]

- **x = hardware burden** = 3 − mean(Power-free, Low added hardware)
- **y = controllability** = On-demand switching score
- **Target zone:** low burden and moderate-to-high controllability (x ≤ 1, y ≥ 2)

| Mechanism | Burden (x) | Controllability (y) |
|---|---|---|
| Suction | 2.0 | 3 |
| Jamming | 2.0 | 3 |
| Adhesion — dry | 0.0 | 2 |
| Adhesion — responsive | 1.5 | 2 |
| Electroadhesion | 1.0 | 3 |
| Kirigami | 0.0 | 2 |

**Insight:** the mechanisms with the most control carry the most hardware. Kirigami and dry adhesion sit in the low-burden zone. EA is borderline: its burden depends on whether low-voltage EA matures.

---

## Part 4 — How the review closes the gap

### Fig 8 · Gap × contribution matrix

Gaps G1–G5 are rows; review contributions C1–C6 are columns. ● = primary answer, ○ = supporting.

**Gaps**
- **G1:** no review compares mechanisms for wearables
- **G2:** active methods add back bulk and power
- **G3:** kirigami is absent from hand wearables
- **G4:** there are no common performance metrics
- **G5:** effects on the user (touch, comfort, safety) are rarely tested

**Contributions**
- **C1:** passive/active taxonomy by contact mechanism
- **C2:** wearable-criteria benchmark table
- **C3:** normalised metrics (Δμ, switching, per gram, per watt)
- **C4:** analysis of the bulk-free trade-off
- **C5:** kirigami opportunity analysis
- **C6:** roadmap and standard test protocol

| Gap | C1 Taxonomy | C2 Benchmark | C3 Metrics | C4 Trade-off | C5 Kirigami | C6 Roadmap |
|---|---|---|---|---|---|---|
| G1 | ● | ● | ○ | ○ | | |
| G2 | ○ | ● | ○ | ● | ○ | |
| G3 | ○ | | | ○ | ● | ○ |
| G4 | | ○ | ● | | | ● |
| G5 | | ● | ○ | | ○ | ● |

---

## Additional sources added in this round

- [Global, regional, and national burden of stroke and its risk factors, 1990–2021](https://consensus.app/papers/details/f0976367614951ccaac45358aa14eb44/?utm_source=claude_desktop) — Feigin et al., 2024, *Lancet Neurol*
- [Research trends and hotspots of post-stroke upper limb dysfunction](https://consensus.app/papers/details/c399634cccec5873935ed0de710ea0a3/?utm_source=claude_desktop) — Tang et al., 2024, *Front Neurol*
- [Smart Device–Based Therapy on Hand Motor Function Improvement in Stroke Survivors](https://consensus.app/papers/details/9fc63bcbbbf35eada42c828dc062e6bc/?utm_source=claude_desktop) — Krumina et al., 2025, *JMIR Rehabil Assist Technol*
- [A Low-Voltage, High-Force Capacity Electroadhesive Clutch Based on Ionoelastomer Heterojunctions](https://consensus.app/papers/details/10e8ccb494a15ac8a438175e4f9e2671/?utm_source=claude_desktop) — Levine et al., 2023, *Adv Mater*
- [Low-Voltage Reversible Electroadhesion of Ionoelastomer Junctions](https://consensus.app/papers/details/75047e9b54135b0abd1faaf20f3e40d5/?utm_source=claude_desktop) — Kim et al., 2020, *Adv Mater*
- [On the electrical safety of dielectric elastomer actuators in proximity to the human body](https://consensus.app/papers/details/888b08d4f19e51489ad655e83859c76e/?utm_source=claude_desktop) — Chan et al., 2017, *Smart Mater Struct*
- [Inflatable Kirigami Crawlers](https://consensus.app/papers/details/a412f971645f54a697a3dc91cdba4255/?utm_source=claude_desktop) — Seyidoğlu et al., 2025, *arXiv* (textile kirigami; relevant to glove fabrication)

All other sources are listed in `research-brief-abstract-intro.md`.
