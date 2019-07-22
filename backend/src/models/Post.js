const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    band: String,
    date: String,
    hours: String,
    description: String,
    address: String,
    place: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);