// JavaScript for 20‑question bond‑line structures quiz
// This script builds on earlier quiz logic to display questions one at a time,
// randomize answer order, show explanations, and present a final score report.

// Mapping of internal image keys to the relative file names in the `images` directory.
const imageData = {
  // Cropped question images from problem 2.4
  // For the first three questions (2.4), use custom RDKit depictions rather than the
  // cropped textbook images. These depictions include all atoms and
  // hydrogens without any labels (a), (b), (c) visible on the page.
  'crop_a': 'question_a_rdkit.png',
  'crop_b': 'question_b_rdkit.png',
  'crop_c': 'question_c_rdkit.png',
  // Bond‑line structure images (correct answers and decoys)
  'crop_a_bondline': 'crop_a_bondline.png',
  'crop_b_bondline': 'crop_b_bondline.png',
  'crop_c_bondline': 'crop_c_bondline.png',
  'question_a': 'question_a.png',
  'question_b': 'question_b.png',
  'question_c': 'question_c.png',
  'question_d': 'question_d.png',
  'question_e': 'question_e.png',
  'question_f': 'question_f.png',
  'question_g': 'question_g.png',
  'question_h': 'question_h.png',
  'question_i': 'question_i.png',
  'question_j': 'question_j.png',
  'question_k': 'question_k.png',
  'question_l': 'question_l.png',
  'question_m': 'question_m.png',
  'question_n': 'question_n.png',
  'question_o': 'question_o.png',
  'question_p': 'question_p.png',
  'question_q': 'question_q.png'
};

// Helper function to convert plain text formulas into HTML with subscripts.
function formatFormula(formula) {
  // replace numbers with subscript digits
  return formula.replace(/([0-9]+)/g, '<sub>$1</sub>');
}

