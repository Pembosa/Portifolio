
/*
let nome= 'Lícia'
let idade= 18
let cidade= 'Mairinque'
let sexo= 'F'
let profissao= 'Aluno'
let escolaridade= 'Ensino médio completo'
*/
/*
class Pessoa {
    nome
    idade
    cidade
    sexo
    profissao
    escolaridade

    constructor(nome, idade, cidade, sexo, profissao, escolaridade){
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
        this.sexo = sexo
        this.profissao = profissao
        this.escolaridade = escolaridade
    }
}
const pessoa = new Pessoa('Lícia', 18, 'Mairinque', 'F', 'Aluno', 'Ensino médio completo')
const pessoa2 = new Pessoa('Kaique', 18, 'São Roque', 'M', 'Aluno', "Ensino médio incompleto")
console.log(pessoa.cidade)
console.log(pessoa2)
*/
class Pessoa {
    constructor(nome, foto, idade, cidade, sexo, profissao, escolaridade) {
        this.nome = nome
        this.foto = foto
        this.idade = idade
        this.cidade = cidade
        this.sexo = sexo
        this.profissao = profissao
        this.escolaridade = escolaridade
    }

    apresentar() {
        const apresentacao = `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, moro na cidade de ${this.cidade} e minha profissão é ${this.profissao}.`
    }
}
const pessoas = [] //Cria uma lista vazia
pessoas.push(new Pessoa('Lícia','./Imagens/Lícia.jfif', 18, 'Mairinque', 'F', 'Aluno', 'Ensino médio completo'))
pessoas.push(new Pessoa('Kaique','./Imagens/Kaique.jfif', 18, 'São Roque', 'M', 'Aluno', 'Ensino médio incompleto'))
pessoas.push(new Pessoa('Kalícia','./Imagens/Kalícia.jpg', 2, 'Mairinroque', 'N', 'Bebe', 'Prezinho'))
pessoas.push(new Pessoa('Sequelin','./Imagens/Lícia.jfif',21,'Marik','M','Desempregado','Superior Incompleto'))

const cartoesPessoas = document.querySelector('.pessoas')

pessoas.forEach(pessoa => {
    const cartao = document.createElement('div') //Cria elemento div
    cartao.classList.add('cartao') //Insere classe ao elemento

    const foto = document.createElement('img')
    foto.classList.add('foto')
    foto.setAttribute('src',pessoa.foto) // Insere o atributo src

    const nome = document.createElement('h2')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const idade = document.createElement('p')
    idade.classList.add('idade')
    idade.textContent = pessoa.idade

    const cidade = document.createElement('p')
    cidade.classList.add('cidade')
    cidade.textContent = pessoa.cidade

    const profissao = document.createElement('p')
    profissao.classList.add('profissao')
    profissao.textContent = pessoa.profissao

    const escolaridade = document.createElement('p')
    escolaridade.classList.add('escolaridade')
    escolaridade.textContent = pessoa.escolaridade

    cartao.appendChild(foto)
    cartao.appendChild(nome)
    cartao.appendChild(idade)
    cartao.appendChild(cidade)
    cartao.appendChild(profissao)
    cartao.appendChild(escolaridade)
    cartoesPessoas.appendChild(cartao)
})