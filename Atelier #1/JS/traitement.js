function transformerLivreKg()
{
	var kg,livre;
	
	livre = parseFloat(prompt("Entrez la quantite",0)) //Saisie livre 
	livre = livre / 2,2;
	
	return livre
}

/*transformerLivreKg()*/

function traiterTaux()
{
	
	var tauxSaisie, tauxChangeEuro, euro;
	
	tauxSaisie = parseFloat(prompt("Entrez le montant a convertir",0)) //Saisie taux change a convertir
	
	euro = .69;
	
	tauxChangeEuro = tauxSaisie * euro
	
	return tauxChangeEuro
	
	
}

/*traiterTaux()*/

function calculerArgent()
{
	
	var argent1,argent5,argent10,argent25,total;
	
	argent1 = parseFloat(prompt("Entrez le montant de vos billets Canadian Tire",0)) //Saisie billet 1cent
	argent5 = parseFloat(prompt("Entrez le montant de vos billets Canadian Tire",0)) //Saisie billet 5cent
	argent10 = parseFloat(prompt("Entrez le montant de vos billets Canadian Tire",0)) //Saisie billet 10cent
	argent25 = parseFloat(prompt("Entrez le montant de vos billets Canadian Tire",0)) //Saisie billet 25cent
	
	total = ((argent1*0.01)+(argent5*0.05)+(argent10*0.1)+(argent25*0.25))
	
	return total;
}

/*calculerArgent()*/

function entrerNip()
{
	var nip;

	nip = parseInt(prompt("Entrez votre numero d'identification",0))

	if(nip == 1234)
	{
		console.log("Transaction effectuée avec succès");
	}
	else
	{
		prompt("Transaction refusée");
	}

}

/*entrerNip()*/

function calculerGallons()
{

	var litre,choix;

	choix = parseInt(prompt(" 1 - Gallons Americain ou 2 - Gallons Imperiaux"))

    if(choix == 1)
    {
        litre = parseFloat(prompt("Entrez le nombre de litre a convertir",0));
        litre = litre*0.264172
        correcte = true;

    }
    else if(choix == 2)
    {
        litre = parseFloat(prompt("Entrez le nombre de litre a convertir",0));
        litre = litre*0.219969
        correcte = true;
    }
    else
    {
        console.log("Vous devez entrez un chiffre valide")
    }


	return litre;
}

/*calculerGallons()*/

function calculerPrixGarderie()
{
	var animaux,nbJour,total,taxes;

	taxes = 0.14975;

	animaux = parseInt(prompt("1 - Chien ou 2 - Chat",0));

	if(animaux == 1)
	{
		nbJour = parseInt(prompt("Entrez le nombre de jour",0));
		total = ((18.50*nbJour)+((18.50*nbJour)*taxes));
		prompt("Voici le montant a debourser :  " + total)
	}
	else if(animaux == 2)
	{
        nbJour = parseInt(prompt("Entrez le nombre de jour",0));
        total = ((16.95*nbJour)+((16.95*nbJour)*taxes));
        console.log("Voici le montant a debourser :  " + total)
	}
	else
	{
		console.log("Vous avez entrez un mauvais numero, Recommencer.")
	}

	return total;
}

/*calculerPrixGarderie()*/

function calculerMontant()
{
	var billet,enfant,etudiant,senior,autres,totalMontant;

    enfant = parseInt(prompt("Combien de billets pour enfants ",0));
    etudiant = parseInt(prompt("Combien de billets pour etudiant ",0));
    senior = parseInt(prompt("Combien de billets pour senior ",0));
    autres = parseInt(prompt("Combien de billets pour autres ",0));

    billet = etudiant+senior+autres;
    totalMontant = ((etudiant*12) + (senior*15) + (autres*20));
	if(billet > 5 )
	{
        totalMontant = (totalMontant + (totalMontant*0.1));
		console.log(totalMontant);
	}
	else
	{
        console.log(totalMontant);
	}

	return totalMontant;

}

/*calculerMontant()*/