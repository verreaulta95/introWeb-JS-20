var pointJoueur, pointIA,noOrdi,imagePrise;
pointIA = 0;
pointJoueur =0;

function clickImageBird_onclick(noImage)
{
   document.querySelector("#imgBirdJoueur").src="img/angry-bird"+noImage+".png";
    imagePrise = noImage;
    traiteChoixOrd();
    calculerPoints();
}

function traiteChoixOrd()
{
    noOrdi = Math.floor(Math.random()*3+1);
    document.querySelector("#imgBirdOrdi").src="img/angry-bird"+noOrdi+".png";
}


function calculerPoints()
{

    if(imagePrise === noOrdi)
    {
        pointJoueur = pointJoueur+10;
    }
    else
    {
        pointIA = pointIA + 10;
    }

    document.querySelector("#lblResultatJoueur").innerHTML = pointJoueur;
    document.querySelector("#lblResultatOrdi").innerHTML = pointIA ;
}
