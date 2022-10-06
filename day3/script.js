const area = prompt('Qual área você deseja seguir, Front-end ou Back-end?');
let framework = '';
let linguagem = '';

if (area === "Front-end") {
   framework = prompt("Na área de front-end, qual dos dois framework mais chamou sua atenção: React ou Vue? Responda com uma das duas opções.")
} else if (area === "Back-end") {
   linguagem = prompt("Na área de back-end, qual linguagem você escolheu para começar os estudos: Java ou C#? Responda com uma das duas")
} else {
   alert("Insira um valor válido.")
}

const especializacao = prompt('Você deseja permanecer na área de atuação ou pretende atuar como Fullstack em algum momento? Responda a área de atuação ou Fullstack.')

if (especializacao === "Fullstack") {
   alert(`Ótimo! Com todas as escolhas feitas siga o seu caminho para se tornar um Desenvolvedor ${especializacao}`)
} else if (especializacao === "Front-end") {
   alert(`Ótimo! Com a área ${especializacao} e o framework ${framework} escolhidos, comece o seu estudo e avance para se tornar um Dev.`)
} else if (especializacao === "Back-end") {
   alert(`Ótimo! Com a área ${especializacao} e a linguagem ${linguagem} escolhidos, comece o seu estudo e avance para se tornar um Dev.`)
} else {
   alert("Insira um valor válido.")
}

let pergunta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Responda com 1-sim, 2-não.");
while (pergunta === "1") {
   let tecnologia = prompt("Qual?");
   alert(`Ah, ótima escolha! ${tecnologia} será excelente pro seu futuro.`);
   pergunta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Responda com 1-sim, 2-não.");
}
alert("Obrigado por participar! Recarregue a página para jogar novamente.")