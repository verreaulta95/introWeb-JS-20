var tabJoueur = new Array(5);
var cpt =0;

function Joueur(Prenom,Age,Point)
{
    this.Prenom = Prenom;
    this.Age = Age;
    this.Point = Point;
}

function ajouterJoueur()
{
    var nom = document.querySelector("#txtNom").value;
    var age = document.querySelector("#txtAge").value;
    var point = parseInt(document.querySelector("#txtPoints").value);
    tabJoueur[cpt] = new Joueur(nom,age,point);

}

function btnAjouter_onclick()
{
    ajouterJoueur();
    cpt++;

    if(cpt >= 5)
    {
        document.querySelector("#btnTrouverMoy").disabled = false;
        document.querySelector("#btnTrouverMeilleur").disabled = false;
        document.querySelector("#btnRechercher").disabled = false;
        document.querySelector("#btnAjouter").disabled = true;
    }
}



function btnTrouverMoy_onclick()
{
    var total =0;

	for(var i =0; i < tabJoueur.length; i++)
    {
        total = tabJoueur[i].Point + total;
    }
    total = total /5;
    document.querySelector("#lblRes1").innerHTML = total;
}

function btnTrouverMeilleur_onclick()
{
    var max = 100;
    var joueurPlusGrand = "";
    for(var i =0; i < tabJoueur.length; i++)
    {
        if(max < tabJoueur[i].Point)
        {
            max = tabJoueur[i].Point;
            joueurPlusGrand = tabJoueur[i].Prenom;
        }
    }
    document.querySelector("#lblReponse").innerHTML = "Le joueur ayant le plus de point : "+ max + " est " + joueurPlusGrand;
}


function btnRechercher_onclick()
{
    var cptJoueur = 0;
    var trouver = false;
    var nomJoueur = "";
    var ageJoueur = 0;
    var pointJoueur =0;

    while((cptJoueur <= 5) &&  (trouver === false))
    {
        if(tabJoueur[cptJoueur].Prenom  === document.querySelector("#txtNom").value)
        {
            nomJoueur = tabJoueur[cptJoueur].Prenom;
            ageJoueur = tabJoueur[cptJoueur].Age;
            pointJoueur = tabJoueur[cptJoueur].Point;
            trouver = true;
        }
        else
        {
            cptJoueur++;
        }
    }

    if(trouver === false)
    {
        alert("La personne rechercher n'existe pas.");
    }

    if(trouver === true)
    {
        prompt("La personne est : " +nomJoueur +" et a " + ageJoueur + " a marquer : " + pointJoueur );
        document.querySelector("#txtAge").innerHTML = ageJoueur;
        document.querySelector("#txtPoints").innerHTML = pointJoueur;
    }

}