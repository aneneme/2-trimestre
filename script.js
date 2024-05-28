const caixaPrincipal=document.querySelector(".caixaPrincipal");
const caixaPergutas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas=[
    {
        enunciado: "Pergunta 1",
        alternativas:[
            "Alternativa 1",
            "Alternativa 2",
        ]
    },
    {
        enunciado: "Pergunta 1",
        alternativas:[
            "Alternativa 1",
            "Alternativa 2",
        ]
    },
    {
        enunciado: "Pergunta 1",
        alternativas:[
            "Alternativa 1",
            "Alternativa 2",
        ]
    },
    {
        enunciado: "Pergunta 1",
        alternativas:[
            "Alternativa 1",
            "Alternativa 2",
        ]
    },
    {
        enunciado: "Pergunta 1",
        alternativas:[
            "Alternativa 1",
            "Alternativa 2",
        ]
    },
];

let atual=0;
let perguntasAtual;

function mostrarPergunta(){
    perguntasAtual=perguntas[atual];
    caixaPergutas.textContent=perguntasAtual.enunciado;
}

mostrarPergunta();