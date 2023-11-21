const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Juega de nuevo'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: '¿Qué famoso grupo de los 80 colabora en el disco Famous Last Words de Casisdead?',
    answers: [
      { text: 'Pet Shop Boys', correct: true },
      { text: 'Beastie Boys', correct: false },
      { text: 'Beach Boys', correct: false },
      { text: 'Pechuga Boys', correct: false },

    ]
  },
  {
    question: '¿Qué palabra de la version estadounidense del tema Creep fue cambiada?',
    answers: [
      { text: 'Fucking por Very', correct: true },
      { text: 'Dark por Very', correct: false },
      { text: 'Bitter por Very', correct: false },
      { text: 'Sweet por Very', correct: false },
    ]
  },
  {
    question: '¿Cuál es el nombre verdadero del artista King Crule?', 
    answers: [
      { text: 'Andy Marshall', correct: false },
      { text: 'Archy Marshall', correct: true },
      { text: 'José Marshall', correct: false },
      { text: 'Andrés Marshall', correct: false }
    ]
  },
  {
    question: '¿De qué genero musical es el disco Kick Drum de Blawan?',
    answers: [
      { text: 'Cumbia', correct: false },
      { text: 'Electrónica', correct: true }
    ]
  },
  {
    question: '¿En qué famoso libro fue incluido el album Boy in Da Corner de Dizzie Rascal?', 
    answers: [
      { text: '100 Albums You Must Hear Before Die', correct: false },
      { text: '1001 Albums You Must Hear Before Die', correct: true },
      { text: '2000 Albums You Must Hear Before Die', correct: false },
      { text: '5000 Albums You Must Hear Before Die', correct: false },

    ]
  },
  {
    question: '¿En qué ciudades tienen concierto los Friendly Fires este mes de noviembre?', 
    answers: [
      { text: 'Murcia y Antequera', correct: false },
      { text: 'Fuenlabrada y Leganés', correct: false },
      { text: 'Girona y Badalona', correct: false },
      { text: 'Nottingham y Manchester', correct: true }
    ]
  },
  {
    question: '¿Los artistas Cubano Franco Africanos Ibeyi están emparentados?', 
    answers: [
      { text: 'Son esposos', correct: false },
      { text: 'Son hermanos', correct: true },
      { text: 'Son primos', correct: false },
      { text: 'Son amigos', correct: false }
    ]
  },
  {
    question: '¿Cuál de las canciones de Overmono se ha convertido en un hit en las listas de tecno?', 
    answers: [
      { text: 'Desesperada', correct: false },
      { text: 'Amada Amante', correct: false },
      { text: 'Devórame otra vez', correct: false },
      { text: 'So U Kno', correct: true }
    ]
  },
  {
    question: '¿De qué nacionalidad es la artista Peggy Gou?', 
    answers: [
      { text: 'Japón', correct: false },
      { text: 'Corea del Sur', correct: true },
      { text: 'China', correct: false },
      { text: 'Corea del Norte', correct: false }
    ]
  },
  {
    question: '¿Qué orquesta ha colaborado en el disco A light for Attracting Attention de The Smile?', 
    answers: [
      { text: 'London Contemporary Orchestra', correct: true },
      { text: 'Vienna Contemporary Orchestra', correct: false },
    ]
  },
  {
    question: '¿Por qué Yaeji fabricó los mazos que aparecen en su vídeo musical?', 
    answers: [
      { text: 'Por la violencia contra los asia-americanos', correct: true },
      { text: 'Para machacar ternera', correct: false },
    ]
  },
  {
    question: '¿Qué prestigioso premio musical ganó Basement Jack?', 
    answers: [
      { text: 'Óscar', correct: false },
      { text: 'Grammy', correct: true },
      { text: 'Novel', correct: false },
      { text: 'Princesa de Asturias', correct: false }
    ]
  },

]