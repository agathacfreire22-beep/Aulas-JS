let nota = 6;

if(nota < 5) {
    console.log("Henrique reprovado");

} else if (nota < 7) {
    console.log("Henrique de recuperação")

}else{
    console.log("Henrique aprovado");

}

// 01-temperatura
//Crie uma variavel chamada temperatura.
//Ultilize uma estrutura condicional para verificar:
// . Temperatura maior que 30 - Está quente
// . Temperatura entre 20 e 30 - Está quente
// . Temperatura menor que 20 - Temperatura agradavel
// . Temperatura maior que 30 - Está frio
//Exiba a mensagem no console

// 02- Velocidade do veiculo
//Crie uma variavel chamada velocidade
//Verifique:
//. Até 60 km/h- velocidade permitida 
//. Acima de 60 km/h e até 80 km/h-"Atenção: velocidade acima do permitido
//. Acima de 80 km/h - "velocidade muito alta"
//Exiba a mensagem correspondente no console

// 03- Estoque
// Crie uma variavel chamada quantidadesEstoque 
//Verifique:
//. Quantidade igual a 0 - "Produto esgotado"
//. Quantidade entre 1 e 10 - "Estoque baixo"
//. Quantidade acima de 10 - "Estoque disponivel"

// 04- Login
//Crie duas variaveis
//Let usuario = "admin"
//Let senha = "1234"
//Verifique se o usuario e a senha estão corretos
//Se estiveres corretos:Login realizado com sucesso
//Se não:Usuario ou senha incorretos

// 05- horario do dia 
//Crie uma variavel chamada hora contendo um valor entre 0 e 23 
//Ultilize condicionais para informar:
// .     0 ate 11 - "bom dia"
// .    12 ate 17 - "boa tarde"
// .    18 ate 23 - "boa noite"

// 06- Classificação de nota de um produto
// Uma loja recebe avaliações de seus clientes ultilizando notas de 1 a 5
//Crie uma variavel chamada nota
// Classifique a avaliação
// .  5 -"Execelente"
// .  4 -"Muito bom"
// .  3 -"Bom"
// .  2 -"Regular"
// .  1 -"Ruim"
//Caso a nota não esteja entre 1 e 5,exiba "nota invalida"

// 07- Tipo de ingresso
//Crie uma variavel chamda TipoIngresso
//Ela podera receber
//"inteira"
//"meia"
//"vip"
//ultilize condicionais para exibir o preço correspondente
// .    Inteira-R$ 40
// .    Meia-R$ 20
// .    Vip-R$ 80
//Caso esteja informado outro tipo,exibe:
//Tipo de ingresso invalido




//01
let temperatura = 25

if (temperatura < 30) {
    console.log("Esta quente");
} else if(temperatura >=20 && temperatura <=30){
    console.log("temperatura agradável");
}else{
    console.log("Está frio")
}


//02
let velocidade = 70
if (velocidade <= 60 ) {
    console.log("Velocidade permitida")
} else if (velocidade <= 80){
    console.log("velociade acima do permitido")
}else{
    console.log("Velocidade muito alta")
}


//03
let quantidadeEstoque = 8;
if (quantidadeEstoque == 0){
   console.log("Produto esgotado")
}else if(quantidadeEstoque <= 1 && quantidadeEstoque <= 10){
    console.log("Estoque baixo")
}else{
    console.log("Estoque disponivel")
}


//04
let usuario = "admin"
let senha = "1234"

if(usuario == "admin" && senha == "1234"){
console.log("Login realizado com sucesso")

}else{
    console.log("Usuario ou senha incorretos")
}

// 05
let hora = 14;
if(hora <= 0 && hora <= 11 ) {
    console.log("Bom dia");
}else if (hora >= 12 && hora <= 17 ){
    console.log("Boa tarde");

}else if(hora >= 18 && hora <= 23){
    console.log("Boa noite");
}


//06
let Nota = 5
if (Nota == 5) {
    console.log("Execelente")
} else if(Nota == 4){
    console.log("Muito bom")
} else if(Nota == 3){
    console.log("Bom")
} else if(Nota == 2){
    console.log("Regular")
} else if(Nota == 1){
    console.log("Ruim")
} else{
    console.log("Nota invalida")
}


// 07
let TipoIngresso = "Inteira"
if(TipoIngresso = "inteira"){
    console.log("R$ 40");
}else if(TipoIngresso == "meia"){    
   console.log("R$ 20");
}else if (TipoIngresso == "vip"){
    console.log("R$ 80");
}else {
    console.log("Tipo de ingresso invalido")
}