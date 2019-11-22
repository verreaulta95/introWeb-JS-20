var tabJoueur = new Array(5);
var cpt =0;

function Joueur(Prenom,Nom,Point)
{
    this.Prenom = Prenom;
    this.Nom = Nom;
    this.Point = Point;
}

function ajouterJoueur()
{
    var nom = document.querySelector("#txtNom").value;
    var age = document.querySelector("#txtAge").value;
    var point = document.querySelector("#txtPoints").value;
    tabJoueur[cpt] = new Joueur(nom,age,point);

    for(var i =0; i < tabJoueur.length; i++ )
    {
        tabJoueur[i] = Joueur;
    }

}

function btnAjouter_onclick()
{
    ajouterJoueur();
    cpt++;

    if(cpt >= 5)
    {
        document.querySelector("#btnTrouverMoy").disabled = true;
        document.querySelector("#btnTrouverMeilleur").disabled = true;
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
    var max = 1;
    var joueurPlusGrand = "";
    for(var i =0; i < tabJoueur.length; i++)
    {
        if(max < tabJoueur.Point)
        {
            max = tabJoueur[i].Point;
            joueurPlusGrand = tabJoueur[i].Nom;
        }

        if( i > tabJoueur.length)
        {
            document.querySelector("#lblReponse").innerHTML = "Le joueur ayant le plus de point : "+ max + " est " + joueurPlusGrand;
        }
    }

}


function btnRechercher_onclick()
{
    var cptJoueur = 0;
    while(cptJoueur < 5)
    {
        if(document.querySelector("#txtNom").value === tabJoueur[i].Nom)
        {
            document.querySelector("#txtPoints").innerHTML = tabJoueur[i].Point;
            //mettre age mais je trouve pas (peut etre mon constructeur mal concu)
        }
        else
        {
            cptJoueur++;
        }
    }
}