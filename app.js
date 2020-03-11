const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const port = process.env.PORT ? process.env.PORT : 3000
app.use(express.static('public'))



const server = app.listen(port, error => {
    if (error) {
        console.log(error)
    }
    console.log("Server is running on port", server.address().port)
})