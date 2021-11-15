const { json } = require('express');
const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(express.static('build'))
const Person = require('./models/person')
const cors = require('cors')
app.use(cors())

morgan.token('body', (req, res) => JSON.stringify(req.body));

app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]


app.get('/api/info', (req, res) => {
  const utcDate1 = new Date(Date.now());
  utcDate1 = utcDate1.toString()
  Person.find({}).then(result => {
    res.send(
      `<p> Phonebook has info for ${result.length} people </p> ${utcDate1}`)
  })

})

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

  
 

app.get('/api/persons', (req, res) => {
  Person.find({}).then(person => {
    res.json(person)
  })
})


  app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
      response.json(person)
    }) 
  })

  app.delete('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
      response.json(person)
    })
    
  })

  const generateID = () => {
    const maxID = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0

    return maxID + 1
  }


  app.post('/api/persons', (req, res) => { 
    const {body} = req.body
    console.log(body)
    if (body.content === undefined){
      return res.status(400).json({
        error: 'content missing'
      })
        
    } 
    else {

    const person = new Person ({
      name: body.name,
      number: body.number,
      id: generateID()
    })

    person.save().then(savedPerson => {
      response.json(savedPerson)
    })

  }})
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})