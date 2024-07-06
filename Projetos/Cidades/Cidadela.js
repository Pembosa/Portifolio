class Cidade{
    constructor(foto, nome, estado, pais, n_habitantes,fundacao){
        this.foto = foto
        this.nome = nome
        this.estado = estado
        this.pais = pais
        this.n_habitantes = n_habitantes
        this.fundacao = fundacao
    }
}

const cidades = []
cidades.push (new Cidade('./Imagens/Paris.jpg','Paris','Île de France','França','2,161 milhões','3 800 a.C.'))
cidades.push (new Cidade('./Imagens/Nova_York.jpg','Nova York City','Nova York','EUA','8,336 milhões','1624'))
cidades.push (new Cidade('./Imagens/Roma.jpg','Roma','Lácio','Itália','2,873 milhões','1870'))
cidades.push (new Cidade('./Imagens/Brasilia.jpg','Brasília','Distrito Federal','Brasil','2.817 milhões','1960'))

const cartoesCidades = document.querySelector ('.cidades')

cidades.forEach(cidade =>{

const cartao = document.createElement('div')
cartao.classList.add('cartao')

const foto = document.createElement('img')
foto.classList.add('foto')
foto.setAttribute('src',cidade.foto)

const nome = document.createElement('h2')
nome.classList.add('nome')
nome.textContent = cidade.nome

const estado = document.createElement('p')
estado.classList.add('estado')
estado.textContent = cidade.estado

const pais = document.createElement('p')
pais.classList.add('pais')
pais.textContent = cidade.pais

const n_habitantes = document.createElement('p')
n_habitantes.classList.add('n_habitantes')
n_habitantes.textContent = cidade.n_habitantes

const fundacao = document.createElement('p')
fundacao.classList.add('fundacao')
fundacao.textContent = cidade.fundacao

cartao.appendChild(foto)
cartao.appendChild(nome)
cartao.appendChild(estado)
cartao.appendChild(pais)
cartao.appendChild(n_habitantes)
cartao.appendChild(fundacao)
cartoesCidades.appendChild(cartao)
})