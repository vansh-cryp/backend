const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram/login',(req,res)=>{
    res.send('VanshGusain');
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
