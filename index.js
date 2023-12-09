document.addEventListener('DOMContentLoaded', function () {
    const outputStringElement = document.getElementById('showOutput');
    const letterTilesElement = document.getElementById('letterappe');
    let currentString = '';
    let consecutiveCount = 1;
    let lastClickedLetter = '';
    function updateOutputString(letter) {
        currentString += letter;
        if (lastClickedLetter === letter) {
            consecutiveCount++;
            if (consecutiveCount === 3) {
                currentString = currentString.replace(new RegExp(`${letter}{3}`, 'g'), '^_^');
                consecutiveCount = 1;
            }
        } else {
            consecutiveCount = 1;
        }
        lastClickedLetter = letter;
        outputStringElement.textContent = currentString;
    }
    function createLetterTiles() {
        for (let i = 65; i <= 70; i++) {
            const letter = String.fromCharCode(i);
            const alphabet = document.createElement('div');
            alphabet.className = 'alphabet';
            alphabet.textContent = letter;
            alphabet.addEventListener('click', function () {
                updateOutputString(letter);
            });
            letterTilesElement.appendChild(alphabet);
        }
    }
    createLetterTiles();
});