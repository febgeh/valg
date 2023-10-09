

//Dropdown
setTimeout(function() {
    var element = document.getElementById("valgomat_prompt_text");
    element.style.opacity = 0;
}, 2000);


//variables
let SP = 0
let FrP = 0
let SV = 0
let Rødt = 0
let AP = 0
let Venstre = 0
let Høyre = 0
let MdG = 0
let Krf = 0

const vinner = document.getElementById("vinner")
console.log(SP, FrP, SV, Rødt, AP, Venstre, Høyre, MdG, Krf)


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
                var lineText = document.querySelectorAll(".line-text");
                var lineElements = document.querySelectorAll(".Line");
                var newGap = "35px";
            
                // Apply the new gap to each Line element
                lineElements.forEach(function (element) {
                    element.style.transition = "margin-bottom 1s ease"; 
                    element.style.height = "30px"
                    element.style.borderRadius = "6px"
                    element.style.marginBottom = newGap;
                });
                
                lineText.forEach(function (element1) {
                    element1.style.fontSize = "40px";
                    element1.style.transform = "translate(-150px,-50px)";
                });
            
                // let tryA = document.querySelector(".anim");
                // document.addEventListener("mousemove", function(event) {
                //     let Y = event.clientY;
                //     let X = event.clientX;
                //     tryA.style.left = X * 0.2 +'px'
                // })                 
            });
        }
    }
}


const questions = [
    {
        question: "Leksefri skole?",
        answer: [
            {
                text: 'Helt Uenig',
                points: ()=>  {
                    SV += 1; FrP += 1; 
                }
            },
            {
                text: 'Litt Uenig',
                points: ()=>  {
                    SP += 1
                }
            },
            {
                text: 'Litt Enig',
                points: ()=>  {
                    AP += 1, Krf += 1, Venstre += 1, MdG += 1
                }
            },
                    {
                text: 'Helt Enig',
                points: ()=>  {
                    Rødt += 1; Høyre += 1
                }
            },
        ], 
    },
    {
        question: "Bør vi implementere strengere straffer?",
        answer: [
            {
                text: 'Helt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; 
                }
            },
            {
                text: 'Litt Uenig',
                points: ()=>  {
                    FrP += 1; Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Enig',
                points: ()=>  {
                    
                }
            },
                    {
                text: 'Helt Enig',
                points: ()=>  {
                    AP += 1
                }
            },
        ], 
    },
    {
        question: "Bør vi finne nye oljefelt?",
        answer: [
            {
                text: 'Helt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
                    {
                text: 'Helt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
        ], 
    },
    {
        question: "Bør vi finne nye oljefelt?",
        answer: [
            {
                text: 'Helt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
                    {
                text: 'Helt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
        ], 
    },
    {
        question: "Skal vi fortsette med å ta imot flyktnnger?",
        answer: [
            {
                text: 'Helt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
                    {
                text: 'Helt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
        ], 
    },
    {
        question: "Nordmenn betaler for mye i skatter og avgifter",
        answer: [
            {
                text: 'Helt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
                    {
                text: 'Helt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
        ], 
    },
    {
        question: "Jeg støtter økt satsing på fornybar energi for å bekjempe klimaendringer.",
        answer: [
            {
                text: 'Helt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
                    {
                text: 'Helt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
        ], 
    },
    {
        question: "Det er ikke greit å øke bompengene mer (basert)",
        answer: [
            {
                text: 'Helt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
                    {
                text: 'Helt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
        ], 
    },
    {
        question: "Høyere skatt",
        answer: [
            {
                text: 'Helt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Uenig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
            {
                text: 'Litt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
                    {
                text: 'Helt Enig',
                points: ()=>  {
                    Rødt += 1; SV += 1; FrP += 1;
                }
            },
        ], 
    }

]


createAllQuestions(questions);



const APL = document.getElementById("AP")
const HøyreL = document.getElementById("Høyre")
const SPL = document.getElementById("SP")
const FrPL = document.getElementById("FrP")
const SVL = document.getElementById("SV")
const RødtL = document.getElementById("Rødt")
const VenstreL = document.getElementById("Venstre")
const MdGL = document.getElementById("MdG")
const KrfL = document.getElementById("Krf")

let partiVinner = 0
document.querySelectorAll(".sprøsmål1").forEach(function (question) {
    // Add a click event listener to each question element
    question.addEventListener("click", function () {
        APL.style.width = AP*11 + '%'
        HøyreL.style.width = Høyre *11+ '%'
        SPL.style.width = SP*11 + '%'
        FrPL.style.width = FrP*11 + '%'
        SVL.style.width = SV*11 + '%'
        RødtL.style.width = Rødt*11 + '%'
        VenstreL.style.width = Venstre*11 + '%'
        MdGL.style.width = MdG*11 + '%'
        KrfL.style.width = Krf*11 + '%'
        let parties = {
            SP,
            FrP,
            SV,
            Rødt,
            AP,
            Venstre,
            Høyre,
            MdG,
            Krf
        };
        var max = -Infinity;
        var maxName = "";
        
        for (var party in parties) {
            if (parties[party] > max) {
                max = parties[party];
                maxName = party;
            }
        }
        
        vinner.innerText = maxName
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

