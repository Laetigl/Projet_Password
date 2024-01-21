// let randomPassWord = document.getElementById("inputuser")

// function passwordGenerator() {
//     let mixCharacters = "abcdefghijklmopqrstuvwxyz0123456789ABCDEFGHIJLKMNOLPQRSTUVWXYZ/*.?,)($*€#@&<>%ù;"
//     let maxLengthPassword = 20
//     let mdp

//     for (let index = 0; index < maxLengthPassword; index++) {
//         let Mixnumber = Math.floor(Math.random()*mixCharacters.length)
//         mdp += mixCharacters.substring(Mixnumber,Mixnumber +1)
//     }
// }

//-------Button clipboard------
let btnClipboard = document.getElementById("")

function copyPaste() {
    let textCopy = document.getElementById("inputuser") 
    textCopy.select //select all the content put in the input

    navigator.clipboard.writeText(textCopy.value) //take content of the field in the input
    alert(`New cat name copied` + textCopy.value)
}


//Creation of the 4 arrays for each criteria
let boxupper = document.getElementById("upper")
let boxlower = document.getElementById("lower")
let boxnbr = document.getElementById("nbr")
let boxsym = document.getElementById("sym")

let arrayUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let arrayLower = ["a","b","c","ç","d","e","f","g","h","i","j","k","l","m","n","o","p","k","r","s","t","u","v","w","x","y","z"]
let arrayNumbers = ["0","1","2","3","4","5","6","7","8","9"]
let arraySymbols = ["@","&"," '' "," ' ","(",")","§","!","*","$","€","?",";",".",",","/",":","+","=",">","<"]

let emptyArray; 
let randomArray

let clickGenerator = document.querySelector("button")

function mixCharacters() {
    emptyArray = [] //empty array that'll be fill with 
    
    //In each condition (4) we'll push inside in a loop the index separetely in the "emptyarray"
    if (boxupper.checked) { 
        for (let index = 0; index < arrayUpper.length; index++) {
            emptyArray.push(arrayUpper[index]) 
        }
    } 
    
    if(boxlower.checked){
        for (let index = 0; index < arrayLower.length; index++) {
            emptyArray.push(arrayLower[index])
        }
    } 
    
    if(boxnbr.checked){
        for (let index = 0; index < arrayNumbers.length; index++) {
            emptyArray.push(arrayNumbers[index])
        }
    } 
    
    if(boxsym.checked){
        for (let index = 0; index < arraySymbols.length; index++) {
            emptyArray.push(arraySymbols[index])
        }
    }
    console.log(emptyArray);
}


function lengthArray() { //function for intergrating the length of the input number into the new array
    let newpassword ="" //password str
    let passWordArray=[]  //array with the characters
    let numberCharacter = document.querySelectorAll("input")[1]
    let pwdSize = numberCharacter.value //accesisng the value of the length input to put in the loop

    for (let index = 0; index < pwdSize; index++) { //depending on the length of the choosen characters
        randomArray = Math.floor(Math.random()*emptyArray.length) //create another array who will take randomly the empty array full in before in the previous function
        passWordArray.push(emptyArray[randomArray]); //push each character(taken randomly) from the array into the array password
        
        // document.getElementById("inputuser").value = randomArray
    }
    console.log(passWordArray);
    // passWordArray = randomArray.substring(randomArray, randomArray+1)
    newpassword = passWordArray.join("") //put all the string together
    console.log(newpassword)
    document.getElementById("inputuser").value = newpassword //assigning the variable
    

}

clickGenerator.addEventListener('click', ()=>{
    mixCharacters()
    lengthArray()
})