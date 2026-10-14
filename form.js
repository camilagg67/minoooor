const button = document.getElementById('verify');
const xInput = document.getElementById('x');
const yInput = document.getElementById('y');
const resultInput = document.getElementById('result');

button.addEventListener('click', function () {
    const x = Number(xInput.value);
    const y = Number(yInput.value);

    if (x * y === 0) {
        resultInput.value = 'Деление на ноль запрещено';
    } else {
        const z = 1 / (x * y);
        resultInput.value = z;
    }
})