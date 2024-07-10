let signUpbtn = document.getElementById("signupbtn");
let signInbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let title= document.querySelector(".title");
let text = document.querySelector(".text");

signInbtn.onclick = function(){
    namefield.style.maxHeight = '0';
    title.innerHTML = 'SIGN IN';
    text.innerHTML = "LOST PASSWORD";
    signUpbtn.classList.add("disable");
    signInbtn.classList.remove("disable");
}
signUpbtn.onclick = function(){
    namefield.style.maxHeight = "60px";
    title.innerHTML = "SIGN UP";
    text.innerHTML = " PASSWORD SUGGESTIONS";
    signUpbtn.classList.remove("disable");
    signInbtn.classList.add("disable");
}