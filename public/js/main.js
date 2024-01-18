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