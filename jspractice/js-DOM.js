document.getElementById("java").innerHTML="hello world this is javascript";

const doc = document.querySelector('.named').innerHTML="this is a change made by query selector"

const tag = document.querySelector('h1');
tag.style.color="blue";
tag.innerHTML="I changed the content using tag"

const eve = document.getElementById("btn")
eve.addEventListener("click", myfnction);

function myfnction (){
    alert ("hello world");
}

var note = document.querySelector(".node");
console.log (note.parentNode);