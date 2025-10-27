const photoBlock = document.querySelector("#photo-block");
const imageNumber = Math.floor(Math.random() * 5) + 1;

const image = document.createElement('img');
image.setAttribute("src", `./photos/${imageNumber}.jpg`);

photoBlock.appendChild(image);