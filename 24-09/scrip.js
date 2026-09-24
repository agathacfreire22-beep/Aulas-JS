//Exercício 07 - Lista de frutas
//Crie um array chamado frutas contendo 5 frutas/.
//Depois.
//1.  Exiba o array completo.
//2.  Exiba a primeira fruta.
//3.  Exiba a terceira fruta.
//4.  Exiba a quantidade de frutas.

// "Morango"
// "Uva"
// "Manga"
// "Melancia"
// "Banana"
// "Abacaxi"


//                0        1      2        3         4         5
// let frutas = ["Morango","Uva","Manga","Melancia","Banana","Abacaxi"]
// console.log(frutas);//Mostrar a lista completa na mesma linha

// console.log(frutas[0]);//mostra o item da posição mencionada entre colchetes
// console.log(frutas[2]);//mostra o item da posição mencionada entre colchetes

// console.log(frutas.length);//Mostra o tamanho do Array


//Exercício 08 - Lista de cidades 
//Crie um array contendo 5 cidades brasileiras.
//Depois:
//1.   Exiba o array completo.
//2.   Altere a segunda cidade.
//3.   Exiba a segunda cidade.
//4.   Exiba a quantidade de cidades.

//                      0                1                2                    3          4
// let cidades= ["São Caetano Do Sul","Santo André","São Bernardo Do Campo","João Pessoa","Mauá"]
// console.log(cidades);//Mostrar a lista completa na mesma linha

// cidades[1]= "São Paulo";//Altere o valor na posição específicada
// console.log(cidades[1]);//mostra o item da posição mencionada entre colchetes

// console.log(cidades.length);//Mostra o tamanho do Array


//................ARRAY + ESTRUTURA
// let cidade = ["São Paulo","Santo André","São Caetano"];
// console.log(cidade[0]);
// console.log(cidade[1]);
// console.log(cidade[2]);
// console.log(cidade[3]);
// console.log(cidade[4]);

// for (let index = 0; index < 5; index++) {
//     console.log(cidade[index]);

// }
//  for (let index = 0; index < cidade.length; index++) {
//       console.log(cidade[index]);
      
    
//  }

//Exercícios
//Exercício 09 - Nomes 
//Crie um array com 6 nomes 
//Ultilize um for para exibir todos os preços

// let nomes = ["Gabriella","Maria Eduarda","Laura","Bernardo","Gustavo","Odirlei"]

// for (let index = 0; index < nomes.length ;index++) {
//     console.log(nomes[index]);
    
// }

//Exercício 10 - Preços
//Crie um array contendo 5 preços de produtos 
//Ultilize um for para exibir todos os preços

// let preço = [45,15,67,30,69];

// for (let index = 0; index < Preços.length; index++) {
//    console.log(preços[index]);
   
    
// }

//Exercício 11 - Produtos e Preços 
//Crie dois arrays,um contendo 5 nomes de produtos 
//outro contendo 5 preços de produtos 
//Ultilize um for para exibir todos os nomes e preços

//               0  1  2  3  4
// let Preços = [75,60,20,12,59]

// //                 0         1         2      3       4
// let Produtos = ["Salto","Camiseta","Calça","Rímel","Meia"]

// for (let index = 0; index < Preços.length; index++) {
//     console.log(Preços[index]);
    
// }
// for (let index = 0; index < Produtos.length; index++) {
//     console.log(Produtos[index])
    
// }

//..................Estrutura de Repetição + Estrutura de Decisão............................

// for (let index = 0; index <= 10; index++) {//contando de 0 a 10

// if (index >= 5) {// verificando se é maior ou igual a 5
//     console.log(index);//mostra o número
//    } 
// }

// let número = [5,9,10,2,20,32,7,17,9,12];
// for (let index = 0; index < numero.length; index++) {//lendo o array
   
//     if (numero[index]>=10) {//verificando se é maior ou igual a 10
//         console.log(numero[index]);//mostra o numero do array
//     }

// }

// let numero = [5,9,10,2,20,32,7,17,9,12];
// for (let index = 0; index < numero.length; index++) {//lendo o array
//    let sobra = numero[index] % 2;
//   if (sobra == 0) {
//     console.log("O numero " + numero[index] + " É par ");
//   } else {
//     console.log("O numero " + numero[index] + " É impar ");
//   }
// }

// Exercícios
//Exercício 01 - Analisando notas
//Crie um array com 8 notas
//Ultilize for para percorrer as notas e if/else para informar:
//•   Nota maior ou igual a 7 → "Aprovado"
//•   Nota menor que 7 → "Reprovado"


// let notas = [6,7,8,9,4,10,3,2]
// for (let index = 0; index < notas.length; index++) {
// if (notas[index]>= 7) {
//     console.log(notas[index]+ " Aprovado ")  
// } else {
//     console.log(notas[index]+ " Reprovado ")
// }
    
// }

//Exercício 02 - Temperaturas
//Crie um array contendo 7 temperaturas
//Percorre o array e classifique cada temperatura:
//• Maior que 30 → "Quente"
//• Entre 20 e 30 → "Agradável"
//• Menor que 20 → "Frio"

let temperatura = [15,22,30,34,18,10,27]
for (let index = 0; index < temperatura.length; index++) {

    if (temperatura[index] > 30) {
    console.log(temperatura[index]+ " Quente ")  

} else if (temperatura[index] >= 20 && temperatura[index] <= 30){
    console.log(temperatura[index]+ " Agradável ")
}else{
    console.log(temperatura[index]+ " Frio ")
 }
}
