const name = prompt("Qual é o seu nome?");
const age = prompt("Quantos anos você tem?");
const language = prompt("Qual linguagem de programação você está estudando?");
const answer = Number(prompt(`Você gosta de estudar ${language}? Responda 1.Sim ou 2.Não`));
const mensage = alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`);
const showAlert1 = alert(askLanguage(answer))

function askLanguage(){ return answer === 1? "Muito bom! Continue estudando e você terá muito sucesso." : "Ahh que pena... Já tentou aprender outras linguagens?"}
