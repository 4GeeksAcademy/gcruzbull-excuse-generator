import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  console.log("Hello Rigo from the console!");

  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  let whoRandom = who[Math.floor(Math.random() * who.length)]
  let actionRandom = action[Math.floor(Math.random() * action.length)]
  let whatRandom = what[Math.floor(Math.random() * what.length)]
  let whenRandom = when[Math.floor(Math.random() * when.length)]

  let excuse = document.getElementById("excuse")
  
  excuse.innerHTML = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`

  return excuse.innerHTML
};



