/*    @@ click on easy button 
//         @@ generates 3 new colored squares fr the color arr
//         @@ pick 1 color
//         @@ update
//         @@ hide the other 3 squares
*/
/*    @@ click on hard button 
//         @@ generates 6 new colored squares fr the color arr
//         @@ pick 1 color
//         @@ update
//         @@ show the other 3 squares
*/
let numOfSquares = 6;
let colors = generateRandomColors(numOfSquares);
let squares = document.querySelectorAll(".square");
let selectedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");


resetButton.addEventListener("click", function() {
    colors = generateRandomColors(6)
    // pick a new random color from array
    selectedColor = pickColor();
    colorDisplay.textContent = selectedColor;

    for (i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#233223";
});

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColors(3);
    selectedColor = pickColor();
    colorDisplay.textContent = selectedColor;
    // add logic for hard button with if else 
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(6);
});

colorDisplay.textContent = selectedColor;

for ( i = 0; i < squares.length; i++ ) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener('click', function(){
        
    let clickedColor = this.style.background;

    if (clickedColor === selectedColor ) {
        resetButton.textContent="play again";
        messageDisplay.textContent="correct"
        changeColors(clickedColor);
        h1.style.background = clickedColor;
    } else {
                // alert('wrong!');
        this.style.background = "#F7F7F7";
        messageDisplay.textContent= "try again"
        }
    });
        // when user clicks on selected, change the background color from blue to white
};

function changeColors(color) {
    //loop through squares=
    for (let i = 0; i < squares.length; i++) {
    //change each square color to match given color
    squares[i].style.background = color;
    }
}

/* 
function to pick a random color element from the colors array 
*/

function pickColor() {
    //pick a random number to the index of this array
    let random = Math.floor(Math.random() * colors.length);  
    //use this variable to access that
    return colors[random];

}

function generateRandomColors(num) {
    let arr = [];
//repeat num times
    for ( i = 0; i < num; i++ ) {
        arr.push(randomColor());

    }
//add num numbers
    return arr;

}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}