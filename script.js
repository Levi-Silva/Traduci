  var atual = 0;

window.onload = function(){
  function orcamento(){
    document.getElementById('btn-Home').classList.add('invisivel');
    document.getElementById('formulario').classList.remove('invisivel');
  }

  document.getElementById('btn-Home').onclick = orcamento;

  function destaque() {
    var selec = document.getElementsByClassName("selecionado");
    if (selec.length != 0) {
      selec[0].classList.remove("selecionado");
    }
    this.classList.add("selecionado");
  }

  var menu = document.getElementById('nav');
  var secoes = menu.getElementsByTagName('a');

  for (var i = 0; i < secoes.length; i++) {
    secoes[i].onclick = destaque;
  }


    function trocar(){
      var imagens = document.getElementsByClassName('iflip');
      var textos = document.getElementsByClassName('tflip');

      imagens[atual].classList.add('invisivel');
      textos[atual].classList.add('invisivel');
      atual++;

      if (atual == 8) {
        atual = 0;
      }

      imagens[atual].classList.remove('invisivel');
      textos[atual].classList.remove('invisivel');
    }

    setInterval(trocar, 2000);

}
