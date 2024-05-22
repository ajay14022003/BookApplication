const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");


const app = express();

app.use(cors(
  {
    origin:["https://book-application-bfmfdw3xx-ajays-projects-7dbf4b1c.vercel.app"],
    methods:["POST","GET"],
    credentials:true
  }
));

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://ajkaushik630:E7WMCaLLc1XejIZv@cluster0.no3rn0l.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
  
