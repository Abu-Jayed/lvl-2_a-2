import express, { Request, Response } from 'express'
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Successfully server running',
  })
})

app.get('/api/users', (req: Request, res: Response) => {
  const user = [
    {
      id: 1,
      name: 'John',
      email: 'john@example.com',
    },
  ]

  res.status(200).json({
    status: 'success',
    message: "user fetched successfully",
    data: user
  })

})

export default app
