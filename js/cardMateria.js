const cardSubject = (nome) => {
    let subjectName = nome;
    let subject = [];

    let nameSubject = subjectName.split(' ');
    nameSubject.forEach(index => {
      subject.push(index[0].toUpperCase());
    });

    return subject.join('');
}

export default cardSubject;