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