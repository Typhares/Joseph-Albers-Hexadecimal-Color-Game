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

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    selectedColor = pickColor();
    colorDisplay.textContent = selectedColor;
    for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    selectedColor = pickColor();
    colorDisplay.textContent = selectedColor;
    for ( let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    colors = generateRandomColors(6)
    selectedColor = pickColor();
    colorDisplay.textContent = selectedColor;
    for (i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "white";
    this.style.background = "black";
});

colorDisplay.textContent = selectedColor;

for ( i = 0; i < squares.length; i++ ) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener('click', function(){
        
    let clickedColor = this.style.background;

    if (clickedColor === selectedColor) {
        resetButton.textContent="play again";
        messageDisplay.textContent="correct"
        changeColors(clickedColor);
        h1.style.background = clickedColor;
    } else {
                // alert('wrong!');
        this.style.background = "white";
        messageDisplay.textContent= "try again"
        }
    });
     
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