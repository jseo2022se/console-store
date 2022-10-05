// load express
const express = require('express')

// Router object for our routes
const router = express.Router()

// bringing in the callback functions to be used inside routes
const { 
    findAllConsoles,
    findAllConsoles2,
    newConsole,
    deleteConsole,
    updateConsole,
    buyItem,
    buyItem2,
    createConsole,
    editConsole,
    showUniqueConsole, 
    showUniqueConsole2 } = require('../controllers/consoleController')

// index route
router.get('/', findAllConsoles)

// customer index route
router.get('/customer', findAllConsoles2)

// new route
router.get('/new', newConsole)

// delete route
router.delete('/:id', deleteConsole)

// update route
router.put('/:id', updateConsole)

// buy route
router.put('/:id/buy', buyItem)

// cutomer buy route
router.put('/customer/:id/buy', buyItem2)

// create route
router.post('/', createConsole)

// edit route
router.get('/:id/edit', editConsole)

// show route
router.get('/:id', showUniqueConsole)

// show customer route
router.get('/customer/:id', showUniqueConsole2)


module.exports = router