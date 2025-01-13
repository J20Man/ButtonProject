const body = document.body;

function setColour(color) {
    body.style.backgroundColor = color;
}

function randColour() {
    const red = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)

    const colour = `rgb(${red}, ${green}, ${blue})`

    body.style.backgroundColor = colour;
    
}

