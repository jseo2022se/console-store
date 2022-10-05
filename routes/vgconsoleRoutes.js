// replace callback functions with controller callback functions

// load express
const express = require('express')

// Router object for our routes
const router = express.Router()

// bringing in the callback functions to be used inside routes
const { 
    findAllConsoles,
    newConsole,
    deleteConsole,
    updateConsole,
    buyItem,
    createConsole,
    editConsole,
    showUniqueConsole } = require('../controllers/consoleController')

// index route
router.get('/', findAllConsoles)

// new route
router.get('/new', newConsole)

// delete route
router.delete('/:id', deleteConsole)

// update route
router.put('/:id', updateConsole)

// buy route
router.put('/:id/buy', buyItem)

// create route
router.post('/', createConsole)

// edit route
router.get('/:id/edit', editConsole)

// show route
router.get('/:id', showUniqueConsole)


module.exports = router