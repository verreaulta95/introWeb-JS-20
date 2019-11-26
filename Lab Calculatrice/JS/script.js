function btnCalculer_onclick()
{
     if(valideFormat() === true)
     {
         traiterCalcul();
     }
}


function valideFormat(no1,no2)
{
    var valide = true;


    if (validerNo(document.querySelector("#txtNbre1").value) === false)
    {
        document.querySelector("#txtNbre1").style.backgroundColor = "red";
        valide = false;
    }
    else
    {
        document.querySelector("#txtNbre1").style.backgroundColor = "white";
        no1 = document.querySelector("#txtNbre1").value;
    }

    if (validerNo(document.querySelector("#txtNbre2").value) === false)
    {
        document.querySelector("#txtNbre2").style.backgroundColor = "red";
        valide = false;
    }
    else
    {
        document.querySelector("#txtNbre2").style.backgroundColor = "white";
        no2 = document.querySelector("#txtNbre1").value;
    }

    if(valideSymbole(document.querySelector("#txtOperateur").value) === false)
    {
        document.querySelector("#txtOperateur").style.backgroundColor = "red";
        valide = false;
    }
    else
    {
        document.querySelector("#txtOperateur").style.backgroundColor = "white";
    }

    return valide;

}


function validerNo( Chaine )
{
    return /^\d*$/.test(Chaine);
}


function valideSymbole( Chaine )
{
    return /^\+|\-|\*|\/$/.test(Chaine);
}

function traiterCalcul()
{
    var no1 = parseInt(document.querySelector("#txtNbre1").value);
    var no2 = parseInt(document.querySelector("#txtNbre2").value) ;
    var symbole = document.querySelector("#txtOperateur").value;
    var resultat = calculer(no1,no2,symbole);

    return document.querySelector("#lblReponse").innerHTML = resultat;
}


function calculer(no1,no2,symbole)
{
    var resultat = 0;
    switch(symbole)
    {
        case "+": resultat = no1+no2; break;
        case "-": resultat = no1-no2; break;
        case "*": resultat = no1*no2; break;
        case "/": resultat = no1/no2; break;
    }
    return resultat;


}