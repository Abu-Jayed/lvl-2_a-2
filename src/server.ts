import app from './app'
import mongoose from 'mongoose'
import config from './config'

const port = config.port

// getting-started.js

function server() {
  try {
    mongoose.connect(`${config.database_url}`)
    console.log('connected to MongoDB')
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (error) {
    console.log(error)
  }
}

server()
