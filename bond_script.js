// This script powers a second set of practice questions focused on drawing
// bond‑line structures from condensed formulas.  It reuses the same
// styles defined in style.css and displays one question at a time with
// immediate feedback and a final score report.  Each answer choice is
// represented by an image of the molecule’s bond‑line structure.

// Mapping of simple names used in the question definitions to the
// corresponding PNG files.  All images live in the root of the
// repository and were generated with RDKit.  Feel free to add new
// entries here if you create additional structures.
const imageData = {
  'propane': 'propane.png',
  'butane': 'butane.png',
  'isobutane': 'isobutane.png',
  'neopentane': 'neopentane.png',
  '2-methylbutane': '2_methylbutane.png',
  '3-methylpentane': '3_methylpentane.png',
  '2,3-dimethylbutane': '2_3_dimethylbutane.png',
  '2,2-dimethylbutane': '2_2_dimethylbutane.png',
  '2-methylpentane': '2_methylpentane.png',
  '3,3-dimethylpentane': '3_3_dimethylpentane.png',
  '2,4-dimethylpentane': '2_4_dimethylpentane.png',
  'pentane': 'pentane.png',
  'cyclohexane': 'cyclohexane.png',
  'cyclohexene': 'cyclohexene.png',
  'benzene': 'benzene.png',
  'cyclohexanol': 'cyclohexanol.png',
  'cyclopentanol': 'cyclopentanol.png',
  '1-bromopropane': '1_bromopropane.png',
  '1-bromobutane': '1_bromobutane.png',
  'isobutyl bromide': 'isobutyl_bromide.png',
  '2-bromobutane': '2_bromobutane.png',
  '2-bromopropane': '2_bromopropane.png',
  '2-chlorobutane': '2_chlorobutane.png',
  'isopropyl chloride': 'isopropyl_chloride.png',
  'tert-butyl chloride': 'tert_butyl_chloride.png',
  'tert-butyl bromide': 'tert_butyl_bromide.png',
  'methanol': 'methanol.png',
  'ethanol': 'ethanol.png',
  'isobutyl alcohol': 'isobutyl_alcohol.png',
  'sec-butanol': '2_butanol.png',
  'tert-butanol': 'tert_butanol.png',
  'ethyl acetate': 'ethyl_acetate.png',
  'propionic acid': 'propionic_acid.png',
  'acetic acid': 'acetic_acid.png',
  'acetonitrile': 'acetonitrile.png',
  '2-bromopentane': '2_bromopentane.png',
  'diethylamine': 'diethylamine.png',
  'ethylamine': 'ethylamine.png',
  'trimethylamine': 'trimethylamine.png',
  'triethylamine': 'triethylamine.png',
  'tert-butyric acid': 'tert_butyric_acid.png',
  'benzyl chloride': 'benzyl_chloride.png',
  'chloromethylcyclohexane': 'chloromethylcyclohexane.png'
  ,
  // Additional structures used in the bond‑line quiz
  '1-chlorobutane': '1_chlorobutane.png',
  '3_methyl_2_butanol': '3_methyl_2_butanol.png',
  'ethanol': 'ethanol.png'
};

