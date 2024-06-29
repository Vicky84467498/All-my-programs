const questions = [
    {"question": "What is the main objective of the Information Technology Act, 2000?", "answer": "To provide a legal framework for electronic governance by giving recognition to electronic records and digital signatures"},
    {"question": "Which section of the IT Act, 2000 deals with hacking and associated penalties?", "answer": "Section 66"},
    {"question": "What is the role of Certifying Authorities as per the IT Act, 2000?", "answer": "Certifying Authorities are responsible for issuing Digital Signature Certificates and ensuring the security and integrity of electronic transactions"},
    {"question": "Which amendment to the IT Act, 2000 expanded the list of cybercrimes to include cyber terrorism and child pornography?", "answer": "The Information Technology (Amendment) Act, 2008"},
    {"question": "What is the function of the Cyber Appellate Tribunal as per the IT Act, 2000?", "answer": "To hear appeals against orders passed by adjudicating officers related to cybercrimes and penalties"},
    {"question": "Which section of the IT Act, 2000 provides legal recognition to electronic records?", "answer": "Section 4"},
    {"question": "What is the penalty for damage to computer systems under the IT Act, 2000?", "answer": "The penalty can include compensation to the affected party for damages caused by unauthorized access, virus introduction, etc."},
    {"question": "Which sections of the IT Act, 2000 deal with the responsibilities of intermediaries?", "answer": "Sections 67 to 79"},
    {"question": "How does the IT Act, 2000 address issues related to data protection and privacy?", "answer": "The IT Act, 2000, particularly after the 2008 amendment, includes provisions for data protection and privacy to safeguard sensitive personal data and information"},
    {"question": "Under the IT Act, 2000, who has the authority to adjudicate disputes related to cybercrimes?", "answer": "Adjudicating officers appointed under the Act have the authority to handle disputes and impose penalties related to cybercrimes"},
    {"question": "What is the significance of Section 10A of the IT Act, 2000?", "answer": "Section 10A provides that contracts formed through electronic means are legally valid and enforceable"},
    {"question": "Which section of the IT Act, 2000 deals with penalties for sending offensive messages through communication service?", "answer": "Section 66A"},
    {"question": "What is defined under Section 2(1)(t) of the IT Act, 2000?", "answer": "Section 2(1)(t) defines 'electronic signature' as an authentication of any electronic record by a subscriber by means of the electronic technique specified in the Second Schedule and includes digital signature"},
    {"question": "Which section in the IT Act, 2000 provides for the punishment for identity theft?", "answer": "Section 66C"},
    {"question": "What is covered under Section 69 of the IT Act, 2000?", "answer": "Section 69 deals with the powers to issue directions for interception or monitoring or decryption of any information through any computer resource"},
    {"question": "Which section of the IT Act, 2000 deals with penalties and compensation for damage to computer systems?", "answer": "Section 43"},
    {"question": "Who is designated to handle cybersecurity incidents according to the IT Act, 2000?", "answer": "The Indian Computer Emergency Response Team (CERT-IN) is designated to handle cybersecurity incidents"},
    {"question": "What is the punishment for cyber terrorism under the IT Act, 2000?", "answer": "Cyber terrorism is covered under Section 66F and is punishable with imprisonment which may extend to imprisonment for life"},
    {"question": "Which section of the IT Act, 2000 deals with breach of confidentiality and privacy?", "answer": "Section 72"},
    {"question": "Under the IT Act, 2000, what is the function of the Controller of Certifying Authorities?", "answer": "The Controller of Certifying Authorities is responsible for regulating the working of Certifying Authorities and ensuring compliance with the provisions of the Act"}
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
        answerElement.value = '';
        resultElement.textContent = '';
    } else {
        quizEnd();
    }
}

function checkAnswer() {
    const userAnswer = answerElement.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = `Wrong! The correct answer is ${questions[currentQuestionIndex].answer}.`;
    }

    currentQuestionIndex++;
    setTimeout(showQuestion, 2000);
}

function quizEnd() {
    document.getElementById('quiz').style.display = 'none';
    scoreElement.style.display = 'block';
    scoreElement.textContent = `You've finished the quiz! Your total score is: ${score}/${questions.length}`;
}

submitButton.addEventListener('click', checkAnswer);

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
});
