function getUserInput(elem, index){
  var value = document.getElementsByTagName(elem)[index].value;
  return value;
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