// Data URIs for the organic chemistry structures used as answer choices.
// These images were generated via RDKit and encoded to base64 so the
// quiz can function without any external image hosting.
const imageData = {
  'tert-butyl iodide': "data:image/png;base64,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[...truncated base64 string...]" ,
  'iso-butyl iodide': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAANBUlEQVR4nO3dW2xUdQLH8dNa0dIqF4lWxSnXQsEtpcoloBZSk1qC2TVZsgbT3awxJOtD45N92WQSH7TJBtOXNSHGh/GyKrJhM9zcLWihilCoRcEitCCIUEuhzLSd3qYzsw//ZnakrPQyM79zZr6fN0l75i//fs/MOef/LxmRSMQCoJOpHgCQ7ogQECNCQIwIATEiBMSIEBAjQkCMCAExIgTEiBAQI0JAjAgBMSIExIgQECNCQIwIATEiBMSIEBAjQkCMCAExIgTEiBAQI0JAjAgBMSIExIgQECNCQIwIATEiBMSIEBAjQkCMCAExIgTEiBAQI0JAjAgBMSIExIgQECNCQIwIATEiBMSIEBAjQkCMCAExIgTEiBAQI0JAjAgBMSIExIgQECNCQIwIATEiBMSIEBAjQkCMCAExIgTEiBAQI0JAjAgBMSIExIgQECNCQIwIATEiBMSIEBAjQkCMCAExIgTEiBAQI0JAjAgBMSIExIgQECNCQCztIjx48GBRUVFRUdHWrVvVY4FlWVZ7e/vatWuLi4s3b948NDSkHo5CJG10dHQ88cQTsf/veXl59fX16nGlr+Hh4ZdffvmOO+6IzojL5dq3b596XMmWFhGGw+Ht27dPmzbNzHR+fv769eszMjIsy8rIyKiqqvL7/eoxpp3GxsZHH33UzEhubu5zzz137733mv/cuHHjuXPn1ANMntSP8NixY2vWrDGzO3369Lffftv8eXNzc0FBQWZmpmVZDz744LZt20KhkHaoaeLy5ctbtmwxf/NTp0598cUXh4eHI5HI4OBgbW2tSXHKlCnpc3JM5QhjJ/uhhx66ZWbHjx9fu3atSfSxxx5raGiQDDVN9PX11dTU3HPPPdHMuru7b/qa2FlLk5NjakZozqm/PtlR5sNqfn6++XS6adOmCxcuJHO0acLr9c6dOzf6gfP8+fO/8sXHjh2LPTl+8cUXSRtn8qVghDdN9hivLgKBgNvtvvvuu81nJLfb3dfXl+ihpomvv/76qaeeMjNSXFw8xpth5uTocrlS/uSYUhG2tLSUl5ebyS4sLPz000/He4RLly5VVlaaezazZ8/2eDzhcDgRQ00T165dq6qqMvc/Z86cWVtbay7/xm70ybG/vz9Bo1VJkQivX78+ycmOVV9fv2zZMhNzaWlpc3Nz/EaaLoaGhmpra80d6TvvvLOqqurGjRsTPtqPP/5YWVlpZiT1To6Oj9BM9vTp081kb9mypbOzc/KHDYVCHo/ngQcesCwrMzOzsrLy559/nvxh00RdXd3SpUtNM08//fSpU6fictjPP/88enJct27diRMn4nJYOWdHmKDJjrpx40Z1dfVdd91lHm/U1NQMDAzE9yVSzJkzZzZu3GhmpKCgYNeuXfE9vjk53n///dGTY0dHR3xfIvmcGmHsZC9cuHD79nYQENDn8Uu8IgdwhAGD1YAAAAAABJRU5ErkJggg==",
  'n-butyl iodide': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAMUElEQVR4nO3dW2xUdQLH8dNa0dIqF4lWxSnXQsEtpcoloBZSk1qC2TVZsgbT3awxJOtD45N92WQSH7TJBtOXNSHGh/GyKrJhM9zcLWihilCoRcEitCCIUEuhzLSd3qYzsw//ZnakrPQyM79zZr6fN0l75i//fs/MOef/LxmRSMQCoJOpHgCQ7ogQECNCQIwIATEiBMSIEBAjQkCMCAExIgTEiBAQI0JAjAgBMSIExIgQECNCQIwIATEiBMSIEBAjQkCMCAExIgTEiBAQI0JAjAgBMSIExIgQECNCQIwIATEiBMSIEBAjQkCMCAExIgTEiBAQI0JAjAgBMSIExIgQECNCQIwIATEiBMSIEBAjQkCMCAExIgTEiBAQI0JAjAgBMSIExIgQECNCQIwIATEiBMSIEBAjQkCMCAExIgTEiBAQI0JAjAgBMSIExIgQECNCQIwIATEiBMSIEBAjQkCMCAExIgTEiBAQI0JAjAgBMSIExIgQECNCQCztIjx48GBRUVFRUdHWrVvVY4FlWVZ7e/vatWuLi4s3b948NDSkHo5CJG10dHQ88cQTsf/veXl59fX16nGlr+Hh4ZdffvmOO+6IzojL5dq3b596XMmWFhGGw+Ht27dPmzbNzHR+fv769eszMjIsy8rIyKiqqvL7/eoxpp3GxsZHH33UzEhubu5zzz137733mv/cuHHjuXPn1ANMntSP8NixY2vWrDGzO3369Lffftv8eXNzc0FBQWZmpmVZDz744LZt20KhkHaoaeLy5ctbtmwxf/NTp0598cUXh4eHI5HI4OBgbW2tSXHKlCnpc3JM5QhjJ/uhhx66ZWbHjx9fu3atSfSxxx5raGiQDDVN9PX11dTU3HPPPdHMuru7b/qa2FlLk5NjakZozqm/PtlR5sNqfn6++XS6adOmCxcuJHO0acLr9c6dOzf6gfP8+fO/8sXHjh2LPTl+8cUXSRtn8qVghDdN9hivLgKBgNvtvvvuu81nJLfb3dfXl+ihpomvv/76qaeeMjNSXFw8xpth5uTocrlS/uSYUhG2tLSUl5ebyS4sLPz000/He4RLly5VVlaaezazZ8/2eDzhcDgRQ00T165dq6qqMvc/Z86cWVtbay7/xm70ybG/vz9Bo1VJkQivX78+ycmOVV9fv2zZMhNzaWlpc3Nz/EaaLoaGhmpra80d6TvvvLOqqurGjRsTPtqPP/5YWVlpZiT1To6Oj9BM9vTp081kb9mypbOzc/KHDYVCHo/ngQcesCwrMzOzsrLy559/nvxh00RdXd3SpUtNM08//fSpU6fictjPP/88enJct27diRMn4nJYOWdHmKDJjrpx40Z1dfVdd91lHm/U1NQMDAzE9yVSzJkzZzZu3GhmpKCgYNeuXfE9vjk53n///dGTY0dHR3xfIvmcGmHsZC9cuHD79nYQENDn8Uu8IgdwhAGD1YAAAAAABJRU5ErkJggg==",
  'sec-butyl iodide': "data:image/png;base64,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"
};

// Override the image data to load local PNG files instead of embedding large base64 strings.
// These files live in the `images` folder and contain the structures generated via RDKit.
// When deploying to GitHub Pages, the PNG files live in the root of the repository
// rather than in a subdirectory.  Update the paths accordingly.
imageData['tert-butyl iodide'] = 'tert_butyl_iodide.png';
imageData['iso-butyl iodide'] = 'iso_butyl_iodide.png';
imageData['n-butyl iodide']   = 'n_butyl_iodide.png';
imageData['sec-butyl iodide'] = 'sec_butyl_iodide.png';

