function calculateReturn() {
  let P0 = parseFloat(document.getElementById("initialPrice").value);
  let P1 = parseFloat(document.getElementById("finalPrice").value);
  let D = parseFloat(document.getElementById("dividends").value) || 0;
  let t = parseFloat(document.getElementById("years").value);

  if (!P0 || !P1 || !t) {
    alert("Please fill all required fields");
    return;
  }

  let HPR = (P1 - P0 + D) / P0;
  let annual = Math.pow(1 + HPR, 1/t) - 1;

  document.getElementById("hprResult").innerText =
    "Holding Period Return: " + (HPR * 100).toFixed(2) + "%";

  document.getElementById("annualResult").innerText =
    "Annualized Return: " + (annual * 100).toFixed(2) + "%";
}

function calculateSharpe() {
  let Rp = parseFloat(document.getElementById("avgReturn").value) / 100;
  let Rf = parseFloat(document.getElementById("riskFree").value) / 100;
  let sd = parseFloat(document.getElementById("stdDev").value) / 100;

  if (!Rp || !Rf || !sd) {
    alert("Please fill all fields");
    return;
  }

  let sharpe = (Rp - Rf) / sd;

  document.getElementById("sharpeResult").innerText =
    "Sharpe Ratio: " + sharpe.toFixed(3);
}