// Define all questions. Each question has a text (HTML string), a set of
// options referencing image keys, a correct answer flag, and an explanation.
const questions = [
  {
    // 2.4 (a) – display the cropped Lewis structure and ask for its bond‑line representation
    text: 'Look at the Lewis structure shown below. Which bond‑line structure corresponds to this molecule? <br><img src="' + imageData['crop_a'] + '" alt="structure" style="height:150px; display:block; margin:0 auto;">',
    options: [
      { imageKey: 'crop_a_bondline', correct: true },
      { imageKey: 'question_b', correct: false },
      { imageKey: 'question_e', correct: false },
      { imageKey: 'question_p', correct: false }
    ],
    explanation: 'This molecule has a four‑carbon backbone with several methyl branches attached. The correct bond‑line drawing shows a long carbon chain with branches matching the positions of the CH<sub>3</sub> groups in the Lewis structure. The other choices represent molecules with either fewer carbons or different branching patterns.'
  },
  {
    // 2.4 (b)
    text: 'Look at the Lewis structure shown below. Which bond‑line structure corresponds to this molecule? <br><img src="' + imageData['crop_b'] + '" alt="structure" style="height:150px; display:block; margin:0 auto;">',
    options: [
      { imageKey: 'crop_b_bondline', correct: true },
      { imageKey: 'question_a', correct: false },
      { imageKey: 'question_g', correct: false },
      { imageKey: 'question_o', correct: false }
    ],
    explanation: 'The Lewis structure contains a carbonyl group (C=O) attached to a four‑carbon chain. The correct bond‑line drawing shows this carbonyl (indicated by the kink) within a straight chain. The decoys either place the carbonyl in a different position or depict different functional groups.'
  },
  {
    // 2.4 (c)
    text: 'Look at the Lewis structure shown below. Which bond‑line structure corresponds to this molecule? <br><img src="' + imageData['crop_c'] + '" alt="structure" style="height:150px; display:block; margin:0 auto;">',
    options: [
      { imageKey: 'crop_c_bondline', correct: true },
      { imageKey: 'question_d', correct: false },
      { imageKey: 'question_h', correct: false },
      { imageKey: 'question_q', correct: false }
    ],
    explanation: 'This compound has three carbon atoms each bearing an –OH group. The correct bond‑line drawing shows three connected carbons with no bends and implicitly indicates the three hydroxyl groups. The incorrect answers feature different chain lengths or only one alcohol group.'
  },
  {
    // 2.5 (a)
    text: 'Which bond‑line structure corresponds to the formula ' + formatFormula('CH3') + '<sub>3</sub>C' + formatFormula('C') + '(CH<sub>3</sub>)<sub>3</sub>?',
    options: [
      { imageKey: 'question_a', correct: true },
      { imageKey: 'question_b', correct: false },
      { imageKey: 'question_c', correct: false },
      { imageKey: 'question_d', correct: false }
    ],
    explanation: 'The notation (CH<sub>3</sub>)<sub>3</sub>C indicates a central carbon with three methyl groups attached. The next carbon is also connected to three methyl groups. The correct bond‑line drawing shows a compact molecule with two quaternary carbons. The other structures have longer chains or fewer substituents.'
  },
  {
    // 2.5 (b)
    text: 'Which bond‑line structure corresponds to the formula ' + formatFormula('CH3CH2CH(CH3)2') + '?',
    options: [
      { imageKey: 'question_b', correct: true },
      { imageKey: 'question_e', correct: false },
      { imageKey: 'question_i', correct: false },
      { imageKey: 'question_p', correct: false }
    ],
    explanation: 'CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)<sub>2</sub> describes a five‑carbon chain (pentane) with a single methyl branch on the middle carbon. The correct bond‑line answer shows a four‑carbon chain with one branch. The other options depict different chain lengths or branching patterns.'
  },
  {
    // 2.5 (c)
    text: 'Which bond‑line structure corresponds to the formula (CH<sub>3</sub>CH<sub>2</sub>)<sub>3</sub>COH?',
    options: [
      { imageKey: 'question_c', correct: true },
      { imageKey: 'question_j', correct: false },
      { imageKey: 'question_o', correct: false },
      { imageKey: 'question_h', correct: false }
    ],
    explanation: 'The notation (CH<sub>3</sub>CH<sub>2</sub>)<sub>3</sub>C means a carbon attached to three ethyl groups. Adding an –OH makes this a tertiary alcohol. The correct bond‑line drawing shows three two‑carbon branches attached to a central carbon with an –OH group. The decoys either lack the alcohol or have different branching.'
  },
  {
    // 2.5 (d)
    text: 'Which bond‑line structure corresponds to the formula (CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>OH?',
    options: [
      { imageKey: 'question_d', correct: true },
      { imageKey: 'question_f', correct: false },
      { imageKey: 'question_q', correct: false },
      { imageKey: 'question_o', correct: false }
    ],
    explanation: 'This formula describes a four‑carbon chain with one extra methyl branch on the second carbon and an –OH group at the end. The correct bond‑line drawing shows a three‑carbon chain with one branch and an alcohol group. The other structures either place the branch in a different position or omit the alcohol.'
  },
  {
    // 2.5 (e)
    text: 'Which bond‑line structure corresponds to the formula CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OCH<sub>3</sub>?',
    options: [
      { imageKey: 'question_e', correct: true },
      { imageKey: 'question_b', correct: false },
      { imageKey: 'question_h', correct: false },
      { imageKey: 'question_m', correct: false }
    ],
    explanation: 'This molecule is an ether with a three‑carbon chain on one side of oxygen and a single carbon on the other. The correct bond‑line drawing shows an oxygen atom connecting a propyl group to a methyl group. Decoys may have the oxygen in different positions or a different chain length.'
  },
  {
    // 2.5 (f)
    text: 'Which bond‑line structure corresponds to the formula (CH<sub>3</sub>CH<sub>2</sub>)<sub>2</sub>CCH<sub>2</sub>?',
    options: [
      { imageKey: 'question_f', correct: true },
      { imageKey: 'question_l', correct: false },
      { imageKey: 'question_c', correct: false },
      { imageKey: 'question_p', correct: false }
    ],
    explanation: 'Here a carbon is attached to two ethyl groups and one additional carbon. The correct bond‑line drawing shows a central carbon bonded to two two‑carbon chains plus one more carbon. The decoys depict alcohols or different branching patterns.'
  },
  {
    // 2.5 (g)
    text: 'Which bond‑line structure corresponds to the formula H<sub>2</sub>C=CHOCH<sub>2</sub>CH(CH<sub>3</sub>)<sub>2</sub>?',
    options: [
      { imageKey: 'question_g', correct: true },
      { imageKey: 'question_i', correct: false },
      { imageKey: 'question_j', correct: false },
      { imageKey: 'question_o', correct: false }
    ],
    explanation: 'This compound contains a double bond (C=C) and an ether linkage followed by a branched propyl group. The correct bond‑line drawing shows a double bond at the start and an oxygen connecting to a three‑carbon chain with a methyl branch. The other answers omit the double bond or misplace the branch.'
  },
  {
    // 2.5 (h)
    text: 'Which bond‑line structure corresponds to the formula CH<sub>3</sub>(CH<sub>2</sub>)<sub>6</sub>OH?',
    options: [
      { imageKey: 'question_h', correct: true },
      { imageKey: 'question_k', correct: false },
      { imageKey: 'question_p', correct: false },
      { imageKey: 'question_q', correct: false }
    ],
    explanation: 'This is a seven‑carbon alcohol. The correct bond‑line drawing shows a straight chain with seven carbons terminating in an OH group. The decoys either have different functional groups or different chain lengths.'
  },
  {
    // 2.5 (i)
    text: 'Which bond‑line structure corresponds to the formula H<sub>2</sub>CCHCH<sub>2</sub>OCH<sub>2</sub>CH(CH<sub>3</sub>)<sub>2</sub>?',
    options: [
      { imageKey: 'question_i', correct: true },
      { imageKey: 'question_e', correct: false },
      { imageKey: 'question_g', correct: false },
      { imageKey: 'question_o', correct: false }
    ],
    explanation: 'Similar to the previous ether, this molecule has a vinyl group (CH<sub>2</sub>=CH–) attached to an oxygen and then to a branched propyl chain. The correct bond‑line drawing begins with a double bond and shows the ether and branch appropriately placed. Incorrect answers omit the double bond or change the branch.'
  },
  {
    // 2.5 (j)
    text: 'Which bond‑line structure corresponds to the formula CH<sub>3</sub>CH<sub>2</sub>C(CH<sub>3</sub>)<sub>2</sub>CH(CH<sub>2</sub>CH<sub>3</sub>)<sub>2</sub>?',
    options: [
      { imageKey: 'question_j', correct: true },
      { imageKey: 'question_a', correct: false },
      { imageKey: 'question_b', correct: false },
      { imageKey: 'question_m', correct: false }
    ],
    explanation: 'In this molecule a central carbon carries two methyl groups and two ethyl groups while attached to a propyl chain. The correct bond‑line drawing shows a highly branched structure with a central quaternary carbon. Other answers either have fewer branches or different chain lengths.'
  },
  {
    // 2.5 (k)
    text: 'Which bond‑line structure corresponds to the formula CH(CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub>)<sub>3</sub>?',
    options: [
      { imageKey: 'question_k', correct: true },
      { imageKey: 'question_c', correct: false },
      { imageKey: 'question_h', correct: false },
      { imageKey: 'question_n', correct: false }
    ],
    explanation: 'This formula describes a carbon atom attached to three identical substituents, each consisting of a two‑carbon chain terminating in an amine group (–NH<sub>2</sub>). The correct bond‑line drawing shows three short chains radiating from a central carbon, each ending in an amino group. Decoys include esters or alcohols instead of amines.'
  },
  {
    // 2.5 (l)
    text: 'Which bond‑line structure corresponds to the formula (CH<sub>3</sub>)<sub>2</sub>CCHCH<sub>2</sub>CH<sub>3</sub>?',
    options: [
      { imageKey: 'question_l', correct: true },
      { imageKey: 'question_b', correct: false },
      { imageKey: 'question_j', correct: false },
      { imageKey: 'question_p', correct: false }
    ],
    explanation: 'This molecule is a five‑carbon chain with two methyl substituents on the second carbon and a double bond between the third and fourth carbons. The correct bond‑line drawing shows the double bond and the branching pattern. The decoys lack the double bond or branch differently.'
  },
  {
    // 2.5 (m)
    text: 'Which bond‑line structure corresponds to the formula (CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>CH(CH<sub>3</sub>)CO<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>?',
    options: [
      { imageKey: 'question_m', correct: true },
      { imageKey: 'question_d', correct: false },
      { imageKey: 'question_f', correct: false },
      { imageKey: 'question_q', correct: false }
    ],
    explanation: 'This ester has an isopropyl group, a branched chain on the other side of the carbonyl, and an ethyl group attached to the oxygen. The correct bond‑line drawing shows the ester functional group (C=O followed by O–C) with appropriate branching. Decoys misplace the ester or change the branch.'
  },
  {
    // 2.5 (n)
    text: 'Which bond‑line structure corresponds to the formula CH<sub>3</sub>CBr(CH<sub>2</sub>OH)CH<sub>2</sub>CO<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>?',
    options: [
      { imageKey: 'question_n', correct: true },
      { imageKey: 'question_k', correct: false },
      { imageKey: 'question_l', correct: false },
      { imageKey: 'question_g', correct: false }
    ],
    explanation: 'This molecule contains a brominated carbon next to a hydroxyl‑bearing carbon and an ester group further down the chain. The correct bond‑line drawing shows a bromine on the second carbon, an alcohol on the third carbon, and an ester on the fourth carbon. Other answers are missing one of these functional groups.'
  },
  {
    // Extra (o)
    text: 'Which bond‑line structure corresponds to the formula CH<sub>3</sub>CH<sub>2</sub>CH<sub>3</sub> (propane)?',
    options: [
      { imageKey: 'question_o', correct: true },
      { imageKey: 'question_p', correct: false },
      { imageKey: 'question_q', correct: false },
      { imageKey: 'question_b', correct: false }
    ],
    explanation: 'Propane has three carbon atoms in a straight chain with no branches. The correct bond‑line drawing is a simple line with two bends. The other options either contain four carbons or show branching.'
  },
  {
    // Extra (p)
    text: 'Which bond‑line structure corresponds to the formula CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub> (butane)?',
    options: [
      { imageKey: 'question_p', correct: true },
      { imageKey: 'question_o', correct: false },
      { imageKey: 'question_q', correct: false },
      { imageKey: 'question_e', correct: false }
    ],
    explanation: 'Butane is a four‑carbon straight chain with no branches or functional groups. The correct bond‑line drawing shows three line segments joined in a zig‑zag. The decoys either have fewer carbons or branches.'
  },
  {
    // Extra (q)
    text: 'Which bond‑line structure corresponds to the formula CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>3</sub> (isobutane)?',
    options: [
      { imageKey: 'question_q', correct: true },
      { imageKey: 'question_p', correct: false },
      { imageKey: 'question_b', correct: false },
      { imageKey: 'question_o', correct: false }
    ],
    explanation: 'Isobutane (2‑methylpropane) has three carbon atoms in the main chain and one methyl branch on the second carbon. The correct bond‑line drawing shows a three‑carbon backbone with one side branch. The other answers show straight chains or different branching patterns.'
  }
];

