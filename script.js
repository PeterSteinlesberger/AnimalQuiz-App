let questions = [
    {
        "question": "1. Welche Tiere rasen durch den Wald?",
        "answer_1": "Katzen",
        "answer_2": "Elefanten",
        "answer_3": "Affen",
        "answer_4": "Schlangen",
        "right_answer": 3,
        "img": "img/animals/affe.jpg"
    },
    {
        "question": "2. Wer gilt als König der Tiere?",
        "answer_1": "Faultier",
        "answer_2": "Stinktier",
        "answer_3": "Eisbär",
        "answer_4": "Löwe",
        "right_answer": 4,
        "img": "img/animals/lion.jpg"
    },
    {
        "question": "3. Welches Tier rollt sich bei Gefahr zu einer Stachelkugel zusammen?",
        "answer_1": "Igel",
        "answer_2": "Katze",
        "answer_3": "Hund",
        "answer_4": "Ameise",
        "right_answer": 1,
        "img": "img/animals/igel.jpg"
    },
    {
        "question": "4. Wer kann am weitesten springen?",
        "answer_1": "Schnecke",
        "answer_2": "Giraffe",
        "answer_3": "Kanguru",
        "answer_4": "Schildkröte",
        "right_answer": 3,
        "img": "img/animals/kangaroo.jpg"
    },
   {
        "question": "5. Wie heißen die schwarzweiß gestreiften Verwandten des Pferdes?",
        "answer_1": "Esel",
        "answer_2": "Zebra",
        "answer_3": "Maultiere",
        "answer_4": "Pinguine",
        "right_answer": 2,
        "img": "img/animals/zebra.jpg"
    },
    {
        "question": "6. Welche Raubkatze ist ganz schwarz?",
        "answer_1": "Tiger",
        "answer_2": "Löwe",
        "answer_3": "Panter",
        "answer_4": "Puma",
        "right_answer": 3,
        "img": "img/animals/black-panther.jpg"
    },
    {
        "question": "7. Welches Tier wirft kleine Erdhügel auf Wiesen auf?",
        "answer_1": "Maulwurf",
        "answer_2": "Regenwrum",
        "answer_3": "Hase",
        "answer_4": "Ente",
        "right_answer": 1,
        "img": "img/animals/maulwurf.jpg"
    },
    {
        "question": "8. Wie groß ist ein Blauwal bei der Geburt?",
        "answer_1": "1 Meter",
        "answer_2": "3 Meter",
        "answer_3": "5 Meter",
        "answer_4": "7 Meter",
        "right_answer": 4,
        "img": "img/animals/wale.jpg"
    },
    {
        "question": "9. Wie alt können Esel werden?",
        "answer_1": "5 Jahre",
        "answer_2": "10 Jahre",
        "answer_3": "20 Jahre",
        "answer_4": "30 Jahre",
        "right_answer": 4,
        "img": "img/animals/donkey.jpg"
    },
    {
        "question": "10. Was machen Katzen, wenn sie sich wohlfühlen?",
        "answer_1": "miauen",
        "answer_2": "bellen",
        "answer_3": "schnurren",
        "answer_4": "wädeln mit dem Schwanz",
        "right_answer": 3,
        "img": "img/animals/cat.jpg"
    },
    {
        "question": "11. Wie nennt man junge Hausschweine?",
        "answer_1": "Ferkel",
        "answer_2": "Säue",
        "answer_3": "Widder",
        "answer_4": "Fohlen",
        "right_answer": 1,
        "img": "img/animals/pig.jpg"
    },
    {
        "question": "12. Welche Säugetiere sind besonders faul?",
        "answer_1": "Hasen",
        "answer_2": "Katzen",
        "answer_3": "Faultiere",
        "answer_4": "Erdmännchen",
        "right_answer": 3,
        "img": "img/animals/faultier.jpg"
    },
    {
        "question": "13. Wie weit können die größten Kängurus springen?",
        "answer_1": "10 Meter",
        "answer_2": "4 Meter",
        "answer_3": "2 Meter",
        "answer_4": "13 Meter",
        "right_answer": 4,
        "img": "img/animals/kanguru.jpg"
    },
    {
        "question": "14. Wer gräbt Gänge in die Erde?",
        "answer_1": "Ameisenbär",
        "answer_2": "Hase",
        "answer_3": "Frosch",
        "answer_4": "Huhn",
        "right_answer": 2,
        "img": "img/animals/rabbit.jpg"
    },
    {
        "question": "15. Wie schnell kann ein Gepard rennen?",
        "answer_1": "130 km/h",
        "answer_2": "60 km/h",
        "answer_3": "100 km/h",
        "answer_4": "45 km/h",
        "right_answer": 1,
        "img": "img/animals/cheetah.jpg"
    },
    {
        "question": "2. Wer gilt als König der Tiere?",
        "answer_1": "Adler",
        "answer_2": "Nashorn",
        "answer_3": "Löwe",
        "answer_4": "Haifisch",
        "right_answer": 3,
        "img": "img/animals/lion.jpg"
    },
    {
        "question": "16. Welches Tier verbreitet manchmal schrecklichen Gestank?",
        "answer_1": "Hund",
        "answer_2": "Stinktier",
        "answer_3": "Fisch",
        "answer_4": "Affe",
        "right_answer": 2,
        "img": "img/animals/skunk.jpg"
    },
    {
        "question": "17. Welches Tier schläft mit dem Kopf nach unten?",
        "answer_1": "Marienkäfer",
        "answer_2": "Eichhörnchen",
        "answer_3": "Wildschwein",
        "answer_4": "Fledermaus",
        "right_answer": 4,
        "img": "img/animals/flying-foxes.jpg"
    },
    {
        "question": "18. Wieviele Mägen hat die Kuh?",
        "answer_1": "7",
        "answer_2": "1",
        "answer_3": "2",
        "answer_4": "4",
        "right_answer": 1,
        "img": "img/animals/cow.jpg"
    }
]; 
let currentQuestion = 0;
let rightAnswers = 0;
let AUDIO_SUCCESS = new Audio('audio/rightAnswer.mp3');
let AUDIO_FAIL = new Audio('audio/wrongAnswer.mp3');
let AUDIO_WIN = new Audio('audio/audioTrack.mp3');
let AUDIO_BUTTON = new Audio('audio/klickButton.mp3');


