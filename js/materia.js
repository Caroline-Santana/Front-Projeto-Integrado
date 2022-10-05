'use strict'

import { studentInfo } from "./materiaEx.js"
import cardSubject from './cardMateria';

const matricula= localStorage.getItem('matricula');

const infoStudent = await studentInfo(matricula)
        const criandoPerfil = () => {
            const containerProfile = document.querySelector('.profile')

            const foto = document.createElement('img')
            foto.classList.add('foto-perfil')
            foto.src = studentInfo.foto
            foto.alt = 'Estudante'

            const nome = document.createElement('span')
            nome.classList.add('foto-perfil')
            nome.textContent = studentInfo.nome.toUpperCase()

            containerProfile.appendChild(foto)
            containerProfile.appendChild(nome)
        }

