///manual erkar hat hat
// const yellow = document.getElementById('yellowball')
// const red = document.getElementById('redball')
// const green = document.getElementById('greenball')
// const purple = document.getElementById('purpleball')
// const body = document.getElementsByClassName('.body')


// const handleYellow = () => {
//     document.body.style.backgroundColor = 'yellow'
// }

// const handleRed = () => {
//     document.body.style.backgroundColor = 'red'
// }

// const handleGreen = () => {
//     document.body.style.backgroundColor = 'green'
// }

// const handlePurple = () => {
//     document.body.style.backgroundColor = 'purple'
// }

// yellow.addEventListener('click', handleYellow)
// red.addEventListener('click', handleRed)
// green.addEventListener('click', handleGreen)
// purple.addEventListener('click', handlePurple)

const container = document.querySelector('.ball-container')

function handleColorChange (event) {
    // let handleClick = event.target.id
    // document.body.style.backgroundColor = handleClick
    let handleClick = event.target.getAttribute('data-color')
    document.body.style.backgroundColor = handleClick
}

container.addEventListener('click', handleColorChange )

