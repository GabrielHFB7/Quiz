const perguntas = [
    {
      pergunta: "Quantos títulos da Copa Libertadores da América o Flamengo conquistou?",
      respostas: [
        "2",
        "3",
        "1",
      ],
      correta: 1
    },
    {
      pergunta: "Qual jogador é conhecido como 'Rei do Flamengo'?",
      respostas: [
        "Zico",
        "Adriano",
        "Romário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi o ano da fundação oficial do Clube de Regatas do Flamengo?",
      respostas: [
        "1895",
        "1912",
        "1905",
      ],
      correta: 0
    },
    {
      pergunta: "Em que ano o Flamengo conquistou seu primeiro título brasileiro?",
      respostas: [
        "1980",
        "1979",
        "1982",
      ],
      correta: 0
    },
    {
      pergunta: "Qual estádio é conhecido como a 'casa' do Flamengo?",
      respostas: [
        "Maracanã",
        "Mineirão",
        "Arena Corinthians",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o maior artilheiro da história do Flamengo?",
      respostas: [
        "Gabriel Barbosa",
        "Zico",
        "Romário",
      ],
      correta: 1
    },
    {
      pergunta: "Qual técnico comandou o Flamengo na conquista da Copa Libertadores de 2019?",
      respostas: [
        "Jorge Jesus",
        "Tite",
        "Abel Braga",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é, aproximadamente, a capacidade oficial do estádio Maracanã?",
      respostas: [
        "79.000 espectadores",
        "82.000 espectadores",
        "90.000 espectadores",
      ],
      correta: 0
    },
    {
      pergunta: "Quantas vezes o Flamengo foi campeão da Copa do Brasil?",
      respostas: [
        "3",
        "4",
        "7",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o mascote oficial do Flamengo?",
      respostas: [
        "Porco",
        "Leão",
        "Urubu",
      ],
      correta: 2
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
  
   
  
  
