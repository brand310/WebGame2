var character = document.getElementById("character");
var block = document.getElementById("block")


function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate")
    }
    setTimeout(function(){
        character.classList.remove("animate")
    },500) 
}

// this section is a check to see if or when the character var comes in contact with the block var 
var check = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft< 200 && blockLeft>0 && characterTop>= 450) {
        block.style.animation = "none"
        block.style.animation = "display"
        alert("You Lose. Try Again! Press the reset game button.")
    }

},10);

var audio = document.getElementById("gameBGM");
audio.volume = 0.1;


