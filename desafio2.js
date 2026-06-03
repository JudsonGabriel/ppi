// QUESTÃO 1

const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const aprovados = alunos
  .map((aluno) => {
    const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
    const media = soma / aluno.notas.length;

    return {
      nome: aluno.nome,
      media: Number(media.toFixed(2))
    };
  })
  .filter((aluno) => aluno.media >= 7)
  .sort((a, b) => b.media - a.media);

console.log(aprovados);

// QUESTÃO 2

const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function buscarFilmes(genero, criterio) {
  return filmes
    .filter((filme) => filme.genero === genero)
    .slice() 
    .sort((a, b) => {
      if (criterio === "ano") {
        return b.ano - a.ano; 
      }

      if (criterio === "titulo") {
        return a.titulo.localeCompare(b.titulo);
      }

      return 0;
    })
    .map(
      (filme) =>
        `${filme.titulo} (${filme.ano}) - ${filme.genero}`
    );
}

console.log(buscarFilmes("ficção", "ano"));
