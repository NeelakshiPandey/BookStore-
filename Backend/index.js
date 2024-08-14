import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';
import booksroute from './routes/booksroute.js';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling our CORS policy
// option 1:Allow All Origins with Default of cors(*)
app.use(cors());
// option 2:Allow Custom Origin
// app.use(
//   cors({
//     origin:'http://localhost:3000',
//     methods:['GET','post','PUT','DELETE'],
//     allowedHeaders:['Content-Type']
    

    
//   })
    
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack Tutorial");
});

app.use('/books', booksroute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App connected to databases`);
    app.listen(PORT, () => {
      console.log(`App is listening to port:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
