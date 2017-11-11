const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let students = [
        {
            id: 1, name: "Rattikron", u: "buu" ,year: 1996 ,email: "rattikron@hotmail.com"
        },
        {
            id: 2, name: "ddep", u: "tu", year: 2000 ,email: "ddep@hotmail.com"
        }]
app.post('/students', (req,res) => {
    let student = req.body
    students.push(student)
    res.json(student)
})

app.get('/students', (req, res) => {
    
    res.json(students)
    //res.json({id: 1 ,name: "Rattikron", u:"buu"})
})

app.get('/students/:id', (req, res) => {
    
    res.json(students[req.params.id-1])
    //res.json({id: 1 ,name: "Rattikron", u:"buu"})
})

app.get('/greeting', (req, res) => {
    let lang = {
        en: 'Hello',
        th: 'สวัสดี'
    }

    let l = req.query.lang
    //console.log(l)

    if (!l) {
        res.json({ message: 'Hello' })
    } else {
        res.json({ message: lang[l] })
        //lang['en']
        //lang['th']
    }


    //res.json({ message: 'Hello'})
})



module.exports = app
