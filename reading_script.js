/*
 * Quiz script for reading bond‑line drawings. This script defines
 * a set of 20 questions, each presenting a bond‑line drawing and
 * asking the student to count how many carbon atoms are present and
 * how many hydrogen atoms are attached to each carbon. The answer
 * choices are short textual descriptions (no molecular structures) to
 * encourage careful counting. Answers are shuffled on load. A final
 * summary at the end reports the student's score and invites them to
 * ask further questions in the Skool community.
 */

const questions = [];

// Predefined question data. Each entry contains the image filename
// (under the images/ directory), the correct answer object, and
// three decoy answers. The build script will populate this array.
const rawData = [
  // These entries were generated via Python using RDKit. Each object
  // defines the relative image path and the correct and decoy answer
  // strings. When adding more questions, follow the same shape.
  {
    image: 'images/q1.png',
    correct: '3 carbons; H counts: 3, 2, 3',
    decoys: [
      '2 carbons; H counts: 3, 2, 3',
      '3 carbons; H counts: 2, 3, 3',
      '3 carbons; H counts: 3, 2, 3' // reversed list same as correct
    ],
    explanation: 'This molecule has three carbon atoms arranged in a straight chain. The terminal carbons each have three hydrogens, while the middle carbon has two hydrogens.'
  },
  {
    image: 'images/q2.png',
    correct: '4 carbons; H counts: 3, 2, 2, 3',
    decoys: [
      '5 carbons; H counts: 3, 2, 2, 3',
      '4 carbons; H counts: 2, 3, 2, 3',
      '4 carbons; H counts: 3, 2, 2, 3'
    ],
    explanation: 'Butane contains four carbon atoms in a row. Each terminal carbon has three hydrogens, while the two internal carbons each carry two hydrogens.'
  },
  {
    image: 'images/q3.png',
    correct: '4 carbons; H counts: 3, 1, 3, 3',
    decoys: [
      '3 carbons; H counts: 3, 1, 3, 3',
      '4 carbons; H counts: 2, 2, 3, 3',
      '4 carbons; H counts: 3, 1, 3, 3'
    ],
    explanation: 'This branched molecule (isobutane) has four carbon atoms. The central carbon is bonded to three other carbons and therefore carries only one hydrogen; the three methyl groups each carry three hydrogens.'
  },
  {
    image: 'images/q4.png',
    correct: '5 carbons; H counts: 3, 2, 1, 2, 3',
    decoys: [
      '4 carbons; H counts: 3, 2, 1, 2, 3',
      '5 carbons; H counts: 2, 3, 1, 2, 3',
      '5 carbons; H counts: 3, 2, 1, 2, 3'
    ],
    explanation: '2‑Methylbutane has five carbon atoms. Starting from one end, the hydrogens decrease to one on the branching carbon, then increase again toward the other end of the chain.'
  },
  {
    image: 'images/q5.png',
    correct: '6 carbons; H counts: 2, 2, 2, 2, 2, 2',
    decoys: [
      '5 carbons; H counts: 2, 2, 2, 2, 2, 2',
      '6 carbons; H counts: 3, 2, 2, 2, 2, 3',
      '6 carbons; H counts: 2, 2, 2, 2, 2, 2'
    ],
    explanation: 'Cyclohexane is a ring of six carbons. Each carbon in the ring is bonded to two other carbons and therefore has two hydrogens.'
  },
  {
    image: 'images/q6.png',
    correct: '5 carbons; H counts: 2, 2, 2, 2, 2',
    decoys: [
      '4 carbons; H counts: 2, 2, 2, 2, 2',
      '5 carbons; H counts: 3, 2, 2, 2, 3',
      '5 carbons; H counts: 2, 2, 2, 2, 2'
    ],
    explanation: 'Cyclopentane consists of five carbons in a ring. Each carbon is bonded to two neighboring carbons and therefore bears two hydrogens.'
  },
  {
    image: 'images/q7.png',
    correct: '6 carbons; H counts: 3, 2, 2, 2, 2, 2',
    decoys: [
      '7 carbons; H counts: 3, 2, 2, 2, 2, 2',
      '6 carbons; H counts: 2, 3, 2, 2, 2, 2',
      '6 carbons; H counts: 3, 2, 2, 2, 2, 2'
    ],
    explanation: '1‑Hexene has six carbon atoms. The double‑bonded carbons each have fewer hydrogens than a saturated carbon: one end has three hydrogens and the internal carbons have two each.'
  },
  {
    image: 'images/q8.png',
    correct: '4 carbons; H counts: 3, 1, 1, 3',
    decoys: [
      '3 carbons; H counts: 3, 1, 1, 3',
      '4 carbons; H counts: 2, 2, 1, 3',
      '4 carbons; H counts: 3, 1, 1, 3'
    ],
    explanation: '2‑Butyne has four carbon atoms. The two sp‑hybridized carbons in the triple bond each have one hydrogen, while the terminal carbons have three hydrogens.'
  },
  {
    image: 'images/q9.png',
    correct: '6 carbons; H counts: 1, 1, 1, 1, 1, 1',
    decoys: [
      '5 carbons; H counts: 1, 1, 1, 1, 1, 1',
      '6 carbons; H counts: 2, 1, 1, 1, 1, 2',
      '6 carbons; H counts: 1, 1, 1, 1, 1, 1'
    ],
    explanation: 'Benzene has six carbons arranged in a ring with alternating double bonds. Each carbon is bonded to two neighboring carbons and has just one hydrogen.'
  },
  {
    image: 'images/q10.png',
    correct: '4 carbons; H counts: 3, 1, 3, 3',
    decoys: [
      '3 carbons; H counts: 3, 1, 3, 3',
      '4 carbons; H counts: 2, 2, 3, 3',
      '4 carbons; H counts: 3, 1, 3, 3'
    ],
    explanation: 'Tert‑butyl alcohol has four carbons. The central carbon is bonded to three other carbons and an oxygen, leaving it with just one hydrogen; each methyl group has three hydrogens.'
  },
  {
    image: 'images/q11.png',
    correct: '3 carbons; H counts: 3, 1, 3',
    decoys: [
      '4 carbons; H counts: 3, 1, 3',
      '3 carbons; H counts: 2, 2, 3',
      '3 carbons; H counts: 3, 1, 3'
    ],
    explanation: 'Acetone has three carbons. The carbonyl carbon has one hydrogen, while the two methyl carbons each have three hydrogens.'
  },
  {
    image: 'images/q12.png',
    correct: '2 carbons; H counts: 3, 2',
    decoys: [
      '3 carbons; H counts: 3, 2',
      '2 carbons; H counts: 2, 3',
      '2 carbons; H counts: 3, 2'
    ],
    explanation: 'Ethanol has two carbons. The methyl carbon bears three hydrogens, while the methylene carbon attached to the hydroxyl has two hydrogens.'
  },
  {
    image: 'images/q13.png',
    correct: '1 carbon; H counts: 3',
    decoys: [
      '2 carbons; H counts: 3',
      '1 carbon; H counts: 2',
      '1 carbon; H counts: 3'
    ],
    explanation: 'Methylamine contains only one carbon atom, which carries three hydrogens. The nitrogen bears the remaining hydrogens.'
  },
  {
    image: 'images/q14.png',
    correct: '6 carbons; H counts: 2, 2, 2, 2, 2, 1',
    decoys: [
      '5 carbons; H counts: 2, 2, 2, 2, 2, 1',
      '6 carbons; H counts: 3, 2, 2, 2, 2, 1',
      '6 carbons; H counts: 2, 2, 2, 2, 2, 1'
    ],
    explanation: 'Cyclohexanone has six carbons. The carbonyl carbon (sp2) is bonded to one hydrogen; the other five ring carbons each have two hydrogens.'
  },
  {
    image: 'images/q15.png',
    correct: '5 carbons; H counts: 3, 1, 3, 3, 3',
    decoys: [
      '4 carbons; H counts: 3, 1, 3, 3, 3',
      '5 carbons; H counts: 2, 2, 3, 3, 3',
      '5 carbons; H counts: 3, 1, 3, 3, 3'
    ],
    explanation: 'Neopentane contains five carbons. The central quaternary carbon has no hydrogens, but each of the four terminal methyl carbons has three hydrogens.'
  },
  {
    image: 'images/q16.png',
    correct: '2 carbons; H counts: 3, 1',
    decoys: [
      '3 carbons; H counts: 3, 1',
      '2 carbons; H counts: 2, 2',
      '2 carbons; H counts: 3, 1'
    ],
    explanation: 'Acetic acid has two carbon atoms. The methyl carbon has three hydrogens, while the carboxyl carbon is attached to one hydrogen (in the OH) and no other hydrogens.'
  },
  {
    image: 'images/q17.png',
    correct: '6 carbons; H counts: 3, 2, 2, 1, 2, 3',
    decoys: [
      '5 carbons; H counts: 3, 2, 2, 1, 2, 3',
      '6 carbons; H counts: 2, 3, 2, 1, 2, 3',
      '6 carbons; H counts: 3, 2, 2, 1, 2, 3'
    ],
    explanation: '3‑Methylpentane has six carbons. Counting from one end, the hydrogens follow the pattern 3, 2, 2, 1 (on the branching carbon), then 2, 3.'
  },
  {
    image: 'images/q18.png',
    correct: '5 carbons; H counts: 3, 1, 3, 3, 3',
    decoys: [
      '4 carbons; H counts: 3, 1, 3, 3, 3',
      '5 carbons; H counts: 2, 2, 3, 3, 3',
      '5 carbons; H counts: 3, 1, 3, 3, 3'
    ],
    explanation: 'Tert‑butyl chloride consists of five carbons. The central carbon is bonded to four groups and has no hydrogens; each of the three methyl carbons has three hydrogens, and the fourth carbon in the chain has one hydrogen.'
  },
  {
    image: 'images/q19.png',
    correct: '3 carbons; H counts: 2, 2, 2',
    decoys: [
      '4 carbons; H counts: 2, 2, 2',
      '3 carbons; H counts: 3, 1, 2',
      '3 carbons; H counts: 2, 2, 2'
    ],
    explanation: 'Allyl alcohol has three carbon atoms. The carbon–carbon double bond means the first two carbons each have two hydrogens, and the third carbon (attached to OH) has two hydrogens.'
  },
  {
    image: 'images/q20.png',
    correct: '4 carbons; H counts: 3, 2, 1, 0',
    decoys: [
      '3 carbons; H counts: 3, 2, 1, 0',
      '4 carbons; H counts: 2, 3, 1, 0',
      '4 carbons; H counts: 3, 2, 1, 0'
    ],
    explanation: 'Propionitrile has four carbon atoms when counting the nitrile carbon. The terminal methyl carbon has three hydrogens, the next carbon has two, the nitrile carbon has one, and the carbon of the nitrile group itself has none.'
  }
];

