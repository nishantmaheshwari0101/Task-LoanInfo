const express = require('express')
const connectDB = require('./config/db_config')
const dotenv = require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended : true}))



app.get("/", (req, res) => {
    res.send("welcome to api")
})

app.use("/api/loan", require("./routes/loanHolderroutes"))

app.listen(PORT, () => {
    console.log("server is running");
})