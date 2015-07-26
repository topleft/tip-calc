// alert("it is working?");


function getUserInput(elem, index){
  var value = document.getElementsByTagName(elem)[index].value;
  return parseFloat(value);
}


function calcTip (total, percent){
    var tip = total * percent;
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
    var userAmt = getUserInput("input", 0);
    var userPercent = getUserInput("select", 0);
    var tip = calcTip(userAmt, userPercent);
    evaluateAndPostTip(tip, tipSpot);
  });
}


runCalc();

