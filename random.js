//got help with this function from stack overflow
function randomArrow() {
    var imageArray = ["left-arrow.png","right-arrow.png"];
    var randomImage = Math.floor(Math.random() * imageArray.length);
    document.body.background = imageArray[randomImage];
}

window.addEventListener("click", function() {
	randomArrow();
})