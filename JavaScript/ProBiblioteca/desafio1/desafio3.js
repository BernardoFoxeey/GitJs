function votar () {
    let idade = parseInt(prompt("Sua idade"));
    let nacionalidade = prompt("Sua nacionalidade");
    if (idade >= 16 && nacionalidade === "brasileiro") {
        alert("Voce pode votar")}
    else if (idade < 16 && nacionalidade === "brasileiro") 
        alert("Voce não pode votar");

    else{
        alert("Voce não pode votar")
    }
    }
votar();

