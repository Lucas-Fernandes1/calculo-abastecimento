
const rentabilidadeAlcoolOuGasolina = () => {
    var inGasolina = document.getElementById("inGasolina");
    var inEtanol = document.getElementById("inEtanol");
    let outResult = document.getElementById("outResult");

    let valorAlcool = inEtanol.value;
    let valorGasolina = inGasolina.value;
    let valorVantagem = valorGasolina / valorAlcool

    if (!valorAlcool || !valorGasolina) {
        alert("Verifique o preenchimento");
        return;
    }

    if (valorVantagem < 1.30) {
        outResult.textContent = "Não há vantagem em abastecer com etanol, para que hava vantagem o preço da gasolina deve ser menor que: R$ " + valorParaVantagem().toFixed(2).replace(".", ",");
    } else {
        outResult.textContent = "É mais vantajoso bastecer com etanol.";
    }
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", rentabilidadeAlcoolOuGasolina);

const valorParaVantagem = () => {
    var valorGasolina = inGasolina.value;

    var calculo = valorGasolina / 1.30

    return calculo;
}
