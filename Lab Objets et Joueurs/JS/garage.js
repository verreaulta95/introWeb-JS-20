

function Voiture(Marque,Model,AnneeConstruction)
{
    this.Marque = Marque;
    this.Model = Model;
    this.AnneeConstruction = AnneeConstruction;
}



function MoteurAutomobile(Marque,Force)
{
    this.Marque = Marque;
    this.Force = Force;
}



function Garage(Nom,SommeArgent)
{
    this.Nom = Nom;
    this.SommeArgent = SommeArgent;
}

function ExerciceGarage_onclick()
{
    var Voiture1 = new Voiture("Honda","Civic","2019");
    var Voiture2 = new Voiture("Toyota","RAV4","2017");
    var Voiture3 = new Voiture("GMC","Sierra","1998");

    var MoteurAutomobile1 = new MoteurAutomobile("VTEC","180");
    var MoteurAutomobile2 = new MoteurAutomobile("Normal","90");
    var MoteurAutomobile3 = new MoteurAutomobile("Special","150");

    var Garage1 = new Garage("Chez Alex",5000);
    var Garage2 = new Garage("Chez Marc",2500);

    document.querySelector("#lblRes1").innerHTML = Garage1.SommeArgent;
}



