'use strict'


const studentInfo = async (matricula) => {
    const url = `https://backcarol.netlify.app/.netlify/functions/api/disciplina/aluno/${matricula}`;
    const response = await fetch(url);
    const { studentInfo } = await response.json();

    return studentInfo;
}

export {studentInfo};