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

    const handleEnterKey = () => {
        if (c === 5) {
            if (correct === 5) return gameover();
            [...answer].forEach((v, i) => {
                const thisBlock = document.querySelector(`.board > .row > div > .key[data-index='${r}${i}']`);
                const letter = thisBlock.innerHTML;
                if (v === letter) {
                    correct++;
                    thisBlock.style.background = '#6aaa64';
                } else if (answer.includes(letter)) thisBlock.style.background = '#c9b458';
                else thisBlock.style.background = '#86888a';
                thisBlock.style.color = '#fff'
            });
            if (correct === 5) return gameover();
            r++;
            c = 0;
        } else return;
    }
    const handleKeydown = (e) => {
        if (r === 6) return gameover();
        console.log(r, c)
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