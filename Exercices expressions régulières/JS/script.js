// https://regexr.com/
//----------------------------------------------------------------------------------//
function btnValider_onclick()
{   var message;
	if (validerTel(document.querySelector("#txtValidation").value ) === true)
	   message ="bon";
	else
	   message ="pas bon";
    document.querySelector("#lblMessage").innerHTML = message;
}

function valideAnnee(Chaine) // représente une année à quatre chiffres 
{
	return /^\d{4}$/.test(Chaine);
}

function validerNo( Chaine ) // un chiffre peut etre 0 5 25 200 etc..
{
	return /^\d*$/.test(Chaine);
}

function validerNAS( Chaine ) // numéro d'assurance social 418 789 123, tester votre NAS
{
    return /^\d{3} \d{3} \d{3}$/.test(Chaine);
}

function validerTel( Chaine )  // au format (418) 876-8373 , tester votre numéro de téléphone
{
	return /^\(\d{3}\) \d{3} \d{4}$/.test(Chaine);
}


function verifierEntreDixTrente( Chaine )//un chiffre entre 10 et 30
{
	return /^[1-2][0-9]|[3][0]$/.test(Chaine);
}

function verifierEntreUnVingt( Chaine )//un chiffre entre 1 et 20
{
    return /^[1][0-9]|[2][0]$/.test(Chaine);
}

function validerCar( Chaine ) // des chaînes de caractères alphabétiques majuscule et minuscule et accepte le trait d'union pas obligatoire
{
    return /^[A-z]*-*[A-z]*$/.test(Chaine);
}
