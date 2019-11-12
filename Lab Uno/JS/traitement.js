var cpt;
cpt = 0;


function imageOnclick(noCarte)
{
    AfficherCarte(noCarte);

    document.querySelector("#btnCarte"+noCarte).disabled =true ;

    if(cpt === 2)
    {
        DesactiverTout();
        document.querySelector("#btnContinuer").disabled =false ;
    }
}

function AfficherCarte(noCarte)
{
    var couleurCarte,valeurCarte;

    valeurCarte  = Math.floor(Math.random()*9);
    couleurCarte = Math.floor(Math.random()*4+1);

    document.querySelector("#btnCarte"+noCarte).disabled = true ;

    switch(couleurCarte)
    {
        case 1 : couleurCarte="bleu";  break;
        case 2 : couleurCarte="rouge";  break;
        case 3 : couleurCarte="jaune";  break;
        case 4 : couleurCarte="vert";  break;

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
    btnContinuerOnClick();
}

function btnContinuerOnClick()
{
    alert("ok");
    for(var i = 0; i < 6; i++)
    {
        document.querySelector("#btnCarte"+i).src="img/dosUno.png";
    }
}