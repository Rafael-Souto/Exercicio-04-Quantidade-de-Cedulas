// Um	caixa	precisa	de um	programa que o auxilie no	fornecimento de valores	com	o	mínimo de cédulas/moedas possíveis. Monte	um programa	que	seja fornecido o valor (inteiro) a ser fornecido e tenha como saída	o	total	de cédulas utilizadas, nos valores de	100, 50, 20, 10,	5, 2 e 1.

alert('SAQUE COM MENOR NÚMERO DE CÉDULAS \n')

// Entrada do valor digitado pelo usuário
valor = parseInt(prompt("Digite o valor desejado: "))
alert('')

// Condições para disponibilizar o menor número de cédulas
if(valor >= 100){
  alert('Cédulas de 100: ' + parseInt(valor / 100))
  valor = valor % 100
}

if(valor >= 50){
  alert('Cédulas de 50: ' + parseInt(valor / 50))
  valor = valor % 50
}

if(valor >= 20){
  alert('Cédulas de 20: ' + parseInt(valor / 20))
  valor = valor % 20
}

if(valor >= 10){
  alert('Cédulas de 10: ' + parseInt(valor / 10))
  valor = valor % 10
}

if(valor >= 5){
  alert('Cédulas de 5: ' + parseInt(valor / 5))
  valor = valor % 5
}

if(valor >= 2){
  alert('Cédulas de 2: ' + parseInt(valor / 2))
  valor = valor % 2
}

if(valor > 0){
  alert('Cédula de 1: ' + parseInt(valor / 1))
}

alert('\nObrigado! ')