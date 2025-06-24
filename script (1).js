function convertNumber() {
  const value = document.getElementById("inputNumber").value;
  const base = parseInt(document.getElementById("inputBase").value);
  const resultDiv = document.getElementById("conversionResult");

  let decimal;
  try {
    decimal = parseInt(value, base);
    if (isNaN(decimal)) throw "Invalid input";
  } catch (e) {
    resultDiv.innerText = "Input tidak valid!";
    return;
  }

  const absValue = Math.abs(decimal); // untuk biner tetap positif
  const binary = absValue.toString(2).padStart(4, '0'); // 4-bit positif
  const octal = decimal.toString(8);  // asli, bisa minus
  const hex = decimal.toString(16).toUpperCase(); // asli, bisa minus

  resultDiv.innerHTML =
    `Desimal: ${decimal}<br>` +
    `Biner: ${binary}<br>` +
    `Oktal: ${octal}<br>` +
    `Hexadesimal: ${hex}`;
}

function calculate() {
  const num1 = document.getElementById("num1").value;
  const base1 = parseInt(document.getElementById("base1").value);
  const num2 = document.getElementById("num2").value;
  const base2 = parseInt(document.getElementById("base2").value);
  const operation = document.getElementById("operation").value;
  const resultDiv = document.getElementById("arithmeticResult");

  let a = parseInt(num1, base1);
  let b = parseInt(num2, base2);

  if (isNaN(a) || isNaN(b)) {
    resultDiv.innerText = "Input tidak valid!";
    return;
  }

  let result;
  switch (operation) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/":
      if (b === 0) {
        resultDiv.innerText = "Tidak bisa dibagi 0!";
        return;
      }
      result = Math.floor(a / b);
      break;
    default:
      resultDiv.innerText = "Operasi tidak dikenal!";
      return;
  }

  const binary = toTwosComplement(result, 8); // 8-bit 2's complement
  const octal = result.toString(8);           // asli, bisa minus
  const hex = result.toString(16).toUpperCase(); // asli, bisa minus

  resultDiv.innerHTML =
    `Hasil Desimal: ${result}<br>` +
    `Biner: ${binary}<br>` +
    `Oktal: ${octal}<br>` +
    `Hexadesimal: ${hex}`;
}

function toTwosComplement(n, bits) {
  if (n >= 0) {
    return n.toString(2).padStart(bits, '0');
  } else {
    return (Math.pow(2, bits) + n).toString(2).padStart(bits, '0');
  }
}
