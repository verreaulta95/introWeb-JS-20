function transformerLivreKg()
{
	var kg,livre;
	
	livre = parseFloat(prompt("Entrez la quantite",0)) //Saisie livre 
	livre = livre / 2,2;
	
	return livre
}

transformerLivreKg(livre)

function traiterTaux()
{
	
	var tauxSaisie, tauxChangeEuro, euro;
	
	tauxSaisie = parseFloat(prompt("Entrez le montant a convertir",0)) //Saisie taux change a convertir
	
	euro = .69;
	
	tauxChangeEuro = tauxSaisie * euro
	
	return tauxChangeEuro
	
	
}

traiterTaux()

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

