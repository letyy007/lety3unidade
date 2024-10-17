function verificarCorSemaforo(cor){ 
    if (cor=="Vermelho"){
        console.log("A cor Vermelhio significa pare.");
    }else if(cor=="Amarelo") {
        console.log("A cor Amarelo significa atenção.")
    }else if (cor=="Verde"){
        console.log("A cor Verde significa seguir.")
    }else {
        console.log("A cor invalida para o semafóro.")
    }
}

verificarCorSemaforo('Vermelho')
verificarCorSemaforo('Amarelo')
verificarCorSemaforo('Verde')
verificarCorSemaforo('Roxo')
