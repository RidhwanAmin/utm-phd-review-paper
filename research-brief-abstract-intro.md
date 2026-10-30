# Research Brief — Abstract & Introduction Groundwork

**Topic:** Friction enhancement for wearable grasp assistance: suction, jamming, (dry/smart) adhesion, electroadhesion, kirigami
**Target:** Scopus-indexed review journal
**Source:** Consensus literature search (12 queries, Oct 2026). Every claim below is drawn from paper **abstracts only**. Read the full text before you cite any of it.

---

## 1. Candidate titles: assessment

| # | Title | Strength | Risk |
|---|-------|----------|------|
| A | *Passive versus Active Friction Enhancement in Wearable Devices: Suction, Jamming, Adhesion, Electroadhesion, and Kirigami* | Clear taxonomy; good for indexing | Descriptive only. Says what is covered but not why it matters |
| B | *Toward Bulk-Free Grasp Assistance: A Comparative Review of Friction Enhancement Technologies for Wearable Devices* | States the problem (bulk) and the contribution (comparison) | "Bulk-free" is a strong claim, so it has to be defined and backed with metrics |
| C | *Passive Friction Modulation Through Kirigami Metasurfaces: Principles, Applications, and Opportunities for Soft Wearable Robotics* | Most novel angle (kirigami is nearly absent from hand wearables) | Thin wearable-specific literature. Risks being a perspective rather than a review |

**Recommendation:** combine B and A. Use B's motivation and A's taxonomy, and present kirigami as the highlighted opportunity inside the comparative review rather than as the whole paper. For example:

> **Toward Bulk-Free Grasp Assistance: A Comparative Review of Passive and Active Friction Enhancement in Wearable Devices**

Title C is better kept as a follow-up paper, such as a research article or perspective, once your own kirigami-glove data exists.

---

## 2. Work context (what the field already knows)

**2.1 Friction underlies a secure grasp, and it degrades with impairment and age**
- Humans set grip force just above the slip limit (the *safety margin*), and this depends on how the nervous system senses friction at the skin–object interface [1]. When cutaneous feedback is lost, people drop objects far more often [5].
- From around age 50, skin becomes more slippery and grip-force safety margins rise. Older adults use about 2× the grip force of young adults, which leads to fatigue and reduced dexterity [2], [3], [4].
- Fingertip friction is a nonlinear function of normal force and skin moisture [6]. So the friction available at the interface is variable and can be engineered.

**2.2 Soft robotic gloves: the main answer so far is to add force**
- Soft gloves using fluidic, tendon or fabric actuation improve ADL performance in stroke, SCI and other hand-impairment populations [7]–[11].
- Reviews agree that the field is mostly preclinical and centred on actuation. Common barriers are portability, weight, durability, ease of use and evidence [12]–[16].
- Bulk and power remain unsolved:
  - Exo-gloves are described as "still heavy and expensive, they require an external power source" [17].
  - Gloves are "hampered by an inability to generate enough force" [18].
  - Existing gloves "involve bulky external hardware" [19].
  - Wearables are "hindered by bulkiness, limited scalability, and restricted portability" [20].

**2.3 Friction is an under-used design variable in assistive gloves**
- Grip force (normal) and friction (tangential) are related by μ. Raising interfacial friction or adhesion lowers the normal force needed to hold an object. This is the physical reason friction enhancement can substitute for actuator force.
- Glove friction is usually reported only as a side metric. For example, Lai et al. report that grasp friction on a cylinder rose from 8.4 N to 21.3 N with assistance [21].
- Hawkes et al. show "grasping without squeezing," where adhesion-controlled friction replaces normal force [41].

**2.4 Each friction-enhancement mechanism has been demonstrated, mostly on robot grippers**