// Build questions array from raw data
rawData.forEach((item, idx) => {
  const opts = [];
  // push correct
  opts.push({ text: item.correct, correct: true });
  // push decoys
  item.decoys.forEach(dec => opts.push({ text: dec, correct: false }));
  questions.push({
    image: item.image,
    options: opts,
    explanation: item.explanation
  });
});

let currentQuestion = 0;
let score = 0;

const progressEl = document.getElementById('progress');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuestion() {
  // Clear previous content
  questionEl.innerHTML = '';
  optionsEl.innerHTML = '';
  feedbackEl.style.display = 'none';
  nextBtn.style.display = 'none';

  const q = questions[currentQuestion];
  // Update progress
  progressEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  // Set question text and image
  const img = document.createElement('img');
  img.src = q.image;
  img.alt = 'Question image';
  img.style.maxWidth = '200px';
  questionEl.appendChild(document.createTextNode('Count the number of carbon atoms and hydrogen atoms attached to each carbon in the molecule shown below. Which option is correct?'));
  questionEl.appendChild(document.createElement('br'));
  questionEl.appendChild(img);
  // Shuffle options
  const opts = q.options.slice();
  shuffle(opts);
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt.text;
    btn.className = 'option-btn';
    btn.dataset.correct = opt.correct;
    btn.addEventListener('click', selectOption);
    optionsEl.appendChild(btn);
  });
}

