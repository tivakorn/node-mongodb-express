// Libs
import express from 'express'
import bodyParser from 'body-parser'
import config from 'config'

// Routes
import tivakornRoute from '../src/routes/tivakornRoute'

const app = express()
const port = config.nodejs.port

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ success: true })
})

app.use('/tivakorn', tivakornRoute)

app.listen(port, () => {
    console.log(`Start server at port ${port}.`)
})