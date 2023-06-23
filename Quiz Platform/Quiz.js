const ques = [
    {
        question: "What was Harry Styles' second album?",
        answers: [
            {option: "Harry's House", correct: false},
            {option: "Harry Styles", correct: false},
            {option: "Fine Line", correct: true},
            {option: "Made in the A.M.", correct: false},
        ]
    },
    {
        question: "When is Harry's birthday?",
        answers: [
            {option: "8th April", correct: false},
            {option: "1st February", correct: true},
            {option: "10th December", correct: false},
            {option: "23rd October", correct: false},
        ]
    },
    {
        question: "What is Harry's middle name?",
        answers: [
            {option: "Michael", correct: false},
            {option: "James", correct: false},
            {option: "William", correct: false},
            {option: "Edward", correct: true},
        ]
    },
    {
        question: "Which of the following movies has Harry not acted in?",
        answers: [
            {option: "Black Widow", correct: true},
            {option: "My Policeman", correct: false},
            {option: "Dunkirk", correct: false},
            {option: "Don't Worry Darling", correct: false},
        ]
    },
    {
        question: "Which fruit has Harry not written a song about?",
        answers: [
            {option: "Watermelon", correct: false},
            {option: "Cherry", correct: false},
            {option: "Banana", correct: true},
            {option: "Kiwi", correct: false},
        ]
    }
]

const quesEle = document.getElementById("ques");
const ans = document.getElementById("ans-options");
const next = document.getElementById("next");

let currQues = 0;
let score = 0;

function start() {
    currQues = 0;
    score = 0;
    next.innerHTML = "Next"
    dispQues();
}

function reset() {
    next.style.display = "none";
    while(ans.firstChild) {
        ans.removeChild(ans.firstChild);
    }
}

function dispQues() {
    reset();
    let curr = ques[currQues];
    quesEle.innerHTML = curr.question;
    curr.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.option;
        button.classList.add("option");
        ans.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct.toString();
        }
        button.addEventListener("click", (e)=> {
            const selected = e.target;
            const isTrue = selected.dataset.correct === "true";
            if (isTrue) {
                selected.classList.add("correct-ans");
                score++;
            }
            else {
                selected.classList.add("incorrect-ans");
            }
            Array.from(ans.children).forEach(button => {
                if (button.dataset.correct === "true") {
                    button.classList.add("correct-ans");
                }
                
            })
            next.disabled = false;
            next.style.display = "block";
        } );
    })
}

next.addEventListener("click", () => {
    if (currQues < ques.length - 1) {
      dispNext();
    } else {
      dispScore();
    }
  });
  
  function dispNext() {
    currQues++;
    if (currQues < ques.length) {
      dispQues();
    } else {
      dispScore();
    }
  }
  
  function dispScore() {
    reset();
    quesEle.innerHTML = `Your score is ${score}/5!`;
    next.innerHTML = "Play Again!";
    next.style.display = "block";
    next.removeEventListener("click", dispNext);
    next.addEventListener("click", function playAgain() {
      next.removeEventListener("click", playAgain);
      start();
    });
  }

// function dispNext() {
//     currQues++;
//     if (currQues < ques.length) {
//         dispQues();
//     }
//     else {
//         dispScore();
//         next.removeEventListener("click", dispNext);    
//     }
// }

// function dispScore() {
//     reset();
//     quesEle.innerHTML = `Your score is ${score}/5!`;
//     next.innerHTML = "Play Again!";
//     next.style.display = "block";
//     next.removeEventListener("click", dispScore);
//     next.addEventListener("click", () => {
//         start();
//         next.removeEventListener("click", start);
//         next.addEventListener("click", dispNext);
//       });
// }

start();
