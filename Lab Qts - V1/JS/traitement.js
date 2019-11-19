var tabReponse = new Array("A","A","A","A","A");
var tabBonneReponse = new Array("A","C","B","A","B");
var reponse,pointageReponse =0;

function listQts_onchange(noReponse)
{
    tabReponse[noReponse-1] = document.querySelector("#lstQts"+noReponse).value;
}

function sexeUtilisateur()
{
    if(document.querySelector("#radFem").checked == true)
    {
        sexe = " Mme ";
    }
    else if(document.querySelector("#radMasc").checked == true)
    {
        sexe = " Mr ";
    }

}

function btnCorriger_onclick()
{
    for(var i =0; i < tabBonneReponse.length; i++)
    {
        if(tabReponse[i] === tabBonneReponse[i])
        {
            pointageReponse += 20;
        }
        else
        {
            pointageReponse = pointageReponse + 0;
        }
    }

    sexeUtilisateur();
    AfficherReponse_onclick();
}

function AfficherReponse_onclick()
{
    nomUtilisateur = document.querySelector("#txtNom").value;
    reponse = " Bravo"+sexe+nomUtilisateur+" vous avez obtenu "+pointageReponse+"/100";
    document.querySelector("#lblReponse").innerHTML = reponse;
}

//Penser a ajouter la classe plutot que l'ID dans querySelectorAll