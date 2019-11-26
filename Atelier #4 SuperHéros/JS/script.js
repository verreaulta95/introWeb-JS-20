var imageHero;
imageHero = 0;
function Hero_onclick(NoImage)
{
  document.querySelector("#imgHero").src = "images/super-hero"+NoImage+".jpg" ;
  imageHero = document.querySelector("#imgHero"+NoImage).disabled =true ;
}

function hero_onclickDisable()
{

  for(var i =1; i < 5; i++)
  {
    document.querySelector("#imgHero"+i).disabled = true;
  }

}

function hero_onclickActivated()
{
    for(var i =1; i < 5; i++)
    {
        document.querySelector("#imgHero"+i).disabled = false;
    }
}

function hero_onclickImagePareil()
{

    for(var i =1; i < 5; i++)
    {
        document.querySelector("#imgHero"+i).src = "images/super-hero1.jpg" ;

    }
}