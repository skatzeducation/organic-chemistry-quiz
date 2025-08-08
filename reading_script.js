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
    image: 'q1.png',
    // Simplified answer: list total hydrogens instead of per‑carbon counts
    correct: '3 carbons, 8 hydrogens',
    decoys: [
      '2 carbons, 8 hydrogens',
      '3 carbons, 7 hydrogens',
      '3 carbons, 9 hydrogens'
    ],
    explanation: 'This molecule has three carbon atoms arranged in a straight chain. The terminal carbons each have three hydrogens, while the middle carbon has two hydrogens. Summing them gives eight hydrogens total.'
  },
  {
    image: 'q2.png',
    correct: '4 carbons, 10 hydrogens',
    decoys: [
      '5 carbons, 10 hydrogens',
      '4 carbons, 9 hydrogens',
      '4 carbons, 11 hydrogens'
    ],
    explanation: 'Butane contains four carbon atoms in a row. Each terminal carbon has three hydrogens, while the two internal carbons each carry two hydrogens. Altogether there are ten hydrogens attached to carbon.'
  },
  {
    image: 'q3.png',
    correct: '4 carbons, 10 hydrogens',
    decoys: [
      '3 carbons, 10 hydrogens',
      '4 carbons, 9 hydrogens',
      '4 carbons, 11 hydrogens'
    ],
    explanation: 'Isobutane (2‑methylpropane) has four carbon atoms. The central carbon is bonded to three other carbons and has one hydrogen; the three methyl groups each have three hydrogens, giving ten hydrogens in total.'
  },
  {
    image: 'q4.png',
    correct: '5 carbons, 12 hydrogens',
    decoys: [
      '4 carbons, 12 hydrogens',
      '5 carbons, 11 hydrogens',
      '5 carbons, 13 hydrogens'
    ],
    explanation: '2‑Methylbutane has five carbon atoms and a total of twelve hydrogens attached to carbon. The hydrogens decrease to one on the branching carbon and increase again toward the other end of the chain.'
  },
  {
    image: 'q5.png',
    correct: '6 carbons, 12 hydrogens',
    decoys: [
      '5 carbons, 12 hydrogens',
      '6 carbons, 14 hydrogens',
      '6 carbons, 10 hydrogens'
    ],
    explanation: 'Cyclohexane is a ring of six carbons. Each carbon in the ring is bonded to two other carbons and therefore has two hydrogens, giving a total of twelve hydrogens on the ring.'
  },
  {
    image: 'q6.png',
    correct: '5 carbons, 10 hydrogens',
    decoys: [
      '4 carbons, 10 hydrogens',
      '5 carbons, 12 hydrogens',
      '5 carbons, 8 hydrogens'
    ],
    explanation: 'Cyclopentane consists of five carbons in a ring. Each carbon is bonded to two neighboring carbons and therefore bears two hydrogens, giving ten hydrogens total.'
  },
  {
    image: 'q7.png',
    correct: '6 carbons, 12 hydrogens',
    decoys: [
      '7 carbons, 12 hydrogens',
      '6 carbons, 14 hydrogens',
      '6 carbons, 11 hydrogens'
    ],
    explanation: '1‑Hexene has six carbon atoms. The double‑bonded carbons each have fewer hydrogens than a saturated carbon: one end has two hydrogens and the other has one. In total there are twelve hydrogens attached to carbon.'
  },
  {
    image: 'q8.png',
    correct: '4 carbons, 6 hydrogens',
    decoys: [
      '3 carbons, 6 hydrogens',
      '4 carbons, 8 hydrogens',
      '4 carbons, 5 hydrogens'
    ],
    explanation: '2‑Butyne has four carbon atoms. The two sp‑hybridized carbons in the triple bond each have one hydrogen, while the terminal carbons have three hydrogens, giving six hydrogens in total.'
  },
  {
    image: 'q9.png',
    correct: '6 carbons, 6 hydrogens',
    decoys: [
      '5 carbons, 6 hydrogens',
      '6 carbons, 12 hydrogens',
      '6 carbons, 8 hydrogens'
    ],
    explanation: 'Benzene has six carbons arranged in a ring with alternating double bonds. Each carbon is bonded to two neighboring carbons and has just one hydrogen, for a total of six hydrogens.'
  },
  {
    image: 'q10.png',
    correct: '4 carbons, 9 hydrogens',
    decoys: [
      '3 carbons, 9 hydrogens',
      '4 carbons, 8 hydrogens',
      '4 carbons, 10 hydrogens'
    ],
    explanation: 'This molecule is tert‑butyl alcohol. It contains four carbon atoms. Each of the three methyl groups contributes three hydrogens, while the central quaternary carbon has no hydrogens, giving a total of nine hydrogens attached to carbon.'
  },
  {
    image: 'q11.png',
    correct: '3 carbons, 6 hydrogens',
    decoys: [
      '4 carbons, 6 hydrogens',
      '3 carbons, 7 hydrogens',
      '3 carbons, 5 hydrogens'
    ],
    explanation: 'Acetone contains three carbon atoms. The two methyl carbons each have three hydrogens, while the carbonyl carbon has none. Adding the hydrogens on carbon gives six in total.'
  },
  {
    image: 'q12.png',
    correct: '2 carbons, 5 hydrogens',
    decoys: [
      '3 carbons, 5 hydrogens',
      '2 carbons, 4 hydrogens',
      '2 carbons, 6 hydrogens'
    ],
    explanation: 'Ethanol contains two carbon atoms. The terminal methyl carbon has three hydrogens and the methylene carbon attached to the hydroxyl group has two, giving five hydrogens on carbon.'
  },
  {
    image: 'q13.png',
    correct: '1 carbon, 3 hydrogens',
    decoys: [
      '2 carbons, 3 hydrogens',
      '1 carbon, 2 hydrogens',
      '1 carbon, 4 hydrogens'
    ],
    explanation: 'Methylamine consists of one carbon atom bonded to a nitrogen. The methyl carbon carries three hydrogens; the additional hydrogens are attached to nitrogen.'
  },
  {
    image: 'q14.png',
    correct: '6 carbons, 10 hydrogens',
    decoys: [
      '5 carbons, 10 hydrogens',
      '6 carbons, 9 hydrogens',
      '6 carbons, 12 hydrogens'
    ],
    explanation: 'Cyclohexanone contains six carbon atoms. Five of the ring carbons are CH₂ groups (each bearing two hydrogens), while the carbonyl carbon has no hydrogens. This gives a total of ten hydrogens attached to carbon.'
  },
  {
    image: 'q15.png',
    correct: '5 carbons, 12 hydrogens',
    decoys: [
      '4 carbons, 12 hydrogens',
      '5 carbons, 11 hydrogens',
      '5 carbons, 13 hydrogens'
    ],
    explanation: 'Neopentane (2,2‑dimethylpropane) has five carbon atoms. The central carbon is bonded to four other carbons and therefore has no hydrogens; each of the four terminal methyl carbons bears three hydrogens, giving twelve hydrogens attached to carbon.'
  },
  {
    image: 'q16.png',
    correct: '2 carbons, 3 hydrogens',
    decoys: [
      '3 carbons, 3 hydrogens',
      '2 carbons, 2 hydrogens',
      '2 carbons, 4 hydrogens'
    ],
    explanation: 'Acetic acid has two carbon atoms. The methyl carbon bears three hydrogens, while the carboxyl carbon has no hydrogens because its valences are satisfied by bonds to oxygen and carbon.'
  },
  {
    image: 'q17.png',
    correct: '6 carbons, 14 hydrogens',
    decoys: [
      '5 carbons, 14 hydrogens',
      '6 carbons, 13 hydrogens',
      '6 carbons, 15 hydrogens'
    ],
    explanation: '3‑Methylpentane has six carbon atoms in its chain. Being a saturated alkane with one methyl branch, it has fourteen hydrogens attached to carbon atoms (C₆H₁₄).'
  },
  {
    image: 'q18.png',
    correct: '4 carbons, 9 hydrogens',
    decoys: [
      '3 carbons, 9 hydrogens',
      '4 carbons, 8 hydrogens',
      '4 carbons, 10 hydrogens'
    ],
    explanation: 'Tert‑butyl chloride has four carbon atoms. Each of the three methyl groups contributes three hydrogens, while the central quaternary carbon bonded to chlorine has none, giving nine hydrogens in total.'
  },
  {
    image: 'q19.png',
    correct: '3 carbons, 5 hydrogens',
    decoys: [
      '2 carbons, 5 hydrogens',
      '3 carbons, 4 hydrogens',
      '3 carbons, 6 hydrogens'
    ],
    explanation: 'Allyl alcohol (CH₂=CH–CH₂OH) contains three carbon atoms. The terminal alkene carbon has two hydrogens, the internal alkene carbon has one, and the carbon attached to the hydroxyl group has two, for a total of five hydrogens.'
  },
  {
    image: 'q20.png',
    correct: '3 carbons, 5 hydrogens',
    decoys: [
      '2 carbons, 5 hydrogens',
      '3 carbons, 4 hydrogens',
      '3 carbons, 6 hydrogens'
    ],
    explanation: 'Propionitrile (ethyl cyanide) contains three carbon atoms when counting the alkyl chain; the nitrile carbon has no hydrogens. The methyl carbon has three hydrogens and the methylene carbon has two, giving five hydrogens attached to carbon.'
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