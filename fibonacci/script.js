
//DARK THEME
document.addEventListener("DOMContentLoaded", function() {
    var icon = document.getElementById("theme-icon");
    icon.onclick = function () {
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")) {
            icon.src = "images/sun.png";
        } else {
            icon.src = "images/moon.png";
        }
    };
});


document.getElementById('number-input').addEventListener('input', handleInputChange);
document.getElementById('number-input').addEventListener('keydown', handleKeyPress);
document.getElementById('check-button').addEventListener('click', checkFibonacci);
document.getElementById('reset-link').addEventListener('click', resetForm);

function handleInputChange() {
    const inputElement = document.getElementById('number-input');
    const checkButton = document.getElementById('check-button');
    
    const value = inputElement.value.trim();
    const number = parseInt(value);

    if (value !== '' && !isNaN(number) && number >= 0) {
        checkButton.disabled = false;
    } else {
        checkButton.disabled = true;
        inputElement.style.backgroundColor = '';
    }
}

function resetForm() {
    const inputElement = document.getElementById('number-input');
    inputElement.value = '';
    inputElement.style.color = 'var(--accent-clr)';
    inputElement.style.backgroundColor = '';
    document.getElementById('check-button').disabled = true;
    document.getElementById('result-text').textContent = '';
    document.getElementById('emoji').textContent = '';
}

function isFibonacci(number) {
    let a = 0, b = 1;
    if (number === a || number === b) {
        return true;
    }
    
    while (b <= number) {
        let temp = b;
        b = a + b;
        a = temp;
        
        if (b === number) {
            return true;
        }
    }
    return false;
}

function checkFibonacci() {
    const inputElement = document.getElementById('number-input');
    const number = parseInt(inputElement.value);
    const resultText = document.getElementById('result-text');
    const emoji = document.getElementById('emoji');
    
    // Generates Fibonacci numbers up to the given number
    let fibNumbers = generateFibonacciUpTo(number);

    resultText.textContent = fibNumbers.join(', ');
    if (isFibonacci(number)) {
        inputElement.style.color = 'var(--accent-clr)';
        inputElement.style.backgroundColor = 'var(--neon-clr)';
        emoji.textContent = '✔️';
    } else {
        inputElement.style.backgroundColor = 'var(--red-clr)';
        inputElement.style.color = 'var(--base-clr)';
        emoji.textContent = '❌';
    }

    emoji.style.opacity = '1';
    setTimeout(() => {
        emoji.style.transition = 'opacity 1s';
        emoji.style.opacity = '0'; // fade out the emoji
    }, 1500);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const checkButton = document.getElementById('check-button');
        if (!checkButton.disabled) {
            checkFibonacci();
        }
    }
}

function generateFibonacciUpTo(maxNumber) {
    let fibNumbers = [];
    let a = 0, b = 1;
    while (a <= maxNumber) {
        fibNumbers.push(a);
        let temp = b;
        b = a + b;
        a = temp;
    }
    return fibNumbers;
}