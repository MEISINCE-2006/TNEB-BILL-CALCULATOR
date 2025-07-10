function calculateBill() {
  const units = parseFloat(document.getElementById('units').value);
  const connection = document.getElementById('connection').value;
  let billAmount = 0;
  if (isNaN(units) || units < 0) {
    document.getElementById('result').innerHTML = "⚠️ Please enter a valid number of units!";
    return;
  }
  const tamilNaduTariff = {
    "Domestic": (units) => {
      if (units <= 100) return 0;
      else if (units <= 200) return (units - 100) * 2.25;
      else if (units <= 400) return (100 * 2.25) + (units - 200) * 4.5;
      else return (100 * 2.25) + (200 * 4.5) + (units - 400) * 6;
    },
    "NonDomestic": (units) => units * 7.5,
    "Agricultural": () => 0,
    "Industrial": (units) => units * 8.0
  };
  if (tamilNaduTariff[connection]) {
    billAmount = tamilNaduTariff[connection](units);
    document.getElementById('result').innerHTML = `🔋 Total Bill Amount ( ${connection}): ₹${billAmount.toFixed(2)}`;
  } else {
    document.getElementById('result').innerHTML = "⚠️ Invalid connection type selected!";
  }
}
