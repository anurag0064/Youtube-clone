const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { SendEmail } = require('./service/mail');
const UserModel = require ('./Models/UserModel');
const {GenerateJWT,VerifyJWT} = require('./service/auth');
const HOST = "127.0.0.1";
const PORT = 5000;
const app = express();
    mongoose.connect("mongodb+srv://anuragsaini9223:anuragsaini9223@cluster0.quprsu5.mongodb.net/");
const db = mongoose.connection;
  db.on('open', () => {
    console.log("db connected");
  });


  app.use(bodyParser.urlencoded({extended:true}));
  app.use(express.json());
  app.use(cors())



app.get('/', async(req,res) => {

return res.json("Success");

});


app.post('/register', async(req,res) =>{
  const Exist = await UserModel.findOne({
    email: req.body.email
  })

  if(Exist) {
    return res.json({status : false, msg: "Already User Exist!"});

  }
  const otp = Math.floor(100000 + Math.random() * 900000);
    req.body.otp= otp;
  const user = new UserModel(req.body);
  user.save();
   
  const subject = "Register Verification Code";
  const message = {
    info : "Hi "+ user.name+ ",",
    otp
  }
  SendEmail(user.email,subject, message);
  console.log(user);
  const token = GenerateJWT(user);
  return res.json({status : true, msg:"Success Register",token });

} ) 


app.post('/login', async(req,res) =>{
  const Exist = await UserModel.findOne(req.body)
  
  if(!Exist) {
    return res.json({status : false, msg: "User Not Exist!"});

  }

  if(Exist.status==0) {
    return res.json({status : false, msg: "Account not Verfied!"});

  }

  const otp = Math.floor(100000 + Math.random() * 900000);

    await UserModel.findByIdAndUpdate(Exist._id, {
         otp
    });
    
    const subject = "Login Verification Code";
    const message = {
      info : "Hi "+ Exist.name+ ",",
      otp
    }
    SendEmail(Exist.email,subject, message);
    //console.log(Exist);
    const token = GenerateJWT(Exist);
    return res.json({status : true, msg:"Success Register",token });
  
  })
  
  
  app.post('/verify', VerifyJWT, async(req,res) => {
   
   if(req.body.otp==req.user.otp) {
     await UserModel.findByIdAndUpdate(req.user._id, {
           status: 1,
           email_verify_at: new Date()
     });
     return res.json({status : true, msg:"Success Verfied" });
  
   }
   return res.json({status : false, msg:"Wrong OTP" });
  
  } )
  
app.post('/VerifyLogin', VerifyJWT, async(req,res) => {
  const Exist =await UserModel.findOne({_id: req.user._id})
  console.log(Exist);

 if(req.body.otp==Exist.otp) {
    const token = GenerateJWT(Exist);
   return res.json({status : true, msg:"Success Verfied", token });

 }
 return res.json({status : false, msg:"Wrong OTP" });

} )


app.get('/getUser', VerifyJWT, async(req,res) => {
  const user = await UserModel.findOne({_id: req.user._id});
  return res.json({status: true, msg : "get Session user", user});
})

app.post('/createvideo', VerifyJWT, async(req,res) =>{
  const Exist = new VideoModel({
    userid: req.user._id,
    name: req.body.channelname,
    slug: req.body.slug,
    thumbnail: req.body.thumbnail,
    channelid: req.body.channelid,
    description: req.body.description,
    logo: req.body.logo,

  })
    
  Exist.save();
})


app.listen(PORT, HOST, () => {
     console.log(`http://${HOST}:${PORT}`);
});

