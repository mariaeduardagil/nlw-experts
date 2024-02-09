const perguntas = [
    {
      pergunta: "Qual é a principal função do operador 'typeof' em JavaScript?",
      respostas: [
        "Comparar dois valores",
        "Verificar o tipo de dado de uma variável",
        "Criar um loop for",
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const = 5;",
        "variable x = 7;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que representa um único valor",
        "Uma estrutura de controle de fluxo",
        "Uma coleção de elementos indexados",
      ],
      correta: 2
    },
    {
      pergunta: "Como se realiza uma iteração em um array?",
      respostas: [
        "Com a declaração 'if'",
        "Utilizando o operador 'while'",
        "Por meio de um loop 'for'",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Alterar o conteúdo de uma variável",
        "Adicionar um evento a um elemento HTML",
        "Remover um elemento do DOM",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Uma técnica de compressão de código",
        "O ato de elevar uma função ou declaração de variável durante a fase de compilação",
        "Um tipo de loop avançado",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma linguagem de marcação para documentos HTML",
        "Um formato de dados leve e de fácil leitura",
        "Uma função para gerar números aleatórios",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença, ambos são iguais",
        "'==' compara apenas o valor, '===' compara valor e tipo de dado",
        "'===' é utilizado para atribuição de variáveis",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de dado primitivo",
        "Uma estrutura de controle de fluxo",
        "Uma interface que representa a estrutura de um     documento HTML",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do operador ternário em JavaScript?",
      respostas: [
        "Realizar operações matemáticas complexas",
        "Substituir o operador 'if' em certas condições",
        "Concatenar strings",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode('true')
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }