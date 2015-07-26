

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
    var userAmt = parseFloat(getUserInput("input", 0));
    var userPercent = parseFloat(getUserInput("select", 0));
    var tip = calcTip(userAmt, userPercent);
    evaluateAndPostTip(tip, tipSpot);
  });
}


runCalc();

