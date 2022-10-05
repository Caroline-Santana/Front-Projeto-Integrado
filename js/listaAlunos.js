'use strict'

import { getStudent, filterStudentStatus, statusYears} from "./listaAlunosEx.js"

import { nomeCursos } from "./cursoEx.js"

const curso = localStorage.getItem('curso')
const cursos = await nomeCursos()
let tituloCurso = ''

cursos.forEach(item => {
    if(item.sigla.toLowerCase() == curso){
        tituloCurso = item.nome.split(' - ')[1].replace('Curso técnico ', '')
    }
})

let listaAlunos = await getStudent(curso)
// console.log();

const mudarTitulo = () => {
    const titulo = document.querySelector('#title')
    titulo.textContent = tituloCurso
}

mudarTitulo()

const criarCardsAlunos = async (item) => {
  const container = document.querySelector('.cards')
  const card = document.createElement('div')
  card.classList.add('card')

    if(item.status.toLowerCase() == 'cursando' ){
        card.classList.add('amarelo')
    }else if(item.status.toLowerCase() == 'finalizado') {
        card.classList.add('azul');
    }

    card.innerHTML = `
        <img src= "${item.foto}" alt= "estudante" class="iconeStudent">
        <span class="studanteName"> ${item.nome.toUpperCase()}</span>
    `
    container.appendChild(card)

    console.log(item.nome, item.foto);

    card.addEventListener('click', (el) => {
        el.preventDefault()
        const matriculaAluno = item.matricula
        localStorage.setItem('matricula', matriculaAluno)
        location.href = './disciplinas.html'
        
    })
}
listaAlunos.forEach(criarCardsAlunos)

const limparCard = () => {
    const cards = document.querySelectorAll('.card')
    cards.forEach((card) => card.remove())
}

const limparOpcao = () => {
    const opcao = document.querySelectorAll('.ano-opcao')
    opcao.forEach((opcao) => opcao.remove())
}

const filtroStatus = document.querySelector('#status-select');
let filtroStatusValor = document.querySelector('#status-select').value;
const anoConclusao = document.querySelector('#conclusion-select');
let anoConclusaoValor = document.querySelector('#conclusion-select').value;


const criarOpcaoAno = async (ano) => {
    const opcaoAno = document.createElement('option')
    opcaoAno.value = ano
    opcaoAno.textContent = ano
    opcaoAno.classList.add('ano-opcao')

    anoConclusao.appendChild(opcaoAno)
}

let ano = await statusYears(curso, filtroStatusValor)
statusYears.forEach(criarOpcaoAno)

filtroStatus.addEventListener('change', async() => {
    filtroStatusValor = document.querySelector('#status-select'). value
    anoConclusaoValor = document.querySelector('#conclusion-select').value

    listaAlunos = await filterStudentStatus(curso, filtroStatusValor, anoConclusaoValor)
    ano = await statusYears(curso, filtroStatusValor)
    limparOpcao()
    ano.forEach(criarOpcaoAno)

    limparCard()
    if(listaAlunos){
        listaAlunos.forEach((e) => criarCardsAlunos(e))
    }
})

anoConclusao.addEventListener('change', async() =>{
    anoConclusaoValor = document.querySelector('#conclusion-select').value
    filtroStatusValor = document.querySelector('#status-select').value

    listaAlunos = await filterStudentStatus(curso, filtroStatusValor, anoConclusaoValor)

    limparCard()

    if(listaAlunos){
        listaAlunos.forEach((e) => criarCardsAlunos(e))
    }
})



