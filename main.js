document.querySelector(".main").onchange = function () {
  let total = Number(document.querySelector("#total").value);
  console.log(total);
  let tip = Number(document.querySelector("#range").value);
  let tipValue = Math.round(total * (tip / 100), 1);
  console.log("tip value " + tipValue);
  document.querySelector("#tip-percent").innerHTML = tip + " %";
  let showTip = (document.querySelector(".show-tip").innerHTML =
    "  " + tipValue + "$");
  let allPayment = tipValue + total;
  document.querySelector("#all-payment").innerHTML = allPayment + "$";
};
