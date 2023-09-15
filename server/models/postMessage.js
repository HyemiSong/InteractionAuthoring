import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    authintent: String,
    intent: String,
    technique: String,
    component: [String],
    message: String,
    uri: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;