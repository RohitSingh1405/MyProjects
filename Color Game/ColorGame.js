var numSquares=6;
var colors= generateRandomColors(numSquares);
var h1=document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

colorDisplay.textContent=pickedColor;

easyBtn.addEventListener("click",function()
{
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
numSquares=3;
colors=generateRandomColors(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
	if(colors[i])
	{
		squares[i].style.background=colors[i];
	}
	else
	{
		squares[i].style.display="none";
	}
}
});


hardBtn.addEventListener("click",function()
{
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
numSquares=6;
colors=generateRandomColors(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
		squares[i].style.background=colors[i];	
		squares[i].style.display="block";
}
});



resetButton.addEventListener("click",function()
{
	numSquares=6;
 colors=generateRandomColors(numSquares);
 pickedColor=pickColor();
 colorDisplay.textContent=pickedColor;
 messageDisplay.textContent="";
 this.textContent="New Colors"
 for(var i=0;i<squares.length;i++)
 {
 	squares[i].style.backgroundColor=colors[i];
 }
 h1.style.backgroundColor="steelblue";

});
for(var i=0; i < squares.length; i++)
{
	//Adding initial square color
	squares[i].style.backgroundColor=colors[i];
    
    //Add click listener to square
    squares[i].addEventListener("click",function()
    {
     //grab color of a clicked square
     var clickedColor=this.style.backgroundColor;
     //Compare
     if(clickedColor===pickedColor)
     	{
     	messageDisplay.textContent="Correct"; 
     changeColors(clickedColor);
     h1.style.backgroundColor=clickedColor;
     resetButton.textContent="Play Again?";
	
     	}
     	     else
     {
     	this.style.background="#232323"
        messageDisplay.textContent="Try Again"; 
        
     }
     	 });
}
function changeColors(color)
{
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=color;
	}
}
function pickColor()
{
	var random=Math.floor(Math.random() * colors.length);
     return colors[random];
}
function generateRandomColors(num)
{
	var arr=[];
	for (var i =0;i<num;i++) {
		arr.push(randomColor());
		
	}
	return arr;
}
function randomColor()
{
	var R=Math.floor(Math.random() *256);
	var G=Math.floor(Math.random() *256);
	var B=Math.floor(Math.random() *256);
	return "rgb("+R+", "+G+", "+B+")";

}