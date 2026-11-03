# Toward Bulk-Free Grasp Assistance: A Comparative Review of Passive and Active Friction Enhancement in Wearable Devices

*Draft v0.1, abstract and introduction. Numbered references follow first citation. Bracketed notes `[…]` are author to-dos and should be removed before submission.*

---

## Abstract

Impaired hand function after stroke, spinal cord injury, rheumatic disease or ageing makes everyday grasping unreliable. Affected users need larger grip forces, yet they still drop objects more often. Soft robotic gloves restore grasp mainly by adding actuation force. In the systems surveyed, complete devices weigh 335–562 g and rely on external pumps, motors or batteries. A complementary route has received little systematic attention: raising friction at the glove–object interface, so that a secure hold needs less normal force. Friction-enhancement mechanisms have been developed mainly for robotic grippers and locomotion, report performance in incompatible metrics, and have rarely been evaluated on the human hand. This review examines five friction-enhancement technologies for wearable grasp assistance: suction, jamming, adhesion (dry and stimulus-responsive), electroadhesion and kirigami metasurfaces. We classify them as passive or active by their contact physics. We then compare them against wearable-specific criteria: friction gain, switching ratio and time, added mass, power and voltage, surface generality, skin safety and effect on touch. Active mechanisms offer on-demand control but bring back the pumps, heaters or high-voltage electronics that soft wearables aim to remove. Reported gains span 1.4× to 2000× but measure different quantities, so the mechanisms cannot yet be ranked for wearable use. Strain-activated kirigami metasurfaces change friction coefficients by up to an order of magnitude without power in robotic and footwear studies, yet remain unexplored for the hand. We propose normalised performance metrics, a standard test protocol, and a roadmap toward hybrid passive–active, bulk-free grasp-assistive wearables.

**Keywords:** soft wearable robotics; assistive glove; friction enhancement; electroadhesion; dry adhesion; suction; jamming; kirigami metasurface; grasp assistance

