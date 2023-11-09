function tocaSom (idAudio) {
    const elemento = document.querySelector(idAudio);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('elemento não existe ou não é elemento de audio');
    }
}

const keyList = document.querySelectorAll('.tecla');

for (let contador = 0; contador < keyList.length; contador++) {

    const tecla = keyList[contador];
    const instrummento = keyList[contador].classList[1];
    const audioNome = `#som_${instrummento}` //Template String

    // tecla = document.querySelectorAll('.tecla').onclick = function () { tocaSom(audioNome);
    tecla.onclick = function () {
        tocaSom(audioNome);
    }

    tecla.onkeydown = function (key) {
        if (key.code === 'Enter' || key.code === 'Space') {
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
