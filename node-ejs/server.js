const express = require('express')
const app = express()
const ejs = require('ejs');

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    const qualities = [
        {
            title: 'D',
            message: 'Duro na queda'
        },
        {
            title: 'E',
            message: 'EJS'
        },
        {
            title: 'M',
            message: 'Muito foda'
        },
        {
            title: 'A',
            message: 'Alegre'
        },
        {
            title: 'I',
            message: 'Imperfeito'
        },
        {
            title: 'S',
            message: 'Sem igual'
        },
    ]
    res.render("pages/index", {
        qualities
    })
})
app.get("/sobre", (req, res) => res.render("pages/about"))

app.listen(8888)
console.log('Rodando')