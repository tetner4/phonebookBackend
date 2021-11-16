const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();
const morgan = require('morgan')
const Person = require('./models/person')


app.use(cors())
app.use(express.json())
app.use(express.static('build'))


morgan.token('body', (req, res) => JSON.stringify(req.body));

app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));

app.get('/info', (req, res) => {
  const utcDate1 = new Date(Date.now()).toString();
  Person.find({}).then(result => {
    res.send(
      `<p> Phonebook has info for ${result.length} people </p> ${utcDate1}`)
  })

})

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons.map(person => person.toJSON()))
        })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id)
    .then(result => {
      response.status(204).end()
  }) 
  .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

  app.delete('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id).then(person => {
      response.json(person)
    })
    
  })

  app.post('/api/persons', (request, response) => { 
    const body = request.body
    console.log(body)

    const personName = body.name
    console.log(body.name)

    const personNumber = body.number
    console.log(body.number)


    if (body.content = undefined){
      return response.status(400).json({
        error: 'content missing'
      }) 
    } 
    const person = new Person ({
      name: personName,
      number: personNumber,
    })
    person.save()
    .then(savedPerson =>  savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
        console.log(`added ${person.name} number ${person.number} to phonebook`)
        response.json(savedAndFormattedPerson)
        })
    .catch(error => next(error))

 })

 const errorHandler = (error, request, response, next) => {
   console.log(error.message)
   if (error.name === 'CastError'){
     return response.status(400).send({error: 'malformatted id'})
   }
   next(error)
 }

 app.use(errorHandler)
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})