| Mechanism | Wearable/human-hand evidence | Gripper/robot evidence | Active hardware needed |
|---|---|---|---|
| **Electroadhesion (EA)** | EA pad on a soft robotic glove, <400 V [22]; EA clutches in gloves and sleeves for haptics [32], [33] | Soft EA grippers [35], [39]; EA + DEA [34] | High-voltage supply |
| **Smart / thermo-responsive adhesion** | Ionogel adhesive gloves of 47–72 g [23], [24], [25] | — | Heaters, sensors, power, cooling [25] |
| **Gecko-type dry adhesion** | Human climbing on glass using 140 cm² per hand [28] | Soft and multi-finger grippers [40], [41]; reviews [36], [38] | Passive. Load-sharing and peeling control needed |
| **Suction** | Electro-thermopneumatic suction grip-assist glove [26]; octopus-inspired adhesive glove for underwater use [27] | Large literature reviewed in [37]; passive programmable cups [56] | Pump/vacuum, or thermal actuation (passive variants are emerging) |
| **Jamming (variable stiffness)** | Laminar jamming in an exo-glove [29]; sandwich jamming glove [30]; gear jamming wrist [31] | Many grippers | Vacuum source (positive-pressure variants exist) |
| **Kirigami (geometry-driven friction)** | **None found for hands.** Closest is kirigami shoe outsoles for fall prevention [43] | Crawling robots [42], [45]–[48]; tunable friction [44]; kirigami grippers [49] | **Passive.** Activated by strain, so body motion could trigger it |

---

## 3. The gap

1. **No review looks at friction enhancement across mechanisms for wearables.**
   - Glove reviews organise the field by actuation, sensing and control [12], [14], [15], [16].
   - Mechanism reviews cover one technology each, such as EA [35], gecko adhesives [38] or suction cups [37]. They also target grippers and locomotion, or treat several mechanisms in one framework that is still robot-centric [34], [36].
   - So far, no review compares the five mechanisms against **wearable constraints**: added mass, power and voltage safety, conformity to skin, preserved tactile feedback, donning, and wash and wear durability.
   - *(Before you claim this, run a Scopus/WoS search to confirm it.)*

2. **"Active" friction methods recreate the bulk problem they set out to solve.**
   - EA needs high-voltage electronics [22].
   - Ionogel gloves need heaters, sensors and thermal management [23]–[25].
   - Suction and jamming need pumps or vacuum [26], [29], [30].
   - The trade-off between switchability and system mass has not been quantified.

3. **Passive and geometric approaches are under-explored on the hand.**
   - Kirigami has been shown to:
     - give large, anisotropic and tunable friction changes [42], [44], [45], [46];
     - work on the human body for slip prevention [43];
     - modulate friction purely through strain.
   - Finger flexion naturally stretches the skin on the dorsal surface and compresses the palmar side. That suggests a route to **self-activated, power-free** friction modulation. We found no Consensus results applying kirigami to hand grasp assistance.

4. **There are no common performance metrics.**
   - Studies report different quantities: friction coefficient, switching ratio [24], [36], adhesion stress, holding force or ADL scores.
   - Few report friction gain per added gram or per watt. Without that, mechanisms cannot be compared fairly for wearables.

---

## 4. What this review contributes

1. A **unified taxonomy**. It separates *passive* mechanisms (geometric or kirigami, dry adhesion, passive suction) from *active* ones (EA, thermo-responsive adhesion, vacuum suction, jamming). It also classifies each by contact mechanism: interlocking/roughness, van der Waals, pressure differential, electrostatic, and stiffness modulation.
2. A **comparative benchmark** against wearable criteria: Δμ or friction gain, switching ratio and time, added mass, power and voltage, surface generality (wet, rough, curved), durability, and effect on tactile perception. These are normalised where the data allow.
3. A **critical discussion of the "bulk-free" trade-off**: when the controllability of active systems justifies their hardware, and when passive solutions are enough.
4. A **focused opportunity analysis for kirigami metasurfaces** as strain-triggered, power-free friction skins for gloves. It identifies open problems: activation strain at the finger joints, conformity to curvature, durability, and anisotropy design.
5. A **roadmap**: hybrid passive–active designs, standardised test protocols, and user-centred evaluation [13].

---

## 5. Draft abstract (≈230 words, to edit)

