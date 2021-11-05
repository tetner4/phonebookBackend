const { json } = require('express');
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3001; 
app.use(express.json());




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
  res.send(`<p> Phonebook has info for ${persons.length} people </p> <p> ${utcDate1.toUTCString()}</p>`)
})

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

  
 

app.get('/api/persons', (req, res) => {
  res.json(persons)
})


  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person){
        response.json(person)
    } else {
        response.status(404).end()
    }
    
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person){
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

  const generateID = () => {
    const maxID = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0

    return maxID + 1
  }


  app.post('api/persons', (req, res) => { 
    const {body} = req.body
    console.log(body)
    if (!body.name || !body.number){
      return res.status(400).json({
        error: 'content missing'
      })
        
    }

    /*if(persons.filter(person => {person.name === body.name})){
      return res.status(400).json({
        error: 'name already exists'
      })
    */

    const person = {
      name: body.name,
      number: body.number,
      id: generateID()
    }

    persons = persons.concat(person)
    console.log(person)
    res.json(person)

  })

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3001')
})