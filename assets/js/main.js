function converter() {
  let valorElemento = document.getElementById("valor")
  let change = valorElemento.value
  let valorFloat = parseFloat(change)
  let final = valorFloat * 5.06
  let elementoValorConvertido = document.getElementById("valorConvertido")
  var valorConvertido = "O resultado em dolares é U$" + final.toFixed(2)
  elementoValorConvertido.innerHTML = valorConvertido
}

function converterEuro() {
  let valorElemento = document.getElementById("valor")
  let change = valorElemento.value
  let valorFloat = parseFloat(change)
  let final = valorFloat * 5.52
  let elementoValorConvertido = document.getElementById("valorConvertido")
  var valorConvertido = "O resultado em Euros é U$" + final.toFixed(2)
  elementoValorConvertido.innerHTML = valorConvertido
}

function converterBtc() {
  let valorElemento = document.getElementById("valor")
  let change = valorElemento.value
  let valorFloat = parseFloat(change)
  let final = valorFloat * 0.0000050
  let elementoValorConvertido = document.getElementById("valorConvertido")
  var valorConvertido = "O resultado em Bitcoin é BTC " + final
  elementoValorConvertido.innerHTML = valorConvertido
}