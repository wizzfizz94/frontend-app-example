const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch');

const app = express()
app.use(cors());
const port = 3001

app.get('/search', (req, res) => {
  fetch(
    `https://api.pexels.com/v1/search?query=${req.query.query}&per_page=20`,
    {headers: {Authorization: process.env.PIXELS_API_KEY}}
  )
  .then(r => r.json())
  .then(json => {
    console.log(json);
    res.send(json)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
