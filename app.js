/** 
    * click on easy button 
    *generates 3 new colors  fr the color arr
    *pick 1 color
    *update
    *hide the other 3 
*/
/** *click on hard button 
    *generates 6 new colors fr the color arr
    *pick 1 color
    *update
    *show the other 3 
*/

let numOfSquares = 6;
let colors = generateRandomColors(numOfSquares);
let squares = document.querySelectorAll(".square");
let selectedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
// let toggleBtns = document.querySelectorAll(".toggle");
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
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    selectedColor = pickColor();
    colorDisplay.textContent = selectedColor;
    for ( let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    //generates all new colors
    // colors = generateRandomColors(6)
    colors = generateRandomColors(numOfSquares);
    //pick a new color 
    selectedColor = pickColor();
    //change the rgb color display banner
    colorDisplay.textContent = selectedColor;
    this.textContent= "new colors";
    messageDisplay.textContent = " ";
 
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "black";
    // this.style.backgroundColor = "white";
});

colorDisplay.textContent = selectedColor;
/* 
adds event listener to each square with a for loop 
*/
for ( i = 0; i < squares.length; i++ ) {
    
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function(){
        //grab color of clicked square   
    let clickedColor = this.style.backgroundColor;

    if (clickedColor === selectedColor) {
        messageDisplay.textContent="you are correct!";
        resetButton.textContent="play again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
    } else {
                // alert('wrong!');
        this.style.backgroundColor = "white";
        messageDisplay.textContent= "try again"
        }
    });
};

/*
change h1 background and all squares to change to winning color
*/
function changeColors(color) {
    //loop through squares
    for (let i = 0; i < squares.length; i++) {
    //change each square color to match winning color
    squares[i].style.backgroundColor = color;
    }
}

/* 
function to pick a randomize color elements from the colors array 
*/

function pickColor() {
    //pick a random number to the index of this array
    let random = Math.floor(Math.random() * colors.length);  
    //use this variable to access that
    return colors[random];

}

/*
this function generates random colors
*/
function generateRandomColors(num) {
    let arr = [];
//repeat num times
    for ( i = 0; i < num; i++ ) {
        arr.push(randomColor());
    }
//add num numbers
    return arr;

}


// function randomColors() {
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}