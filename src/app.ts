import express from 'express';
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World Our Server Is Runing!')
})

export default app