//Task is to create a clean repsonsive interface that generates a random password on-click, with prompts beforehand asking the user whether they would like to satisfy the 0following conditions:

//Must be between 8 and 128 characters
//Prompt for including lowercase 
//Prompt whether to include numbers 
//Prompt for using uppercase 
//Prompt for using special characters 
//Sanity check for user input
//GUI level display output


 // Array declarations
 const numArray = ["1","2","3","4","5","6","7","8","9","0"] //10

 const lowArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] //26

 const upArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] //26

 const symArray = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","`","~","[","]","{","}",";",":","'",",","<",".",">","/","?"] //29


 //Empty arrays for password and holding array
 const pw = [];

 const passArray = [];


 //user setup

var pwLength;
var lowChoice;
var upChoice;
var numChoice;
var symChoice;
var password;





function pwLengthGrab() {
   return document.getElementById("pwNumber").value;
    }

function pwLowGrab() {
    if (document.getElementById("useLowYes").checked){
        lowChoice = true;
    }
    else if (document.getElementById("useLowNo").checked){
        lowChoice = false;
    }
    else {
        lowChoice = false;
    }
}


function pwUpGrab() {
    if (document.getElementById("useUpYes").checked){
        upChoice = true;
    }
    else if (document.getElementById("useUpNo").checked){
        upChoice = false;
    }
    else {
        upChoice = false;
    }
}


function pwNumGrab() {
    if (document.getElementById("useNumYes").checked){
        numChoice = true;
    }
    else if (document.getElementById("useNumNo").checked){
        numChoice = false;
    }
    else {
        numChoice = false;
    }
}


function pwSymGrab() {
    if (document.getElementById("useSymYes").checked){
        symChoice = true;
    }
    else if (document.getElementById("useSymNo").checked){
        symChoice = false;
    }
    else {
        symChoice = false;
    }
}
                        
function submitAns() {

    
    pwLength = pwLengthGrab();
    useLow = pwLowGrab();
    useUp = pwUpGrab();
    useNum = pwNumGrab();
    useSym = pwSymGrab();
    //if ((!lowChoice) && (!upChoice) && (!numChoice) && (!symChoice)) {
    //    alert("Please select at least one type of character to use.");
   // }
    if ((pwLength < 8) || (pwLength > 128) || (isNaN(pwLength))) {
        alert("Your password length must be between 8 and 128 numbers, please try again.");
        return;
    }
    else {}

    
    document.getElementById("pwForm").submit();
  



    for (i=0; i<pwLength; i++) {
    
    //each pass, select an RNG item from each array
    
    function numGen() {
        return numArray[Math.floor(Math.random() * 10)]; //generates a randomly selected number each pass for potential use
    }
    
    function lowGen() {
        return lowArray[Math.floor(Math.random() * 26)]; //generates a randomly selected lowercase each pass for potential use
    }
    
    function upGen() {
        return upArray[Math.floor(Math.random() * 26)]; //generates a randomly selected uppercase each pass for potential use
    }
            
    function symGen() {
        return symArray[Math.floor(Math.random() * 29)]; //generates a randomly selected uppercase each pass for potential use
    }


    // based on answers to prompts, the following may or may not be invoked to push their RNG each pass to a holding array for that pass


    if (numChoice = true) {   //if the user answered "yes" (or "OK"), then put the result of the corresponding function into the holding array for each iteration pass, otherwise do nothing
        passArray.push(numGen());
    }           

    if (lowChoice = true) {
        passArray.push(lowGen());
    }

    if (upChoice = true) {
        passArray.push(upGen());
    }

    if (symChoice = true) {
        passArray.push(symGen());
    }

    //now take the holding array and randomly select a finalist to be added to the password for this pass, then start anew

    var q = passArray.length;
    var rando = Math.floor(Math.random() * q);
    pw.push(passArray[rando]);
    }
printPw();
}

function printPw() {

    password = pw.join('');
    console.log(password);
    alert("WRITE THIS DOWN! THIS MESSAGE WILL SELF-DESTRUCT! Your password is: " + password);
   }

   
