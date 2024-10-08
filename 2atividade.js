function votaçao (idade){
  if (idade >=18 && idade <= 70) {
    console.log ("voto obrigatório")
  }else if (idade == 16 ||  idade == 17 || idade > 70){
    console.log ("voto facultativo")
  }else{
    console.log("Não Obrigatório")
  }      
}
votaçao(20)