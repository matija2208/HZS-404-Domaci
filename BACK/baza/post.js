const mongoose=require("mongoose");

const PotrebniSastojciSchema=new mongoose.Schema({
    imeSastojka:{
        type:String,
        trim:true,
        required:true,
    },
    kolicinaSastojka:{
        type:String,
        trim:true,
        required:true,
    }
});

const PostSchema=new mongoose.Schema({
    imeJela:{
        type:String,
        trim:true,
        required:true,
    },
    slika:{
        type:String,
        trim:true,
        required:true,
    },
    vremeSpremanja:{
        type:String,
        trim:true,
        required:true,
    },
    recept:{
        type:String,
        trim:true,
        required:true,
    },
    tezinaSpremanja:{
        type:Number,
        required:true,
    },
    vidljivost:{
        type:Boolean,
        required:true,
    },
    
    
    potrebniSastojci:[PotrebniSastojciSchema],
    tagovi:[{type:String,trim:true,required:true}],

    idKorisnika:{
        type:String,
        trim:true,
        required:true,
    }

});

module.exports=mongoose.model("post", PostSchema);