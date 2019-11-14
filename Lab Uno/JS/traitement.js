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

function DesactiverTout(noCarte)
{

    for(var i =1; i< 6; i++)
    {
        document.querySelector("#btnCarte"+i).disabled = true;
    }

}


// ------------------------ PARTIE 2 ------------------------------ //

function btnContinuer()
{
    btnContinuerOnClick();
    CalculationPoint();
    ReactiverCarte();
}

function btnContinuerOnClick()
{
    for(var i = 1; i < 6; i++)
    {
        document.querySelector("#btnCarte"+i).src="img/dosUno.png";
    }

}

function ReactiverCarte(noCarte)
{

    document.querySelector("#btnCarte"+noCarte).disabled = false ;
    AfficherCarte();

}

function CalculationPoint()
{
    if(valeur1 === valeurCarte && couleurCarte === carte1 )
    {
        pointageTour = 20;
    }
    else
    {
        if(valeur1 === valeurCarte)
        {
            pointageTour = 10;
        }
        else if(couleurCarte === carte1)
        {
            pointageTour=5;
        }
        else
        {
            pointageTour=0;
        }
    }

    document.querySelector("#lblPtsTour").innerHTML = pointageTour;
    document.querySelector("#lblPtsTot").innerHTML = pointageTotal;
    pointageTotal = pointageTotal + pointageTour;
}