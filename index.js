

//Dropdown
setTimeout(function() {
    var element = document.getElementById("valgomat_prompt_text");
    element.style.opacity = 0;
}, 2000);


//variables
let Ja = 7


const vinner = document.getElementById("vinner")
console.log(Ja)


const alleSpørsmål = document.getElementById('alleSpørsmål')

function createCard(q) {
    let card = document.createElement('div')
    card.className = "sprøsmål1"

    let question = document.createElement('h2')
    question.innerText = q.question
    
    let cardButtons = document.createElement('div')
    cardButtons.className = "sprøsmål_svar"

    for(let i = 0; i < q.answer.length; i++) {
        cardButtons.appendChild(cardOption(q.answer[i].text, q.answer[i].points))
    }

    card.appendChild(question)
    card.appendChild(cardButtons)

    alleSpørsmål.appendChild(card)
}

function cardOption(text, points) {
    let button = document.createElement('div')
    button.className = "svar1"

    let h4 = document.createElement('h4')

    h4.innerText = text
    button.appendChild(h4)
    button.addEventListener('click', points)

    return button
}


function createAllQuestions(q) {
    let lastQuestionIndex = q.length - 1; // Initialize the index of the last question

    for (let i = 0; i < q.length; i++) {
        const isLastQuestion = i === lastQuestionIndex; // Check if it's the last question
        createCard(q[i], isLastQuestion);
    }

    // Add an event listener to the last question
    if (lastQuestionIndex >= 0) {
        const lastQuestionCard = document.querySelector('.sprøsmål1:last-child'); // Assuming .sprøsmål1 is the class name of the question card
        if (lastQuestionCard) {
            lastQuestionCard.addEventListener('click', () => {
                document.getElementById("anim").style.display = "block";
                document.querySelector(".alleSprøsmål").style.opacity = 0; 

            
                
                lineText.forEach(function (element1) {
                    element1.style.fontSize = "40px";
                    element1.style.transform = "translate(-150px,-50px)";
                });             
            });
        }
    }
}


const questions = [
    {
        question: "Hva er GDPR?",
        answer: [
            {
                text: 'En lov',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'En organisasjon',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'Et nettverk som administrerer personværn i EU og EØS',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'En lov som sikrer personvern til innbyggere i EU og EØS',
                points: ()=>  {
                    
                }
            },
        ], 
    },
    {
        question: "Hva står GDPR for?",
        answer: [
            {
                text: 'General Data Protection Regulation',
                points: ()=>  {
                    
                }
            },
            {
                text: 'General Data Protection Rights',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'General Data Protection Rules',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'Vet ikke',
                points: ()=>  {
                    Ja -= 1
                }
            },
        ], 
    },
    {
        question: "Hva er Informasjonsplikten?",
        answer: [
            {
                text: 'Hvis elever er dumme nokk til å svare og gi oss kreditt informasjonen, så er det deres feil',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'Skolen må gi tydelig informasjon til elevene og personalet om hvordan deres personopplysninger behandles.',
                points: ()=>  {
                }
            },
            {
                text: 'L',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'Vet ikke',
                points: ()=>  {
                    Ja -= 1
                }
            },
        ], 
    },
    {
        question: "Hvilken type data kan vi lagre om elever?",
        answer: [
            {
                text: 'Det vi vil',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'Det som er nødvendig for å oppfylle formålet',
                points: ()=>  {
                    
                }
            },
            {
                text: 'Det vi som skole har lyst til',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'Vet ikke',
                points: ()=>  {
                    Ja -= 1
                }
            },
        ], 
    },
    {
        question: "Har elevene rett til å få innsyn i egne personopplysninger?",
        answer: [
            {
                text: 'Egt ikke fordi vi er en skole',
                points: ()=>  {
                    Ja -= 1 
                }
            },
            {
                text: 'Det er opp til skolen',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'Ja, de har rett til å få innsyn i egne personopplysninger',
                points: ()=>  {
                    
                }
            },
            {
                text: 'Vet ikke',
                points: ()=>  {
                    Ja -= 1
                }
            },
        ], 
    },
    {
        question: "Hva er en databehandleravtale?",
        answer: [
            {
                text: 'En avtale mellom skolen og en annen part som behandler personopplysninger på vegne av skolen',
                points: ()=>  {
                }
            },
            {
                text: 'En avtale mellom skolen og en annen part som behandler personopplysninger på vegne av seg selv',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'En avtale mellom skolen og en annen part som behandler personopplysninger på vegne av elevene',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'Vet ikke',
                points: ()=>  {
                    Ja -= 1
                }
            },
        ], 
    },
    {
        question: "Hva er en personopplysning?",
        answer: [
            {
                text: 'All informasjon som kan knyttes til en enkeltperson',
                points: ()=>  {
                    
                }
            },
            {
                text: 'All informasjon som kan knyttes til en gruppe',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'All informasjon som kan knyttes til en skole',
                points: ()=>  {
                    Ja -= 1
                }
            },
            {
                text: 'Vet ikke',
                points: ()=>  {
                    Ja -= 1
                }
            },
        ], 
    },
]


createAllQuestions(questions);



document.querySelectorAll(".sprøsmål1").forEach(function (question) {
    question.addEventListener("click", function () {
        
        vinner.innerText = Ja
        console.log("Clicked element ID:", question.id);
    });
});



const btns = document.querySelectorAll(".svar1"); 


btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // chartpop.style.display = "block";
    const Position = window.scrollY || document.documentElement.scrollTop;
    const newPosition = Position + 585;
    window.scrollTo({
      top: newPosition,
      left: 0,
      behavior: "smooth"
    });
  });
});

function toTopp() {
    if (window.scrollY > 0) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
}

window.onload = function() {
    toTopp();
}
function restart() {
    window.location.reload();
}