// State variables
let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const progressEl = document.getElementById('progress');
const feedbackEl = document.getElementById('feedback');

// Shuffle helper (Fisher–Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.innerHTML = q.text;
  // Clone and shuffle options
  const options = q.options.slice();
  shuffle(options);
  optionsEl.innerHTML = '';
  options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.classList.add('option');
    btn.dataset.correct = opt.correct;
    const img = document.createElement('img');
      // Use relative file name directly since images are stored in the repository root
      img.src = imageData[opt.imageKey];
    img.alt = 'option';
    btn.appendChild(img);
    btn.addEventListener('click', () => selectOption(btn, q));
    optionsEl.appendChild(btn);
  });
  progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  feedbackEl.style.display = 'none';
  nextBtn.style.display = 'none';
}

function selectOption(button, q) {
  // Prevent multiple selections
  if (feedbackEl.style.display === 'block') return;
  const correct = button.dataset.correct === 'true';
  // Highlight all options
  Array.from(optionsEl.children).forEach(btn => {
    if (btn.dataset.correct === 'true') {
      btn.style.backgroundColor = '#c8f7c5';
    } else {
      btn.style.backgroundColor = '#f7c5c5';
    }
  });
  if (correct) {
    score++;
  }
  // Show explanation with call to action
  feedbackEl.innerHTML = `<p>${q.explanation} If you have any questions about this problem, please post them in the Community tab of our Skool community at <a href="https://www.skool.com/premedportal" target="_blank">premedportal</a>.</p>`;
  feedbackEl.style.display = 'block';
  nextBtn.style.display = 'block';
}

function showSummary() {
  questionEl.innerHTML = `You answered ${score} out of ${questions.length} questions correctly.`;
  optionsEl.innerHTML = '';
  progressEl.textContent = 'Quiz complete';
  feedbackEl.innerHTML = `<p>Great job! You scored ${score} out of ${questions.length}. If you need clarification on any question, feel free to ask in our Skool community at <a href="https://www.skool.com/premedportal" target="_blank">premedportal</a>.</p>`;
  feedbackEl.style.display = 'block';
  nextBtn.style.display = 'none';
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showSummary();
  }
});

// Initialize quiz
loadQuestion();