*(≈245 words. Check the target journal's limit.)*

---

## 1. Introduction

### 1.1 The need: grasping fails when friction runs short

Grasping is central to independent living, and hand impairment is common. In 2021 an estimated 93.8 million people were living after a stroke [1]. Motor dysfunction affects 55–75% of stroke survivors, and about 85% of those have impairment of the upper limb [2]. Even in the chronic phase, 40–50% of survivors live with upper-limb impairment [3]. Spinal cord injury, rheumatic disease and other neuromuscular conditions add further groups whose grasp is weakened or deformed [4]. Ageing compounds the problem. From about age 50 the skin of the fingertips becomes more slippery, and older adults lift objects with roughly twice the grip force that young adults use [5], [6]. These higher forces reflect both increased skin slipperiness and degraded tactile sensing of friction [6]–[8]. They hasten fatigue and reduce dexterity in everyday tasks [8].

### 1.2 Why friction is a design variable

A secure grasp is a frictional problem. Humans set grip force just above the minimum needed to prevent slip. They keep a safety margin of roughly 10–40%, regulated by tactile estimates of the friction at the skin–object interface [9], [10]. When cutaneous feedback is removed, the safety margin cannot be maintained, and objects are dropped in about a third of lifts that would otherwise never fail [11]. Fingertip friction is not a constant. It varies nonlinearly with normal load and skin moisture [12], which is why the same object can feel secure one moment and slippery the next. Under Coulomb friction, the normal force needed to hold an object scales inversely with the friction coefficient. Doubling μ halves the squeeze required. Interfacial friction is therefore a design variable that can substitute for actuator force, not merely a property of the object. Robotics has already exploited this: adhesion-controlled friction allows large, fragile or heavy objects to be held without squeezing [13]. *(Atlas, Fig 1–2)*

### 1.3 Current approach: soft gloves that add force

Wearable assistance has so far concentrated on supplying force. Soft robotic gloves built from fluidic elastomer actuators [14], tendon routing [15] or textile pneumatics [16], [17] have restored functional grasp in people with stroke and spinal cord injury. A multicentre home trial reported gains in unsupported grip strength after six weeks of glove use [18]. Successive reviews describe a field that remains largely preclinical, centred on actuation, sensing and control, and short of comparative clinical evidence [19]–[22]. Persistent barriers to adoption include device mass, durability, ease of use and cost [23]. Developers themselves note that exo-gloves remain "heavy and expensive" and need external power [24]. Gloves are "hampered by an inability to generate enough force" [25], depend on "bulky external hardware" [26], or are limited by bulkiness and restricted portability [27]. Among the systems surveyed for this review, complete force-actuated gloves weigh 335–562 g [24], [26], [28], [29]. Interface friction is reported only incidentally; for example, one glove raised grasp friction on a cylinder from 8.4 N to 21.3 N [30]. It is rarely treated as a design target in its own right. *(Atlas, Fig 3)*

### 1.4 An emerging alternative: friction enhancement on the hand

A small but growing set of studies takes the friction route on the human hand:
- **Electroadhesion:** pads embedded in a soft robotic glove raised grasping friction while operating below 400 V [31].
- **Stimulus-responsive adhesion:** thermoresponsive ionogel gloves weighing 47–72 g let users grasp by adhesion rather than finger flexion, including patients with rheumatic disease [4], [32], [33].
- **Suction:** octopus-inspired suction actuators have been built into a grip-assist glove [34], and into a switchable adhesive glove for underwater manipulation [35].
- **Jamming:** layer and sandwich jamming structures have been added to exo-gloves [36], [37] and wrist supports [38].
- **Related wearable demonstrations:** electroadhesive clutches already work in haptic sleeves and gloves [39], [40], and gecko-inspired dry adhesives have supported a human climbing vertical glass [41].

These demonstrations are promising but scattered across disciplines. They differ in purpose, test protocol and reported metric. *(Atlas, Fig 4–5)*

### 1.5 What robotics already knows

Most of the knowledge about these mechanisms comes from robotics, not from wearables. Soft robotic grippers are commonly classified by how they achieve grasp: through actuation, controlled stiffness or controlled adhesion [42]. Dedicated reviews cover:
- **Electroadhesion** [43]
- **Bio-inspired controllable adhesion** [44]
- **Octopus-inspired suction cups** [45]
- **Gecko-inspired adhesives** [46]

Each focuses on grippers, climbing robots or manipulators. Robotic studies have also identified constraints that matter on the body:
- **Electroadhesion:** holding force varies by orders of magnitude with peel angle [47].
- **Dry adhesion:** performance degrades on rough or dirty surfaces [48].
- **Voltage:** sub-10 V ionoelastomer electroadhesive clutches now exist and have been shown in a finger wearable [49].

Kirigami metasurfaces offer a different, geometric route:
- **Mechanism:** stretching a cut elastic sheet buckles it into a three-dimensional texture, producing large, direction-dependent changes in friction [50], [51].
- **Anisotropic friction:** snake-inspired kirigami skins reach friction-coefficient ratios above 3 and above 4 [52], [53].
- **Tunable friction:** designer roughness tunes the friction coefficient by more than an order of magnitude [54].
- **Further designs:** asymmetric pop-ups, reconfigurable patterns and textile-based inflatable kirigami extend the design space [55]–[57].
- **On the body:** the closest application is assistive shoe outsoles, where buckling kirigami increased friction on surfaces including ice [58].

Kirigami reviews survey its mechanics and applications broadly [59]–[61], but none considers it for grasp assistance. *(Atlas, Fig 5)*

### 1.6 The gap

Taken together, the literature leaves five gaps (G1–G5).

- **G1. No wearable-centred comparison.** To our knowledge, no review compares friction-enhancement mechanisms against the constraints of a worn device: added mass, power and voltage safety, conformity to skin, preserved touch, and durability. Existing reviews are either glove-centred and organised around actuation [19]–[22], or mechanism-centred and organised around grippers [42]–[46]. *[Confirm with a Scopus/WoS search before submission.]*
- **G2. Active methods bring back the bulk.** Electroadhesion requires high-voltage electronics [31], [43], which raises safety questions close to the body [65]. Responsive adhesives require heaters, sensors and thermal management [4], [32], [33]. Suction and jamming require pumps or vacuum [34], [36], [37]. The trade-off between switchability and system mass has not been quantified.
- **G3. Passive, geometric friction is absent from the hand.** Kirigami modulates friction through strain alone [50]–[54], and finger flexion naturally strains the skin. Yet no study has applied it to grasp assistance.
- **G4. Metrics are fragmented.** Reported headline gains span from 1.4× to 2000×, but they measure different quantities:
  - force gain [64]
  - on/off switching ratio [32], [35]
  - stiffness ratio [38], [62], [63]
  - friction-coefficient ratio [52]–[54]

  Almost none are normalised by added mass or power, so the mechanisms cannot be ranked for wearable use. *(Atlas, Fig 6)*
- **G5. User-centred outcomes are rarely reported.** Effects on tactile perception, comfort and skin safety are seldom measured, although these factors govern adoption [23]. *(Atlas, Fig 7)*

### 1.7 Aim and contributions

This review aims to establish friction enhancement as a design route for lightweight grasp-assistive wearables, and to determine which mechanisms suit the hand. It makes six contributions (C1–C6):

| Contribution | What it provides | Gaps addressed |
|---|---|---|
| **C1** Taxonomy | Passive and active mechanisms classified by contact physics: interlocking/roughness, van der Waals, pressure differential, electrostatic attraction, stiffness modulation | G1 |
| **C2** Benchmark | Comparison against wearable-specific criteria | G1, G2, G5 |
| **C3** Normalised metrics | Friction gain Δμ, switching ratio and time, gain per added gram, gain per watt | G4 |
| **C4** Trade-off analysis | When on-demand control justifies its hardware, and when a passive surface is enough | G2 |
| **C5** Kirigami opportunity | Strain-triggered kirigami skins as power-free friction modulators activated by the wearer's own finger motion | G3 |
| **C6** Roadmap | Standard test protocol and directions for hybrid passive–active designs | G4, G5 |

*(Atlas, Fig 8)*

Literature was identified through a structured search of Scopus and Web of Science. *[Insert: search strings, date range, inclusion and exclusion criteria, PRISMA counts.]*

### 1.8 Organisation

| Section | Content |
|---|---|
| 2 | Contact mechanics of human grasp and the role of friction |
| 3 | The five mechanisms: principles, fabrication and wearable demonstrations |
| 4 | Comparative benchmark and trade-off analysis |
| 5 | Kirigami metasurfaces as passive friction skins for the hand |
| 6 | Open challenges and a roadmap |
| 7 | Conclusion |

---

## References (order of first citation)

*Verify every entry against the full text and format it to the journal's style before submission.*

1. Feigin VL, et al. Global, regional, and national burden of stroke and its risk factors, 1990–2021. *Lancet Neurol.* 2024. doi:10.1016/s1474-4422(24)00369-7
2. Tang Q, et al. Research trends and hotspots of post-stroke upper limb dysfunction: a bibliometric and visualization analysis. *Front Neurol.* 2024. doi:10.3389/fneur.2024.1449729
3. Krumina K, et al. Smart device–based therapy on hand motor function improvement in stroke survivors during rehabilitation: scoping review. *JMIR Rehabil Assist Technol.* 2025. doi:10.2196/73533
4. Wang S, et al. Enhancing grasping function with a thermoresponsive ionogel adhesive glove for patients with rheumatic diseases. *Adv Sci.* 2025. doi:10.1002/advs.202414761
5. Cole KJ. Grasp force control in older adults. *J Mot Behav.* 1991. doi:10.1080/00222895.1991.9942036
6. Cole KJ, et al. Mechanisms for age-related changes of fingertip forces during precision gripping and lifting in adults. *J Neurosci.* 1999. doi:10.1523/jneurosci.19-08-03238.1999
7. Kinoshita H, et al. A comparison of prehension force control in young and elderly individuals. *Eur J Appl Physiol.* 1996. doi:10.1007/bf02337726
8. Diermayr G, et al. Finger force coordination underlying object manipulation in the elderly – a mini-review. *Gerontology.* 2010. doi:10.1159/000295921
9. Westling G, Johansson RS. Factors influencing the force control during precision grip. *Exp Brain Res.* 1984. doi:10.1007/bf00238156
10. Islek C, et al. Design of a fuzzy safety margin derivation system for grip force control of robotic hand in precision grasp task. *Int J Adv Robot Syst.* 2021. doi:10.1177/17298814211018055
11. Augurelle A, et al. Importance of cutaneous feedback in maintaining a secure grip during manipulation of hand-held objects. *J Neurophysiol.* 2003. doi:10.1152/jn.00249.2002
12. André T, et al. A continuous measure of fingertip friction during precision grip. *J Neurosci Methods.* 2009. doi:10.1016/j.jneumeth.2009.01.031
13. Hawkes EW, et al. Grasping without squeezing: design and modeling of shear-activated grippers. *IEEE Trans Robot.* 2018. doi:10.1109/tro.2017.2776312
14. Polygerinos P, et al. Soft robotic glove for combined assistance and at-home rehabilitation. *Robot Auton Syst.* 2015. doi:10.1016/j.robot.2014.08.014
15. In H, et al. Exo-Glove: a wearable robot for the hand with a soft tendon routing system. *IEEE Robot Autom Mag.* 2015. doi:10.1109/mra.2014.2362863
16. Cappello L, et al. Assisting hand function after spinal cord injury with a fabric-based soft robotic glove. *J NeuroEng Rehabil.* 2018. doi:10.1186/s12984-018-0391-x
17. Yap HK, et al. Design and preliminary feasibility study of a soft robotic glove for hand function assistance in stroke survivors. *Front Neurosci.* 2017. doi:10.3389/fnins.2017.00547
18. Kottink A, et al. Therapy effect on hand function after home use of a wearable assistive soft-robotic glove supporting grip strength. *PLoS ONE.* 2024. doi:10.1371/journal.pone.0306713
19. Chu CY, Patterson RM. Soft robotic devices for hand rehabilitation and assistance: a narrative review. *J NeuroEng Rehabil.* 2018. doi:10.1186/s12984-018-0350-6
20. Tiboni M, et al. Soft gloves: a review on recent developments in actuation, sensing, control and applications. *Actuators.* 2022. doi:10.3390/act11080232
21. Jiryaei Z, et al. The usefulness of assistive soft robotics in the rehabilitation of patients with hand impairment: a systematic review. *J Bodyw Mov Ther.* 2024. doi:10.1016/j.jbmt.2024.02.025
22. Yilmaz AF, et al. Fabric-based wearable robotic exoskeleton gloves: advancements and challenges. *Adv Mater Technol.* 2026. doi:10.1002/admt.202502282
23. Ang BW, et al. A critical review on factors affecting the user adoption of wearable and soft robotics. *Sensors.* 2023. doi:10.3390/s23063263
24. Gerez L, et al. On the development of adaptive, tendon-driven, wearable exo-gloves for grasping capabilities enhancement. *IEEE Robot Autom Lett.* 2019. doi:10.1109/lra.2019.2890853
25. Suulker C, et al. Let me give you a hand: enhancing human grasp force with a soft robotic assistive glove. *IEEE Robot Autom Lett.* 2024. doi:10.1109/lra.2024.3433202
26. Sui M, et al. A soft-packaged and portable rehabilitation glove capable of closed-loop fine motor skills. *Nat Mach Intell.* 2023. doi:10.1038/s42256-023-00728-z
27. Ahmed IAK, et al. From knitting technology to robotics: untethered thermally actuated textile exoskeleton for dexterity applications. *Adv Sci.* 2025. doi:10.1002/advs.202509870
28. Kim KB, et al. Exo-Glove Poly III: grasp assistance by modulating thumb and finger motion sequence with a single actuator. *Soft Robot.* 2025. doi:10.1089/soro.2024.0113
29. Popov D, et al. Portable exoskeleton glove with soft structure for hand assistance in activities of daily living. *IEEE/ASME Trans Mechatron.* 2017. doi:10.1109/tmech.2016.2641932
30. Lai J, et al. Design and evaluation of a bidirectional soft glove for hand rehabilitation-assistance tasks. *IEEE Trans Med Robot Bionics.* 2023. doi:10.1109/tmrb.2023.3292414
31. Rosle MH, et al. Design of electroadhesion pad for improving grasping friction of soft robotic glove. *AIP Conf Proc.* 2024. doi:10.1063/5.0192576
32. Wang S, et al. A wearable glove with electrothermal-controlled ionogels for adhesive gripping. *Adv Intell Syst.* 2023. doi:10.1002/aisy.202300127
33. Ma J, et al. Continuous adhesive grasping enabled by thermoresponsive ionogel and flexible thermoelectric device in a wearable glove. *IEEE RoboSoft.* 2026. doi:10.1109/robosoft67810.2026.11522911
34. Kim YI, et al. Electro-thermopneumatically actuated, adhesion-force controllable octopus-like suction cup actuator. *Soft Robot.* 2024. doi:10.1089/soro.2023.0172
35. Frey ST, et al. Octopus-inspired adhesive skins for intelligent and rapidly switchable underwater adhesion. *Sci Adv.* 2022. doi:10.1126/sciadv.abq1905
36. Gerez L, et al. A hybrid, wearable exoskeleton glove equipped with variable stiffness joints, abduction capabilities, and a telescopic thumb. *IEEE Access.* 2020. doi:10.1109/access.2020.3025273
37. Kim S, et al. Sandwich jamming-based variable stiffness structures with user-defined degrees of freedom for soft wearable devices. *IEEE Robot Autom Lett.* 2026. doi:10.1109/lra.2026.3668999
38. Zuo S, et al. A novel jamming structure with interlocking mechanism towards applications in wearable robots. *IEEE Robot Autom Lett.* 2022. doi:10.1109/lra.2022.3165859
39. Ramachandran V, et al. All-fabric wearable electroadhesive clutch. *Adv Mater Technol.* 2018. doi:10.1002/admt.201800313
40. Hinchet R, et al. Glove- and sleeve-format variable-friction electrostatic clutches for kinesthetic haptics. *Adv Intell Syst.* 2022. doi:10.1002/aisy.202200174
41. Hawkes EW, et al. Human climbing with efficiently scaled gecko-inspired dry adhesives. *J R Soc Interface.* 2015. doi:10.1098/rsif.2014.0675
42. Shintake J, et al. Soft robotic grippers. *Adv Mater.* 2018. doi:10.1002/adma.201707035
43. Guo J, et al. Electroadhesion technologies for robotics: a comprehensive review. *IEEE Trans Robot.* 2020. doi:10.1109/tro.2019.2956869
44. Sun T, et al. Bio-inspired controllable adhesion for robotics: mechanisms, design, and future directions. *Robotica.* 2025. doi:10.1017/s0263574725101793
45. [Authors to verify.] Classification and evaluation of octopus-inspired suction cups for soft continuum robots. *Adv Sci.* 2024. doi:10.1002/advs.202400806
46. Liu Y, et al. Gecko-inspired controllable adhesive: structure, fabrication, and application. *Biomimetics.* 2024. doi:10.3390/biomimetics9030149
47. Cacucciolo V, et al. Peeling in electroadhesion soft grippers. *Extreme Mech Lett.* 2021. doi:10.1016/j.eml.2021.101529
48. Glick P, et al. A soft robotic gripper with gecko-inspired adhesive. *IEEE Robot Autom Lett.* 2018. doi:10.1109/lra.2018.2792688
49. Levine DJ, et al. A low-voltage, high-force capacity electroadhesive clutch based on ionoelastomer heterojunctions. *Adv Mater.* 2023. doi:10.1002/adma.202304455
50. Rafsanjani A, et al. Kirigami skins make a simple soft actuator crawl. *Sci Robot.* 2018. doi:10.1126/scirobotics.aar7555
51. Rafsanjani A, et al. Propagation of pop ups in kirigami shells. *Proc Natl Acad Sci USA.* 2019. doi:10.1073/pnas.1817763116
52. Branyan C, et al. Snake-inspired kirigami skin for lateral undulation of a soft snake robot. *IEEE Robot Autom Lett.* 2020. doi:10.1109/lra.2020.2969949
53. Branyan C, et al. Curvilinear kirigami skins let soft bending actuators slither faster. *Front Robot AI.* 2022. doi:10.3389/frobt.2022.872007
54. Liefferink RW, et al. Geometric control of sliding friction. *Extreme Mech Lett.* 2021. doi:10.1016/j.eml.2021.101475
55. Tohidvand HR, et al. Tailoring asymmetry for anisotropic friction in kirigami metamaterial skins with pop-up folding hinges. *Int J Mech Sci.* 2025. doi:10.1016/j.ijmecsci.2025.110258
56. Seyidoğlu B, et al. Reconfigurable kirigami skins steer a soft robot. *IEEE RoboSoft.* 2023. doi:10.1109/robosoft55895.2023.10121995
57. Seyidoğlu B, et al. Inflatable kirigami crawlers. *arXiv.* 2025. doi:10.48550/arxiv.2502.06466 [check for a peer-reviewed version]
58. Babaee S, et al. Bioinspired kirigami metasurfaces as assistive shoe grips. *Nat Biomed Eng.* 2020. doi:10.1038/s41551-020-0564-3
59. Tao J, et al. Engineering by cuts: how kirigami principle enables unique mechanical properties and functionalities. *Adv Sci.* 2022. doi:10.1002/advs.202204733
60. Jin L, et al. Engineering kirigami frameworks toward real-world applications. *Adv Mater.* 2023. doi:10.1002/adma.202308560
61. Dang X, et al. Kirigami engineering: the interplay between geometry and mechanics. *Appl Mech Rev.* 2025. doi:10.1115/1.4068659
62. Wei Y, et al. A novel, variable stiffness robotic gripper based on integrated soft actuating and particle jamming. *Soft Robot.* 2016. doi:10.1089/soro.2016.0027
63. Gao Y, et al. A novel variable stiffness compliant robotic gripper based on layer jamming. *J Mech Robot.* 2019. doi:10.1115/detc2019-98294
64. Mazzolai B, et al. Octopus-inspired soft arm with suction cups for enhanced grasping tasks in confined environments. *Adv Intell Syst.* 2019. doi:10.1002/aisy.201900041
65. Chan H, et al. On the electrical safety of dielectric elastomer actuators in proximity to the human body. *Smart Mater Struct.* 2017. doi:10.1088/1361-665x/aa89b1
