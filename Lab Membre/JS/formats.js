function valideFormat()
{
    var valide = false;

    //Nom
    if (ValideCaractere(document.querySelector("#txtNom").value) === false)
    {
        document.querySelector("#txtNom").style.backgroundColor = "red";
        valide = false;
    }
    else
    {
        document.querySelector("#txtNom").style.backgroundColor = "white";
    }

    //Prenom
    if (ValideCaractere(document.querySelector("#txtPrenom").value) === false)
    {
        document.querySelector("#txtPrenom").style.backgroundColor = "red";
        valide = false;
    }
    else
    {
        document.querySelector("#txtPrenom").style.backgroundColor = "white";
    }

    //Adresse = il y en a pas

    //Ville
    if (ValideVille(document.querySelector("#txtVille").value) === false)
    {
        document.querySelector("#txtVille").style.backgroundColor = "red";
        valide = false;
    }
    else
    {
        document.querySelector("#txtVille").style.backgroundColor = "white";
    }

    //Code Postale
    if (valideCodePostal(document.querySelector("#txtCodePostal").value) === false)
    {
        document.querySelector("#txtCodePostal").style.backgroundColor = "red";
        valide = false;
    }
    else
    {
        document.querySelector("#txtCodePostal").style.backgroundColor = "white";
    }

    //tel
    if (ValideTel(document.querySelector("#txtTel").value) === false)
    {
        document.querySelector("#txtTel").style.backgroundColor = "red";
        valide = false;
    }
    else
    {
        document.querySelector("#txtTel").style.backgroundColor = "white";
    }

    //code permanent
    if (ValideCodePerm(document.querySelector("#txtCodePerm").value) === false)
    {
        document.querySelector("#txtCodePerm").style.backgroundColor = "red";
        valide = false;
    }
    else
    {
        document.querySelector("#txtCodePerm").style.backgroundColor = "white";
    }

    return valide;
}
function ValideCaractere(Chaine)
{
    return /^([A-z]*[À-é])*[A-z]*(-)?([À-é]*[A-z]?)*$/.test(Chaine);
}
function ValideTel(Chaine)
{
    return  /^\(?\d{3}\)?( |-)\d{3}-\d{4}$/.test(Chaine);
}
function ValideVille(Chaine)
{
    return /^([A-z]*[À-é])*[A-z]*(-)?([À-é]*[A-z]?)*$/.test(Chaine);
}
/*function ValideAdresse(Chaine)
{
    return /^\d{4} ?[A-é]* ?[A-é]*-?| ?[A-é]*$/.test(Chaine);
}*/

function ValideCodePerm(Chaine)
{
    return /^[A-ë]{5}[0-9]{7}$/.test(Chaine);
}
function valideCodePostal(Chaine)
{
    return /^[A-z][0-9][A-z] [0-9][A-z][0-9]$/.test(Chaine);
}