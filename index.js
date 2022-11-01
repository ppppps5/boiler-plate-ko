const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://suho:a1234@boilerplate.qxt210f.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDb connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})