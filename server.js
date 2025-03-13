const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./config/dbConnection.js")
const errorHandler = require("./middlewares/errorHandler.js");


connectDb()
const app = express()



const port = process.env.PORT || 5001

//using body parser
app.use(express.json());
//using middleware
app.use("/api/contacts",require("./Routes/contactRoutes"));
app.use("/api/users",require("./Routes/userRoutes"));
app.use(errorHandler);

app.listen(port,(req,res) => {
  console.log(`Server running on port ${port}`)
});