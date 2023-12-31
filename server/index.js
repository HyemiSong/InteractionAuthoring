
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

const CONNECTION_URL = 'mongodb+srv://hsong02:Chacolina11017@cluster0.vxvudf8.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 1000;

mongoose.connect(CONNECTION_URL).then(()=> app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))


// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';

// import postRoutes from './routes/posts.js';

// const app = express();
// dotenv.config();

// app.use(cors());
// app.use(bodyParser.json({ limit: '30mb', extended: true }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// app.use('/posts', postRoutes);

// // const CONNECTION_URL = 'mongodb+srv://hsong02:Chacolina11017@cluster0.vxvudf8.mongodb.net/?retryWrites=true&w=majority'
// // const PORT = process.env.PORT|| 4000;

// mongoose.connect(process.env.CONNECTION_URL).then(()=> app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
