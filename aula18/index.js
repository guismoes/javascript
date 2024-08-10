function criaPessoa (nome,sobrenome,idade) {
    return {nome,sobrenome,idade };
}

const pessoa1 = criaPessoa('Luiz','Miranda',25)
const pessoa2 = criaPessoa('Maria','Oliveira',30)
const pessoa3 = criaPessoa('Claudio','Gonçalves',27)

console.log(pessoa1.nome,pessoa2.idade)