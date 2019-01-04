let colors = [
        "rgb(255, 0, 0)",
        "rgb(255, 255, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 255, 255)",
        "rgb(0, 0, 255)",
        "rgb(255, 0, 255)",
      
]

let squares = document.querySelectorAll(".square");
let selectedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

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
easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColors(3);
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
});

colorDisplay.textContent = selectedColor;

    for ( i = 0; i < squares.length; i++ ) {
        squares[i].style.background = colors[i];
        squares[i].addEventListener('click', function(){
            // grab the color of the clicked squares
            let clickedColor = this.style.background;
            // compare it to the color of the selected square
            if (clickedColor === selectedColor ) {
            messageDisplay.textContent="correct"
            changeColors(clickedColor);
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