var a = "";
var numbers = [];
var number = "";
var z = "";
var dec = false

function numberPress() {
  document.getElementById("result").innerHTML = z
  console.log(z,a);
}

function AC() {
  a = "";
  z = "";
  numbers = [];
  console.log(z,a);
  document.getElementById("result").innerHTML = "0";
}

function nine(){
  a+= "9";
  z+= "9"
  numberPress();
}

function eight(){
  a+= "8";
  z+= "8";
  numberPress();
}

function seven(){
  a+= "7";
  z+= "7";
  numberPress();
}

function six(){
  a+= "6";
  z+= "6";
  numberPress();
}

function five(){
  a+= "5";
  z+= "5";
  numberPress();
}

function four(){
  a+= "4";
  z+= "4";
  numberPress();
}

function three(){
  a+= "3";
  z+= "3";
  numberPress();
}

function two(){
  a+= "2";
  z+= "2";
  numberPress();
}

function one(){
  a+= "1";
  z+= "1";
  numberPress();
}

function zero(){
  a+= "0";
  z+= "0";
  numberPress();
}

function decimal(){
  if (dec === false){
  a+= ".";
  z+= ".";
  numberPress();
  dec = true;
}
}


function addition() {
  document.getElementById("result").innerHTML = "+";
  numbers.push(z);
  a += "+";
  dec = false;
  z = "";
}

function equals() {
  numbers.push(z);
  var numb = eval(a);
  a = numb;
  console.log(numb, a);
  a = "";

  document.getElementById("result").innerHTML = numb;

  z = "";
if (Number.isNaN(eval(a))) {
  a = "";
  z = "";
  numbers= [];
  number = "";
    document.getElementById("result").innerHTML = "ERROR";
}
}
