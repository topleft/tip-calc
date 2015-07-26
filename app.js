// alert("it is working?");


function getUserInput(elem, index){
  var value = document.getElementsByTagName(elem)[index].value;
  return parseFloat(value);
}


function calcTip (total){
    var tip = total * 0.20;
    tip = tip.toFixed(2);
    return tip;
}

function evaluateAndPostTip(tip, where) {
  if (isNaN(tip)) {
    where.innerHTML = "Please enter a valid dollar amount";
  }
  else {
    where.innerHTML = "You should tip: $"+tip;
  }
}

// function addListener(elem, index, action, func) {
//   var button = document.getElementsByTagName(elem)[index];
//   button.addEventListener(action, function(e){
//     e.preventDefault();
//     return func;
//   });
// }


function runCalc(){
  var tipSpot = document.getElementById("tip");
  var button = document.getElementsByTagName("button")[0];

  button.addEventListener("click", function(e){
    e.preventDefault();
    var userInput = getUserInput("input", 0);
    var tip = calcTip(userInput);
    evaluateAndPostTip(tip, tipSpot);
  });
}


runCalc();

