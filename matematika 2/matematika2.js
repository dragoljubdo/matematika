dropdownbutton.addEventListener("click", event => {
  const kvadrat = document.getElementById("kvadratdugme");
  const krug = document.getElementById("krugdugme");

  if(kvadrat.style.display === "none" && krug.style.display === "none"){
    kvadrat.style.display = "inline-block";
    krug.style.display = "inline-block";
  }
  else{
    krug.style.display = "none";
    kvadrat.style.display = "none";
  }
})


document.getElementById("izracunajkvadrat").onclick = function(){
  let stranica;
  let obim;
  let povrsina;
  let dijagonala;
  const greska = document.getElementById("greska");
  stranica = document.getElementById("unosstranicek").value;
  obim = stranica * 4;
  povrsina = stranica * stranica;
  dijagonala = Math.sqrt(stranica) * 2;
  console.log(obim);
  if(stranica > 0)
  {
  document.getElementById('obimkvadrata').value = obim;
  document.getElementById("povrsinakvadrata").value = povrsina;
  document.getElementById("dijagonalakvadrata").value = dijagonala;
  greska.style.display = "none";
  }
  else{
    document.getElementById('obimkvadrata').value = "Error";
  document.getElementById("povrsinakvadrata").value = "Error";
  document.getElementById("dijagonalakvadrata").value = "Error";
  greska.style.display = "block";
  }
}

document.getElementById("obrisikvadrat").onclick = function(){
  document.getElementById("obimkvadrata").value = "";
  document.getElementById("povrsinakvadrata").value = "";
  document.getElementById("dijagonalakvadrata").value = "";
  document.getElementById("unosstranicek").value = "";
  greska.style.display = "none";
}

kvadratdugme.addEventListener("click", event => {
  if(kvadratunos.style.display === "none"){
    kvadratunos.style.display = "block";
    krugunos.style.display ="none"
    }
    else{
      kvadratunos.style.display = "none";
    }
})

krugdugme.addEventListener("click", event => {
  if(krugunos.style.display === "none"){
    krugunos.style.display = "block";
    kvadratunos.style.display = "none";
    }
    else{
      krugunos.style.display = "none";
    }
})

document.getElementById("izracunajkrug").onclick = function(){
  let obim;
  let povrsina;
  const greska = document.getElementById("greska2");
  let poluprecnik = document.getElementById("unospoluprecnika").value;
  obim = 2 * poluprecnik * Math.PI;
  povrsina = poluprecnik * poluprecnik * Math.PI;
  if(poluprecnik > 0)
  {
    greska.style.display = "none";
    document.getElementById("obimkruga").value = obim;
    document.getElementById("povrsinakruga").value = povrsina;
  }
  else{
    document.getElementById("obimkruga").value = "Error";
    document.getElementById("povrsinakruga").value = "Error";
    greska.style.display = "block";
  }
  console.log(poluprecnik, obim, povrsina);
  }

  document.getElementById("obrisikrug").onclick = function(){
    const greska = document.getElementById("greska2");
    document.getElementById("obimkruga").value = "";
    document.getElementById("povrsinakruga").value = "";
    document.getElementById("unospoluprecnika").value = "";
    greska.style.display = "none";
  }