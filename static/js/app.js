const appStart = () => {
    const answer = 'MONEY'
    let r = 0;
    let c = 0;
    let correct = 0;

    const gameover = () => {
        window.removeEventListener('keydown', handleKeydown);
        const div = document.createElement('div');
        div.innerHTML = 'GOOD JOB!!!'
        div.style = 'display:flex; justify-content:center; align-content:center;'
        document.body.appendChild(div)

    }

    const keyboardIndex = {
        'A': 55,
        'B': 56,
        'C': 57,
        'D': 58,
        'E': 59,
        'F': 60,
        'G': 61,
        'H': 62,
        'I': 63,
        'J': 64,
        'K': 65,
        'L': 66,
        'M': 67,
        'N': 68,
        'O': 69,
        'P': 70,
        'Q': 71,
        'R': 72,
        'S': 73,
        'T': 74,
        'U': 75,
        'V': 76,
        'W': 77,
        'X': 78,
        'Y': 79,
        'Z': 80,
    }

    const fillTryBlock = (v, letter, thisBlock) => {
        if (v === letter) thisBlock.style.background = '#6aaa64';
        else if (answer.includes(letter)) thisBlock.style.background = '#c9b458';
        else thisBlock.style.background = '#86888a';
        thisBlock.style.color = '#fff'
    }

    const fillKeyboardBlock = (v, letter, keyBlock) => {
        if (keyBlock.style.background === 'rgb(106, 170, 100)') return
        if (keyBlock.style.background === 'rgb(134, 136, 138)') {
            if (v === letter) keyBlock.style.background = '#6aaa64'
            else if (answer.includes(letter)) keyBlock.style.background = '#c9b458'
        } else if (keyBlock.style.background === 'rgb(201, 180, 88)') {
            if (v === letter) keyBlock.style.background = '#6aaa64'
        } else {
            //first try
            if (v === letter) keyBlock.style.background = '#6aaa64'
            else if (answer.includes(letter)) keyBlock.style.background = '#c9b458'
            else keyBlock.style.background = '#86888a';
        }
        keyBlock.style.color = '#fff'
    }

    const handleEnterKey = () => {
        if (c === 5) {
            if (correct === 5) return gameover();
            [...answer].forEach((v, i) => {
                const thisBlock = document.querySelector(`.board > .row > div > .key[data-index='${r}${i}']`);
                const letter = thisBlock.innerHTML;
                const keyIndex = keyboardIndex[letter]
                const keyBlock = document.querySelector(`.keyboard > .row > .key[data-index='${keyIndex}']`);
                if (v === letter) correct++;
                fillTryBlock(v, letter, thisBlock);
                fillKeyboardBlock(v, letter, keyBlock);
            });
            if (correct === 5) return gameover();
            r++;
            c = 0;
            correct = 0;
        } else return;
    }
    const handleKeydown = (e) => {
        if (r === 6) return gameover();
        let key = e.key.toUpperCase();
        let keyCode = e.keyCode;
        const thisBlock = document.querySelector(`.board > .row > div > .key[data-index='${r}${c}']`)
        if (e.keyCode === 13) handleEnterKey();
        else if (c === 5) return;
        else if (65 <= keyCode && keyCode <= 90) {
            thisBlock.innerHTML = key;
            c++;
        }
    }

    window.addEventListener('keydown', handleKeydown);
}

appStart();