// Array of 20 practice questions.  Each question includes the condensed
// formula in the text, four answer options with an associated image
// key and a boolean indicating the correct choice, and a simple
// explanation.  At the end of each explanation a call to the
// community is appended automatically.
const questions = [
  {
    text: 'Which bond‑line structure corresponds to propane (CH₃CH₂CH₃)?',
    options: [
      { label: 'Propane', imageKey: 'propane', correct: true },
      { label: 'Butane', imageKey: 'butane', correct: false },
      { label: 'Isobutane', imageKey: 'isobutane', correct: false },
      { label: 'Ethanol', imageKey: 'ethanol', correct: false },
    ],
    explanation: 'Propane is a straight chain of three carbon atoms.  The bond‑line drawing looks like two connected line segments.  Butane has four carbons and is longer, while isobutane is branched.  Ethanol contains an oxygen atom.  Therefore the correct answer is the simple three‑carbon chain.'
  },
  {
    text: 'Which bond‑line structure corresponds to butane (CH₃CH₂CH₂CH₃)?',
    options: [
      { label: 'Butane', imageKey: 'butane', correct: true },
      { label: 'Propane', imageKey: 'propane', correct: false },
      { label: 'Isobutane', imageKey: 'isobutane', correct: false },
      { label: 'Pentane', imageKey: 'pentane', correct: false },
    ],
    explanation: 'Butane consists of four carbon atoms connected in a straight chain.  Its bond‑line drawing has three line segments in a row.  Propane has only three carbons, isobutane is branched, and pentane has five carbons.  Thus the correct structure is the four‑carbon chain.'
  },
  {
    text: 'Which bond‑line structure represents isobutane (2‑methylpropane)?',
    options: [
      { label: 'Isobutane', imageKey: 'isobutane', correct: true },
      { label: 'Butane', imageKey: 'butane', correct: false },
      { label: 'Neopentane', imageKey: 'neopentane', correct: false },
      { label: '2‑methylbutane', imageKey: '2-methylbutane', correct: false },
    ],
    explanation: 'Isobutane has a total of four carbons with one carbon branching off the middle of a three‑carbon chain.  The bond‑line drawing shows a “T” shape.  Neopentane has a central carbon with four branches, and 2‑methylbutane has a five‑carbon chain with a branch.  Therefore the branched four‑carbon structure corresponds to isobutane.'
  },
  {
    text: 'Which bond‑line structure represents neopentane ((CH₃)₄C)?',
    options: [
      { label: 'Neopentane', imageKey: 'neopentane', correct: true },
      { label: 'Isopentane (2‑methylbutane)', imageKey: '2-methylbutane', correct: false },
      { label: '3‑methylpentane', imageKey: '3-methylpentane', correct: false },
      { label: '2,3‑dimethylbutane', imageKey: '2,3-dimethylbutane', correct: false },
    ],
    explanation: 'Neopentane has a central carbon attached to four methyl groups.  In the bond‑line drawing it appears as a “cross” with four equal branches.  Isopentane and 3‑methylpentane have five‑carbon chains, while 2,3‑dimethylbutane has two adjacent branches on a four‑carbon chain.  Hence the cross‑shaped structure is neopentane.'
  },
  {
    text: 'Which bond‑line structure corresponds to 2‑methylbutane (CH₃CH(CH₃)CH₂CH₃)?',
    options: [
      { label: '2‑methylbutane', imageKey: '2-methylbutane', correct: true },
      { label: '3‑methylpentane', imageKey: '3-methylpentane', correct: false },
      { label: 'Neopentane', imageKey: 'neopentane', correct: false },
      { label: 'Pentane', imageKey: 'pentane', correct: false },
    ],
    explanation: '2‑Methylbutane has a five‑carbon skeleton with a branch on the second carbon.  The bond‑line drawing looks like a four‑carbon chain with one short branch near the beginning.  3‑Methylpentane has a branch on the third carbon, neopentane is highly branched with a central carbon, and pentane has no branches.  Thus the correct structure is the branched five‑carbon chain starting early.'
  },
  {
    text: 'Which bond‑line structure represents 3‑methylpentane?',
    options: [
      { label: '3‑methylpentane', imageKey: '3-methylpentane', correct: true },
      { label: '2‑methylpentane', imageKey: '2-methylpentane', correct: false },
      { label: '2,2‑dimethylbutane', imageKey: '2,2-dimethylbutane', correct: false },
      { label: 'Hexane', imageKey: 'cyclohexane', correct: false },
    ],
    explanation: '3‑Methylpentane has a five‑carbon chain with a branch on the third carbon.  Its bond‑line drawing looks like a “zig‑zag” chain with a small branch in the middle.  2‑Methylpentane has the branch closer to the end, 2,2‑dimethylbutane has two branches on the second carbon, and hexane has six carbons and no branches.  Therefore the middle‑branched chain represents 3‑methylpentane.'
  },
  {
    // For this question we provide a Lewis‑style diagram of the condensed
    // structure so students can interpret the bonding without relying on
    // nomenclature.  The img tag refers to a PNG in the repository.
    text: 'Which bond‑line structure corresponds to the following structure?<br><img src="2_3_dimethylbutane_lewis.png" alt="Lewis structure of 2,3‑dimethylbutane" style="max-width:200px; display:block; margin:1em auto 0;">',
    options: [
      { label: '2,3‑dimethylbutane', imageKey: '2,3-dimethylbutane', correct: true },
      { label: '2,2‑dimethylbutane', imageKey: '2,2-dimethylbutane', correct: false },
      { label: '3‑methylpentane', imageKey: '3-methylpentane', correct: false },
      { label: '2,4‑dimethylpentane', imageKey: '2,4-dimethylpentane', correct: false },
    ],
    explanation: '2,3‑Dimethylbutane has a four‑carbon backbone with one branch on the second carbon and another on the third.  The bond‑line drawing shows two small branches on adjacent carbons.  2,2‑Dimethylbutane has both branches on the same carbon, 3‑methylpentane has a five‑carbon backbone, and 2,4‑dimethylpentane has branches on carbons 2 and 4.  Thus the correct answer shows adjacent branches on the four‑carbon chain.'
  },
  {
    text: 'Which bond‑line structure corresponds to tert‑butanol ((CH₃)₃COH)?',
    options: [
      { label: 'tert‑butanol', imageKey: 'tert-butanol', correct: true },
      { label: 'Isobutyl alcohol', imageKey: 'isobutyl alcohol', correct: false },
      { label: 'sec‑Butanol', imageKey: 'sec-butanol', correct: false },
      { label: 'Methanol', imageKey: 'methanol', correct: false },
    ],
    explanation: 'Tert‑Butanol has a central carbon connected to three methyl groups and an OH group.  In the bond‑line drawing, the central carbon appears as a branch point with the OH attached.  Isobutyl and sec‑butanol have the OH group on different carbons, and methanol has only one carbon.  Therefore the highly branched structure with the hydroxyl group on the central carbon is tert‑butanol.'
  },
  {
    text: 'Which bond‑line structure represents cyclohexane?',
    options: [
      { label: 'Cyclohexane', imageKey: 'cyclohexane', correct: true },
      { label: 'Cyclohexene', imageKey: 'cyclohexene', correct: false },
      { label: 'Cyclohexanol', imageKey: 'cyclohexanol', correct: false },
      { label: 'Benzene', imageKey: 'benzene', correct: false },
    ],
    explanation: 'Cyclohexane is a six‑membered ring with all single bonds.  In bond‑line form it is drawn as a hexagon.  Cyclohexene has a double bond in the ring, cyclohexanol has an OH substituent, and benzene has alternating double bonds.  Thus the plain hexagon corresponds to cyclohexane.'
  },
  {
    text: 'Which bond‑line structure corresponds to cyclohexanol?',
    options: [
      { label: 'Cyclohexanol', imageKey: 'cyclohexanol', correct: true },
      { label: 'Cyclohexane', imageKey: 'cyclohexane', correct: false },
      { label: 'Cyclohexene', imageKey: 'cyclohexene', correct: false },
      { label: 'Cyclopentanol', imageKey: 'cyclopentanol', correct: false },
    ],
    explanation: 'Cyclohexanol is a six‑membered ring with an OH group attached.  The bond‑line drawing shows a hexagon with a short line indicating the hydroxyl group.  Cyclohexane lacks any substituent, cyclohexene has a double bond, and cyclopentanol has a five‑membered ring.  Therefore the six‑membered ring with an OH group is cyclohexanol.'
  },
  {
    text: 'Which bond‑line structure corresponds to 2‑bromopropane (isopropyl bromide)?',
    options: [
      { label: '2‑bromopropane', imageKey: '2-bromopropane', correct: true },
      { label: '1‑bromopropane', imageKey: '1-bromopropane', correct: false },
      { label: '2‑bromobutane', imageKey: '2-bromobutane', correct: false },
      { label: 'Isopropyl chloride', imageKey: 'isopropyl chloride', correct: false },
    ],
    explanation: '2‑Bromopropane, also known as isopropyl bromide, has three carbons with the bromine attached to the middle carbon.  The bond‑line drawing shows a three‑carbon chain with a Br on the central carbon.  1‑Bromopropane has the Br on the end carbon, 2‑bromobutane has four carbons, and isopropyl chloride has a chlorine instead of a bromine.  Therefore the structure with Br on the middle of a three‑carbon chain is correct.'
  },
  {
    text: 'Which bond‑line structure corresponds to 2‑chloropropane (isopropyl chloride)?',
    options: [
      { label: '2‑chloropropane', imageKey: 'isopropyl chloride', correct: true },
      { label: '2‑bromopropane', imageKey: '2-bromopropane', correct: false },
      { label: '1‑chlorobutane', imageKey: '1-chlorobutane', correct: false },
      { label: '2‑chlorobutane', imageKey: '2-chlorobutane', correct: false },
    ],
    explanation: '2‑Chloropropane has a three‑carbon chain with a chlorine atom on the middle carbon.  The bond‑line drawing shows a three‑carbon chain with a Cl substituent on the central carbon.  2‑Bromopropane has Br instead of Cl, 1‑chlorobutane has four carbons, and 2‑chlorobutane has four carbons with the chloride on the second carbon.  Thus the correct structure is isopropyl chloride.'
  },
  {
    text: 'Which bond‑line structure corresponds to 1‑bromobutane?',
    options: [
      { label: '1‑bromobutane', imageKey: '1-bromobutane', correct: true },
      { label: '1‑bromopropane', imageKey: '1-bromopropane', correct: false },
      { label: '2‑bromobutane', imageKey: '2-bromobutane', correct: false },
      { label: 'Isobutyl bromide', imageKey: 'isobutyl bromide', correct: false },
    ],
    explanation: '1‑Bromobutane has four carbon atoms in a straight chain with the bromine on the terminal carbon.  The bond‑line drawing shows three line segments with a Br on the end.  1‑Bromopropane has only three carbons, 2‑bromobutane has the Br on the second carbon, and isobutyl bromide has a branched chain.  Therefore the straight four‑carbon chain with a terminal Br is the correct structure.'
  },
  {
    text: 'Which bond‑line structure corresponds to ethyl acetate (CH₃COOCH₂CH₃)?',
    options: [
      { label: 'Ethyl acetate', imageKey: 'ethyl acetate', correct: true },
      { label: 'Propionic acid', imageKey: 'propionic acid', correct: false },
      { label: 'Acetic acid', imageKey: 'acetic acid', correct: false },
      { label: 'Ethanol', imageKey: 'ethanol', correct: false },
    ],
    explanation: 'Ethyl acetate is an ester with two carbon chains connected through an oxygen.  The bond‑line drawing shows a carbonyl group attached to an oxygen that is bonded to an ethyl group.  Propionic acid has a carboxylic acid group, acetic acid has only two carbons and a carboxyl group, and ethanol is a simple alcohol.  Thus the structure with a carbonyl and an ethoxy group is ethyl acetate.'
  },
  {
    text: 'Which bond‑line structure corresponds to 2‑bromobutane?',
    options: [
      { label: '2‑bromobutane', imageKey: '2-bromobutane', correct: true },
      { label: '2‑bromopropane', imageKey: '2-bromopropane', correct: false },
      { label: '1‑bromobutane', imageKey: '1-bromobutane', correct: false },
      { label: 'tert‑Butyl bromide', imageKey: 'tert-butyl bromide', correct: false },
    ],
    explanation: '2‑Bromobutane has a four‑carbon chain with the bromine on the second carbon.  The bond‑line drawing shows a four‑carbon zig‑zag with a Br on the second carbon from the end.  2‑Bromopropane has only three carbons, 1‑bromobutane places the Br on the terminal carbon, and tert‑butyl bromide is highly branched with the Br on a quaternary carbon.  Therefore the correct structure is the four‑carbon chain with a Br on the second carbon.'
  },
  {
    text: 'Which bond‑line structure corresponds to propionic acid (CH₃CH₂CO₂H)?',
    options: [
      { label: 'Propionic acid', imageKey: 'propionic acid', correct: true },
      { label: 'Acetic acid', imageKey: 'acetic acid', correct: false },
      { label: 'Ethyl acetate', imageKey: 'ethyl acetate', correct: false },
      { label: 'tert‑Butyric acid', imageKey: 'tert-butyric acid', correct: false },
    ],
    explanation: 'Propionic acid has a three‑carbon chain ending in a carboxylic acid group.  Its bond‑line drawing shows two carbons followed by a carbonyl attached to an OH.  Acetic acid has only two carbons, ethyl acetate is an ester, and tert‑butyric acid has a branched carbon skeleton.  Therefore the three‑carbon acid is propionic acid.'
  },
  {
    text: 'Which bond‑line structure corresponds to acetonitrile (CH₃CN)?',
    options: [
      { label: 'Acetonitrile', imageKey: 'acetonitrile', correct: true },
      { label: 'Acetic acid', imageKey: 'acetic acid', correct: false },
      { label: 'Acetone', imageKey: 'propane', correct: false },
      { label: 'Propionitrile', imageKey: 'propyl chloride', correct: false },
    ],
    explanation: 'Acetonitrile consists of a methyl group bonded to a nitrile (–C≡N).  In the bond‑line drawing it appears as a one‑carbon chain ending in a triple bond to nitrogen.  Acetic acid has a carboxylic acid group, acetone has a carbonyl flanked by two carbons, and propionitrile has an extra carbon in the chain.  Thus the single‑carbon nitrile structure corresponds to acetonitrile.'
  },
  {
    text: 'Which bond‑line structure corresponds to 3‑methyl‑2‑butanol (CH₃CH(CH₃)CH(OH)CH₃)?',
    options: [
      { label: '3‑methyl‑2‑butanol', imageKey: '3_methyl_2_butanol', correct: true },
      { label: '2‑butanol', imageKey: 'sec-butanol', correct: false },
      { label: 'Isobutyl alcohol', imageKey: 'isobutyl alcohol', correct: false },
      { label: 'tert‑Butanol', imageKey: 'tert-butanol', correct: false },
    ],
    explanation: '3‑Methyl‑2‑butanol has a four‑carbon backbone with a methyl branch on the third carbon and an OH on the second carbon.  The bond‑line drawing shows this branching and the hydroxyl group on adjacent carbons.  2‑Butanol has no branch, isobutyl alcohol has the OH on the end carbon, and tert‑butanol has the OH on a quaternary carbon.  Thus the middle‑branched structure with an OH on the second carbon is correct.'
  },
  {
    text: 'Which bond‑line structure corresponds to triethylamine ((CH₃CH₂)₃N)?',
    options: [
      { label: 'Triethylamine', imageKey: 'triethylamine', correct: true },
      { label: 'Diethylamine', imageKey: 'diethylamine', correct: false },
      { label: 'Ethylamine', imageKey: 'ethylamine', correct: false },
      { label: 'Trimethylamine', imageKey: 'trimethylamine', correct: false },
    ],
    explanation: 'Triethylamine has a nitrogen atom bonded to three ethyl groups.  Its bond‑line drawing shows the nitrogen at the center with three two‑carbon arms.  Diethylamine has only two ethyl groups, ethylamine has one, and trimethylamine has three one‑carbon groups.  Therefore the nitrogen with three two‑carbon chains is triethylamine.'
  },
  {
    text: 'Which bond‑line structure corresponds to chloromethylcyclohexane?',
    options: [
      { label: 'Chloromethylcyclohexane', imageKey: 'chloromethylcyclohexane', correct: true },
      { label: 'Benzyl chloride', imageKey: 'benzyl chloride', correct: false },
      { label: 'Cyclohexane', imageKey: 'cyclohexane', correct: false },
      { label: 'Cyclohexanol', imageKey: 'cyclohexanol', correct: false },
    ],
    explanation: 'Chloromethylcyclohexane is a cyclohexane ring with a CH₂Cl substituent.  The bond‑line drawing shows a six‑membered ring with a small arm ending in a chlorine.  Benzyl chloride has a benzene ring rather than a cyclohexane, cyclohexane lacks a substituent, and cyclohexanol has an OH group.  Thus the ring with a CH₂Cl arm is chloromethylcyclohexane.'
  }
];

