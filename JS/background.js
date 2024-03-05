function random_background() {
  // our RGB elements are 100+ so that we don't get too dark backgrounds and unlegible texts
  var x = Math.floor(Math.random() * 156) + 100;
  var y = Math.floor(Math.random() * 156) + 100;
  var z = Math.floor(Math.random() * 156) + 100;
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  document.body.style.background = bgColor;
}

// and we are now generating a random backgound at start
random_background();
