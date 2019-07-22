var carA = document.getElementById('carA');
var carB = document.getElementById('carB');
var container = document.getElementById('container');

var carALeft = 400;
var carBLeft = 400;

// Sistem Balapan

function anim(e) {

if (e.keyCode === 39) {
    carALeft += 5;
    carA.style.left = carALeft + 'px';
    if (carALeft >= 845)
    alert('Pemenangnya Car 1')
    }

if (e.keyCode === 37) {
    carBLeft += 5;
    carB.style.left = carBLeft + 'px';
    if (carBLeft >= 845)
    alert('Pemenangnya Car 2')
    }
}

document.onkeydown = anim;

// Config button

// var button = document.getElementById('button');

// function butto(n) {
//     if 
// }