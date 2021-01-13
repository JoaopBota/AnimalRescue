const express = require('express')
const animal = require('../models/animal')
const router = express.Router()
const Animal = require('../models/animal')

//All animals route
router.get('/', async(req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const animals = await Animal.find(searchOptions)
        res.render('animals/index', { animals: animals, searchOptions: req.query })
    } catch {
        res.redirect('/')
    }
})

//New animal route
router.get('/new', (req, res) => {
    res.render('animals/new', { animal: new Animal() })
})


// Create animal route
router.post('/', async(req, res) => {
    const animal = new Animal({
        name: req.body.name
    })
    try {
        const newAnimal = await animal.save()
            // res.redirect(`animals/${newAnimal.id}`)
        res.redirect(`animals`)

    } catch {
        res.render('animals/new', {
            animal: animal,
            errorMessage: 'Error creating Animal'
        })
    }

})

module.exports = router