async function putData(post)
{
    const cardsDiv = document.querySelector(".pozadina");
    var txt="";
    post.potrebniSastojci.forEach(i => txt+="-"+i.kolicinaSastojka+" "+i.imeSastojka+"<br>");

    var src=`
        <div class="prostor">
            <div class="slika"><img src="${post.slika}"></div>
        </div> 
        <div class="linija"></div>
        <div class="sastojci">
        <h1 class = "opisBitnoTop">${post.imeJela}</h1>
        <h2 id="user-name">Autor recepta: ${await GetUserData(post.idKorisnika)}</h2>
        <h1 class="opisBitnoTop">VREME PRIPREME: ${post.vremeSpremanja} minuta</h1><br>
        <h1 class="opisBitno">POTREBNI SASTOJCI:</h1><br>
        <p class="opisBitno">
            ${txt}
        </p>
        </li><br>
        <h1 class="opisBitno"><b>NAČIN PRIPREME:</b></h1>
        <p class="opisBitno">
            ${post.recept}
        </p>
        <button class="print-button" onClick = window.print();>Print</button>
        <button name="hidden_buttons" class="delete-button hidden" id="${location.search.substring(1)}" onclick = "GoToUpdate(this.id)">Update</button>
        <button name="hidden_buttons" class="delete-button hidden" onClick = "obrisi()">🗑️</button>
        <br>
        <br>
        </div>
    `;

    cardsDiv.innerHTML="";
    cardsDiv.innerHTML = src;
}

async function GetData() {
    var id = "http://localhost:3000/api/posts/"+location.search.substring(1);
    console.log(id);
    try {
        
        var pOSTS = await axios.get(id);
        console.log(pOSTS.data.post);
        putData(pOSTS.data.post);
        showButtons(pOSTS.data.post);
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

function showButtons(post){
    var idname = "id";
    var loginId = localStorage.getItem(idname);
    if(loginId!==null && loginId === post.idKorisnika){
      var buttons = document.getElementsByName("hidden_buttons");
      buttons.forEach(elm => {
          elm.classList.remove("hidden");
      });
    }
  }

GetData();

async function GetUserData(id) {
    var link = "http://localhost:3000/api/users/"+id;
    console.log(id);
    try {
        var user = await axios.get(link);
        return user.data.user.userName;
    }catch (err) {
        console.log(err);
    }
}