> Loss of grip strength and tactile sensibility from neurological injury, musculoskeletal disease or ageing makes grasping difficult. Affected users need higher grip forces and still drop objects more often. Soft robotic gloves restore grasping mainly by supplying more actuation force. Their adoption is still limited by device mass, external power and bulky hardware. Increasing friction at the glove–object interface is a complementary strategy, because it lowers the normal force needed to hold an object securely. It has received little systematic attention. This review examines five friction-enhancement technologies for wearable grasp assistance: suction, jamming, adhesion (dry and stimulus-responsive), electroadhesion and kirigami metasurfaces. We classify them as passive or active and analyse their physical principles, fabrication routes and reported performance. We then compare them on criteria specific to wearables: friction gain, switching ratio and time, added mass, power and voltage requirements, surface generality, durability and effect on tactile perception. Active approaches offer on-demand control but bring back the supporting hardware that soft wearables aim to remove. Passive approaches, especially strain-activated kirigami metasurfaces, can modulate friction without power using the wearer's own finger motion. Kirigami has shown this in robotic locomotion and footwear but has hardly been explored for the hand. We finish by identifying open challenges and outlining a roadmap toward lightweight, bulk-free grasp-assistive wearables, including standardised metrics, hybrid passive–active designs and user-centred evaluation.

## 6. Introduction: paragraph skeleton

| ¶ | Purpose | Key claims → refs |
|---|---|---|
| 1 | Clinical/societal need | Hand impairment limits ADL and independence. Ageing raises grip-force demand and slip [2]–[4], [11] |
| 2 | Physics of a secure grasp | Safety margin and the role of friction [1], [5], [6]. Friction can stand in for normal force [41] |
| 3 | State of the art: soft gloves | Clinical promise [7]–[11]; persistent bulk, power and force limits [12]–[20] |
| 4 | Friction as an alternative lever | Early wearable demonstrations: EA glove [22], adhesive gloves [23]–[25], suction glove [26], [27], jamming glove [29], [30] |
| 5 | Lessons from grippers and locomotion | Gripper reviews [34]–[38]; kirigami friction [42]–[48] |
| 6 | Gap | No cross-mechanism, wearable-centred review; active methods add bulk; kirigami missing from the hand; no shared metrics |
| 7 | Aim, scope and contributions | The five contributions in §4; search method (PRISMA-style, Scopus/WoS) |
| 8 | Paper organisation | Section map |

---

## 7. Next steps before drafting

- [ ] Run the formal Scopus/WoS search. Record strings and dates, and decide whether PRISMA is needed. Most Scopus review journals now expect a stated method.
- [ ] Confirm the gap claim by searching specifically for "review" + "glove" + "friction|adhesion".
- [ ] Get full texts for the numbered refs and pull numeric data into a comparison table (μ, switching ratio, mass, power, voltage).
- [ ] Choose the target journal. Possible fits to check for scope and indexing: *Soft Robotics*, *Advanced Intelligent Systems*, *Biomimetics*, *Actuators*, *Wearable Technologies*, *Frontiers in Robotics and AI*.

---

## References (Consensus links; DOIs are listed for verification)

