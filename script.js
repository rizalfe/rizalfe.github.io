var carA = document.getElementById('carA');
var carB = document.getElementById('carB');
var container = document.getElementById('container');

var carALeft = 10;
var carBLeft = 10;

// Sistem Balapan

function anim(e) {

if (e.keyCode === 39) {
    carALeft += 5;
    carA.style.left = carALeft + 'px';
    if (carALeft >= 460) {
        alert('Pemenangnya Car 1, mau coba lagi?');
        setInterval(function() {
          location.reload()
        }, 500);
    }
  }

if (e.keyCode === 37) {
    carBLeft += 5;
    carB.style.left = carBLeft + 'px';
    if (carBLeft >= 460) {
        alert('Pemenangnya Car 2, mau coba lagi?');
        setInterval(function() {
          location.reload()
        }, 500);
    }
  }
}

document.onkeydown = anim;