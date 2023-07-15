import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
     
    }
}

export const createPost = async(req, res) => {
    res.send('POST CREATION');
    const post = req.body;
    const newPost = new PostMessage(post);

    try{
        await newPost.save();
        //https://www.restapitutorial.com/httpstatuscodes.html
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updatePost = async(req, res) => {
    const {id: _id} = req.params;
    // const { title, message, creator, selectedFile, tags } = req.body;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    // const updatePost = { creator, title, message, tags, selectedFile, _id: id};

    await PostMessage.findByIdAndUpdate(id, post, { new: true});

    res.json(updatePost)

}

