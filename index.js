// Actualizar el valor mostrado para cada pregunta cuando se cambie el rango
document.getElementById('pregunta1').addEventListener('input', function () {
    document.getElementById('valorPregunta1').textContent = this.value;
});

document.getElementById('pregunta2').addEventListener('input', function () {
    document.getElementById('valorPregunta2').textContent = this.value;
});

document.getElementById('pregunta3').addEventListener('input', function () {
    document.getElementById('valorPregunta3').textContent = this.value;
});

document.getElementById('pregunta4').addEventListener('input', function () {
    document.getElementById('valorPregunta4').textContent = this.value;
});

document.getElementById('pregunta5').addEventListener('input', function () {
    document.getElementById('valorPregunta5').textContent = this.value;
});