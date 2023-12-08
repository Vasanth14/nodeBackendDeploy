const express = require('express')
const app = express()
const port = 3002


app.get('/', (req, res) => {
    res.send("Server started!")
})

app.listen(port, ()=> {
    console.log(`Server started on ${port}`)
})