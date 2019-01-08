function AC() {
  let clear = "";
    document.getElementById("result").innerHTML = clear;
}


displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;
    calculationFinished = false;

function digits() {
  var result = document.getElementById("result");
   if ((result.value == "") && num == "0") {
     return;
}
else if (calculationFinished == true) {
        result.value = num;
        calculationFinished = false;
    }
    else {
     result.value += num;
   }
}
