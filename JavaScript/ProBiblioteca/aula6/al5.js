function conta() {}
let prec = Number(window,prompt("Qual o preço do produto"))
let porç = Number(window.prompt("Qual é s porcemtagem do produto"))
let preco = 1850
let porc = 10
let valor = (preco * porc) / 100
let total = preco - valor
let res = document.getElementById('ressult')
res.innerHTML = `<p> O produto custa R$${preco.toFixed(2)}.</p>`
res.innerHTML += `<p>Um desconto de ${porc}% sobre ele será de R$${valor.toFixed(2)}.</p>`
res.innerHTML += `<p>O valor final a ser pago será de R$${total.toFixed(2)}.</p>`

