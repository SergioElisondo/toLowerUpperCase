document.querySelector('#lowerCaseButton').addEventListener('click', lowerCaseButton)
document.querySelector('#upperCaseButton').addEventListener('click', upperCaseBuuton)

function lowerCaseButton(){
    const grabbingH2Message = document.querySelector('#mainComment').innerHTML
    let lowerCaseIt = grabbingH2Message.toLocaleLowerCase()
    console.log(lowerCaseIt)
    document.querySelector('#mainComment').innerHTML = lowerCaseIt
}

function upperCaseBuuton() {
    const grabbingH2Message_2 = document.querySelector('#mainComment').innerHTML.toUpperCase()
    console.log(grabbingH2Message_2)
    document.querySelector('#mainComment').innerHTML = grabbingH2Message_2
}