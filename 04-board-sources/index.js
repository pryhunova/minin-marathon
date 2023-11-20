const board = document.querySelector('#board')
const colors = ['#D705F2', '#3805F2', '#68F205', '#EAF205', '#F20505']
const SQUARES_NUMBER = 810

for (let index = 0; index < SQUARES_NUMBER; index++) {
    const square = document.createElement('div');
    square.classList.add('square')

    // замыкание
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    element.style.backgroundColor = color
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)]
}
 
/* второй вариант записи
for (let index = 0; index < SQUARES_NUMBER; index++) {
    const square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)
    
    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    element.style.backgroundColor = color
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}*/