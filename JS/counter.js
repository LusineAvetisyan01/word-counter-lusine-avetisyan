let textContent = document.getElementById("text");
let charCount = document.getElementById("char-count");
let wordCount = document.getElementById("word-count");
let letterCount = document.getElementById("letter-count");
let sentenceCount = document.getElementById("sentence-count");
let digitCount = document.getElementById("digit-count");

function renderText(domElt, text) {
  domElt.innerText = text;
}

function handleChar(text) {
  return text.length;
}

function handleLetter(text) {
  let letterCount = 0;

  for (var i = 0; i < text.length; i++) {
    if (/^[A-Za-z]+$/.test(text.charAt(i))) {
      letterCount += 1;
    }
  }
  return letterCount;
}

function handleWord(text) {
  const textArr = text.split(/[\s$]/);
  let wordCount = 0;

  for (word of textArr) {
    if (/[a-zA-Z0-9]/.test(word)) {
      wordCount += 1;
    }
  }

  return wordCount;
}

function handleSentence(text) {
  // we are splitting the text by spaces and end of lines - so getting all "words"
  const textArr = text.split(/[\s$]/);
  let sentenceCount = 0;

  for (word of textArr) {
    // if any of the words end with one of the "end of sentence" symbols, and after that comes a space or a new line, then that was a sentence
    console.log(word);
    if (/\w[.?!]+(\s|$)/.test(word)) {
      sentenceCount += 1;
    }
  }

  return sentenceCount;
}

function handleDigit(text) {
  let digitCount = 0;

  for (var i = 0; i < text.length; i++) {
    if (/[0-9]/.test(text.charAt(i))) {
      digitCount += 1;
    }
  }
  return digitCount;
}

textContent.addEventListener("input", (event) => {
  const text = event.target.value.trim();

  renderText(charCount, handleChar(text));
  renderText(letterCount, handleLetter(text));
  renderText(wordCount, handleWord(text));
  renderText(sentenceCount, handleSentence(text));
  renderText(digitCount, handleDigit(text));
});
