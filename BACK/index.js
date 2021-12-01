const express = require("express");
const app = express();
const connect_baza = require("./baza/baza");
const post = require("./baza/post");
const cors=require("cors");
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server slusa na portu: ${PORT}`);
});

//konekcija sa bazom
connect_baza();

// Sa JSON
app.use(express.json());
app.use(cors());

app.get("/api/posts", async function(req,res){
    try{
        const all_posts = await post.find();
        res.json({
            uspesno:true,
            posts:all_posts
        });
    }
    catch(err){
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
});

app.get("/api/posts/:id", async function(req,res){
    try{
        const postId = req.params.id;
        const Post = await post.findById(postId);
        res.json({
            post:Post
        });
    }
    catch(err){
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
});

app.post("/api/posts/", async function(req,res){
    try{

        const newPost=new post({
            imeJela:req.body.imeJela,
            vremeSpremanja:req.body.vremeSpremanja,
            recept:req.body.recept,
            tezinaSpremanja:req.body.tezinaSpremanja,
            vidljivost:req.body.vidljivost,
            slika:req.body.slika,

            potrebniSastojci:req.body.potrebniSastojci,
            
            tagovi:req.body.tagovi
        });

        const savedPost=await newPost.save();

        res.send({
            uspesnost:true,
            objava:savedPost,
        });
    }
    catch(err){
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
});
app.delete("/api/posts/:id",async function(req,res){
    try{
        const postId = req.params.id;
        const newPost = await post.findById(postId);
        const deletedPost = await newPost.delete();
        res.send({
            uspesnost:true,
            objava:deletedPost,
        });
    }
    catch(err){
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
})

app.put("/api/posts/:id", async function(req,res){
    try{
        const postId = req.params.id;
        const newPost = await post.findById(postId);
        const postProp = req.params.prop;

        newPost.imeJela=req.body.imeJela;
        newPost.vremeSpremanja=req.body.vremeSpremanja;
        newPost.recept=req.body.recept;
        newPost.tezinaSpremanja=req.body.tezinaSpremanja;
        newPost.vidljivost=req.body.vidljivost;
        newPost.slika=req.body.slika;

        newPost.potrebniSastojci=req.body.potrebniSastojci;
        newPost.tagovi=req.body.tagovi;

        const savedPost=await newPost.save();
        console.log("post edit pogodjen");
        console.log(req.body);
        res.send({
            uspesnost:true,
            objava:savedPost,
        });
    }
    catch(err){
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
});


