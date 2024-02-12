const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação para criar páginas web",
        "Um estilo de folha de estilos para design de páginas web",
        "Uma linguagem de programação para tornar páginas web dinâmicas",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona elementos HTML com base em suas classes",
        "Seleciona elementos HTML com base em seus IDs",
        "Seleciona elementos HTML com base em seletores CSS",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador lógico 'AND' em JavaScript?",
      respostas: [
        "||",
        "&&",
        "!",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
      respostas: [
        "Remove um evento de um elemento HTML",
        "Adiciona um manipulador de eventos a um elemento HTML",
        "Cria um novo evento personalizado",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Como se faz um comentário de linha em JavaScript?",
      respostas: [
        "//",
        "<!-- -->",
        "/* */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toFloat()",
        "stringToInt()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores sem verificar o tipo",
        "Compara valores e tipos",
        "Atribui um valor a uma variável",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de escrever uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "myFunction: function() {}",
        "myFunction = function() {}",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  
   for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true) 
    quizItem.querySelector('h3').textContent = item.pergunta
  
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
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
  
    quiz.appendChild(quizItem)
   }
  
   
  
  