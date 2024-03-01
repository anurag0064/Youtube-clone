const mongoose = require('mongoose');

const TagsSchema = new mongoose.Schema({
   

    name : { type : String},
    status: { type: String}
    
})

const TagsModel = mongoose.model ('tags',TagsSchema)
module.exports = TagsModel;