// Additional images for new quiz questions
imageData['1-chlorobutane']    = '1_chlorobutane.png';
imageData['2-chlorobutane']    = '2_chlorobutane.png';
imageData['isopropyl chloride'] = 'isopropyl_chloride.png';
imageData['tert-butyl chloride'] = 'tert_butyl_chloride.png';
imageData['propyl bromide']     = 'propyl_bromide.png';
imageData['allyl bromide']      = 'allyl_bromide.png';
imageData['water']              = 'water.png';
imageData['hydrogen sulfide']   = 'hydrogen_sulfide.png';
imageData['thiolate']           = 'thiolate.png';
imageData['hydroxide']          = 'hydroxide.png';
imageData['dmf']                = 'DMF.png';
imageData['dmso']               = 'DMSO.png';
imageData['acetonitrile']       = 'acetonitrile.png';

// Additional mappings for newly generated structures
imageData['2-bromopropane']      = '2_bromopropane.png';
imageData['tert-butyl bromide']  = 'tert_butyl_bromide.png';
imageData['H₂S']                 = 'H2S.png';
imageData['methoxide']           = 'CH3O_minus.png';
imageData['acetate']             = 'acetate.png';
imageData['methanol']            = 'methanol.png';
imageData['ammonia']             = 'ammonia.png';
imageData['isobutyl alcohol']    = 'isobutyl_alcohol.png';
imageData['2-butanol']           = '2_butanol.png';
imageData['tert-butyl cation']   = 'tert_butyl_cation.png';
imageData['isopropyl cation']    = 'isopropyl_cation.png';
imageData['ethyl cation']        = 'ethyl_cation.png';
imageData['allylic cation']      = 'allylic_cation.png';
imageData['chloromethylcyclohexane'] = 'chloromethylcyclohexane.png';
imageData['benzyl chloride']     = 'benzyl_chloride.png';
imageData['neopentyl chloride']  = 'neopentyl_chloride.png';
imageData['2-bromobutane']       = '2_bromobutane.png';
imageData['3-methyl-2-butanol']  = '3_methyl_2_butanol.png';
imageData['2-bromopentane']      = '2_bromopentane.png';
imageData['propanol']            = 'propanol.png';
imageData['propanethiol']        = 'propanethiol.png';
imageData['tert-butyl ethyl ether'] = 'tert_butyl_ethyl_ether.png';
imageData['propionic acid']      = 'propionic_acid.png';
imageData['ethyl bromide']       = 'ethyl_bromide.png';
imageData['ethyl acetate']       = 'ethyl_acetate.png';
imageData['3-bromo-3-methylhexane'] = '3_bromo_3_methylhexane.png';
imageData['benzyl bromide']      = 'benzyl_bromide.png';
imageData['ethyl acetate']       = 'ethyl_acetate.png';

// Mappings for additional structures referenced in the quiz
imageData['tert-butanol']        = 'tert_butanol.png';
imageData['acetic acid']         = 'acetic_acid.png';
imageData['propyl chloride']     = 'propyl_chloride.png';
imageData['ethene']              = 'ethene.png';
imageData['1-bromobutane']       = '1_bromobutane.png';
imageData['allyl chloride']      = 'allyl_chloride.png';
imageData['neopentyl bromide']   = 'neopentyl_bromide.png';
imageData['product_S_2_butanenitrile'] = 'product_S_2_butanenitrile.png';
imageData['product_R_2_butanenitrile'] = 'product_R_2_butanenitrile.png';
imageData['racemic_butanenitrile']     = 'racemic_butanenitrile.png';
imageData['cyclohexanol']       = 'cyclohexanol.png';


