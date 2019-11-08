var imageHero;
imageHero = 0;
function Hero_onclick(NoImage)
{
  document.querySelector("#imgHero").src = "images/super-hero"+NoImage+".jpg" ;
  imageHero = document.querySelector("#imgHero").src = "images/super-hero"+NoImage+".jpg" ;
}

function hero_onclickDisable()
{

  for(var i =0; i < 4; i++)
  {
    document.querySelector("#imgHero").disabled = true;
  }

}

function hero_onclickActivated()
{

    for(var i =1; i < 4; i++)
    {
        document.querySelector("#imgHero").src = "images/super-hero"+imageHero+".jpg" ;
        document.querySelector("#imgHero").disabled = false;
    }
}

function hero_onclickImagePareil()
{
  alert("ok");

}