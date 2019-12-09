function frmMembre_onSubmit()
{
    var valide = true;

    if(validerChampsObligatoire() === true)
    {
        if(valideFormat() === true)
        {
            if(confirm("Voulez-vous envoyer votre formulaire d'inscription ") === false)
            {
                valide = false;
            }
            else
            {
                traitePrix();
            }
        }
        else
        {
            valide = false;
        }
    }
    else
    {
        alert("Vous devez remplir le formulaire correctement.");
        valide = false;
    }

    return valide;
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


function traitePrix()
{
	var prix = 0;


	switch(document.querySelector("#type").value)
    {
        case "adulte" : prix = 90; break;
        case "étudiant" : prix = 60; break;
        case "retraité" : prix = 80; break;
    }

    return document.querySelector("#lblMessageErreur").innerHTML =  "Votre prix sera de : " + prix + " $";

}