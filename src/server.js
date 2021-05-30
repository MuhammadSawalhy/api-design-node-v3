import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

const PORT = 3000

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send({ message: "Alhamdulilah!" })
})

export const start = () => {
  app.listen(PORT, ()=>{
    console.log("listening at http://localhost:" + PORT)
  })
}
