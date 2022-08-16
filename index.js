const uppercase = 
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercase =
["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers =
["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols =
["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pwds = document.getElementById("pwds")
let pwd2El = document.getElementById("pwd2")
let pwd1El = document.getElementById("pwd1")
let symCheck = document.getElementById("sym-check")

const lenPwd = 15

pwd1El.textContent = "testingtesting"

let generatePwd = () => {
  pwd1El.textContent = getPwd()
  pwd2El.textContent = getPwd()
  pwds.classList.remove("hidden")
}

let getPwd = () => {
  let characters = [...uppercase, ...lowercase, ...numbers]
  if (symCheck.checked) characters = [...characters, ...symbols]
  console.log(characters)
  let pwd = ""
  let rndI
  for (let i = 0; i < lenPwd; i++) {
    rndI = Math.floor(Math.random()*characters.length)
    pwd += characters[rndI]
  }
  console.log(pwd)
  return pwd
}

pwd1El.addEventListener('click', (event) => {
  const content = pwd1El.textContent
  navigator.clipboard.writeText(content)
  console.log("pwd copied to clipboard")
  window.alert("copied to clipboard")
})

pwd2El.addEventListener('click', (event) => {
  const content = pwd2El.textContent
  navigator.clipboard.writeText(content)
  console.log("pwd copied to clipboard")
  window.alert("copied to clipboard")
})

