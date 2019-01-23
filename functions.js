var a = "";
var numb1;
var numb2;
var sym;
var extra = "0";
var b;
var z;
var dec = false;
var pressagain = false;

function numberPress() {
  document.getElementById("result").innerHTML = a;
}

function equals() {
  numb2 = a
  if (sym === "-" && numb2 < 0) {
    sym = "+";
    numb2 = -1 * numb2;
  }
let result = eval(numb1 + sym + numb2);
  b = Number(result);
  b = parseFloat((b).toFixed(2));
  if (result > 999999999 || result < 0.00001 && result > 0) {
      z = b.toExponential();
    } else {
      z = b;
    }
  document.getElementById("result").innerHTML = z;
  a = result;
  console.log(result, a, numb1, numb2);
}

function AC() {
  a = "";
  b = "";
  z = "";
  numb1 = "";
  sym = "";
  result = "";
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

function decimal(){
  if (dec === false){
  a+= ".";
  numberPress();
  dec = true;
}
}


function addition() {
  numb1 = a;
  a = "";
  sym = "+";
  document.getElementById("result").innerHTML = sym;
  console.log(numb1);
  dec = false;
}


