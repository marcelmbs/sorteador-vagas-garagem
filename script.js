let vagas = [];
let vagasSelecionadas = [];
let aptosDisponiveis = [];

let ap31 = "31";
let ap43 = "43";
let ap62 = "62";
let ap101 = "101";

function onLoad() {
  for (let index = 1; index <= 44; index++) {
    vagas.push(index);
  }

  let andar = 0;
  while (andar <= 10) {
    for (let index = 1; index <= 4; index++) {
      if (andar == 0 && index == 4) break;

      aptosDisponiveis.push(`${andar}${index}`);
    }

    andar++;
  }
  aptosDisponiveis.splice(aptosDisponiveis.indexOf(ap31), 1);
  aptosDisponiveis.splice(aptosDisponiveis.indexOf(ap43), 1);
  aptosDisponiveis.splice(aptosDisponiveis.indexOf(ap62), 1);
  aptosDisponiveis.splice(aptosDisponiveis.indexOf(ap101), 1);
}

document.addEventListener(
  "keypress",
  function (e) {
    if (e.which == 13) {
      sortearVaga();
    }
  },
  false
);

function sortearVaga() {
  let vaga = document.getElementById("idVaga").value;

  if (vaga == "" || vagas.indexOf(vaga) != -1) {
    buildMensagem("erro", "Insira uma vaga de 1 a 43!");
    return;
  } else if (aptosDisponiveis.length <= 0) {
    buildMensagem("erro", "Todos os apartamentos já foram sorteados!");
    return;
  } else if (vaga == 16) {
    buildMensagem("erro", "A vaga 16 (PCD) não está sendo sorteada!");
    return;
  } else if (vaga == 17) {
    buildMensagem("erro", "A vaga 17 (PCD) não está sendo sorteada!");
    return;
  } else if (vaga == 22) {
    buildMensagem("erro", "A vaga 22 (PCD) não está sendo sorteada!");
    return;
  } else if (vaga == 23) {
    buildMensagem("erro", "A vaga 23 (PCD) não está sendo sorteada!");
    return;
  } else if (vaga == 32) {
    buildMensagem("erro", "A vaga 32 não está sendo sorteada!");
    return;
  } else if (vaga > 44 || vaga <= 0) {
    buildMensagem("erro", "Insira uma vaga de 1 a 43!");
    return;
  } else if (vagasSelecionadas.indexOf(vaga) != -1) {
    buildMensagem("erro", `A vaga ${vaga} já foi sorteada!`);
    return;
  }

  let aptoSorteado = "";
  aptoSorteado = aptosDisponiveis[Math.floor(Math.random() * aptosDisponiveis.length)];

  aptosDisponiveis.splice(aptosDisponiveis.indexOf(aptoSorteado), 1);

  vagasSelecionadas.push(vaga);
  document.getElementById("idVaga").value = "";
  buildMensagem(
    "sucesso",
    `O apartamento sorteado para a vaga ${vaga} é o apartamento ${aptoSorteado}`
  );

  addToGrid(vaga, aptoSorteado);
}

function addToGrid(vaga, apartamento) {
  let bodyGrid = document.getElementById("bodyGrid");
  let row = `<tr><td>${vaga}</td><td>${apartamento}</td></tr>`;
  bodyGrid.innerHTML += row;
}

function buildMensagem(tipo, mensagem) {
  let objmensagem = document.getElementById("mensagem");
  objmensagem.innerHTML = mensagem;

  if (tipo == "erro") objmensagem.style.color = "red";
  else objmensagem.style.color = "green";

  setTimeout(() => {
    objmensagem.innerHTML = "";
  }, 4000);
}