// Quiz data containing one question for demonstration. Additional questions can
// easily be added to this array following the same structure.
const questions = [
  // 1. Recognizing tert‑butyl iodide among its isomers
  {
    text: 'Which structure is tert‑butyl iodide?',
    options: [
      { label: 'iso‑butyl iodide', imageKey: 'iso-butyl iodide', correct: false },
      { label: 'sec‑butyl iodide', imageKey: 'sec-butyl iodide', correct: false },
      { label: 'tert‑butyl iodide', imageKey: 'tert-butyl iodide', correct: true },
      { label: 'n‑butyl iodide', imageKey: 'n-butyl iodide', correct: false },
    ],
    explanation: 'Tert‑butyl iodide has the iodine on a carbon that is attached to three other carbons.  The structure looks like a central carbon with three methyl groups around it and the iodine attached to the center.  The other isomers have iodine on primary or secondary carbons.  Only the tert‑butyl structure shows a carbon bonded to three carbons.  That makes Option 3 the correct choice.'
  },
  // 2. SN2 reactivity of C4H9I isomers
  {
    text: 'For the four isomers of C₄H₉I (n‑butyl, sec‑butyl, iso‑butyl and tert‑butyl iodide), which is most reactive toward an SN2 reaction?',
    options: [
      { label: 'tert‑butyl iodide', imageKey: 'tert-butyl iodide', correct: false },
      { label: 'iso‑butyl iodide', imageKey: 'iso-butyl iodide', correct: false },
      { label: 'n‑butyl iodide', imageKey: 'n-butyl iodide', correct: true },
      { label: 'sec‑butyl iodide', imageKey: 'sec-butyl iodide', correct: false },
    ],
    explanation: 'SN2 reactions occur fastest when the leaving group is on a carbon with as little crowding as possible.  A primary carbon has more open space than a secondary or tertiary carbon.  In n‑butyl iodide, the iodine is on a primary carbon, so the nucleophile can easily approach from the back side.  Sec‑butyl and iso‑butyl iodides are secondary, and tert‑butyl iodide is tertiary and very crowded.  Therefore n‑butyl iodide reacts fastest.'
  },
  // 3. Comparing primary and secondary alkyl chlorides in SN2 reactions
  {
    text: 'Which of the following primary or secondary alkyl halides will react fastest in an SN2 reaction?',
    options: [
      { label: '1‑chlorobutane', imageKey: '1-chlorobutane', correct: true },
      { label: '2‑chlorobutane', imageKey: '2-chlorobutane', correct: false },
      { label: 'isopropyl chloride', imageKey: 'isopropyl chloride', correct: false },
      { label: 'tert‑butyl chloride', imageKey: 'tert-butyl chloride', correct: false },
    ],
    explanation: 'SN2 reactions favor primary substrates.  1‑Chlorobutane has its chlorine on a primary carbon, so the nucleophile has the most room to attack.  The secondary chlorides (2‑chlorobutane and isopropyl chloride) are more hindered and react more slowly.  Tert‑butyl chloride is tertiary and essentially unreactive toward SN2.  Therefore 1‑chlorobutane reacts fastest.'
  },
  // 4. Allylic vs. propyl bromide reactivity in SN2
  {
    text: 'In the pair allyl bromide vs. propyl bromide, which reacts faster in an SN2 reaction?',
    options: [
      { label: 'propyl bromide', imageKey: 'propyl bromide', correct: false },
      { label: 'allyl bromide', imageKey: 'allyl bromide', correct: true },
      { label: '2‑bromopropane', imageKey: '2-bromopropane', correct: false },
      { label: 'tert‑butyl bromide', imageKey: 'tert-butyl bromide', correct: false },
    ],
    explanation: 'Allyl bromide has the leaving group next to a double bond, allowing resonance to stabilize the transition state during the SN2 reaction.  This allylic stabilization makes the reaction faster than for a simple primary halide.  Propyl bromide is primary but lacks this resonance.  Secondary and tertiary bromides are more hindered.  Thus allyl bromide reacts the fastest.'
  },
  // 5. Nucleophile strength in polar aprotic solvent
  {
    text: 'Which nucleophile is strongest in a polar aprotic solvent like DMSO?',
    options: [
      { label: 'H₂O', imageKey: 'water', correct: false },
      { label: 'H₂S', imageKey: 'hydrogen sulfide', correct: false },
      { label: 'HS⁻', imageKey: 'thiolate', correct: true },
      { label: 'HO⁻', imageKey: 'hydroxide', correct: false },
    ],
    explanation: 'In polar aprotic solvents such as DMSO, anions are not strongly solvated, so larger, more polarizable anions are better nucleophiles.  The HS⁻ ion is larger and more polarizable than HO⁻ and is not hydrogen‑bonded as strongly.  Neutral molecules like H₂O and H₂S are very weak nucleophiles.  Thus HS⁻ is the strongest nucleophile in this environment.'
  },
  // 6. Effect of solvent on methoxide nucleophilicity
  {
    text: 'Compare the nucleophiles methoxide in methanol vs. methoxide in DMSO.  Which is stronger for SN2 reactions?',
    options: [
      { label: 'Methoxide in methanol', imageKey: 'methoxide', correct: false },
      { label: 'Methoxide in DMSO', imageKey: 'methoxide', correct: true },
      { label: 'Hydroxide in water', imageKey: 'hydroxide', correct: false },
      { label: 'Acetate ion', imageKey: 'acetate', correct: false },
    ],
    explanation: 'In a protic solvent like methanol, methoxide ions are surrounded by hydrogen bonds that slow them down.  In a polar aprotic solvent like DMSO, hydrogen bonding to the nucleophile is minimal, so methoxide ions are more “free” and can attack more quickly.  Hydroxide in water is also heavily solvated and therefore slower.  Acetate is resonance‑stabilized and weaker as a nucleophile.  Thus methoxide in DMSO is the strongest nucleophile of these choices.'
  },
  // 7. Identifying a protic solvent
  {
    text: 'Which of the following solvents is protic (able to donate a hydrogen bond)?',
    options: [
      { label: 'Dimethylformamide (DMF)', imageKey: 'dmf', correct: false },
      { label: 'Dimethyl sulfoxide (DMSO)', imageKey: 'dmso', correct: false },
      { label: 'Water', imageKey: 'water', correct: true },
      { label: 'Acetonitrile', imageKey: 'acetonitrile', correct: false },
    ],
    explanation: 'A protic solvent must have a hydrogen attached to an electronegative atom such as oxygen or nitrogen so that it can form hydrogen bonds.  Water has O–H bonds and readily donates hydrogen bonds.  DMF and DMSO lack O–H or N–H bonds on their heteroatoms, and acetonitrile has only C–H bonds, making these solvents aprotic.  Therefore, water is the protic solvent among the options.'
  },
  // 8. Choosing an aprotic solvent for SN2 reactions
  {
    text: 'Which solvent is aprotic and suitable for SN2 reactions?',
    options: [
      { label: 'DMSO', imageKey: 'dmso', correct: true },
      { label: 'Water', imageKey: 'water', correct: false },
      { label: 'Methanol', imageKey: 'methanol', correct: false },
      { label: 'Tert‑butanol', imageKey: 'tert-butanol', correct: false },
    ],
    explanation: 'Polar aprotic solvents stabilize ions without hydrogen‑bonding to the nucleophile.  DMSO is a classic polar aprotic solvent that allows nucleophiles to remain reactive.  Water, methanol and tert‑butanol all have O–H bonds and hydrogen‑bond strongly to anions, making them protic and less suitable for SN2.  Thus DMSO is the best choice for SN2 reactions.'
  },
  // 9. Effect of doubling substrate concentration in an SN2 reaction
  {
    text: 'In the reaction CH₃CH₂Br + NaCN → CH₃CH₂CN + NaBr (in DMSO), the concentration of the alkyl halide is doubled while everything else is constant.  How is the rate of this SN2 reaction affected?',
    options: [
      { label: 'Rate stays the same', imageKey: 'ethyl bromide', correct: false },
      { label: 'Rate doubles', imageKey: 'ethyl bromide', correct: true },
      { label: 'Rate triples', imageKey: 'ethyl bromide', correct: false },
      { label: 'Rate halves', imageKey: 'ethyl bromide', correct: false },
    ],
    explanation: 'For SN2 reactions, the rate is proportional to the product of the concentrations of the substrate and the nucleophile.  This means it is first‑order in each reactant.  If the concentration of the alkyl halide is doubled while the nucleophile concentration stays the same, the rate will double.  Tripling or halving the rate would require other changes.  So the correct answer is that the rate doubles.'
  },
  // 10. Effect of doubling nucleophile concentration in an SN2 reaction
  {
    text: 'For the same SN2 reaction (CH₃CH₂Br + NaCN in DMSO), if the concentration of sodium cyanide is doubled while the alkyl halide concentration is constant, what happens to the rate?',
    options: [
      { label: 'Rate stays the same', imageKey: 'ethyl bromide', correct: false },
      { label: 'Rate doubles', imageKey: 'ethyl bromide', correct: true },
      { label: 'Rate triples', imageKey: 'ethyl bromide', correct: false },
      { label: 'Rate halves', imageKey: 'ethyl bromide', correct: false },
    ],
    explanation: 'The SN2 rate law is first‑order in both the substrate and the nucleophile.  If you double the concentration of sodium cyanide while keeping the alkyl halide constant, the rate also doubles.  The reaction rate is proportional to the nucleophile concentration, so increasing NaCN speeds up the reaction by the same factor.'
  },
  // 11. Doubling alcohol concentration in an SN1 reaction
  {
    text: 'Consider the reaction (CH₃)₂CHCH₂OH + HBr → (CH₃)₂CHCH₂Br + H₂O.  If the concentration of the alcohol is doubled, how is the rate of this SN1 reaction affected?',
    options: [
      { label: 'Rate stays the same', imageKey: 'isobutyl alcohol', correct: false },
      { label: 'Rate doubles', imageKey: 'isobutyl alcohol', correct: true },
      { label: 'Rate triples', imageKey: 'isobutyl alcohol', correct: false },
      { label: 'Rate halves', imageKey: 'isobutyl alcohol', correct: false },
    ],
    explanation: 'In SN1 reactions, the rate‑determining step is the formation of the carbocation when the leaving group departs.  The rate depends only on the concentration of the substrate.  Doubling the alcohol concentration doubles the number of molecules that can form carbocations per unit time, so the rate doubles.  Changes in nucleophile concentration (HBr) do not affect the rate.'
  },
  // 12. Doubling HBr concentration in an SN1 reaction
  {
    text: 'For the same reaction ((CH₃)₂CHCH₂OH + HBr), if the concentration of HBr is doubled while the alcohol concentration remains constant, what happens to the rate?',
    options: [
      { label: 'Rate stays the same', imageKey: 'isobutyl alcohol', correct: true },
      { label: 'Rate doubles', imageKey: 'isobutyl alcohol', correct: false },
      { label: 'Rate triples', imageKey: 'isobutyl alcohol', correct: false },
      { label: 'Rate halves', imageKey: 'isobutyl alcohol', correct: false },
    ],
    explanation: 'The nucleophile does not appear in the rate‑determining step of an SN1 reaction.  HBr provides the nucleophile (bromide) after the carbocation forms, so its concentration does not affect the rate.  Therefore doubling the concentration of HBr does not change how fast the reaction proceeds.'
  },
  // 13. SN1 mechanism leading to racemization
  {
    text: 'Which of the following reactions proceeds via an SN1 mechanism and will racemize a chiral center?',
    options: [
      { label: '2‑chlorobutane + H₂O → 2‑butanol + HCl', imageKey: '2-chlorobutane', correct: true },
      { label: 'Ethyl bromide + NaOH → ethanol + NaBr', imageKey: 'ethyl bromide', correct: false },
      { label: 'tert‑butyl chloride + ethanol → tert‑butyl ethyl ether + HCl', imageKey: 'tert-butyl chloride', correct: false },
      { label: 'Propyl bromide + HS⁻ → propyl thiol + Br⁻', imageKey: 'propyl bromide', correct: false },
    ],
    explanation: 'SN1 reactions form a planar carbocation intermediate.  When a chiral secondary substrate like 2‑chlorobutane loses chloride, the carbocation can be attacked by water from either side, giving a racemic mixture of 2‑butanol.  Primary halides like ethyl or propyl bromide react via SN2, which inverts configuration.  Tertiary halides like tert‑butyl chloride react via SN1 but do not have a stereocenter in the product.'
  },
  // 14. Statement about carbocation stability
  {
    text: 'Which of the following statements about carbocation stability is true?',
    options: [
      { label: 'Primary carbocations are more stable than secondary carbocations.', imageKey: 'ethyl cation', correct: false },
      { label: 'Secondary carbocations are more stable than tertiary carbocations.', imageKey: 'isopropyl cation', correct: false },
      { label: 'Allylic carbocations are more stable than tertiary carbocations.', imageKey: 'allylic cation', correct: true },
      { label: 'Methyl carbocations are among the most stable carbocations.', imageKey: 'ethyl cation', correct: false },
    ],
    explanation: 'Carbocations become more stable as they are substituted by alkyl groups and when the positive charge can be delocalized by resonance.  Tertiary carbocations are stabilized by three alkyl groups.  Allylic carbocations have the positive charge adjacent to a double bond, allowing resonance stabilization that makes them even more stable than simple tertiary carbocations.  Primary and methyl carbocations are least stable.'
  },
  // 15. Substrate forming the most stable carbocation
  {
    text: 'For the following pair of substrates, which one forms a more stable carbocation upon loss of the leaving group?',
    options: [
      { label: 'Chloromethylcyclohexane', imageKey: 'chloromethylcyclohexane', correct: false },
      { label: 'tert‑butyl chloride', imageKey: 'tert-butyl chloride', correct: true },
      { label: 'Benzyl chloride', imageKey: 'benzyl chloride', correct: false },
      { label: 'Neopentyl chloride', imageKey: 'neopentyl chloride', correct: false },
    ],
    explanation: 'Tert‑butyl chloride forms a tertiary carbocation when chloride departs.  Tertiary carbocations are stabilized by three alkyl groups.  Chloromethylcyclohexane gives a primary carbocation, benzyl chloride forms a benzylic cation stabilized by resonance, and neopentyl chloride forms a primary cation adjacent to a bulky group.  Among these, the tertiary carbocation from tert‑butyl chloride is the most stable.'
  },
  // 16. Racemization of (S)‑2‑iodopentane in NaI/DMSO
  {
    text: 'When (S)‑2‑iodopentane is dissolved in sodium iodide in DMSO, it racemizes.  Why does this happen?',
    options: [
      { label: 'The iodide ion acts as a strong base, causing elimination.', imageKey: '2-bromopentane', correct: false },
      { label: 'The reaction proceeds via an SN2 mechanism.', imageKey: '2-bromopentane', correct: false },
      { label: 'The reaction proceeds via an SN1 mechanism with iodide attack on both faces.', imageKey: '2-bromopentane', correct: true },
      { label: 'Iodine radicals cause homolytic substitution.', imageKey: '2-bromopentane', correct: false },
    ],
    explanation: 'In DMSO, iodide is both a good nucleophile and an excellent leaving group.  The iodide leaves to form a planar carbocation, and then another iodide ion can attack from either side of this flat intermediate.  Attack from both faces produces both (R) and (S) configurations in equal amounts.  This SN1 mechanism causes racemization.  An SN2 pathway would give inversion but not racemization.'
  },
  // 17. Racemization of (R)‑2‑butanol with HBr
  {
    text: 'When the optically active alcohol (R)‑2‑butanol is treated with HBr, a racemic mixture of 2‑bromobutane is obtained.  What is the main reason?',
    options: [
      { label: 'The reaction proceeds via an SN2 mechanism with inversion.', imageKey: '2-butanol', correct: false },
      { label: 'The reaction proceeds via an SN1 mechanism with carbocation rearrangement.', imageKey: '2-butanol', correct: false },
      { label: 'The reaction proceeds via an SN1 mechanism, and the carbocation is attacked from either side by bromide.', imageKey: '2-butanol', correct: true },
      { label: 'The reaction proceeds via an E2 elimination to form an alkene.', imageKey: '2-butanol', correct: false },
    ],
    explanation: 'Protonation of the alcohol converts the hydroxyl group into a better leaving group (water).  Loss of water forms a planar secondary carbocation.  Bromide ion then attacks this carbocation from either face, giving both enantiomers in equal amounts.  Because attack occurs on both sides of the planar intermediate, the product is a racemic mixture rather than inverted or retained stereochemistry.'
  },
  // 18. Walden inversion example
  {
    text: 'Which reaction below illustrates a Walden inversion (inversion of configuration at a chiral center)?',
    options: [
      { label: 'SN1 reaction of tert‑butyl chloride with water.', imageKey: 'tert-butyl chloride', correct: false },
      { label: 'SN2 reaction of (S)‑2‑bromobutane with CN⁻ to give (R)‑2‑butanenitrile.', imageKey: '2-bromobutane', correct: true },
      { label: 'Formation of tert‑butyl carbocation followed by rearrangement.', imageKey: 'tert-butyl cation', correct: false },
      { label: 'Dehydration of 2‑propanol to give propene.', imageKey: 'propanol', correct: false },
    ],
    explanation: 'A Walden inversion occurs in SN2 reactions because the nucleophile attacks from the back side, flipping the stereochemistry.  When (S)‑2‑bromobutane is attacked by CN⁻ in a single step, the product is (R)‑2‑butanenitrile.  SN1 reactions produce racemization, and elimination reactions do not invert stereochemistry.'
  },
  // 19. First step in converting an alcohol with HBr
  {
    text: 'Consider the following reaction: CH₃CH₂CH₂OH + HBr → CH₃CH₂CH₂Br + H₂O.  What is the first step in the mechanism?',
    options: [
      { label: 'The bromide ion attacks the carbon bearing the OH group.', imageKey: 'propanol', correct: false },
      { label: 'The hydroxyl group leaves, forming a carbocation.', imageKey: 'propanol', correct: false },
      { label: 'The alcohol is protonated by HBr to form water, a better leaving group.', imageKey: 'propanol', correct: true },
      { label: 'A hydride shift occurs to form a more stable carbocation.', imageKey: 'propanol', correct: false },
    ],
    explanation: 'Alcohols are poor leaving groups.  In acid, the first step is protonation of the hydroxyl group by HBr.  The protonated alcohol becomes water, which is a good leaving group.  Only after protonation does water depart to form a carbocation.  Bromide attacks in a later step.  No hydride shift is needed because the intermediate carbocation is already primary.'
  },
  // 20. Rearrangement in 3‑methyl‑2‑butanol substitution
  {
    text: 'When 3‑methyl‑2‑butanol is treated with concentrated HBr, a rearranged product, 2‑bromopentane, is formed.  Why does rearrangement occur?',
    options: [
      { label: 'The initial carbocation is primary and rearranges to a more stable secondary carbocation.', imageKey: '3-methyl-2-butanol', correct: true },
      { label: 'The nucleophile is too weak and causes rearrangement.', imageKey: '3-methyl-2-butanol', correct: false },
      { label: 'Protonation occurs at the wrong site.', imageKey: '3-methyl-2-butanol', correct: false },
      { label: 'Radical bromination competes with substitution.', imageKey: '3-methyl-2-butanol', correct: false },
    ],
    explanation: 'Protonation of 3‑methyl‑2‑butanol allows water to leave and forms a primary carbocation.  Primary carbocations are very unstable.  A hydride shift from the adjacent carbon moves the positive charge to form a secondary carbocation, which is more stable.  Bromide then attacks this secondary carbocation, giving the rearranged product.  Weak nucleophiles or radical pathways are not the cause.'
  },
  // 21. Least stable carbocation
  {
    text: 'Which of the following carbocations is least stable?',
    options: [
      { label: 'tert‑butyl cation', imageKey: 'tert-butyl cation', correct: false },
      { label: 'isopropyl cation', imageKey: 'isopropyl cation', correct: false },
      { label: 'ethyl cation', imageKey: 'ethyl cation', correct: true },
      { label: 'allylic cation', imageKey: 'allylic cation', correct: false },
    ],
    explanation: 'Carbocation stability increases with greater alkyl substitution and with resonance stabilization.  The ethyl cation is a primary carbocation with no resonance stabilization and is therefore the least stable.  Isopropyl and tert‑butyl cations are secondary and tertiary, respectively, and allylic cations are stabilized by resonance.'
  },
  // 22. Ordering carbocation stability
  {
    text: 'Identify the correct order of carbocation stability from least to most stable.',
    options: [
      { label: 'methyl < allyl < secondary < tertiary', imageKey: 'allylic cation', correct: false },
      { label: 'methyl < secondary < allyl < tertiary', imageKey: 'allylic cation', correct: false },
      { label: 'methyl < secondary < tertiary < allyl', imageKey: 'allylic cation', correct: false },
      { label: 'methyl < secondary < allyl < benzyl', imageKey: 'allylic cation', correct: true },
    ],
    explanation: 'Carbocations become more stable as they gain alkyl substituents or resonance stabilization.  The methyl cation is the least stable.  Secondary carbocations are more stable than methyl but less stable than allylic carbocations.  Benzylic carbocations are even more stabilized by resonance across the aromatic ring.  Therefore the order methyl < secondary < allyl < benzyl is correct.'
  },
  // 23. Structure of ethyl acetate
  {
    text: 'Which of the following structures represents ethyl acetate?',
    options: [
      { label: 'Acetate ion', imageKey: 'acetate', correct: false },
      { label: 'Ethyl acetate (CH₃CH₂COOCH₃)', imageKey: 'ethyl acetate', correct: true },
      { label: 'Acetic acid (CH₃COOH)', imageKey: 'acetic acid', correct: false },
      { label: 'Ethanol (CH₃CH₂OH)', imageKey: 'ethanol', correct: false },
    ],
    explanation: 'Ethyl acetate is an ester formed from acetic acid and ethanol.  Its structure has a carbonyl carbon double‑bonded to oxygen and single‑bonded to another oxygen, which is attached to an ethyl group.  Option 2 shows CH₃CH₂COOCH₃, matching this description.  Option 1 is the acetate anion, option 3 is acetic acid, and option 4 is ethanol.'
  },
  // 24. Stereochemical outcome of an SN2 reaction
  {
    text: 'In the following SN2 reaction, what is the configuration of the product?  (S)‑2‑bromobutane + NaCN → ?',
    options: [
      { label: '(S)‑2‑butanenitrile', imageKey: 'product_S_2_butanenitrile', correct: false },
      { label: '(R)‑2‑butanenitrile', imageKey: 'product_R_2_butanenitrile', correct: true },
      { label: 'Racemic 2‑butanenitrile', imageKey: 'racemic_butanenitrile', correct: false },
      { label: 'Retention of configuration', imageKey: 'product_S_2_butanenitrile', correct: false },
    ],
    explanation: 'SN2 reactions involve backside attack.  The nucleophile replaces the leaving group with inversion of stereochemistry.  Starting from (S)‑2‑bromobutane, attack by CN⁻ produces (R)‑2‑butanenitrile.  A racemic mixture or retention would be expected in SN1 or other mechanisms, not SN2.'
  },
  // 25. Reagent set for SN1 conversion of an alcohol to an alkyl chloride
  {
    text: 'Which pair of reagents will convert an alcohol to an alkyl chloride via an SN1 mechanism?',
    options: [
      { label: 'SOCl₂ and pyridine', imageKey: 'tert-butanol', correct: false },
      { label: 'HCl and ZnCl₂ (Lucas reagent)', imageKey: 'tert-butanol', correct: true },
      { label: 'NaBr and H₂SO₄', imageKey: 'tert-butanol', correct: false },
      { label: 'PCl₃ in ether', imageKey: 'tert-butanol', correct: false },
    ],
    explanation: 'Tertiary and some secondary alcohols can be converted to alkyl chlorides via an SN1 mechanism using concentrated HCl in the presence of ZnCl₂, known as the Lucas reagent.  This acid–catalyst combination forms a carbocation that is then attacked by chloride.  Other reagents such as SOCl₂ and PCl₃ operate via SN2 and do not involve carbocations.'
  },
  // 26. Role of ZnCl₂ in the Lucas test
  {
    text: 'What is the role of ZnCl₂ in the Lucas test for alcohols?',
    options: [
      { label: 'It acts as a base to deprotonate the alcohol.', imageKey: 'tert-butanol', correct: false },
      { label: 'It coordinates with the oxygen of the alcohol to make a better leaving group.', imageKey: 'tert-butanol', correct: true },
      { label: 'It donates a chloride ion.', imageKey: 'tert-butanol', correct: false },
      { label: 'It prevents carbocation rearrangement.', imageKey: 'tert-butanol', correct: false },
    ],
    explanation: 'ZnCl₂ is a Lewis acid.  It binds to the lone pair on the oxygen of the alcohol, increasing the positive character of the carbon and making the departing group more stable.  This promotes ionization to form a carbocation.  ZnCl₂ does not act as a base or as a chloride source and cannot stop rearrangements.'
  },
  // 27. Mechanism and product of tert‑butyl iodide with sodium methoxide
  {
    text: 'In the reaction of 2‑iodo‑2‑methylpropane with sodium methoxide (CH₃ONa), which mechanism occurs and what is the product?',
    options: [
      { label: 'SN2 to give tert‑butyl methoxy ether', imageKey: 'tert-butyl iodide', correct: false },
      { label: 'SN1 to give tert‑butyl methoxy ether', imageKey: 'tert-butyl iodide', correct: true },
      { label: 'E2 to give isobutene', imageKey: 'tert-butyl iodide', correct: false },
      { label: 'Radical substitution to give tert‑butyl methyl ether', imageKey: 'tert-butyl iodide', correct: false },
    ],
    explanation: '2‑Iodo‑2‑methylpropane is a tertiary halide, so it cannot undergo SN2 because of steric hindrance.  The iodide first leaves to form a tertiary carbocation.  Methoxide then attacks this carbocation, yielding tert‑butyl methoxy ether.  An E2 elimination would require a strong base and result in an alkene, and radical pathways are not typical under these conditions.'
  },
  // 28. Identifying an SN1 substrate that rearranges
  {
    text: 'Which of the following compounds will undergo rearrangement in an SN1 reaction?',
    options: [
      { label: '3‑bromo‑3‑methylhexane', imageKey: '3-bromo-3-methylhexane', correct: true },
      { label: '1‑bromobutane', imageKey: '1-bromobutane', correct: false },
      { label: 'benzyl bromide', imageKey: 'benzyl bromide', correct: false },
      { label: 'allyl chloride', imageKey: 'allyl chloride', correct: false },
    ],
    explanation: 'When the leaving group departs from 3‑bromo‑3‑methylhexane, a secondary carbocation forms.  This carbocation can rearrange via a hydride shift to form a more stable tertiary carbocation.  Primary bromides like 1‑bromobutane undergo SN2 without carbocations, and benzylic and allylic halides are already stabilized by resonance and do not rearrange.'
  },
  // 29. Product of an SN2 reaction with sodium hydrosulfide
  {
    text: 'What is the product of the following SN2 reaction?  CH₃CH₂CH₂Br + NaSH → ?',
    options: [
      { label: 'CH₃CH₂CH₂SH', imageKey: 'propanethiol', correct: true },
      { label: 'CH₃CH₂CH₂OH', imageKey: 'propanol', correct: false },
      { label: 'CH₃CH₂CH₂SNa', imageKey: 'propanethiol', correct: false },
      { label: 'CH₃CH₂CH₂Br (no reaction)', imageKey: 'propyl bromide', correct: false },
    ],
    explanation: 'HS⁻ is a strong nucleophile.  It attacks the carbon bearing the bromine in a backside SN2 reaction, displacing the bromide and forming propanethiol.  Sodium ions balance charge but are spectators.  There are no side products besides NaBr.'
  },
  // 30. Product of tert‑butyl chloride with ethanol
  {
    text: 'In the reaction of 2‑chloro‑2‑methylpropane with ethanol, which product is formed?',
    options: [
      { label: 'tert‑butyl ethyl ether', imageKey: 'tert-butyl ethyl ether', correct: true },
      { label: 'tert‑butyl chloride', imageKey: 'tert-butyl chloride', correct: false },
      { label: 'tert‑butyl alcohol', imageKey: 'tert-butanol', correct: false },
      { label: 'ethene', imageKey: 'ethene', correct: false },
    ],
    explanation: '2‑Chloro‑2‑methylpropane (tert‑butyl chloride) forms a tertiary carbocation when chloride leaves.  In ethanol, the solvent acts as a nucleophile, attacking the carbocation to give tert‑butyl ethyl ether after deprotonation.  The other options do not match the substitution product formed in these conditions.'
  },
  // 31. Two‑step transformation using cyanide and hydrolysis
  {
    text: 'Consider the following sequence: CH₃CH₂Br → CH₃CH₂CN → CH₃CH₂CO₂H.  Which reagents complete this two‑step transformation?',
    options: [
      { label: 'NaCN, then H₃O⁺/heat', imageKey: 'ethyl bromide', correct: true },
      { label: 'NaOH, then H₂SO₄', imageKey: 'ethyl bromide', correct: false },
      { label: 'KOH, then KMnO₄', imageKey: 'ethyl bromide', correct: false },
      { label: 'NaCN, then LiAlH₄', imageKey: 'ethyl bromide', correct: false },
    ],
    explanation: 'Bromide is replaced by cyanide in an SN2 reaction with NaCN to give a nitrile.  Hydrolysis of the nitrile under acidic conditions (H₃O⁺ and heat) converts it into a carboxylic acid.  The other reagent sequences either form alcohols or amines rather than the desired acid.'
  },
  // 32. Product of thionyl chloride substitution
  {
    text: 'Identify the product of the following reaction: CH₃CH₂CH₂OH + thionyl chloride (SOCl₂) → ?',
    options: [
      { label: 'CH₃CH₂CH₂Cl', imageKey: 'propyl chloride', correct: true },
      { label: 'CH₃CH₂CH₂SH', imageKey: 'propanethiol', correct: false },
      { label: 'CH₃CH₂CH₂Br', imageKey: 'propyl bromide', correct: false },
      { label: 'CH₃CH₂CH₂O–SOCl', imageKey: 'propyl chloride', correct: false },
    ],
    explanation: 'Thionyl chloride converts alcohols to alkyl chlorides via an SN2‑like mechanism.  Propanol becomes propyl chloride.  There is no bromination, and the intermediate sulfite collapses to produce the chloride and SO₂ gas.'
  },
  // 33. Dehydration of tert‑butyl alcohol
  {
    text: 'Which reagent best converts tert‑butyl alcohol to isobutene (2‑methylpropene)?',
    options: [
      { label: 'H₂SO₄/heat', imageKey: 'tert-butanol', correct: true },
      { label: 'HBr', imageKey: 'tert-butanol', correct: false },
      { label: 'NaOH', imageKey: 'tert-butanol', correct: false },
      { label: 'PCC (pyridinium chlorochromate)', imageKey: 'tert-butanol', correct: false },
    ],
    explanation: 'To remove water from a tertiary alcohol and form an alkene, a strong acid and heat are required.  Concentrated sulfuric acid protonates the alcohol, the leaving group departs, and elimination occurs to give the alkene.  HBr would substitute the hydroxyl with bromide, NaOH is not strong enough to dehydrate tert‑butyl alcohol, and PCC is an oxidizing agent.'
  },
  // 34. E2 elimination with t‑BuOK
  {
    text: 'Which alkyl halide will most readily undergo E2 elimination with a strong base like potassium tert‑butoxide (t‑BuOK)?',
    options: [
      { label: '2‑bromobutane', imageKey: '2-bromobutane', correct: false },
      { label: '1‑bromobutane', imageKey: '1-bromobutane', correct: false },
      { label: 'tert‑butyl bromide', imageKey: 'tert-butyl bromide', correct: true },
      { label: 'benzyl bromide', imageKey: 'benzyl bromide', correct: false },
    ],
    explanation: 'E2 elimination is favored for tertiary halides with strong bases.  tert‑Butyl bromide is tertiary, so a bulky base like t‑BuOK will remove a proton and eliminate the bromide, giving isobutene.  Primary and secondary bromides prefer substitution unless the base is very strong and hindered.  Benzyl bromide undergoes SN2 because the benzyl position is stabilized by resonance.'
  },
  // 35. SN1 reactivity of benzyl vs. ethyl bromide
  {
    text: 'Consider the pair: ethyl bromide vs. benzyl bromide.  Which one reacts faster in an SN1 reaction?',
    options: [
      { label: 'Ethyl bromide', imageKey: 'ethyl bromide', correct: false },
      { label: 'Benzyl bromide', imageKey: 'benzyl bromide', correct: true },
      { label: 'They react at the same rate', imageKey: 'ethyl bromide', correct: false },
      { label: 'Neither undergoes SN1', imageKey: 'ethyl bromide', correct: false },
    ],
    explanation: 'Benzyl bromide forms a benzylic carbocation when the leaving group departs.  This carbocation is highly stabilized by resonance with the aromatic ring, making the SN1 reaction very fast.  Ethyl bromide is primary and normally reacts via SN2.  Therefore benzyl bromide reacts much faster in an SN1 mechanism.'
  },
  // 36. Converting 1‑bromobutane to 1‑butanol
  {
    text: 'Which sequence of reagents converts 1‑bromobutane to 1‑butanol?',
    options: [
      { label: 'H₂O/heat', imageKey: '1-bromobutane', correct: false },
      { label: 'NaOH in water', imageKey: '1-bromobutane', correct: true },
      { label: 'NaOMe in methanol', imageKey: '1-bromobutane', correct: false },
      { label: 'HBr', imageKey: '1-bromobutane', correct: false },
    ],
    explanation: '1‑Bromobutane is a primary halide.  The hydroxide ion is a strong nucleophile and will replace bromide in an SN2 reaction to form 1‑butanol.  Water is too weak a nucleophile, methoxide would give butyl methyl ether, and adding HBr would not convert a bromide into an alcohol.'
  },
  // 37. Converting isopropyl bromide to isopropyl cyanide
  {
    text: 'Which sequence of reagents converts isopropyl bromide to isopropyl cyanide (2‑methylpropionitrile)?',
    options: [
      { label: 'NaCN (in DMSO)', imageKey: 'isopropyl chloride', correct: true },
      { label: 'NaCN followed by H₃O⁺/heat', imageKey: 'isopropyl chloride', correct: false },
      { label: 'KCN in ethanol', imageKey: 'isopropyl chloride', correct: false },
      { label: 'NaCN then LiAlH₄', imageKey: 'isopropyl chloride', correct: false },
    ],
    explanation: 'Isopropyl bromide is secondary.  Using NaCN in a polar aprotic solvent like DMSO promotes an SN2 reaction to give the nitrile in one step.  Hydrolysis (Option 2) would convert the nitrile to a carboxylic acid.  Ethanol is a protic solvent and slows down SN2 reactions.  LiAlH₄ would reduce the nitrile to an amine, not the desired nitrile.'
  },
  // 38. Effect of doubling base concentration in an E2 reaction
  {
    text: 'Which statement best describes the effect of doubling base concentration in an E2 reaction?',
    options: [
      { label: 'The rate doubles because the reaction is second‑order overall.', imageKey: '2-bromobutane', correct: true },
      { label: 'The rate halves because more base causes inhibition.', imageKey: '2-bromobutane', correct: false },
      { label: 'The rate stays the same because the base does not participate in the rate law.', imageKey: '2-bromobutane', correct: false },
      { label: 'The reaction shifts to SN1.', imageKey: '2-bromobutane', correct: false },
    ],
    explanation: 'E2 eliminations are bimolecular.  The rate depends on both the concentration of the substrate and the concentration of the base.  Therefore doubling the base concentration doubles the rate.  There is no inhibition at higher base concentration under normal conditions.'
  },
  // 39. Reaction of a tosylate with iodide
  {
    text: 'A primary alkyl tosylate (R–OTs) reacts with sodium iodide in acetone to give which product?',
    options: [
      { label: 'R–I', imageKey: 'n-butyl iodide', correct: true },
      { label: 'R–Cl', imageKey: 'n-butyl iodide', correct: false },
      { label: 'R–SH', imageKey: 'n-butyl iodide', correct: false },
      { label: 'R–OH', imageKey: 'n-butyl iodide', correct: false },
    ],
    explanation: 'Tosylates are excellent leaving groups.  In acetone, iodide is a strong nucleophile and will displace the tosylate group in an SN2 reaction, forming an alkyl iodide.  Chloride and hydroxide ions are not present, and hydrosulfide would be needed to form R–SH.'
  },
  // 40. Racemization of (R)‑2‑pentanol in acid
  {
    text: 'When (R)‑2‑pentanol is treated with dilute sulfuric acid, it racemizes.  Which mechanism explains this?',
    options: [
      { label: 'SN1 reaction forming a planar carbocation attacked by water from either side', imageKey: '2-bromopentane', correct: true },
      { label: 'SN2 reaction with inversion of configuration', imageKey: '2-bromopentane', correct: false },
      { label: 'Radical substitution via homolysis of the C–O bond', imageKey: '2-bromopentane', correct: false },
      { label: 'E2 elimination followed by hydration', imageKey: '2-bromopentane', correct: false },
    ],
    explanation: 'In acidic solution, the alcohol is protonated and water leaves to form a secondary carbocation.  This carbocation is flat and can be attacked from either face by water, giving both enantiomers.  An SN2 pathway would give only inversion, and radicals or eliminations are not relevant here.'
  },
  // 41. Converting cyclohexanol to bromocyclohexane
  {
    text: 'Which reagent best converts cyclohexanol to bromocyclohexane without rearrangement?',
    options: [
      { label: 'HBr', imageKey: 'cyclohexanol', correct: false },
      { label: 'PBr₃', imageKey: 'cyclohexanol', correct: true },
      { label: 'Br₂/FeBr₃', imageKey: 'cyclohexanol', correct: false },
      { label: 'NaBr/H₂SO₄', imageKey: 'cyclohexanol', correct: false },
    ],
    explanation: 'Phosphorus tribromide (PBr₃) converts primary and secondary alcohols to alkyl bromides via an SN2 mechanism.  This process avoids carbocations and rearrangements.  Direct HBr or H₂SO₄ generate a carbocation (SN1) and can lead to rearrangement.  Br₂/FeBr₃ is used for aromatic bromination, not for alcohols.'
  },
  // 42. Reactivity of neopentyl bromide with cyanide
  {
    text: 'A neopentyl bromide (CH₃C(CH₃)₂CH₂CH₂Br) is reacted with NaCN.  What is the major product?',
    options: [
      { label: 'Neopentyl cyanide (nitrile)', imageKey: 'neopentyl bromide', correct: false },
      { label: 'No reaction (extremely slow SN2)', imageKey: 'neopentyl bromide', correct: true },
      { label: 'Rearranged nitrile', imageKey: 'neopentyl bromide', correct: false },
      { label: 'Isobutene', imageKey: 'neopentyl bromide', correct: false },
    ],
    explanation: 'Neopentyl bromide is a primary bromide but has a very bulky substituent adjacent to the leaving group.  This steric hindrance makes SN2 reactions extremely slow.  SN1 reactions are also disfavored because a primary carbocation would need to form.  As a result, little to no substitution occurs with NaCN under typical conditions.'
  },
  // 43. Fastest nucleophile for benzyl chloride SN2
  {
    text: 'Which nucleophile will react fastest with benzyl chloride in an SN2 reaction?',
    options: [
      { label: 'H₂O', imageKey: 'water', correct: false },
      { label: 'MeOH', imageKey: 'methanol', correct: false },
      { label: 'I⁻', imageKey: 'benzyl chloride', correct: true },
      { label: 'NH₃', imageKey: 'ammonia', correct: false },
    ],
    explanation: 'Iodide ion (I⁻) is a large, polarizable nucleophile and is very reactive in SN2 reactions.  Benzyl chloride is a primary benzylic halide that readily undergoes SN2.  Water and methanol are weak nucleophiles, and ammonia is moderate.  Therefore I⁻ gives the fastest substitution.'
  },
  // 44. Reaction proceeding through a tosylate intermediate
  {
    text: 'Which of the following reactions proceeds through an intermediate tosylate?',
    options: [
      { label: 'ROH → ROCl using SOCl₂', imageKey: 'methanol', correct: false },
      { label: 'ROH → R–TsO using TsCl/pyridine', imageKey: 'methanol', correct: true },
      { label: 'ROH → RBr using HBr', imageKey: 'methanol', correct: false },
      { label: 'ROH → R–OH (no change)', imageKey: 'methanol', correct: false },
    ],
    explanation: 'Tosyl chloride (TsCl) reacts with an alcohol in the presence of a base like pyridine to give a tosylate ester (R–OTs).  This intermediate retains the stereochemistry at carbon and can be displaced by a nucleophile.  SOCl₂ and HBr convert alcohols directly to halides without forming tosylates.'
  },
  // 45. Substrate that does not react via SN1
  {
    text: 'Which of the following substrates will not react via an SN1 mechanism under typical conditions?',
    options: [
      { label: 'tert‑butyl bromide', imageKey: 'tert-butyl bromide', correct: false },
      { label: '2‑bromo‑2‑methylpropane', imageKey: 'tert-butyl bromide', correct: false },
      { label: 'benzyl bromide', imageKey: 'benzyl bromide', correct: false },
      { label: '1‑bromopropane', imageKey: '1-bromobutane', correct: true },
    ],
    explanation: 'Primary alkyl halides like 1‑bromopropane do not form stable carbocations and therefore do not undergo SN1 reactions.  Tertiary halides (such as tert‑butyl bromide and 2‑bromo‑2‑methylpropane) form stable carbocations, and benzylic halides are stabilized by resonance, making them good SN1 substrates.'
  },
  // 46. Reagent for converting a tosylate to a thiol
  {
    text: 'For the transformation CH₃CH₂OTs → CH₃CH₂SH, identify the reagent you would use.',
    options: [
      { label: 'NaSH', imageKey: 'propanethiol', correct: true },
      { label: 'NaI', imageKey: 'propanethiol', correct: false },
      { label: 'H₂O', imageKey: 'propanethiol', correct: false },
      { label: 'NaOH', imageKey: 'propanethiol', correct: false },
    ],
    explanation: 'A tosylate (OTs) is an excellent leaving group.  To replace it with an SH group, you need a sulfur nucleophile.  Sodium hydrosulfide (NaSH) provides HS⁻, which displaces the tosylate in an SN2 reaction to give the thiol.  Iodide or hydroxide would produce different products, and water would not efficiently substitute the tosylate.'
  },
  // 47. Steps in a tert‑butyl chloride SN1 reaction
  {
    text: 'In the SN1 reaction tert‑butyl chloride + methanol → tert‑butyl methyl ether + HCl, how many elementary steps are involved?',
    options: [
      { label: 'Two steps', imageKey: 'tert-butyl chloride', correct: false },
      { label: 'Three steps', imageKey: 'tert-butyl chloride', correct: true },
      { label: 'Four steps', imageKey: 'tert-butyl chloride', correct: false },
      { label: 'One step', imageKey: 'tert-butyl chloride', correct: false },
    ],
    explanation: 'SN1 mechanisms involve more than one step.  First, the halide leaves to form a carbocation.  Second, the nucleophile (methanol) attacks the carbocation.  Third, deprotonation of the oxonium ion yields the ether.  These three discrete steps make up the mechanism.'
  },
  // 48. Converting an alkyl iodide to a primary alcohol
  {
    text: 'Which reagent set converts an alkyl iodide to a primary alcohol?',
    options: [
      { label: 'NaOH in H₂O', imageKey: 'n-butyl iodide', correct: true },
      { label: 'HBr', imageKey: 'n-butyl iodide', correct: false },
      { label: 'NaI in acetone', imageKey: 'n-butyl iodide', correct: false },
      { label: 'PBr₃', imageKey: 'n-butyl iodide', correct: false },
    ],
    explanation: 'A strong nucleophile like hydroxide ion will attack a primary alkyl iodide in an SN2 reaction and replace the iodide with a hydroxyl group.  HBr would convert it to a bromide, NaI in acetone swaps halogens, and PBr₃ converts alcohols to bromides rather than the reverse.'
  },
  // 49. Fastest E2 elimination with NaOEt
  {
    text: 'Which substrate will react fastest with NaOEt (sodium ethoxide) in ethanol via an E2 elimination?',
    options: [
      { label: '3‑bromopropene', imageKey: 'allyl bromide', correct: false },
      { label: '2‑bromopropane', imageKey: '2-bromopropane', correct: false },
      { label: '2‑bromo‑2‑methylpropane (tert‑butyl bromide)', imageKey: 'tert-butyl bromide', correct: true },
      { label: '1‑bromopropane', imageKey: 'propyl bromide', correct: false },
    ],
    explanation: 'Strong bases like sodium ethoxide remove a proton to form an alkene.  A tertiary halide such as tert‑butyl bromide eliminates most readily because the resulting alkene is highly substituted and the substitution pathway is hindered.  Secondary and primary halides undergo elimination more slowly.  Allylic bromides can also undergo substitution rather than elimination.'
  },
  // 50. Strongest nucleophile in aqueous solution
  {
    text: 'Which of the following is the strongest nucleophile in aqueous solution?',
    options: [
      { label: 'HO⁻', imageKey: 'hydroxide', correct: true },
      { label: 'H₂O', imageKey: 'water', correct: false },
      { label: 'H₂S', imageKey: 'hydrogen sulfide', correct: false },
      { label: 'HS⁻', imageKey: 'thiolate', correct: false },
    ],
    explanation: 'In water, hydroxide ions are strong bases and remain relatively free from solvation compared to larger anions.  They readily attack electrophilic carbons.  HS⁻ and H₂S are more heavily solvated and therefore less nucleophilic than HO⁻ in water.  Water itself is a very weak nucleophile.  Thus HO⁻ is the strongest nucleophile in aqueous solution.'
  }
];