let currentQuestionIndex = 0;
let score = 0;
let quizContainer;
let questionEl;
let optionsEl;
let feedbackEl;
let nextBtn;
let progressEl;

// Initialize the quiz by grabbing DOM elements and loading the first question.
function initQuiz() {
  quizContainer = document.querySelector('.quiz-container');
  questionEl = document.getElementById('question');
  optionsEl = document.getElementById('options');
  feedbackEl = document.getElementById('feedback');
  nextBtn = document.getElementById('next-btn');
  progressEl = document.getElementById('progress');
  loadQuestion();
}

// Load the current question and render its text, progress indicator and options.
function loadQuestion() {
  const q = questions[currentQuestionIndex];
  // Use innerHTML so question text can contain images (e.g., Lewis diagrams)
  questionEl.innerHTML = q.text;
  progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  optionsEl.innerHTML = '';
  feedbackEl.innerHTML = '';
  nextBtn.style.display = 'none';
  // Shuffle options so the correct answer is not always first
  const shuffled = q.options
    .map(opt => Object.assign({}, opt))
    .sort(() => Math.random() - 0.5);
  // Render each answer choice as a clickable div containing only the image.  Labels are omitted
  // to prevent students from identifying the correct answer by name.  The correct flag is stored
  // in a data attribute for later highlighting.
  shuffled.forEach((opt) => {
    const optDiv = document.createElement('div');
    optDiv.className = 'option';
    optDiv.dataset.correct = opt.correct;
    optDiv.innerHTML = `<img src="${imageData[opt.imageKey]}" alt="">`;
    optDiv.addEventListener('click', () => selectOption(opt));
    optionsEl.appendChild(optDiv);
  });
}

