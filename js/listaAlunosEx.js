'use strict'

const getStudent = async(siglaCurso) => {
    const url = `https://backcarol.netlify.app/.netlify/functions/api/aluno/curso/${siglaCurso}`
    const response = await fetch(url);
    const listaAluno = await response.json();

    return listaAluno;
}

const filterStudentStatus = async (siglaCurso, situacao) => {
    const url = `https://backcarol.netlify.app/.netlify/functions/api/status/aluno/curso/?sigla=${siglaCurso}&situacao=${situacao}`
    const response = await fetch(url);
    const listaStatus = await response.json();

    return listaStatus;
}

const statusYears = async (years, situacao, siglaCurso) => {
    const url = `http://localhost:1616/conclusao/aluno/curso/?ano=${years}&status=${situacao}&sigla=${siglaCurso}`
    const response = await fetch(url);
    const listaStatusAno = await response.json();

    return listaStatusAno;
}

export{
    getStudent,
    filterStudentStatus,
    statusYears
}