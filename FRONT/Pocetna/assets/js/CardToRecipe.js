GetData();

var destination = "Recept_stranica.html"
var counter=0;
var IDs=[String];
var POSTS=[Object];
let Posts=[Object];

function GoToRecipe(id){
    location.href = destination + "?" + id;
}

function CreateCard(post) {
    IDs.push(post._id);
    //console.log(IDs.length);
    //console.log(IDs[IDs.length-1]);
    POSTS.push(post);

    var txt="";
    post.potrebniSastojci.forEach(i => txt+="-"+i.kolicinaSastojka+" "+i.imeSastojka+"<br>");
    
    //console.log(txt);
    var tez="";
    var tac="";
    if(post.tezinaSpremanja===1)
    {
        tez="LAKO";
        tac=`<span id="Circle1" class="CircleRated"></span>
        <span id="Circle1" class="CircleUnRated"></span>
        <span id="Circle1" class="CircleUnRated"></span>`;
    }
    else if(post.tezinaSpremanja===2)
    {
        tez="SREDNJE";
        tac=`<span id="Circle1" class="CircleRated"></span>
        <span id="Circle1" class="CircleRated"></span>
             <span id="Circle2" class="CircleUnRated"></span>`;
    }
    else if(post.tezinaSpremanja===3)
    {
        tez="TESKO";
        tac=`<span id="Circle1" class="CircleRated"></span>
        <span id="Circle2" class="CircleRated"></span>
        <span id="Circle3" class="CircleRated"></span>
        `;
    }

    let card = `
    <div class="card-container" id="${post._id}" onclick="GoToRecipe(this.id)">
        <div style="background-image: url(${post.slika}); background-repeat: no-repeat; background-size: contain; height: 360px; border-radius: 25px 0px 0px 0px;">
           
            <div id="RecipeInfoPad" class="CardAnimated"></div>
            <div id="RecipeInfo" class="CardAnimated">
                <span class="RecipeText">${txt}</span>
            </div>
        </div>
        <div id="CardLower" class = "CardAnimated">
            <span class="RecipeName">${post.imeJela}</span>
                        
        </div>
        <div id = "CardDifficulty" class = "CardAnimated">
            ${tac}
            <span class="DifficultyName">${tez}</span>
        </div>
    </div> 

    `;
    return card;
}

function RenderPosts(posts, tag="") {
    const cardsDiv = document.querySelector(".cards");
    let cards = "";
    Posts=[Object];
    var counter=0;
    posts.forEach(function(post){
        Posts.push(post);
        counter++;
    });
    console.log(Posts);

    for(let i=1;i<Posts.length;i++)
    {
        if(tag==="")
        {
            cards+=CreateCard(Posts[i])
        }
        else if(tag==="IZNENADI")
        {
            var index=Math.floor(Math.random()*counter);
            console.log(index);

            cards+=CreateCard(Posts[index+1]);
            break;
        }
        else
        {
            for(var j = 0; j < Posts[i].tagovi.length; j++)
            {
                if(Posts[i].tagovi[j]===tag)
                {
                    cards+=CreateCard(Posts[i]);
                }
            }
        }
    }
    cardsDiv.innerHTML="";
    cardsDiv.innerHTML = cards;
}

async function GetData(tag="") {
    try {
        let posts = await axios.get("http://localhost:3000/api/posts");
        counter=0;
        RenderPosts(posts.data.posts, tag);
    }catch (err) {
        console.log(err);
    }
}