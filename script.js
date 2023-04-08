var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        if(btnText == '×') {
            btnText = '*';
        }
        if (btnText == '÷') {
            btnText = '/';
        }
        screen.value += btnText;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value,2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value,2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159295359;
}

function e() {
    screen.value = 2.71848182846;
}