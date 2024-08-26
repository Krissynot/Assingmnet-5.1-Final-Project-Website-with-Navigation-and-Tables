var interalID = 0;
var change = 100; 
//this function would be for the start button
function start(){
var i = 0
var memeImage = document.getElementById("memeImage");
inveralID = setInterval (function(){
memeImage.style.left = change + "px";
//this is were the image will start and then will slowly move over and down to the right
memeImage.style.top = change + "px";
document.getElementById("msg").innerHTML = "X = " + memeImage.style.left + "y = " + memeImage.style.top;
change +=2
},50);
document.getElementById("start").disable = true;
//to make sure after press the start button is disable the statement must be true
document.getElementById("stop").disable = false;

}

function stop(){
    //this part of the function is for the stop button
    clearInterval(interalID);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}