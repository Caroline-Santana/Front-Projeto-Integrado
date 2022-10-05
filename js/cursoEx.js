'use strict'

const nomeCursos = async() => {

    const url = `https://backcarol.netlify.app/.netlify/functions/api/cursos`

    const response = await fetch(url)

    const listaAluno = await response.json()

return listaAluno
}
export{
    nomeCursos
}