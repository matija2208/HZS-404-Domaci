const express = require("express");
const app = express();
const connect_baza = require("./baza/baza");
const post = require("./baza/post");
const user = require("./baza/user");
const cors = require("cors");
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server slusa na portu: ${PORT}`);
});

//konekcija sa bazom
connect_baza();

// Sa JSON
app.use(express.json());
app.use(cors());


//PostAPI
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
                
                tagovi:req.body.tagovi,

                idKorisnika:req.body.idKorisnika
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
    });

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
            
            newPost.idKorisnika=req.body.idKorisnika;

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

//UserAPI
    app.get("/api/users/", async function(req,res){
        try{
            const all_users = await user.find();
            res.send({
                uspesno:true,
                users:all_users
            });
        }
        catch(err){
            res.send({
                uspesnost:false,
                poruka:err.message
            });
        }
    });

    app.post("/api/users/", async function(req,res){
        try{

            const newUser=new user({
                userName:req.body.userName,
                email:req.body.email,
                password:req.body.password,
            });

            const savedUser=await newUser.save();

            res.send({
                uspesnost:true,
                AddedUser:savedUser,
            });
        }
        catch(err){
            res.send({
                uspesnost:false,
                poruka:err.message
            });
        }
    });

    app.put("/api/users/:id", async function(req,res){
        try{
            const userId = req.params.id;
            const editedUser = await user.findById(userId);

            editedUser.userName=req.body.userName;
            editedUser.email=req.body.email;
            editedUser.password=req.body.password;

            const updatedUser=await editedUser.save();
            res.send({
                uspesnost:true,
                updatedUser:updatedUser,
            });
        }
        catch(err){
            res.send({
                uspesnost:false,
                poruka:err.message
            });
        }
    });

    app.delete("/api/users/:id", async function(req,res){
        try{
            const userId = req.params.id;
            const delitingUser = await user.findById(userId);
            const deletedUser=await delitingUser.delete();

            res.send({
                uspesnost:true,
                deletedUser:deletedUser,
            });
        }
        catch(err){
            res.send({
                uspesnost:false,
                poruka:err.message
            });
        }
    });
