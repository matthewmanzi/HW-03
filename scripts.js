
//Array definitions:

const numArray = ["1","2","3","4","5","6","7","8","9","0"] //10

const lowArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] //26

const upArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] //26

const symArray = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","`","~","[","]","{","}",";",":","'",",","<",".",">","/","?"] //29



//Empty arrays for password and in-loop holding array:

const pw = [];

const passArray = [];


//global declarations, javascript doesn't like when you call variables that don't exist so you have to call them, even if just for the sake of just saying it:

var pwLength;
var lowChoice;
var upChoice;
var numChoice;
var symChoice;
var password;


//input grabs:

function pwLengthGrab() {
   return document.getElementById("pwNumber").value; //password length
    }

function pwLowGrab() {
    if (document.getElementById("useLowYes").checked){ //use lowercase?
        lowChoice = true;
    }
    else if (document.getElementById("useLowNo").checked){
        lowChoice = false;
    }
    else {
        lowChoice = false; //default to "no" if no selection made
    }
}


function pwUpGrab() {
    if (document.getElementById("useUpYes").checked){ //use uppercase?
        upChoice = true;
    }
    else if (document.getElementById("useUpNo").checked){
        upChoice = false;
    }
    else {
        upChoice = false; //default to "no" if no selection made
    }
}


function pwNumGrab() {
    if (document.getElementById("useNumYes").checked){ //use numbers?
        numChoice = true;
    }
    else if (document.getElementById("useNumNo").checked){
        numChoice = false;
    }
    else {
        numChoice = false; //default to "no" if no selection made
    }
}


function pwSymGrab() {
    if (document.getElementById("useSymYes").checked){ //use symbols?
        symChoice = true;
    }
    else if (document.getElementById("useSymNo").checked){
        symChoice = false;
    }
    else {
        symChoice = false; //default to "no" if no selection made
    }
}


//Main sequence: issued when submit button is clicked. Connects the grabs to the variables, checks for valid parameters, runs RNG on the arrays, runs RNG on the outputs of the arrays to give a character to be put into the password, iterates until it meets the specified length, condenses the array into a string, then alerts the user to the generated password:

function submitAns() {


//in-function declarations:

    pwLength = pwLengthGrab();
    useLow = pwLowGrab();
    useUp = pwUpGrab();
    useNum = pwNumGrab();
    useSym = pwSymGrab();
 

//sanity checks:

    if ((pwLength < 8) || (pwLength > 128) || (isNaN(pwLength))) {
        alert("Your password can only be regenerized using between 8 and 128 numbers, please try again.");
        return; //make sure password meets length requirements and is a number
    }
    else {}

    if ((!lowChoice) && (!upChoice) && (!numChoice) && (!symChoice)) {
        alert("Please choose at least one category of characters from which to regenerize your password.");
        return; //make sure at least one "yes" is checked
    }
    else {}


//Submit the form answers to the RNG functions once parameters are deemed valid:
    
    document.getElementById("pwForm").submit();
  

//Loop through the arrays, only pull from arrays in use, put into new array, randomly select from new array, append to password, repeat until length is met:

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


// based on answers to prompts, the following may or may not be invoked to push their RNG each pass to a holding array for that pass:


    if (numChoice) {   //if the user answered "yes" (or "OK"), then put the result of the corresponding function into the holding array for each iteration pass, otherwise do nothing
        passArray.push(numGen());
    }           

    if (lowChoice) { //same for lowercase
        passArray.push(lowGen());
    }

    if (upChoice) { //same for uppercase
        passArray.push(upGen());
    }

    if (symChoice) { //same for symbols
        passArray.push(symGen());
    }


//now take the holding array and randomly select a finalist to be added to the password for this pass, append to de novo password, then start over:

    var q = passArray.length;
    var rando = Math.floor(Math.random() * q);
    pw.push(passArray[rando]);
    } //end of for loop


//Stay with me, we are still inside the submission function; last thing to do is to print the password once outside the for loop by invoking this function...

printPw(); 
} //end of submission function


//...and finally here is the definition of the function to turn the completed password array into a string and tell the user all about it:

function printPw() {

    password = pw.join('');
    console.log(password);
    alert("SUCCESS! Your regenerized password is: " + password);
   }

//end
   
