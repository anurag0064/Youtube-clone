const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const VideoModel = require('./Models/VideoModel');
const TagsModel = require('./Models/TagsModel');
const UserModel = require ('./Models/UserModel');
const HOST = "127.0.0.1";
const PORT = 5000;
const app = express();
    mongoose.connect("mongodb://127.0.0.1:27017/youtube");
const db = mongoose.connection;
  db.on('open', () => {
    console.log("db connected");
  });


  app.use(bodyParser.urlencoded({extended:true}));
  app.use(express.json());
  app.use(cors())
  


app.get('/', async(req,res) => {

  return res.json("sucess");
});
app.get('/alltags', async(req,res) => {
  const model = await TagsModel.find({});
 return res.json({status: true, msg: "sucess Tags ", model});
});



app.get('/allvideos', async(req,res) => {
   const model = await VideoModel.find({});
  return res.json({status: true, msg: "sucess fetch", model});
});


app.post('/login' , async(req,res)=> {
  const model = await UserModel.findOne(req.body);
  if(!model) {
      
  return res.json({status:false , msg:"user not found" });

  }
  return res.json({status:true , msg:"login succesfully" ,model});
});
  


app.post('/register' , async(req,res)=> {
  const exist = await UserModel.findOne({
      email: req.body.email
  });
  if(exist) {
      
  return res.json({status:true , msg:"user already exist" });

  }

  const model = new UserModel(req.body);
  model.save();
  console.log(model);
  return res.json({status:true , msg:"success register" ,model});
});






app.post('/getvideo', async(req,res) => {
   const model = await VideoModel.findOne({

    _id: req.body.video_id

   });
  return res.json({status: true, msg: "sucess fetch",model});
});

app.post('/uploadTags',async (req,res) => {
  // return res.json(req.body)
  const Exist = await TagsModel.findOne(req.body)
           //return res.json(req.body)
           if(Exist){
               return res.json({status: false, msg : "Tags exist"});
           }
          
      const model = new TagsModel({
        
        "name":req.body.name

      });
      model.save();
      console.log(model);
     return res.json({status: true, msg : "uploaded Tags", model});
   });


   app.post('/uploadVideo',async(req,res) =>{
       const Exist = await VideoModel.findOne(req.body)
           //return res.json(req.body)
           if(Exist){
               return res.json({status: false, msg : "already exist"});
           }
          
                 const model = new VideoModel(req.body);
           
           
           model.save();
           console.log(model);
           return res.json({status:true, msg :"success uploaded", model});
           
       });
  
app.listen(PORT, HOST, () => {
     console.log(`http://${HOST}:${PORT}`);
});

