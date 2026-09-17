// operadores aritimeticos
// + soma
// - subtração 
// * multiplicação
// / divisão
// % sobra da divisão

//let n1 = "3";
//let n2 = 9;

//console.log(n1 + n2);
//console.log(n1 + n2);
//lconsole.log(n2 - n1);
//console.log(n1 * n2);
//console.log(n2 / n1);
//console.log(n2 % n1);
//console.log((n2 - n1) * 2);
//console.log("palavra + n1");

//Crie 3 variantes, cada uma contendo um número,
//Some as 3 e tire a média,exiba o resultado no console
// A média de X,X e X é R

let N1 = 5
let N2 = 10
let N3 = 15
 console.log((N1 + N2 + N3) / 3 )
console.log("A média de " + N1 + "," + N2 + " e " +  N3 + " é " + (N1 + N2 + N3)/ 3 ) 

// > maior que 
// < menor que 
// == igual 
// <= maior ou igual
// >= menor ou igual    
// != é diferente 

//let idade = 18;

//console.log(idade > 18);
//console.log(idade < 18);
//console.log(idade == 18);
//console.log(idade <= 18);
//console.log(idade >= 18);
//console.log(idade != 18);

//console.log(idade === "18");//comparação de tipo de variavel

let idade = 18;
let habilitado = true;
console.log(idade <= 18 && habilitado == true);
//V && F = V
//V && F = F
//F && V = F
//F && V = F

console.log(idade <= 18 && habilitado == true);
// V || V = V
// V || F = V
// F || V = V 
// F || F = F

// ! operador NOT "inverte"
console.log(!habilitado);

//se idade for igual a 18 
    //faça isso

//se não
    //faça isso
// if (habilitado == true ) {// se sim
// console.log("Pode dirigir");

// } else {//se não
   // console.log("NÃO pode dirigir");
// }

//let idade = 16;

//if (idade >= 18) 
if (idade > 17) {
    console.log("Maior de idade!");

} else {
   console.log("Menor de idade");
}

//Crie um sistema que compare o valor de uma variavel 
//senha SE for igual a 1234 escreva no console
// "acesso liberado" SE NÃO escreva "acesso bloqueado"

let senha = 7852;
if (senha == 1234) {
    console.log("Acesso liberado");
} else {
    console.log("Acesso bloqueado");
}


//Crie um sistema que avalie uma variavel nota
// Se nota form maior que 6 escreva aprovado, SE NÃO
// escreva reprovado 

let nota = 7;
 if (nota >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//Ex 3
//Crie um sistema que compara um valor total de uma
//Compra,SE o valor for maior que 500 calcule um 
//desconto de 20 e mostre o valor total da compra 
//com desconto SE NÃO mostre a mensagem 
// Compra SEM DESCONTO

let Compra = 700
if(Compra >= 500)  {
    console.log(Compra -20)
    console.log("COMPRA COM DESCONTO")
} else {
    console.log("COMPRA SEM DESCONTO")
}

