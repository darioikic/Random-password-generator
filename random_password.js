const passwordLength = document.getElementById("length");
const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generatedPassword = document.getElementById("generatedPassword");

function generate(){
    
    let length = passwordLength.value;
    if(length === "" || Number(length) < 1){
        console.error("Insert valid length!");
    }else{
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "123456789";
    const symbolChars = "!@#$%^&*()_+=.";

    let allowedChars = "";
    let password = "";

    if(includeLowercase.checked){
        allowedChars += lowercaseChars;
    }

    if(includeUppercase.checked){
        allowedChars += uppercaseChars;
    }

    if(includeNumbers.checked){
        allowedChars += numberChars;
    }

    if(includeSymbols.checked){
        allowedChars += symbolChars;
    }
    if(allowedChars === ""){
        console.error("Include at least one type of characters!");
    }else{

    
    length = Number(length);

    for(let i = 0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
     
    generatedPassword.value = password;

}}}