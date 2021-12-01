var ID="";
var POSTS=[Object];

function takeID(){
    var ID = location.search.substring(1);
    console.log("query:" + ID);
}

window.onload =  takeID();

function putData(post)
{
    const cardsDiv = document.querySelector(".pozadina");
    var txt="";
    post.potrebniSastojci.forEach(i => txt+="-"+i.kolicinaSastojka+" "+i.imeSastojka+"<br>");

    var src=`
        <div class="prostor">
            <div class="slika"><img src="${post.slika}"></div>
        </div>
        <div class="sastojci">
        <h4 class="opis">VREME PRIPREME: ${post.vremeSpremanja} minuta</h4><br>
        <h1 class="opis">POTREBNI SASTOJCI:</h1><br>
        <p class="recept">
            ${txt}
        </p>
        </li><br><br>
        <h1 class="priprema"><b>NAČIN PRIPREME</b></h1><br>
        <p class="recept">
            ${post.recept}
        </p>
        <button class="delete-button" id="${ID}" onClick = "obrisi(this.id)">🗑️</button>
        </div>
    `;

    cardsDiv.innerHTML="";
    cardsDiv.innerHTML = src;
}

async function GetData() {
    try {
        var pOSTS = await axios.get("http://localhost:3000/api/posts/"+ID);
        console.log(pOSTS.data.posts[0]);
        putData(pOSTS.data.posts[0]);
    }catch (err) {
        console.log(err);
    }
}

async function obrisi()
{
    var loz = prompt("Unesite lozinku za objavu : ");
    if(loz==="JOSHUA")
    {
        var id = location.search.substring(1);
        let idstring="http://localhost:3000/api/posts/"+id;
        console.log(idstring);
        try{
            await axios.delete(idstring);
            location.href="Recepti.html";
        }
        catch(err)
        {
            console.log(err);
        }
    }
}

GetData();

