const questions = [
  {
    q: "น้องมายด์ชอบกินอะไร",
    c: ["1.โกโก้", "2.ชานม", "3.ชาไทย"],
    correct: 1,
    explain: "ชานมหวาน50%งับ  "
  },
  {
    q: "พี่ปริ้น ชอบน้องมายด์ตรงไหน",
    c: ["1.นิสัย", "2.หน้าตา", "3.ทุกอย่างที่เป็นน้องมายด์"],
    correct: 2,
    explain: "ต้องขอนี้เท่านั้น5555 "
  },
  {
    q: "อาหารจานโปรดของน้องมายด์ ",
    c: ["1.กุ้งเผา", "2.กระเพรา", "3.ก๋วยเตี๋ยว"],
    correct: 0,
  },
{
    "q": "สถานที่อยากไปเดทกับพี่ปริ้นอีก",
    "c": ["1.ทะเล", "2.คาเฟ่", "3.สวนสนุก"],
    "correct": [0, 1, 2],
    "explain": "ทุกที่เยย5555"
  },
  {
    q: "ถ้าว่าง1วัน  อยากทำอะไรด้วยกัน ",
    c: ["1.ดูหนัง ซีรีย์ ", "2.เล่นเกมส์", "3.พาไปเที่ยว","4.อยู่ด้วยกันเฉยๆ"],
    correct: 0,
    explain: "ดูซรีย์ แต่จริงๆก็ได้หมดแหละ "
  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
