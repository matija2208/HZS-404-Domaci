/*var izracunaj = document.getElementById("izracunaj");*/
var kalorije = 0;
var x;

function izracunaj(){
    var pol = document.getElementById("pol");
    var visina = document.getElementById("visina").value;
    var kilaza = document.getElementById("kilaza").value;
    var godine = document.getElementById("godine").value;
    if(pol == "muski"){
        kalorije = 660 + (13.7 * kilaza) + (5 * visina) - (6.8 * godine);
    }
    else{
        kalorije = 655 + (9.6 * kilaza)+(1.8 * visina) - (4.7 * godine);
    }
    document.getElementById("kalorije").innerHTML = kalorije;
}