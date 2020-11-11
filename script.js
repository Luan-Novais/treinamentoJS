// function fazerAcao(nome){
//    var area =  document.getElementById('area');
//    var texto = prompt('qual o seu sobrenome? ');

//    area.innerHTML = nome + '' + texto;
// };

// function adicionarIngrediente() {
//     var ing = document.getElementById('ingrediente').value;
//     var listaHtml = document.getElementById('lista').innerHTML;

//     listaHtml = listaHtml + '<li>'+ing+'</li>';

//     document.getElementById('lista').innerHTML = listaHtml;
// }

function somar(){
  var primeiroValor =   parseInt(document.getElementById('primeiroValor').value);
  var segundoValor = parseInt(document.getElementById('segundoValor').value);

  var result = primeiroValor + segundoValor;
  alert('a Soma dos valores é: ' + result);
}

function multiplicar(){
    var primeiroValor =   parseInt(document.getElementById('primeiroValor').value);
    var segundoValor = parseInt(document.getElementById('segundoValor').value);
  
    var result = primeiroValor * segundoValor;
    alert('a multiplicação dos valores é: ' + result);
  }

  function dividir(){
    var primeiroValor =   parseInt(document.getElementById('primeiroValor').value);
    var segundoValor = parseInt(document.getElementById('segundoValor').value);
  
    var result = primeiroValor / segundoValor;
    alert('a divisão dos valores é: ' + result);
  }

  function subtrair(){
    var primeiroValor =   parseInt(document.getElementById('primeiroValor').value);
    var segundoValor = parseInt(document.getElementById('segundoValor').value);
  
    var result = primeiroValor - segundoValor;
    alert('a subtração dos valores é: ' + result);
  }

var dayOfWeek = ['segunda','terca','quarta','quinta' , 'sexta' , 'Sabado', 'domindo']

for(var i = 0; i < dayOfWeek.length; i++){
    // console.log(dayOfWeek[i])
}

var numbres = [0,1,2,3,4,5,6,7,8,9]
// // numbres.push(10)
// numbres.unshift(-1)

//numbres.pop() // - apaga o elemento final do array
//numbres.shift() // - apaga elemento do inicio do array

numbres.splice(3, 3) // apaga valores a aprtir da posição estabelecida e a quantidade de valores a frente.

numbres.splice(3 , 0 , 3,4,5) // adc elementos no array a partir de uma posição estabelecida, 0 remove nada, insere 3,4,5

var month = []

var firstWeeks = []
var lastWeeks = []

var avgTempWeek1 = [33,25.2,19,27,23,4,45.7]
var avgTempWeek2 = [41,25.2,19,27,23,4,45.7]

var avgTempWeek3 = [43,25.2,19,27,23,4,45.7]
var avgTempWeek4 = [50,25.2,21,27,23,5,45.7]

firstWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month = [firstWeeks, lastWeeks]

for(var x = 0; x < month.length; x++){
  for(var y = 0; y < month[x].length; y++){
    for(var z = 0; z < month[x][y].length; z++){
        // console.log(month[x][y][z])
    }
  }
}

function stack(){
  var items = []

  this.push = function(element){
    items.push(element)
  }

  this.pop = function(){
    return items.pop()
  }

  this.peek = function(){
    //devolve o elemento que está no topo da pilha
    return items[items.length - 1]
  }
  this.isEmpty = function(){
    // informar se a pilha está vazia ou não
    return items.lenght === 0
  }
  this.clear = function(){
    // limpar a pilha
    items = []
  }

  this.size = function(){
    // informar o tmanho da pilha
    return items.length
  }
  this.print = function(){
    //imprime a pilha no console
    console.log(items.toString())
  }
}

var pilha = new stack()

pilha.push(2)
pilha.push(5)
pilha.push(10)
pilha.push(12)
pilha.push(30)

function dec2Bin(decNumber){
  var restStack = [],
  rest,
  binaryString = ''

  while(decNumber > 0){
    rest = Math.floor(decNumber % 2)
    restStack.push(rest)
    decNumber = Math.floor(decNumber /2)
  }

  while(restStack.length > 0){
      binaryString += restStack.pop().toString()
  }

  return binaryString
}

// console.log(dec2Bin(25))

function baseConverter(decNumber, base){
  var restStack = [],
  rest,
  baseString = '',
  digIts = '0123456789ABCDEF'

  while(decNumber > 0){
    rest = Math.floor(decNumber % base)
    restStack.push(rest)
    decNumber = Math.floor(decNumber / base)
  }

  while(restStack.length >0){
    baseString += digIts[restStack.pop()]
  }

  return baseString

}

// console.log(baseConverter(123,16))

function queue() {
  var items = []

  this.enqueue = function(element){
    //Adiciona um novo item
    items.pish(element)
  }

  this.dequeue = function() {
    //remover um item
    return items.shift
  }

  this.front = function() {
    // retorna o primeiro elemento da fila
    return items[0]
  }

  this.isEmpty = function() {
    // Verifica se a fila esta vazia ou não
    return items.length === 0
  }

  this.size = function() {
    //retorna o tamanho da fila
    return items.length
  }

  this.print = function() {
    //imprimi o conteudo da fila
    console.log(items.toString)
  }
  
}