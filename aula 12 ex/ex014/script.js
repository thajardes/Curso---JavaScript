function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas <br>`;
  if (hora >= 0 && hora < 12) {
    msg.innerHTML += "Bom Dia!";
    img.src = "fotomanha.jpg";
    document.body.style.background = "#ecd4a5";
  } else if (hora >= 12 && hora < 18) {
    msg.innerHTML += "Boa Tarde!";
    img.src = "fototarde.jpg";
    document.body.style.background = "#916971";
  } else {
    msg.innerHTML += "Boa Noite!";
    img.src = "fotonoite.jpg";
    document.body.style.background = "#214670 ";
  }
}