1. [Factors influencing the force control during precision grip](https://consensus.app/papers/details/9b8901f6bb57592a9b35c9b3000bd497/?utm_source=claude_desktop) — Westling & Johansson, 1984, *Exp Brain Res*, 10.1007/bf00238156
2. [Mechanisms for Age-Related Changes of Fingertip Forces during Precision Gripping and Lifting in Adults](https://consensus.app/papers/details/2104ca2f0f1e5b4586bd5714e2c5fe4a/?utm_source=claude_desktop) — Cole et al., 1999, *J Neurosci*, 10.1523/jneurosci.19-08-03238.1999
3. [A comparison of prehension force control in young and elderly individuals](https://consensus.app/papers/details/1a1b62845a3a520b93c1d093720fcd50/?utm_source=claude_desktop) — Kinoshita et al., 1996, *Eur J Appl Physiol*, 10.1007/bf02337726
4. [Finger Force Coordination Underlying Object Manipulation in the Elderly – A Mini-Review](https://consensus.app/papers/details/538e943b1fad5aca8911daab4e922dd6/?utm_source=claude_desktop) — Diermayr et al., 2010, *Gerontology*, 10.1159/000295921
5. [Importance of cutaneous feedback in maintaining a secure grip during manipulation of hand-held objects](https://consensus.app/papers/details/341d8dd64ad35ed59ac41f1f21779664/?utm_source=claude_desktop) — Augurelle et al., 2003, *J Neurophysiol*, 10.1152/jn.00249.2002
6. [A continuous measure of fingertip friction during precision grip](https://consensus.app/papers/details/05f35ea547c75694827840f0bbd80de2/?utm_source=claude_desktop) — André et al., 2009, *J Neurosci Methods*, 10.1016/j.jneumeth.2009.01.031
7. [Soft robotic glove for combined assistance and at-home rehabilitation](https://consensus.app/papers/details/8198ea15280c5c2a8bf866b1c6e205d9/?utm_source=claude_desktop) — Polygerinos et al., 2015, *Robot Auton Syst*, 10.1016/j.robot.2014.08.014
8. [Exo-Glove: A Wearable Robot for the Hand with a Soft Tendon Routing System](https://consensus.app/papers/details/6d48638b8ce554c5961101af2c41963c/?utm_source=claude_desktop) — In et al., 2015, *IEEE RAM*, 10.1109/mra.2014.2362863
9. [Assisting hand function after spinal cord injury with a fabric-based soft robotic glove](https://consensus.app/papers/details/990a8b93489f5acdbb2785c5e156ff4b/?utm_source=claude_desktop) — Cappello et al., 2018, *JNER*, 10.1186/s12984-018-0391-x
10. [Design and Preliminary Feasibility Study of a Soft Robotic Glove for Hand Function Assistance in Stroke Survivors](https://consensus.app/papers/details/231afe90f40f5ff387963c05095f2ea7/?utm_source=claude_desktop) — Yap et al., 2017, *Front Neurosci*, 10.3389/fnins.2017.00547
11. [Therapy effect on hand function after home use of a wearable assistive soft-robotic glove supporting grip strength](https://consensus.app/papers/details/b9564d250d285fa6bd195bea9196451f/?utm_source=claude_desktop) — Kottink et al., 2024, *PLOS ONE*, 10.1371/journal.pone.0306713
12. [Soft robotic devices for hand rehabilitation and assistance: a narrative review](https://consensus.app/papers/details/e1c2b819f19859c090a9dc60ae6e7788/?utm_source=claude_desktop) — Chu & Patterson, 2018, *JNER*, 10.1186/s12984-018-0350-6
13. [A Critical Review on Factors Affecting the User Adoption of Wearable and Soft Robotics](https://consensus.app/papers/details/1a1b3ce035155feba98f4fd395870666/?utm_source=claude_desktop) — Ang et al., 2023, *Sensors*, 10.3390/s23063263
14. [The usefulness of assistive soft robotics in the rehabilitation of patients with hand impairment: A systematic review](https://consensus.app/papers/details/33bb28dbe151577c9a7ab2cdb7b79f73/?utm_source=claude_desktop) — Jiryaei et al., 2024, *J Bodyw Mov Ther*, 10.1016/j.jbmt.2024.02.025
15. [Soft Gloves: A Review on Recent Developments in Actuation, Sensing, Control and Applications](https://consensus.app/papers/details/80cc337b0e4253c992510116e752ccfb/?utm_source=claude_desktop) — Tiboni et al., 2022, *Actuators*, 10.3390/act11080232
16. [Fabric-Based Wearable Robotic Exoskeleton Gloves: Advancements and Challenges](https://consensus.app/papers/details/e2f423b5141e547abf53df854965fffe/?utm_source=claude_desktop) — Yilmaz et al., 2026, *Adv Mater Technol*, 10.1002/admt.202502282
17. [On the Development of Adaptive, Tendon-Driven, Wearable Exo-Gloves for Grasping Capabilities Enhancement](https://consensus.app/papers/details/8ed52f00d44a516f9b57c07419b0d3f6/?utm_source=claude_desktop) — Gerez et al., 2019, *IEEE RA-L*, 10.1109/lra.2019.2890853
18. [Let Me Give You a Hand: Enhancing Human Grasp Force With a Soft Robotic Assistive Glove](https://consensus.app/papers/details/3a2a43015b8c5b08b6e81ecc0da54c58/?utm_source=claude_desktop) — Suulker et al., 2024, *IEEE RA-L*, 10.1109/lra.2024.3433202
19. [A soft-packaged and portable rehabilitation glove capable of closed-loop fine motor skills](https://consensus.app/papers/details/2253b233d763561fa613431c917fbad6/?utm_source=claude_desktop) — Sui et al., 2023, *Nat Mach Intell*, 10.1038/s42256-023-00728-z
20. [From Knitting Technology to Robotics: Untethered Thermally Actuated Textile Exoskeleton for Dexterity Applications](https://consensus.app/papers/details/906c95da65f6592a973b2b9a8b48a904/?utm_source=claude_desktop) — Ahmed et al., 2025, *Adv Sci*, 10.1002/advs.202509870
21. [Design and Evaluation of a Bidirectional Soft Glove for Hand Rehabilitation-Assistance Tasks](https://consensus.app/papers/details/a749f7901a0c55aa855a23497fcfc125/?utm_source=claude_desktop) — Lai et al., 2023, *IEEE TMRB*, 10.1109/tmrb.2023.3292414
22. [Design of electroadhesion pad for improving grasping friction of soft robotic glove](https://consensus.app/papers/details/68c5831b03d75a63a5bd9660b1dfa3f1/?utm_source=claude_desktop) — Rosle et al., 2024, *AIP Conf Proc*, 10.1063/5.0192576
23. [Enhancing Grasping Function with a Thermoresponsive Ionogel Adhesive Glove for Patients with Rheumatic Diseases](https://consensus.app/papers/details/a91c0e9e07f954c78c1c4761ff54e5d1/?utm_source=claude_desktop) — Wang et al., 2025, *Adv Sci*, 10.1002/advs.202414761
24. [A Wearable Glove with Electrothermal-Controlled Ionogels for Adhesive Gripping](https://consensus.app/papers/details/fc49cab35aeb5e66bc62e9eac50b4fa0/?utm_source=claude_desktop) — Wang et al., 2023, *Adv Intell Syst*, 10.1002/aisy.202300127
25. [Continuous Adhesive Grasping Enabled by Thermoresponsive Ionogel and Flexible Thermoelectric Device in a Wearable Glove](https://consensus.app/papers/details/449da3195f7c563ea647c69eca936b75/?utm_source=claude_desktop) — Ma et al., 2026, *IEEE RoboSoft*, 10.1109/robosoft67810.2026.11522911
26. [Electro-Thermopneumatically Actuated, Adhesion-Force Controllable Octopus-Like Suction Cup Actuator](https://consensus.app/papers/details/8eecefb2058b5acf94c3ffdcf609b54a/?utm_source=claude_desktop) — Kim et al., 2024, *Soft Robotics*, 10.1089/soro.2023.0172
27. [Octopus-inspired adhesive skins for intelligent and rapidly switchable underwater adhesion](https://consensus.app/papers/details/56029ca62ec75dc7b5c1d5975c7666ea/?utm_source=claude_desktop) — Frey et al., 2022, *Sci Adv*, 10.1126/sciadv.abq1905
28. [Human climbing with efficiently scaled gecko-inspired dry adhesives](https://consensus.app/papers/details/ca64e6038a8e5768827b26418ed7bbce/?utm_source=claude_desktop) — Hawkes et al., 2015, *J R Soc Interface*, 10.1098/rsif.2014.0675
29. [A Hybrid, Wearable Exoskeleton Glove Equipped With Variable Stiffness Joints, Abduction Capabilities, and a Telescopic Thumb](https://consensus.app/papers/details/d58ac253e8e9507f8f4e9e007018044e/?utm_source=claude_desktop) — Gerez et al., 2020, *IEEE Access*, 10.1109/access.2020.3025273
30. [Sandwich Jamming-Based Variable Stiffness Structures With User-Defined Degrees of Freedom for Soft Wearable Devices](https://consensus.app/papers/details/a73794b7dd735920969852ef60376bd9/?utm_source=claude_desktop) — Kim et al., 2026, *IEEE RA-L*, 10.1109/lra.2026.3668999
31. [A Novel Jamming Structure With Interlocking Mechanism Towards Applications in Wearable Robots](https://consensus.app/papers/details/0c41198a49a15ca79f1ad733637d9633/?utm_source=claude_desktop) — Zuo et al., 2022, *IEEE RA-L*, 10.1109/lra.2022.3165859
32. [All-Fabric Wearable Electroadhesive Clutch](https://consensus.app/papers/details/b3e9cff3655c5f7bb85ff4c53533ee56/?utm_source=claude_desktop) — Ramachandran et al., 2018, *Adv Mater Technol*, 10.1002/admt.201800313
33. [Glove- and Sleeve-Format Variable-Friction Electrostatic Clutches for Kinesthetic Haptics](https://consensus.app/papers/details/10ee78293d025eec8740692738e383ee/?utm_source=claude_desktop) — Hinchet et al., 2022, *Adv Intell Syst*, 10.1002/aisy.202200174
34. [Soft Robotic Grippers](https://consensus.app/papers/details/3bdb545f1f0254ee8d6ff59062ca401c/?utm_source=claude_desktop) — Shintake et al., 2018, *Adv Mater*, 10.1002/adma.201707035
35. [Electroadhesion Technologies for Robotics: A Comprehensive Review](https://consensus.app/papers/details/2c21f8a2568554ba9c4d005137342de0/?utm_source=claude_desktop) — Guo et al., 2020, *IEEE T-RO*, 10.1109/tro.2019.2956869
36. [Bio-inspired controllable adhesion for robotics: mechanisms, design, and future directions](https://consensus.app/papers/details/6dbaec94278459919719e088ec523b2b/?utm_source=claude_desktop) — Sun et al., 2025, *Robotica*, 10.1017/s0263574725101793
37. [Classification and Evaluation of Octopus-Inspired Suction Cups for Soft Continuum Robots](https://doi.org/10.1002/advs.202400806) — 2024, *Adv Sci*, 10.1002/advs.202400806
38. [Gecko-Inspired Controllable Adhesive: Structure, Fabrication, and Application](https://consensus.app/papers/details/41b5e864d94254838481b84c93b43c1f/?utm_source=claude_desktop) — Liu et al., 2024, *Biomimetics*, 10.3390/biomimetics9030149
39. [Peeling in electroadhesion soft grippers](https://consensus.app/papers/details/e963ccdf22f25d9d98d360d0ff91b92b/?utm_source=claude_desktop) — Cacucciolo et al., 2021, *Extreme Mech Lett*, 10.1016/j.eml.2021.101529
40. [A Soft Robotic Gripper With Gecko-Inspired Adhesive](https://consensus.app/papers/details/f42ea99ce6885e0884b69513296b86d0/?utm_source=claude_desktop) — Glick et al., 2018, *IEEE RA-L*, 10.1109/lra.2018.2792688
41. [Grasping Without Squeezing: Design and Modeling of Shear-Activated Grippers](https://consensus.app/papers/details/a0c6bcb4d2f85e69adf80bd30b8e2f6d/?utm_source=claude_desktop) — Hawkes et al., 2018, *IEEE T-RO*, 10.1109/tro.2017.2776312
42. [Kirigami skins make a simple soft actuator crawl](https://consensus.app/papers/details/e924ec41ac805b9ea8bfe5a81e1be6c5/?utm_source=claude_desktop) — Rafsanjani et al., 2018, *Sci Robot*, 10.1126/scirobotics.aar7555
43. [Bioinspired kirigami metasurfaces as assistive shoe grips](https://consensus.app/papers/details/4eb107d7d31352b59f8a8551561b1028/?utm_source=claude_desktop) — Babaee et al., 2020, *Nat Biomed Eng*, 10.1038/s41551-020-0564-3
44. [Geometric control of sliding friction](https://consensus.app/papers/details/9597eec6d79a5866934e193542aa3c3d/?utm_source=claude_desktop) — Liefferink et al., 2021, *Extreme Mech Lett*, 10.1016/j.eml.2021.101475
45. [Snake-Inspired Kirigami Skin for Lateral Undulation of a Soft Snake Robot](https://consensus.app/papers/details/bb87483fa9fe5d158a15d44ea90a32b6/?utm_source=claude_desktop) — Branyan et al., 2020, *IEEE RA-L*, 10.1109/lra.2020.2969949
46. [Curvilinear Kirigami Skins Let Soft Bending Actuators Slither Faster](https://consensus.app/papers/details/51099a9d669d5d8eada81396b37ada98/?utm_source=claude_desktop) — Branyan et al., 2022, *Front Robot AI*, 10.3389/frobt.2022.872007
47. [Tailoring asymmetry for anisotropic friction in kirigami metamaterial skins with pop-up folding hinges](https://consensus.app/papers/details/3dfd04e2872059daa9688d651a065376/?utm_source=claude_desktop) — Tohidvand et al., 2024/25, *Int J Mech Sci*, 10.1016/j.ijmecsci.2025.110258
48. [Reconfigurable kirigami skins steer a soft robot](https://consensus.app/papers/details/08030ad8047e5f858e2037f0d99ef842/?utm_source=claude_desktop) — Seyidoğlu et al., 2023, *IEEE RoboSoft*, 10.1109/robosoft55895.2023.10121995
49. [Grasping with kirigami shells](https://consensus.app/papers/details/023074a7b3115f87a45b3862f7a1ade4/?utm_source=claude_desktop) — Yang et al., 2021, *Sci Robot*, 10.1126/scirobotics.abd6426
50. [Engineering by Cuts: How Kirigami Principle Enables Unique Mechanical Properties and Functionalities](https://consensus.app/papers/details/38948888ea8b50408c3807d2ff94e7cf/?utm_source=claude_desktop) — Tao et al., 2022, *Adv Sci*, 10.1002/advs.202204733
51. [Engineering Kirigami Frameworks Toward Real-World Applications](https://consensus.app/papers/details/b3db77c8e4175271a8bf7802b9c5d839/?utm_source=claude_desktop) — Jin et al., 2023, *Adv Mater*, 10.1002/adma.202308560
52. [Kirigami Engineering: The Interplay between Geometry and Mechanics](https://consensus.app/papers/details/83c9a5dd33055a659db3fc2399b406e2/?utm_source=claude_desktop) — Dang et al., 2025, *Appl Mech Rev*, 10.1115/1.4068659
53. [Propagation of pop ups in kirigami shells](https://consensus.app/papers/details/e27b17ecd8015beabd9fb4a901b9daea/?utm_source=claude_desktop) — Rafsanjani et al., 2019, *PNAS*, 10.1073/pnas.1817763116
54. [Variable-Friction Finger Surfaces to Enable Within-Hand Manipulation via Gripping and Sliding](https://consensus.app/papers/details/f6834ed955f256689f85152b046a2b3d/?utm_source=claude_desktop) — Spiers et al., 2018, *IEEE RA-L*, 10.1109/lra.2018.2856398
55. [An Origami-Inspired Variable Friction Surface for Increasing the Dexterity of Robotic Grippers](https://consensus.app/papers/details/6c00b56224725dcca58c8321afbd4d06/?utm_source=claude_desktop) — Lu et al., 2020, *IEEE RA-L*, 10.1109/lra.2020.2972833
56. [Controllable Passive Suction Cups With Mechanical Programmability for Soft Robotics](https://consensus.app/papers/details/a4efddc7890d5dc39dd7898b1de036db/?utm_source=claude_desktop) — He et al., 2026, *Adv Funct Mater*, 10.1002/adfm.75782
57. [Friction Enhancement Through Fingerprint-like Soft Surface Textures in Soft Robotic Grippers for Grasping Abilities](https://consensus.app/papers/details/4920ece2860959fea3ade4430186b0c6/?utm_source=claude_desktop) — Hao et al., 2024, *Tribol Lett*, 10.1007/s11249-024-01848-2