function selectOption(e) {
  const selectedBtn = e.currentTarget;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  // Disable all buttons
  Array.from(optionsEl.children).forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.correct === 'true') {
      btn.classList.add('correct');
    } else {
      btn.classList.add('incorrect');
    }
  });
  // Provide feedback
  if (isCorrect) {
    score++;
    feedbackEl.innerHTML = `<strong>Correct!</strong> ${questions[currentQuestion].explanation}`;
  } else {
    feedbackEl.innerHTML = `<strong>Not quite.</strong> ${questions[currentQuestion].explanation}`;
  }
  feedbackEl.innerHTML += `<br /><br />If you have more questions, please post in the <a href="https://www.skool.com/premedportal" target="_blank">Community</a> tab.`;
  feedbackEl.style.display = 'block';
  nextBtn.style.display = 'inline-block';
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showSummary();
  }
});

function showSummary() {
  questionEl.innerHTML = '';
  optionsEl.innerHTML = '';
  feedbackEl.style.display = 'block';
  nextBtn.style.display = 'none';
  progressEl.textContent = 'Quiz Complete';
  const percent = Math.round((score / questions.length) * 100);
  feedbackEl.innerHTML = `<strong>You scored ${score} out of ${questions.length} (${percent}% correct)</strong>.<br />Great job reading bond‑line drawings! If you have more questions, feel free to ask them in the <a href="https://www.skool.com/premedportal" target="_blank">Community</a> tab.`;
}

// Initialize quiz
loadQuestion();