AOS.init();
const dataEvento = new Date("Sep 25, 2025 00:00:00");
const timeStampEvento = dataEvento.getTime();
const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    let timeStampRestante = timeStampEvento - timeStampAtual;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutosEmMs = 60000;
    const segundosEmMs = 1000;
    const diasRestantes = Math.floor(timeStampRestante / diaEmMs);
    const horasRestantes = Math.floor(timeStampRestante % diaEmMs / horaEmMs);
    const minutosRestantes = Math.floor(timeStampRestante % horaEmMs / minutosEmMs);
    const segundosRestantes = Math.floor(timeStampRestante % minutosEmMs / segundosEmMs);
    const tempoRestante = `come\xe7a em ${diasRestantes}d ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`;
    document.getElementById('contador').innerText = tempoRestante;
    if (timeStampRestante < 0) {
        clearInterval(contaHoras);
        contador.innerText = "j\xe1 acabou.";
    }
}, 1000);

//# sourceMappingURL=aula.f75de5e1.js.map
