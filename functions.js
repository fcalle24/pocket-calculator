var a = "";
var numbers = [];
var number = "";

function numberPress() {
  document.getElementById("result").innerHTML = a
  console.log(a,numbers);
}

function AC() {
  a = "";
  numbers = [];
  console.log(a,numbers);
  document.getElementById("result").innerHTML = "0";
}

function nine(){
  a+= "9";
  numberPress();
}

function eight(){
  a+= "8";
  numberPress();
}

function seven(){
  a+= "7";
  numberPress();
}

function six(){
  a+= "6";
  numberPress();
}

function five(){
  a+= "5";
  numberPress();
}

function four(){
  a+= "4";
  numberPress();
}

function three(){
  a+= "3";
  numberPress();
}

function two(){
  a+= "2";
  numberPress();
}

function one(){
  a+= "1";
  numberPress();
}

function zero(){
  a+= "0";
  numberPress();
}

function addition(){
  document.getElementById("result").innerHTML = "+";
  a = Number(a);
   numbers.push(a);
   numbers.push("+")
   a = "";
}

function equals (){
  Number(a);
  numbers.push(a);
 for(i=0;i<numbers.length;i++) {
 let n = numbers[i];
 console.log(n);
 }
}
