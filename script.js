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

var check = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft< 110 && blockLeft>0 && characterTop>= 450) {
        block.style.animation = "none"
        block.style.animation = "display"
        alert("You Lose")
    }

},10);
