// alert("it is working?");

var button = document.getElementsByTagName("button")[0];
console.log(button);

button.addEventListener("click", function (e) {
  e.preventDefault();

  // grab form input and store it in total, then convert to number
  var total = document.getElementsByTagName('input')[0].value;
  total = parseInt(total);

  // calculate tip
  var tip = total * 0.2;
  tip = tip.toFixed(2);

  //fill in tip amount
  var tipSpot = document.getElementById("tip");
  tipSpot.innerHTML ="$"+tip;
});