let questions = [
  {
    question: "周杰倫是台灣出身的男歌手",
    correctAnswer: "圈",
    explanation: "周杰倫是台灣出身的男歌手",
  },
  {
    question: "蔡依林曾有發行過專輯《七里香》",
    correctAnswer: "叉",
    explanation: "《七里香》是周杰倫的作品",
  },
  {
    question: "林俊傑出生於台灣",
    correctAnswer: "叉",
    explanation: "林俊傑出生於新加坡",
  },
  {
    question: "吳靑峰曾是蘇打綠的主唱",
    correctAnswer: "圈",
    explanation: "吳靑峰曾是蘇打綠的主唱",
  },
  {
    question: "五月天是一位台灣個人男歌手",
    correctAnswer: "叉",
    explanation: "五月天是一支台灣樂團",
  },
];

let currentQuestion = 0;
let isAnswered = false;
let isCorrect = false;
let showExplanation = false; // 新增變數，用於控制是否顯示解答

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#ffd166'); // 設定畫布背景顏色為 #ffd166
  textAlign(CENTER, CENTER);
  textSize(40);
}

function draw() {
  background('#fee440'); // 確保每次重繪時背景顏色一致

  // 計算長方形的位置與大小
  let rectWidth = windowWidth / 1.2; // 長方形寬度為視窗寬度的一半
  let rectHeight = windowHeight / 1.2; // 長方形高度為視窗高度的一半
  let rectX = (windowWidth - rectWidth) / 2; // 長方形水平居中
  let rectY = (windowHeight - rectHeight) / 2; // 長方形垂直居中

  // 畫出長方形，根據回答狀態改變顏色
  if (isAnswered) {
    if (isCorrect) {
      fill('#38b000'); // 正確時長方形變為綠色
    } else {
      fill(255, 0, 0); // 錯誤時長方形變為紅色
    }
  } else {
    fill(255); // 正常時長方形為白色
  }
  rect(rectX, rectY, rectWidth, rectHeight, 10);

  fill(0);
  textStyle(BOLD); // 設定文字加粗
  if (currentQuestion < questions.length) {
    if (!isAnswered) {
      // 顯示題目
      textSize(50); // 題目文字大小為 40px
      text(questions[currentQuestion].question, windowWidth / 2, rectY + 150); // 將題目文字往下移

      // 顯示✕和◯選項
      textSize(85); // 選項文字大小為 80px
      text("✕", rectX + rectWidth / 3, rectY + rectHeight - 160); // 左邊為✕，往中間集中
      text("◯", rectX + (rectWidth * 2.8) / 4, rectY + rectHeight - 160); // 右邊為◯，往中間集中
    } else if (!showExplanation) {
      // 顯示「答錯了！」或「答對了！」文字
      textSize(50); // 解答文字大小為 40px
      text(
        isCorrect ? "答對了！" : "答錯了！",
        windowWidth / 2,
        rectY + rectHeight / 2
      );
    } else {
      // 顯示解答
      textSize(50); // 解答文字大小為 40px
      text(
        questions[currentQuestion].explanation,
        windowWidth / 2,
        rectY + rectHeight / 2
      );
    }
  } else {
    // 測驗結束
    textSize(40); // 結束文字大小為 40px
    text("測驗結束！！", windowWidth / 2, windowHeight / 2);
  }
}

function mousePressed() {
  // 計算長方形的位置與大小
  let rectWidth = windowWidth / 1.2; // 長方形寬度
  let rectHeight = windowHeight / 1.2; // 長方形高度
  let rectX = (windowWidth - rectWidth) / 2; // 長方形水平居中
  let rectY = (windowHeight - rectHeight) / 2; // 長方形垂直居中

  if (currentQuestion < questions.length) {
    if (!isAnswered) {
      // 檢查是否點擊了✕
      let xOptionX = rectX + rectWidth / 3; // ✕ 的 X 座標
      let xOptionY = rectY + rectHeight - 160; // ✕ 的 Y 座標
      if (
        mouseX > xOptionX - 50 && mouseX < xOptionX + 50 && // 檢查 X 範圍
        mouseY > xOptionY - 50 && mouseY < xOptionY + 50    // 檢查 Y 範圍
      ) {
        isAnswered = true;
        isCorrect = questions[currentQuestion].correctAnswer === "叉";
      }

      // 檢查是否點擊了◯
      let oOptionX = rectX + (rectWidth * 2.8) / 4; // ◯ 的 X 座標
      let oOptionY = rectY + rectHeight - 160; // ◯ 的 Y 座標
      if (
        mouseX > oOptionX - 50 && mouseX < oOptionX + 50 && // 檢查 X 範圍
        mouseY > oOptionY - 50 && mouseY < oOptionY + 50    // 檢查 Y 範圍
      ) {
        isAnswered = true;
        isCorrect = questions[currentQuestion].correctAnswer === "圈";
      }
    } else if (!showExplanation) {
      // 點擊後顯示解答
      showExplanation = true;
    } else {
      // 點擊後進入下一題
      currentQuestion++;
      isAnswered = false;
      isCorrect = false;
      showExplanation = false;
    }
  }
}
