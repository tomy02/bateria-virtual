"use strict"


window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.play();
    key.classList.add('activo');
    setTimeout(function() {
        key.classList.remove('activo');
    }, 400);



});

const tecla = document.getElementById('a');



tecla.addEventListener('click', function() {
    event.preventDefault();
    const audioA = document.querySelector(`audio[data-key="65"]`);
    if (!audioA) return;
    audioA.play();
    tecla.classList.add('activo');
    setTimeout(function() {
        tecla.classList.remove('activo');
    }, 400);


});
const teclaS = document.getElementById('s');

teclaS.addEventListener('click', function() {
    event.preventDefault();
    const audioS = document.querySelector(`audio[data-key="83"]`);
    if (!audioS) return;
    audioS.play();
    teclaS.classList.add('activo');
    setTimeout(function() {
        teclaS.classList.remove('activo');
    }, 400);
});
const teclaD = document.getElementById('d');

teclaD.addEventListener('click', function() {
    event.preventDefault();
    const audioD = document.querySelector(`audio[data-key="68"]`);
    if (!audioD) return;
    audioD.play();
    teclaD.classList.add('activo');
    setTimeout(function() {
        teclaD.classList.remove('activo');
    }, 400);
});
const teclaF = document.getElementById('f');

teclaF.addEventListener('click', function() {
    event.preventDefault();
    const audioF = document.querySelector(`audio[data-key="70"]`);
    if (!audioF) return;
    audioF.play();
    teclaF.classList.add('activo');
    setTimeout(function() {
        teclaF.classList.remove('activo');
    }, 400);
});
const teclaG = document.getElementById('g');

// teclaG.addEventListener('click', function() {
//     event.preventDefault();
//     const audioG = document.querySelector(`audio[data-key="71"]`);
//     if (!audioG) return;
//     audioG.play();
//     teclaG.classList.add('activo');
//     setTimeout(function() {
//         teclaG.classList.remove('activo');
//     }, 400);
// });








/* claves de teclado
A  65
S  83
D  68
F  70
G  71
*/