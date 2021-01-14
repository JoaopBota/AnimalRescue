import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    dogname: String,
    breed: String,
    location: String,
    message: String,
    creator: String,
    selectedFile: String,
    phonenumber: Number,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;