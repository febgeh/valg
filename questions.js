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

export {questions}