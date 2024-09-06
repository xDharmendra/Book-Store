// const express = require('express')
// const dotenv = require('dotenv')
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js'
import cors from 'cors'
import userRoute from './route/user.route.js';

const app = express()
app.use(cors())

app.use(express.json())


dotenv.config();


const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI


// connect to MongoDB
try {
    mongoose.connect(URI
        //    ,{ useNewUrlParser: true,
        //     useUnifiedTopology:true } useNewUrlParser,useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
    )
    console.log("Connected to MongoDB")
} catch (error) {
    console.log("error", error)
}


// defining routes
app.use("/book", bookRoute)
app.use("/users", userRoute)


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})