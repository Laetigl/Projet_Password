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
let arrayUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let arrayLower = ["a","b","c","ç","d","e","f","g","h","i","j","k","l","m","n","o","p","k","r","s","t","u","v","w","x","y","z"]
let arrayNumbers = [0,1,2,3,4,5,6,7,8,9]
let arraySymbols = ["@","&"," '' "," ' ","(",")","§","!","*","$","€","?",";",".",",","/",":","+","=",">","<"]
let numberCharacter = document.querySelectorAll("input")[1].type

let emptyArray= []
let randomArray

let clickGenerator = document.querySelector("button")

function mixCharacters() {
    if (upper==true) {
        emptyArray.push(arrayUpper)

    } if(lower==true){
        emptyArray.push(arrayLower)

    } if(nbr==true){
        emptyArray.push(arrayNumbers)

    } if(sym == true){
        emptyArray.push(arraySymbols)
    }

    randomArray = Math.floor(Math.random()*emptyArray.length)
    
} //peut-être faire un switch?

clickGenerator.addEventListener('click', mixCharacters)
