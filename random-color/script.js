const wrapper = document.querySelector('.wrapper')
const btnColor = document.querySelector('.btn-color')
const btnGradient = document.querySelector('.btn-gradient')
const btnGradient3 = document.querySelector('.btn-gradient-3')
const colorInner = document.querySelector('.color-inner')
const colorIcon = document.querySelector('.color-icon')
const colorName = document.querySelector('.color-name')
const btnCopy = document.querySelector('.btn-copy')
const btnClear = document.querySelector('.btn-clear')
const historyToggle = document.querySelector('.history-toggle')
const history = document.querySelector('.history')
const historyEl = document.querySelector('.history-inner')
const symbols1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']
const symbols2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']
const symbols3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']

historyToggle.addEventListener('click', () => {
    historyEl.classList.toggle('hide')
    btnClear.classList.toggle('active')
    if (historyEl.classList.contains('hide')) {
        historyToggle.innerText = 'Show history'
    } else {
        historyToggle.innerText = 'Hide history'
    }
})

historyEl.addEventListener('click', (e) => {
    let item = e.target;
    if (item.classList.contains('item')) {
        wrapper.style.background = colorIcon.style.background = colorName.innerText = item.style.background;
    }
})

function createRandomColor(symbols) {
    for (let i = symbols.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [symbols[i], symbols[j]] = [symbols[j], symbols[i]];
    }
    return '#' + symbols.slice(0, 6).join('');
}

function createRandomGradient(...args) {
    for (let arg of args) {
        for (let i = arg.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arg[i], arg[j]] = [arg[j], arg[i]];
        }
    }
    return `linear-gradient(#${symbols1.slice(0, 6).join('')},#${symbols2.slice(0, 6).join('')})`
}

function createRandomGradient3(...args) {
    for (let arg of args) {
        for (let i = arg.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arg[i], arg[j]] = [arg[j], arg[i]];
        }
    }
    return `linear-gradient(#${symbols1.slice(0, 6).join('')},#${symbols2.slice(0, 6).join('')},#${symbols3.slice(0, 6).join('')})`
}

function addItem(countColors) {
    if (!historyEl.classList.contains('hide')) {
        btnClear.classList.add('active')
    }
    btnCopy.classList.add('active')
    history.classList.add('active')
    colorIcon.classList.add('active')
    const newItem = document.createElement('button')
    newItem.classList.add('item')
    historyEl.append(newItem)
    wrapper.style.background = colorIcon.style.background = colorName.innerText = newItem.style.background = countColors;
}

btnColor.addEventListener('click', () => {
    addItem(createRandomColor(symbols1))
})

btnGradient.addEventListener('click', () => {
    addItem(createRandomGradient(symbols1, symbols2))

})

btnGradient3.addEventListener('click', () => {
    addItem(createRandomGradient3(symbols1, symbols2, symbols3))
})

btnClear.addEventListener('click', () => {
    historyEl.innerHTML = '';
    wrapper.style.background = 'rgba(100, 100, 100, 0.2)';
    colorName.innerText = 'Here your color';
    btnCopy.classList.remove('active');
    colorIcon.classList.remove('active');
})


//Ripple Effect

function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

const buttons = document.querySelectorAll("button.button-ripple");
for (const button of buttons) {
    button.addEventListener("click", createRipple);
}

//Copy color code

btnCopy.addEventListener('click', () => {
    btnCopy.innerText = 'Copied!'
    colorInner.classList.add('copied')
    window.getSelection().selectAllChildren(colorName)
    navigator.clipboard.writeText(colorName.innerText)
        .then(() => {
            setTimeout(() => {
                btnCopy.innerHTML = 'Click to copy color'
                colorInner.classList.remove('copied')
            }, 650);
        })
        .catch(err => {
            console.error('Error: ', err);
        });
})
