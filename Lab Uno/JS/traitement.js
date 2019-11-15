var cpt,pointageTour,pointageTotal,couleurCarte,valeurCarte,carte1,valeur1;

cpt = 0;
pointageTour =0;
pointageTotal = 0;


function imageOnclick(noCarte)
{
    AfficherCarte(noCarte);

    document.querySelector("#btnCarte"+noCarte).disabled = true ;

    if(cpt === 2)
    {
        DesactiverTout();
        document.querySelector("#btnContinuer").disabled = false ;
        cpt = 0;
        CalculationPoint();
    }
    else
    {
        valeur1 = valeurCarte;
        carte1 = couleurCarte;
    }

}

function AfficherCarte(noCarte)
{
    valeurCarte  = Math.floor(Math.random()*9);
    couleurCarte = Math.floor(Math.random()*4+1);

    document.querySelector("#btnCarte"+noCarte).disabled = true ;

    switch(couleurCarte)
    {
        case 1 : couleurCarte = "bleu";  break;
        case 2 : couleurCarte = "rouge";  break;
        case 3 : couleurCarte = "jaune";  break;
        case 4 : couleurCarte = "vert";  break;

    }
    cpt++;
    document.querySelector("#btnCarte"+noCarte).src="img/"+valeurCarte+couleurCarte+".png";


}

function DesactiverTout()
{

    for(var i =1; i< 6; i++)
    {
        document.querySelector("#btnCarte"+i).disabled = true;
    }

}


// ------------------------ PARTIE 2 ------------------------------ //

function btnContinuer()
{
    RemettreEndos();
    ReactiverCarte();
}

function RemettreEndos()
{
    for(var i = 1; i < 6; i++)
    {
        document.querySelector("#btnCarte"+i).src="img/dosUno.png";
    }

}

function ReactiverCarte()
{
    for(var i = 1; i < 6; i++)
    {
        document.querySelector("#btnCarte"+i).disabled = false ;
    }

    AfficherCarte();

}

function CalculationPoint()
{

    var pointageTour =0;

    if(valeur1 === valeurCarte && couleurCarte === carte1 )
    {
        pointageTour = 20;
        pointageTotal = pointageTotal + pointageTour;
    }
    else
    {
        if(valeur1 === valeurCarte)
        {
            pointageTour = 10;
            pointageTotal = pointageTotal + pointageTour;
        }
        else if(couleurCarte === carte1)
        {
            pointageTour=5;
            pointageTotal = pointageTotal + pointageTour;
        }
        else
        {
            pointageTour=0;
            pointageTotal = pointageTotal + pointageTour;
        }
    }

    document.querySelector("#lblPtsTour").innerHTML = pointageTour;
    document.querySelector("#lblPtsTot").innerHTML = pointageTotal;

}