// Handle the user selecting an answer.  Display feedback and, on the last
// question, display the final report.  A call to the community is appended
// to each explanation.
function selectOption(opt) {
  // Prevent multiple selections
  if (nextBtn.style.display === 'block') return;
  const q = questions[currentQuestionIndex];
  if (opt.correct) {
    score++;
  }
  // Build feedback message with explanation and call to community.  Show
  // the feedback area by toggling its display property.
  const callToCommunity = '  If you have any questions about this problem, please post them in the Community tab of our Skool community at <a href="https://www.skool.com/premedportal" target="_blank">premedportal</a>.';
  feedbackEl.innerHTML = q.explanation + callToCommunity;
  feedbackEl.style.display = 'block';
  // Highlight selected and non‑selected options.  Use the data‑correct attribute
  // assigned in loadQuestion() rather than matching on label text.  Disable
  // further clicks by adding the disabled class to all option elements.
  Array.from(optionsEl.children).forEach((child) => {
    child.classList.add('disabled');
    if (child.dataset.correct === 'true') {
      child.classList.add('correct');
    } else {
      child.classList.add('incorrect');
    }
  });
  // Show next button or final report
  if (currentQuestionIndex < questions.length - 1) {
    nextBtn.style.display = 'block';
    nextBtn.textContent = 'Next Question';
  } else {
    nextBtn.style.display = 'block';
    nextBtn.textContent = 'View Results';
  }
}

// Advance to the next question or show the summary report at the end.
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showSummary();
  }
}

// Display a final report with the student’s score.
function showSummary() {
  quizContainer.innerHTML = '';
  const summary = document.createElement('div');
  summary.className = 'summary';
  const percent = Math.round((score / questions.length) * 100);
  summary.innerHTML = `<h2>Quiz Complete!</h2><p>You answered ${score} out of ${questions.length} questions correctly (${percent}%).</p>`;
  summary.innerHTML += '<p>Great work!  Keep practicing and refer to the lessons if you need a refresher.</p>';
  summary.innerHTML += '<p>If you have any lingering questions, please post them in the Community tab of our Skool community at <a href="https://www.skool.com/premedportal" target="_blank">premedportal</a>.</p>';
  quizContainer.appendChild(summary);
}

// Hook up the Next button to move through the quiz.
document.addEventListener('DOMContentLoaded', () => {
  nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', nextQuestion);
  initQuiz();
});