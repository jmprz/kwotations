// Copy Quotes 1-10 Function Start
function copyClick1() {
  var copyText1 = document.getElementById("first");
  copyText1.select();
  copyText1.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText1.value);
  
  var copiedText = document.getElementById("copied");
  copiedText.innerHTML = "Copied Successfully!" + '<i class="fa-solid fa-circle-check"></i>';
}

function copyClick2() {
  var copyText2 = document.getElementById("second");
  copyText2.select();
  copyText2.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText2.value);
  
  var copiedText = document.getElementById("copied");
  copiedText.innerHTML = "Copied Successfully!" + '<i class="fa-solid fa-circle-check"></i>';
}

function copyClick3() {
  var copyText3 = document.getElementById("third");
  copyText3.select();
  copyText3.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText3.value);
  
  var copiedText = document.getElementById("copied");
  copiedText.innerHTML = "Copied Successfully!" + '<i class="fa-solid fa-circle-check"></i>';
}

function copyClick4() {
  var copyText4 = document.getElementById("fourth");
  copyText4.select();
  copyText4.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText4.value);
  
  var copiedText = document.getElementById("copied");
  copiedText.innerHTML = "Copied Successfully!" + '<i class="fa-solid fa-circle-check"></i>';
}

function copyClick5() {
  var copyText5 = document.getElementById("fifth");
  copyText5.select();
  copyText5.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText5.value);
  
  var copiedText = document.getElementById("copied");
  copiedText.innerHTML = "Copied Successfully!" + '<i class="fa-solid fa-circle-check"></i>';
}

function copyClick6() {
  var copyText6 = document.getElementById("sixth");
  copyText6.select();
  copyText6.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText6.value);
  
  var copiedText = document.getElementById("copied");
  copiedText.innerHTML = "Copied Successfully!" + '<i class="fa-solid fa-circle-check"></i>';
}

function copyClick7() {
  var copyText7 = document.getElementById("seventh");
  copyText7.select();
  copyText7.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText7.value);
  
  var copiedText = document.getElementById("copied");
  copiedText.innerHTML = "Copied Successfully!" + '<i class="fa-solid fa-circle-check"></i>';
}

function copyClick8() {
  var copyText8 = document.getElementById("eight");
  copyText8.select();
  copyText8.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText8.value);
  
  var copiedText = document.getElementById("copied");
  copiedText.innerHTML = "Copied Successfully!" + '<i class="fa-solid fa-circle-check"></i>';
}

function copyClick9() {
  var copyText9 = document.getElementById("ninth");
  copyText9.select();
  copyText9.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText9.value);
  
  var copiedText = document.getElementById("copied");
  copiedText.innerHTML = "Copied Successfully!" + '<i class="fa-solid fa-circle-check"></i>';
}

function copyClick10() {
  var copyText10 = document.getElementById("tenth");
  copyText10.select();
  copyText10.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText10.value);
  
  var copiedText = document.getElementById("copied");
  copiedText.innerHTML = "Copied Successfully!" + '<i class="fa-solid fa-circle-check"></i>';
}
// Copy Quotes 1-10 Function End

// Copy Quotes Function Start
function copiedClick() {
  var copiedText = document.getElementById("copied");
  copiedText.innerHTML = "";
}

var w = document.getElementById('quotes');
var startBtn = document.getElementById('start');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var quotes = w.children;
// Copy Quotes Function End

// Hide Quotes Function Start
var hideDivs = function(divs) {
  for (var div of divs) {
    div.style.display = 'none';
  }
}

hideDivs(quotes); 
// Hide Quotes Function End

// Slider and Random Quotes Function Start
startBtn.addEventListener('click', function(event) {
    var rnd = Math.floor(Math.random() * quotes.length); // get random index
    hideDivs(quotes); 
    quotes[rnd].style.display = 'block';
    startBtn.style.display = 'none';
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
  })
// Previous Function
prevBtn.addEventListener('click', function(event) {
    var rnd = Math.floor(Math.random() * quotes.length); // get random index
    hideDivs(quotes); 
    quotes[rnd].style.display = 'block';
  })

// Next Function
nextBtn.addEventListener('click', function(event) {
  var rnd = Math.floor(Math.random() * quotes.length); // get random index
  hideDivs(quotes); 
  quotes[rnd].style.display = 'block'; 
})
// Slider and Random Quotes Function End