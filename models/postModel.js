const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    caption: String,
    creationTime: Number,
    creatorEmail: String,
    contentLink: String
});

module.exports = mongoose.model('postModel' , postSchema);
