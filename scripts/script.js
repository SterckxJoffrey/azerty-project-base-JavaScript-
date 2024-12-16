
function afficherResultat(score, nbreMotsPropopse){
    console.log("Votre score est de " + score + " sur " + nbreMotsPropopse)

}

function choisirPhrasesOuMots(){

    let choix = prompt("Veillez choisir la liste : mots ou phrases")
    while(choix !== "mots" && choix !== "phrases"){
    choix = prompt("Veillez choisir la liste : mots ou phrases")
}
    return choix;
}

function lancerBoucleDeJeu (listePropositions){
    let score = 0;
    for (let i=0; i<listePropositions.length; i++){
        let motUtilisateur = prompt('Entrez le mot : ' + listePropositions[i]);
        if (listePropositions[i] === motUtilisateur) {
            score ++;
        }  
    }
    return score;
}

function lancerLeJeu (){
    let score = 0;
    let nbreMotsPropopse = 0;
    let choix = choisirPhrasesOuMots();

    if (choix === 'mots'){
        score = lancerBoucleDeJeu(listeMots);
        nbreMotsPropopse = listeMots.length;
    } else {
        score = lancerBoucleDeJeu(listePhrases);
        nbreMotsPropopse = listePhrases.length;
    }
    return afficherResultat(score, nbreMotsPropopse);
}