let currentQuestion = 0;

// Initialize the quiz when the page loads.
window.addEventListener('DOMContentLoaded', () => {
  loadQuestion();
});

function loadQuestion() {
  const container = document.querySelector('.quiz-container');
  container.innerHTML = '';
  const questionObj = questions[currentQuestion];
  // Progress indicator
  const progress = document.createElement('div');
  progress.className = 'progress';
  progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  container.appendChild(progress);
  // Question text
  const questionEl = document.createElement('div');
  questionEl.className = 'question';
  questionEl.textContent = questionObj.text;
  container.appendChild(questionEl);
  // Options
  const optionsEl = document.createElement('div');
  optionsEl.className = 'options';
  questionObj.options.forEach((opt, idx) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.dataset.index = idx;
    const img = document.createElement('img');
    img.src = imageData[opt.imageKey];
    img.alt = opt.label;
    const label = document.createElement('div');
    label.textContent = opt.label;
    optionDiv.appendChild(img);
    optionDiv.appendChild(label);
    optionDiv.addEventListener('click', () => selectOption(idx));
    optionsEl.appendChild(optionDiv);
  });
  container.appendChild(optionsEl);
  // Feedback
  const feedback = document.createElement('div');
  feedback.className = 'feedback';
  container.appendChild(feedback);
  // Next button
  const nextBtn = document.createElement('button');
  nextBtn.className = 'next-button';
  nextBtn.textContent = currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question';
  nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showCompletion(container);
    }
  });
  container.appendChild(nextBtn);
}

function selectOption(selectedIndex) {
  const questionObj = questions[currentQuestion];
  const optionsDivs = document.querySelectorAll('.option');
  optionsDivs.forEach((div, idx) => {
    const opt = questionObj.options[idx];
    if (idx === selectedIndex) {
      if (opt.correct) {
        div.classList.add('correct');
      } else {
        div.classList.add('incorrect');
      }
    }
    // Disable further clicks
    div.style.pointerEvents = 'none';
  });
  // Show explanation
  const feedback = document.querySelector('.feedback');
  feedback.textContent = questionObj.explanation;
  feedback.style.display = 'block';
  // Reveal next button
  const nextBtn = document.querySelector('.next-button');
  nextBtn.style.display = 'inline-block';
}

function showCompletion(container) {
  container.innerHTML = '';
  const msg = document.createElement('div');
  msg.className = 'question';
  msg.textContent = 'You have completed the quiz. Great job!';
  container.appendChild(msg);
}