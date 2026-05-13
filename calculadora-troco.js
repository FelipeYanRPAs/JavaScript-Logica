console.log('Boas vindas a calculadora de trocos!')

let valorCompra = 17.50
let valorPago = 20.50

console.log('Valor da compra: ', valorCompra)
console.log('Valor recebido: ', valorPago)

if(valorPago >= valorCompra){

    let troco = valorPago - valorCompra

    console.log('Troco do cliente: ', troco)

}else{

    console.log('Valor insuficiente para pagar a compra!')

}
