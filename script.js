const display = document.querySelector("#input")
const copy = document.querySelector(".fa-copy")
const generate = document.querySelector("#generate")
const shhi = document.querySelector("#sh-hi")

const length = 15;
const symbol = "!@#$%^&*()-_=+[]{}|;:',.<>/?`~";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letter = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const allChars = symbol+upperCase+letter+lowerCase;

const randomNumber=()=>{
    let password = "";
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=letter[Math.floor(Math.random()*letter.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length)
        {
        password+=allChars[Math.floor(Math.random()*allChars.length)];
        
    }
    display.value=password;
}

const copied=()=>{
    display.select();
    document.execCommand('copy');
}

copy.addEventListener('click',()=>{
    alert("Text Copied " + display.value)
    copied()
})

generate.addEventListener('click',()=>{
    randomNumber()
})

shhi.addEventListener('click',()=>{
    shHi()
})

const shHi=()=>{
     if(display.type==="password"){
        display.type="text";
        shhi.innerText="Hide";
    }
    else{
        display.type="password"
        shhi.innerText="Show";
    }  
}