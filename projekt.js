var kontejner = document.createElement("div");
kontejner.setAttribute("id", "kontejner");
document.body.appendChild(kontejner);


var nadpis = document.createElement("h1");
nadpis.innerHTML = "Výpočet objemu válce";
kontejner.appendChild(nadpis);


var popisek = document.createElement("p");
popisek.innerHTML = "Zadejte hodnoty:";
kontejner.appendChild(popisek);


var polomerLabel = document.createElement("label");
polomerLabel.setAttribute("for", "polomer");
polomerLabel.innerHTML = "Poloměr válce r (mm):";
kontejner.appendChild(polomerLabel);

var polomerInput = document.createElement("input");
polomerInput.setAttribute("type", "number");
polomerInput.setAttribute("id", "polomer");
kontejner.appendChild(polomerInput);


var vyskaLabel = document.createElement("label");
vyskaLabel.setAttribute("for", "vyska");
vyskaLabel.innerHTML = "<br>Výška válce v (mm):";
kontejner.appendChild(vyskaLabel);

var vyskaInput = document.createElement("input");
vyskaInput.setAttribute("type", "number");
vyskaInput.setAttribute("id", "vyska");
kontejner.appendChild(vyskaInput);


var tlacitko = document.createElement("button");
tlacitko.innerHTML = "Spočítej objem";
tlacitko.onclick = vypocet;
kontejner.appendChild(tlacitko);


var vysledekKontejner = document.createElement("div");
vysledekKontejner.setAttribute("id", "vysledek");
kontejner.appendChild(vysledekKontejner);


function vypocet() {
  var polomer = parseFloat(polomerInput.value);
  var vyska = parseFloat(vyskaInput.value);
  var objem = Math.PI * Math.pow(polomer, 2) * vyska;
  vysledekKontejner.innerHTML = "<br> Objem válce v mm^3 je " + objem.toFixed(2);
}