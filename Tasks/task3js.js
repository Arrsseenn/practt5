function insertRandomNumber(){
//1
const randomNumber = Math.random();
const pElement = document.getElementById("random-number");
 pElement.textContent = "Випадкове число: " + randomNumber;
//2
 const one = document.getElementById("1").textContent = Math.E;
 const two = document.getElementById("2").textContent = Math.PI;
 const thri = document.getElementById("3").textContent = Math.log10(Math.E);
 const four = document.getElementById("4").textContent = Math.log2(Math.E);
 const fife = document.getElementById("5").textContent = Math.log(10);
 const six = document.getElementById("6").textContent = Math.log(2);
 const seven = document.getElementById("7").textContent = Math.sqrt(2);
 const eaig = document.getElementById("8").textContent = Math.sqrt(0.5);
//3
 const ones = document.getElementById("9").textContent = Math.cos(angleInRadians);
 const twos = document.getElementById("10").textContent = Math.acos(0);
 const thris = document.getElementById("11").textContent = Math.sin(0);
 const fours = document.getElementById("12").textContent = Math.sin(Math.PI / 2);
 const fifes = document.getElementById("13").textContent = Math.asin(1);
}


