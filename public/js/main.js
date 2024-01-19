let randomPassWord = document.getElementById("inputuser")

function passwordGenerator() {
    let mixCharacters = "abcdefghijklmopqrstuvwxyz0123456789ABCDEFGHIJLKMNOLPQRSTUVWXYZ/*.?,)($*€#@&<>%ù;"
    let maxLengthPassword = 20
    let mdp

    for (let index = 0; index < maxLengthPassword; index++) {
        let Mixnumber = Math.floor(Math.random()*mixCharacters.length)
        mdp += mixCharacters.substring(Mixnumber,Mixnumber +1)
    }
}

//-------Button clipboard
let btnClipboard = document.getElementById("")

function copyPaste() {
    let textCopy = document.getElementById("inputuser")
    textCopy.select //select the password generated

    navigator.clipboard.writeText(textCopy.value) //take content of the field in the input
    alert(`New cat name copied` + textCopy.value)
}