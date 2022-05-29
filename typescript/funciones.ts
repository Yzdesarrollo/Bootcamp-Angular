function sumar(a:number, b:number):number {
    return a + b;
}

const resultado = sumar(2,3);

console.log(resultado);

//

let suma = (num1:number,num2:number) => num1+num2;

const result = suma(2,6);
console.log(result);

//

let multiplicar = (a:number, b?:number, base:number = 2):number => a * base; //Parametros opcionales

const producto = multiplicar(10,5,2);