const express = require('express');
const app = express();
const tipsRoutes = require('./routes/tipsRoutes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require("cors")

mongoose.connect('mongodb+srv://amitbar131:rXXoSwFP6pVdkwCp@cluster0.w7f95iu.mongodb.net/?retryWrites=true&w=majority',
{}).then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB Atlas");
    console.error(err);
  });
app.use(bodyParser.json())
app.use(cors())
app.use('/tips', tipsRoutes)


app.listen(3000, () =>{
    console.log("Server is running");
})