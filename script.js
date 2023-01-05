/*
💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

Bora praticar e rever tudo o que foi ensinado na aula? 

Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/
let studentsList = [
  {
    name: "Júlia",
    n1: 10,
    n2: 9
  },
  {
    name: "João",
    n1: 6,
    n2: 7
  },
  {
    name: "Letícia",
    n1: 3,
    n2: 5
  },
  {
    name: "Diego",
    n1: 5,
    n2: 9
  },
]

function averageScore(n1, n2) {
let average = ((n1 + n2) / 2).toFixed(2)
return average
}

for (let student of studentsList) {
  let averageList = averageScore(student.n1, student.n2)
  if (averageList >= 7) {
    alert(`
    A média do(a) aluno(a) ${student.name} foi de: ${averageList}.\n
    Parabéns ${student.name}, você foi aprovado(a) no concurso.
    `)
  } else {
    alert(`
    A média do(a) aluno(a) ${student.name} foi de ${averageList}.\n
    Não foi dessa vez, ${student.name}, não desista e tente novamente!
    `)
  }
}