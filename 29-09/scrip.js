// let produtos = ["Shampoo","Vassoura","Creme","Perfume","Diabo verde"]
// let valores = [20,15,30,150,58];

// for (let index = 0; index < produtos.length; index++) {
//     const element = array[index];
    
//for (let index = 0; index < array.length; index++) {
   //console.log("Produto" + "")
    
//}

// let produto = "shampoo";
// let produtos = ["Shampoo","Vassoura"];
//  let produto1 = {
// nome:"shampoo",
// valor: 20.50,
// descricao : "Shampoo muito cheroso"
// }

// console.log(produtos)
// console.log(produto1.nome);

// produto1.descricao = "Shampoo muito cheiroso"
// console.log(produto1.descricao);

//Ex 1
//Exiba os atributos do produto ultilizando o console log
//Produto:Shampoo - Valor: R$20,50 - Descrição: Shampoo muito cheiroso

//console.log("Produto: " + produto1.nome + "- Valor: " + produto.valor + 
   // "- Descrição: " + produto1.descricao);

//Ex 2
//Crie um objeto aluno, com os atributos nome,idade e curso
//Exiba no console a frase:
// Aluno: (nome do aluno) - idade:(idade do aluno) - Cursando: (nome do curso)

let aluno = {
    nome: "Agatha",
    idade:"16",
    curso:"Desenvolvimento em JavaScript",
}
console.log(" nome " + aluno.nome + " - idade " + aluno.idade + " curso " + aluno.curso)

//Ex 3 - Cadastro de produto
//Crie um array contendo 5 nomes de produtos
//Ultilize uma estrutura de repetição para exibir cada produto seguindo o formato:
//Produto 1: Teclado
//Produto 2: Mouse
//Produto 3: Monitor
//Produto 4: Headset
//Produto 5: Webcan
//Desafio: ultilize o indice do array para gerar automaticamente o número do produto.

let produto =["teclado","mouse","monitor","headset","webcan"
]

console.log("produto1:" + produto[0]);

console.log(produto[1]);
console.log(produto[2]);
console.log(produto[3]);
console.log(produto[4]);

for (let index = 0; index < produto.length; index++) {
    console.log ("produto " + (index +1) + ":" + [index])
    
}