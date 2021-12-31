const personRouter = require('express').Router()
const Person = require('../models/person')

personRouter.get('/info', (req, res) => {
    const utcDate1 = new Date(Date.now()).toString()
    Person.find({}).then(result => {
      res.send(
        `<p> Phonebook has info for ${result.length} people </p> ${utcDate1}`)
    })
  
  })
  
  personRouter.get('/', (request, response) => {
    Person.find({}).then(persons => {
      response.json(persons.map(person => person.toJSON()))
    })
  })
  
  personRouter.get('/:id', (request, response, next) => {
    Person.findById(request.params.id)
      .then(person => {
        if (person) {
          response.json(person)
        } else {
          response.status(404).end()
        }
      })
      .catch(error => next(error))
  })
  
  personRouter.put('/:id', (request, response, next) => {
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
  
  personRouter.delete('/:id', (request, response, next) => {
    Person.findById(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
  })
  
  personRouter.post('/', (request, response, next) => {
    const body = request.body
    console.log(body)
  
    const personName = body.name
    console.log(body.name)
  
    const personNumber = body.number
    console.log(body.number)
  
  
    if (body.content === undefined){
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

module.exports = personRouter