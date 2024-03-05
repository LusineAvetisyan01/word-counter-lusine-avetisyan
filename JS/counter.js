let textContentElement = document.getElementById("text");
let charCountElement = document.getElementById("char-count");
let wordCountElement = document.getElementById("word-count");
let letterCountElement = document.getElementById("letter-count");
let sentenceCountElement = document.getElementById("sentence-count");
let digitCountElement = document.getElementById("digit-count");

function renderText(domElement, text) {
  domElement.innerText = text;
}

function handleChar(text) {
  // we are removing all line break so we don't count them as chars
  return text.replaceAll(/\r?\n|\r/g, "").length;
}

function handleLetter(text) {
  let letterCount = 0;

  for (var i = 0; i < text.length; i++) {
    if (/^[A-Za-z]$/.test(text.charAt(i))) {
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

textContentElement.addEventListener("input", (event) => {
  const text = event.target.value;

  renderText(charCountElement, handleChar(text));
  renderText(letterCountElement, handleLetter(text.trim()));
  renderText(wordCountElement, handleWord(text.trim()));
  renderText(sentenceCountElement, handleSentence(text.trim()));
  renderText(digitCountElement, handleDigit(text.trim()));
});
