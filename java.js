const container = document.querySelector("#container");

function createDivs(grid) {
    for (let i=0; i<(grid)**2; i++) {
        const divs = document.createElement('div');
        divs.classList.add('boxes');
        container.appendChild(divs);
    }
}

createDivs(50);

const boxes = document.querySelectorAll(".boxes");

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'darkgrey';
    })
})

const btn = document.querySelector("#prompt");
btn.addEventListener('click', () => {
    const gridSize = prompt("Enter your desired Grid (Max: 100): ");
    const div2 = document.querySelector('#container');
    div2.innerHTML = '';
    createDivs(gridSize);
    const boxes = document.querySelectorAll(".boxes");

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'darkgrey';
        })
    })
})

