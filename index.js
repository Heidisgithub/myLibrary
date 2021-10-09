require("dotenv").config()
const express = require ('express')
const {addBook} = require('./controllers')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8080

app.post("/book", async (req, res) =>{
    const newBook = req.body
    const result = await addBook(newBook)
    res.status(201).send(result)
})

app.listen(PORT, () =>{
    console.log("Book api running on" + PORT)
})