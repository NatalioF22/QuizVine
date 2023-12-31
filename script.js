document.addEventListener('DOMContentLoaded', function() {
    // Questions loaded from questions.json
   

    const questions = [
        {
            "question": "In which TV show does the character 'Walter White' appear?",
            "answers": ["Breaking Bad", "Game of Thrones", "Stranger Things", "The Wire"],
            "correctAnswer": "Breaking Bad"
        },
        {
            "question": "Who directed the movie 'Inception'?",
            "answers": ["Steven Spielberg", "Martin Scorsese", "Christopher Nolan", "Quentin Tarantino"],
            "correctAnswer": "Christopher Nolan"
        },
        {
            "question": "Which movie features a famous scene where characters ride flying bicycles?",
            "answers": ["E.T.", "Jurassic Park", "Back to the Future", "Star Wars"],
            "correctAnswer": "E.T."
        },
        {
            "question": "What is the name of the fictional continent where most of 'Game of Thrones' is set?",
            "answers": ["Mordor", "Middle-earth", "Westeros", "Narnia"],
            "correctAnswer": "Westeros"
        },
        {
            "question": "What is the capital city of France?",
            "answers": ["Berlin", "London", "Rome", "Paris"],
            "correctAnswer": "Paris"
        },
        {
            "question": "Who wrote 'Romeo and Juliet'?",
            "answers": ["William Shakespeare", "Charles Dickens", "J.K. Rowling", "Mark Twain"],
            "correctAnswer": "William Shakespeare"
        },
        {
            "question": "What is the largest planet in our Solar System?",
            "answers": ["Earth", "Jupiter", "Saturn", "Mars"],
            "correctAnswer": "Jupiter"
        },
        {
            "question": "Who painted the Mona Lisa?",
            "answers": ["Leonardo da Vinci", "Vincent Van Gogh", "Pablo Picasso", "Claude Monet"],
            "correctAnswer": "Leonardo da Vinci"
        },
        {
            "question": "What element does 'O' represent on the periodic table?",
            "answers": ["Gold", "Oxygen", "Silver", "Iron"],
            "correctAnswer": "Oxygen"
        },
        {
            "question": "Which animal is known as the 'King of the Jungle'?",
            "answers": ["Lion", "Elephant", "Tiger", "Giraffe"],
            "correctAnswer": "Lion"
        },
        {
            "question": "What is the hardest natural substance on Earth?",
            "answers": ["Iron", "Diamond", "Granite", "Quartz"],
            "correctAnswer": "Diamond"
        },
        {
            "question": "In which year did World War II end?",
            "answers": ["1945", "1939", "1950", "1941"],
            "correctAnswer": "1945"
        },
        {
            "question": "Who is the author of the 'Harry Potter' series?",
            "answers": ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
            "correctAnswer": "J.K. Rowling"
        },
        {
            "question": "What is the chemical symbol for water?",
            "answers": ["H2O", "CO2", "O2", "NaCl"],
            "correctAnswer": "H2O"
        },
        {
            "question": "Which planet is closest to the Sun?",
            "answers": ["Venus", "Earth", "Mercury", "Mars"],
            "correctAnswer": "Mercury"
        },
        {
            "question": "What is the main language spoken in Brazil?",
            "answers": ["Spanish", "English", "Portuguese", "French"],
            "correctAnswer": "Portuguese"
        },
        {
            "question": "How many continents are there in the world?",
            "answers": ["Five", "Six", "Seven", "Eight"],
            "correctAnswer": "Seven"
        },
        {
            "question": "What is the largest ocean on Earth?",
            "answers": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            "correctAnswer": "Pacific Ocean"
        },
        {
            "question": "Who was the first person to walk on the moon?",
            "answers": ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
            "correctAnswer": "Neil Armstrong"
        },
        {
            "question": "What is the capital of Japan?",
            "answers": ["Beijing", "Seoul", "Tokyo", "Bangkok"],
            "correctAnswer": "Tokyo"
        }
    ];



    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('submit-quiz');

    // Function to display the quiz questions
    function displayQuiz() {
        const output = [];
        questions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            currentQuestion.answers.forEach((answer) => {
                answers.push(
                    `<div class="form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="question${questionNumber}" value="${answer}">
                            ${answer}
                        </label>
                    </div>`
                );
            });
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });
        quizContainer.innerHTML = output.join('');
    }

    // Function to show results
    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if(userAnswer === currentQuestion.correctAnswer){
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        alert('Score: ' + numCorrect + ' out of ' + questions.length);
    }

    // Display the quiz
    displayQuiz();

    // On submit, show results
    submitButton.addEventListener('click', showResults);
});
