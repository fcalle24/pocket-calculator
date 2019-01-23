var a = "";
var numb1;
var numb2;
var sym;
var extra = "0";
var b;
var z;
var dec = false;
var pressAgain = false;

function numberPress() {
  document.getElementById("result").innerHTML = a;
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