function init() {  //Initialized the landing page
    AUDIO_WIN.pause();
    document.getElementById('img-main').innerHTML = '<img id="img-top" src="img/Animals.jpg" class="card-img-top">';
   document.getElementById('numberQuestions').innerHTML = questions.length;
   showQuestion();
}


function showQuestion() {  // Show next question or endscreen
    if (currentQuestion >= questions.length) {
        showEndscreen();   //Show endscreen
             
    } else {                // Show next question
      showNewQuestionAndAnswers();      //Sohw next Question
      progressBar();     // Show updated progressbar
    }
}


function showEndscreen() {    //Show endscreen
    AUDIO_WIN.play();
    document.getElementById('endscreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
   document.getElementById('img-top').src = 'img/animals/win.png';
   endResult();               // Show how much questions was right
}


function progressBar() {     // update and show the progressbar
    let percent = (currentQuestion +1) / questions.length;
           percent = percent * 100; 
        document.getElementById('progress-bar').style = `width: ${percent}%;`;
}


function showNewQuestionAndAnswers() {    //Sohw next Question
    let thisQuestion = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = thisQuestion['question'];
    document.getElementById('answer1').innerHTML = thisQuestion['answer_1'];
    document.getElementById('answer2').innerHTML = thisQuestion['answer_2'];
    document.getElementById('answer3').innerHTML = thisQuestion['answer_3'];
    document.getElementById('answer4').innerHTML = thisQuestion['answer_4'];
}


function answer(selection) {     //checked if the answer is right or false
    let thisQuestion = questions[currentQuestion];
    let idOfRightAnswer = `answer${thisQuestion['right_answer']}`;

    if (selection.slice(-1) == thisQuestion['right_answer']) {    //right answer - update HTML + update sum of right answers
    document.getElementById(selection).parentNode.classList.add('bg-success');
    document.getElementById('img-main').innerHTML = `<img class="img-animal" src="${thisQuestion['img']}">`;
    rightAnswers++;
    AUDIO_SUCCESS.play();
    } else {                 //wrong answer - update HTML 
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success' , 'animation');
        AUDIO_FAIL.play();
    }
    document.getElementById('nextQuestion').disabled = false;
}


function nextQuestion() {   //shows next question
    AUDIO_BUTTON.play();
    currentQuestion++;
    resetAnswerButtons();
    showQuestion();
    document.getElementById('nextQuestion').disabled = true;
    let countQuestion = currentQuestion;
    countQuestion++;
    document.getElementById('count-question').innerHTML = countQuestion;
}


function resetAnswerButtons() {  //clean up the answerbuttons from added classes
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).parentNode.classList.remove('bg-success', 'animation');
        document.getElementById(`answer${i}`).parentNode.classList.remove('bg-danger');
    }
    document.getElementById('img-main').innerHTML = '<img id="img-top" src="img/quiz.png" class="card-img-top">';
}


function endResult() {  //count the right answers, and sum of questions
    document.getElementById('rightAnswers').innerHTML = rightAnswers;
    document.getElementById('allQuestions').innerHTML = questions.length; 
}


function newGame() {  //initializes a new game
    AUDIO_BUTTON.play();
    currentQuestion = 0;
    rightAnswers = 0;
    init();
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
}


function showCardBody() {    //showes the card body
 document.getElementById('questionBody').innerHTML = `<h5 class="card-title" id="questionText">Frage</h5>
    <div class="card mb-2 quiz-answer-card">
        <div class="card-body" id="answer1" onclick="answer('answer1')">
            Antwort
        </div>
    </div>
    <div class="card mb-2 quiz-answer-card " onclick="answer('answer2')">
        <div class="card-body" id="answer2">
            Antwort
        </div>
    </div>
    <div class="card mb-2 quiz-answer-card" onclick="answer('answer3')">
        <div class="card-body" id="answer3">
            Antwort
        </div>
    </div>
    <div class="card mb-2 quiz-answer-card" onclick="answer('answer4')">
        <div class="card-body" id="answer4">
            Antwort
        </div>
    </div>
    <div class="question-footer">
        <span>
            <b id="count-question">1</b> von <b id="numberQuestions">5</b> Fragen
        </span> <br>
        <div class="new-game">
        <button class="btn btn-primary" id="nextQuestion" onclick="nextQuestion()" disabled>Nächste
            Frage</button></div>
    </div> `;
    newGame();
}































