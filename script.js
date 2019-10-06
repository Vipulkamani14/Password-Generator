var passLen = prompt("Length of your password? Pick a number between 8 and 128.");


if(passLen < 8 || passLen > 128) {
    alert("Number not in range.");
    window.location.reload(false);
}

var genButton = document.getElementById("button1");
var clipboard = document.getElementById("button2");
var text = document.getElementById("password");
var possibleValues = "";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var special = "/_&$";
var password = "";

if(confirm("Do you want uppercase characters?")) {
    possibleValues = possibleValues + uppercase;
}
if(confirm("Do you want lowercase characters?")) {
    possibleValues = possibleValues + lowercase;
}
if(confirm("Do you want numeric characters?")) {
    possibleValues = possibleValues + numeric;
}
if(confirm("Do you want special characters?")) {
    possibleValues = possibleValues + special;
}


function copyText() {
    text.select();
    // text.setSelectionRange(8,128);
    document.execCommand("copy");
}

function generator() {
    for (var i = 0; i < passLen; i++) {
        password = password + possibleValues.charAt(Math.floor(Math.random() * possibleValues.length));
    }
    text.textContent = password;
    password = "";
}

clipboard.addEventListener("click", copyText);
genButton.addEventListener("click", generator);





