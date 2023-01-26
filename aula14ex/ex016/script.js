function contar() {
  let ini = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");
  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0 //se o numero de linhas total nas caixas de texto for 0
  ) {
    window.alert("[ERRO] Faltam dados!");
    res.innerHTML = "Impossível contar!";
  } else {
    res.innerHTML = "Contando: <br>";
    let i = Number(ini.value); //pegar o valor que esta na caixa e converter para numero
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("Passo inválido!Considerando PASSO 1");
      p = 1;
    }

    if (i < f) {
      //Contagem crescente
      for (
        let c = i;
        c <= f;
        c +=
          p /* o contador vai começar no numero colocado no inicio e enquanto ele for menor ou igual ao fim, o contador vai receber ele mesmo + o passo */
      ) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    } else {
      //Contagem regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449} `;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
