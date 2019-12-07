function frmMembre_onclick()
{
    if(validerChampsObligatoire() === true)
    {
        if(valideFormat() === true)
        {
            btnEnvoyer_confirm();
        }
    }

}
function validerChampsObligatoire()
{
    var valide = true;
    var tabObjetObligatoire = document.querySelectorAll(".Obligatoire");
    var message = document.querySelector("#lblMessageErreur").innerHTML =  "Vous devez remplir les champs obligatoire";

    for(var i =0; i < tabObjetObligatoire.length; i++)
    {
        if(tabObjetObligatoire[i].value === "")
        {
            tabObjetObligatoire[i].style.borderColor = "red";
            valide = false;
            message;
        }
        else
        {
            tabObjetObligatoire[i].style.borderColor = "white";
            document.querySelector("#lblMessageErreur").innerHTML = "";
        }
    }

    return valide;
}

function btnEnvoyer_confirm()
{

    if (confirm("Voulez vous continuer") === false)
    {
        alert("envoyer");
        traitePrix();
    }


}

function traitePrix()
{
	var prix = 0;


	switch(document.querySelector("#type").value)
    {
        case "adulte" : prix = 90; alert(prix); break;
        case "étudiant" : prix = 60; break;
        case "retraité" : prix = 80; break;
        default :
    }


}