import app from './app'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import config from './config'

const port = config.port

// getting-started.js

async function server() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
    console.log('connected to MongoDB')
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (error) {
    console.log(error)
  }
}

server().catch((err) => console.log(err))
