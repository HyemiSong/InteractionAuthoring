import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://hsong02:Chacolina11017@cluster0.j9w8yhn.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 4000;

mongoose.connect(CONNECTION_URL).then(()=> app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))

//deprecated
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));
// mongoose.set('useFindAndModify', false);
