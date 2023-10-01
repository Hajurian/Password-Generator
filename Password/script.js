let i = 0; //Silly typewriter stuff for the title 
const header = "Password Generator"
function typeWriter(){
    setTimeout(typeWriter,500);
    if(i < 1){
        document.getElementById("password").innerText = header + "_";
        i++;
    } else {
        document.getElementById("password").innerText = header;
        i=0;
    }
}
typeWriter();
//variables
const password = document.getElementById("textbox");
const number = document.getElementById("numchar");
const range = document.getElementById("characters");
const button = document.getElementById("generate");
const copy = document.getElementById("copy");
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456790~!@#$%^&*-+"; 
function generatePassword(){
    let pass = "";
    for(let i = 0; i <range.value; i++){
        let rand = Math.floor(Math.random()*characters.length);
        pass += characters.charAt(rand);
    }
    console.log(pass);
    password.value = pass;
    console.log(pass);
}

range.addEventListener("input", function(){
    number.innerText = range.value;
});

button.addEventListener("click",generatePassword);
copy.addEventListener("click", function(){
    navigator.clipboard.writeText(password.value);
});