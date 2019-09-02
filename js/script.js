var fullPhoto1 = document.querySelector('.fullPhoto1');
var closeButton1 = document.querySelector('.button1-close');

document.getElementById('scalePhoto1').addEventListener('click', function() {
  fullPhoto1.classList.add('full-show');
});

closeButton1.addEventListener('click', function() {
  fullPhoto1.classList.remove('full-show');
})

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27)
    fullPhoto1.classList.remove('full-show');
});     

var fullPhoto2 = document.querySelector('.fullPhoto2');
var closeButton2 = document.querySelector('.button2-close');

document.getElementById('scalePhoto2').addEventListener('click', function() {
  fullPhoto2.classList.add('full-show');
});

closeButton2.addEventListener('click', function() {
  fullPhoto2.classList.remove('full-show');
})

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27)
    fullPhoto2.classList.remove('full-show');
});



