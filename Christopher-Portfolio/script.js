// DARK MODE
document.getElementById("darkBtn").onclick=()=>{
document.body.classList.toggle("dark");
}

// SCROLL ANIMATION
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("show");
}
});
});

// TYPING EFFECT
const text=["GRAPHIC DESIGNER","SALES SPECIALIST","MUSIC PRODUCER"];
let i=0,j=0,cur="",letter="";

function type(){
if(i<text.length){
if(j<=text[i].length){
letter=text[i].slice(0,j++);
document.querySelector(".typing").textContent=letter;
}
else{
i++;j=0;
setTimeout(type,1000);
return;
}
}
setTimeout(type,160);
}
type();

// ADMIN EDITOR DEMO
function updateText(){
document.getElementById("aboutText").textContent=
document.getElementById("editor").value;
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", async e=>{
e.preventDefault();

let data = new FormData(form);

let response = await fetch("send.php",{
method:"POST",
body:data
});

let result = await response.text();

if(result=="success"){
alert("Message sent successfully!");
form.reset();
}else{
alert("Error sending message.");
}
});