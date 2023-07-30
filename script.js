function calculateCuts() {
  const boxWidth = parseFloat(document.getElementById('boxWidth').value);
  const boxHeight = parseFloat(document.getElementById('boxHeight').value);
  const boxDepth = parseFloat(document.getElementById('boxDepth').value);
  const sheetWidth = parseFloat(document.getElementById('sheetWidth').value);
  const sheetHeight = parseFloat(document.getElementById('sheetHeight').value);

  if (!isNaN(boxWidth) && !isNaN(boxHeight) && !isNaN(boxDepth) && !isNaN(sheetWidth) && !isNaN(sheetHeight)) {
    const usedArea = (boxWidth * boxHeight * 2) + (boxWidth * boxDepth * 2) + (boxHeight * boxDepth * 2);
    const totalArea = sheetWidth * sheetHeight;
    const waste = (totalArea - usedArea) / 10000; // Convertendo para metros quadrados

    const result = `Medida utilizada da folha: ${usedArea.toFixed(2)} cm² (${(usedArea / 10000).toFixed(4)} m²)<br>Desperdício: ${waste.toFixed(2)} cm² (${(waste / 10000).toFixed(4)} m²)`;

    document.getElementById('result').innerHTML = result;
  } else {
    document.getElementById('result').innerHTML = 'Por favor, insira valores válidos.';
  }
}
