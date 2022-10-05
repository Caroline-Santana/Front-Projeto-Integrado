'use strict'
import {nomeCursos} from "./cursoEx.js"

let cursos = await nomeCursos()

const criarButtom = async (variavel)=>{
    const container = document.querySelector('#selection')
    const div = document.createElement('div')
 
    
    div.classList.add('cards')
    div.id = variavel.sigla.toLowerCase()
    div.innerHTML = `
        <div class= 'cardCursos'>
        <img src="${variavel.icone}" class="icone"></img>
        <span class= "cardCurso">${variavel.sigla}</span> 
        </div>
    `
    container.appendChild(div)
    
    div.addEventListener('click', (el) => {
        el.preventDefault()
        const curso = div.id
        localStorage.setItem('curso', curso)

        location.href = './alunos.html'
    })
}

cursos.forEach(criarButtom)
