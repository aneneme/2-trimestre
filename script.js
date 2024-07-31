const caixaPrincipal=document.querySelector(".caixaPrincipal");
const caixaPergutas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "o morango tem que cor?",
        alternativas:[
            {
           texto: "vermelho",
        afirmação: "Sim, o morango é vermelho",
            },
            {
           texto: "verde",
           afirmacao: "Parece que vocẽ não sabe a cor de um morango"    
            }
        ]
    },
    {
        enunciado: "no brasil, se fala qual língua?",
        alternativas:[
            {
           texto: "português",
        afirmação: "Correto, no brasil se fala português",
            },
            {
           texto: "espanhol",
           afirmacao: "Errado"    
            }
        ]
    },
    {
        enunciado: "qual o símbolo do ouro na tabela períodica",
        alternativas:[
            {
           texto: "Au",
        afirmação: "Certo",
            },
            {
           texto: "K",
           afirmacao: "Errado, K significa potássio"    
            }
        ]
    },
    {
        enunciado: "Quantas patas tem um gato?",
        alternativas:[
            {
           texto: "4",
        afirmação: "Certo, um gato tem 4 patas",
            },
            {
           texto: "6",
           afirmacao: "Parece que você nunca viu um gato",    
            }
        ]
    },
    {
        enunciado: "Qual desses é um metodo contraceptivo?",
        alternativas:[
            {
           texto: "camisinha",
        afirmação: "Correto",
            },
            {
           texto: "tabelinha",
            afirmacao: "Errado, não é um metodo contraceptivo"    
            }
        ]
    },
];

let atual=0;
let perguntasAtual;
let historiaFinal = ""; 

function mostraPergunta() {
   if(atual >= perguntas.length){
        mostraResultado();
        return;
    }   
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacoes;  mudar para opcaoSelecionada.afirmacao
            historiaFinal += afirmacoes + " "; 
            atual++;
            mostraPergunta();
      }

function mostraResultado(){
    caixaPerguntas.textContent = "Parabéns, você tem mais de 130qi.  :]"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

mostraPergunta();

