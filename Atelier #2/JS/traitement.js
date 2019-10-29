function calculeParcours(kilometreParcouru)
{
    var total;

    total = kilometreParcouru * 60;

    console.log("Vous aurez parcourus, en 5 ans, un total de : " +  total + " kilometre");

    return total;

}

function afficheMoutons(moutons)
{
    for(var i=1; i <= moutons; i++)
    {
        console.log("Il y a : " + i + " moutons");
    }

    return moutons;
}


function additionneNbre(nbSaisie)
{
    var total =0;

    for(var i=0; i< nbSaisie; i++)
    {
        console.log(total = total + i) //Accumulateur
    }

    return total;
}

function trieOrdre()
{

    var nb1,nb2,nb3;


}