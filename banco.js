class Pessoa{
    constructor(nome, conta){
        this.nome = nome;
        this.conta = conta;
        
    }
    setarConta(){
        if (typeof novaconta == "string") {
            this.conta = novaconta
        }
       } 
}



let p1 = new Pessoa("Maria");
let p2 = new Pessoa("robson");
let p3 = new Pessoa("ana");
let p4 = new Pessoa("angelo")

p1.conta = ("poupanca")
p2.conta = ("corrente")
p3.conta = ("corrente")
p4.conta = ("poupanca")

console.log(`${p1.nome} tem ${p1.conta} banco`)
console.log(`${p2.nome} tem ${p2.conta} banco`)
console.log(`${p3.nome} tem ${p3.conta} banco`)
console.log(`${p4.nome} tem ${p4.conta} banco`)

