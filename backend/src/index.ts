import express, { Request, Response } from 'express'
import { sampleProducts } from './data'

const app = express()
const port = 3000

app.get('/api/products', (req, res) => {
  res.json(sampleProducts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
