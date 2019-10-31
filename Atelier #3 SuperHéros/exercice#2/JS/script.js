function btnChangerHero_onclick()
{
    var noImage;

    // Permet de saisir le numero de l'image
    noImage= parseInt(document.querySelector("#txtNoImage").value);

    //Vas chercher l'image correspondant au numero saisie
    document.querySelector("#imgHero").src="images/super-hero"+noImage+".jpg";
}