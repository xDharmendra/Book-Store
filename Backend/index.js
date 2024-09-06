// const express = require('express')
// const dotenv = require('dotenv')
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js'

const app = express()

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


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})