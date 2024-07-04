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
        afirmação: "afirmação",
            },
            {
           texto: "verde",
           afirmacao: "afirmação"    
            }
        ]
    },
    {
        enunciado: "no brasil, se fala qual língua?",
        alternativas:[
            {
           texto: "português",
        afirmação: "afirmação",
            },
            {
           texto: "espanhol",
           afirmacao: "afirmação"    
            }
        ]
    },
    {
        enunciado: "qual o símbolo do ouro na tabela períodica",
        alternativas:[
            {
           texto: "Au",
        afirmação: "afirmação",
            },
            {
           texto: "K",
           afirmacao: "afirmação"    
            }
        ]
    },
    {
        enunciado: "Quantas patas tem um gato?",
        alternativas:[
            {
           texto: "4",
        afirmação: "afirmação",
            },
            {
           texto: "6",
           afirmacao: "afirmação"    
            }
        ]
    },
    {
        enunciado: "Qual desses é um metodo contraceptivo?",
        alternativas:[
            {
           texto: "camisinha",
        afirmação: "afirmação",
            },
            {
           texto: "tabelinha",
            afirmacao: "afirmação"    
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
    caixaPerguntas.textContent = "Em 2049..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

mostraPergunta();

