/*
Capturar 2 números e fazer as operações matemáticas
de soma, subtração, multiplicação, divisão e resto
da divisão.

E para cada operação, mostrar um alerta com o 
resultado.
*/

let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

//passando esse primeiro número de string para número
//e guardando o novo resultado de volta na variável
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

//criando variável constante
const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;

alert("Soma: " + sum);
alert("Subtração: " + sub);
alert("Multiplicação: " + mult);
alert("Divisão: " + div);