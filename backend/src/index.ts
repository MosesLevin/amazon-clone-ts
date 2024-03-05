import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
import cors from 'cors'

//cors middleware to accept requests from 5173
const app = express()
app.use(cors({ credentials: true, origin: ['http://localhost:5173'] }))
const port = 3000

app.get('/api/products', (req, res) => {
  res.json(sampleProducts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
