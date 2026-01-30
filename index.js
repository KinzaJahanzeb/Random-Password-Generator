const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-clone");
const alertContainerEl = document.querySelector(".alert_container");

btnEl.addEventListener("click",()=>{createPassword();});
copyIconEl.addEventListener("click",()=>{copyPassword();
    if(inputEl.value){
        alertContainerEl.classList.remove("active");
        setTimeout(()=>{
            alertContainerEl.classList.add("active");
        },2000);
    }
});
function createPassword(){
    const chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 8;
    let password="";
    for(let index = 0; index<passwordLength;index++){
        const randomNum = Math.floor(Math.random()*chars.length);
        password += chars[randomNum];
    }
    inputEl.value = password;
    alertContainerEl.innerText=password+"copied!";
}
function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
}