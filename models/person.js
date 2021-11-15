const mongoose = require('mongoose')
const dotenv=require("dotenv")
dotenv.config()

const url = process.env.MONGODB_URI
console.log('connecting to URL')

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  number: {type: String, minlength: 8, requierd: true, unique: true},
  name: {type: String, minlength: 1, required: true, unique: true}
  
})

personSchema.set('toJSON', { 
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
const Person = new mongoose.model('Person', personSchema)
module.exports = Person
