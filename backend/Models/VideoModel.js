const  mongoose  = require('mongoose');

const  VideoSchema = mongoose.Schema({

   name: {type : String},
   userid: {type : String},
  thumbnail: {type : String},
   slug: {type : String},
  channelid: {type : String},
  description: {type : String},
  logo: {type : String},

   


});
const VideoModel = mongoose.model('videos',VideoSchema)
module.exports = VideoModel;