// Array of words with their corresponding hints

let words = [
  // Each object represents a word and its hint
  {
    word: "mekke",
    hint: "Hz.Muhammedin doğduğu şehirdir"
  },
  {
    word: "kureyş",
    hint: "Hz.Muhammed Kureyş soyundan gelir"
  },
  {
    word: "amine",
    hint: "Hz.Muhammedin annesinin ismidir"
  },
  {
    word: "halime",
    hint: "Hz.Muhammedin süt annesinin ismidir"
  },
  {
    word: "abdullah",
    hint: "Hz.Muhammedin babasının ismidir"
  },
  {
    word: "abdülmüttalip",
    hint: "Hz.Muhammedin dedesinin ismidir"
  },
  {
    word: "ebutalip",
    hint: "Hz Muhammedin amcasıdır"
  },
  {
    word: "şeyma",
    hint: "Hz.Muhammedin süt kardeşi"
  },
  {
    word: "abdullah",
    hint: "Hz.Muhammedin süt kardeşi"
  },
  {
    word: "haşimoğulları",
    hint: "Hz Muhammed bu sülaledendir"
  },
  {
    word: "hatice",
    hint: "Hz Muhammedin eşidir"
  },
  {
    word: "hasan",
    hint: "Hz Muhammedin torunu"
  },
  {
    word: "hüseyin",
    hint: "Hz Muhammedin torunu"
  },
  {
    word: "ümmügülsüm",
    hint: "Hz Muhammedin kızı"
  },
  {
    word: "zeynep ",
    hint: "Hz Muhammedin kızı"
  },
  {
    word: "rukiye",
    hint: "Hz Muhammedin kızı"
  },
  {
    word: "fatıma",
    hint: "Hz Muhammedin kızı"
  },
  {
    word: "abdullah",
    hint: "Hz Muhammedin oğludur"
  },
  {
    word: "İbrahim",
    hint: "Hz Muhammedin oğludur"
  },
];

const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word");

let correctWord, timer;

// Function to initialize the timer
const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
  }, 1000);
};

// Function to initialize the game
const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
};
initGame();

// Function to check the user's input word
const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Please enter the word to check!");
  if (userWord !== correctWord)
    return alert(`Oops! ${userWord} is not a correct word`);
  alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
  initGame();
};

// Event listeners for the refresh and check buttons
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
