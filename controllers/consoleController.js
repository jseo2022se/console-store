// loading console model
const vgConsole = require('../models/consoles')


// index
const findAllConsoles = (req, res) => {
    vgConsole.find({}, (err, foundConsole) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', {vgconsoles: foundConsole})
        }
    })
}

// customer index
// renders Index2 instead of Index
const findAllConsoles2 = (req, res) => {
    vgConsole.find({}, (err, foundConsole) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index2', {vgconsoles: foundConsole})
        }
    })
}

// new
const newConsole = (req, res) => {
   
    res.render('New')
}

// about 
const about = (req, res) => {
    res.render('About')
}

// about for customer route
const about2 = (req, res) => {
    res.render('About2')
}

// contact
const contact = (req, res) => {
    res.render('Contact')
}

// contact for customer route
const contact2 = (req, res) => {
    res.render('Contact2')
}

// delete
const deleteConsole = (req, res) => {

    vgConsole.findByIdAndDelete(req.params.id, (err, deleteConsole) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products')
        }
    })
}

// update
const updateConsole = (req, res) => {
    if (req.body.isUsed === 'on') {
        req.body.isUsed = true
    } else {
        req.body.isUsed = false
    }

    vgConsole.findByIdAndUpdate(req.params.id, req.body, (err, foundConsole) => {

        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/products/${req.params.id}`)
        }
    })
}

// buy 
const buyItem = (req, res) => {

    // updates quantity property by decrementing 1 whenever clickign on 'Buy Item' and redirects back to show page
    vgConsole.findByIdAndUpdate(req.params.id, { $inc: { quantity: -1 } }, (err, foundConsole) => { 
        
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/products/${req.params.id}`)
        }
    })
}

// buy customer
// similar to buy function except redirects to customer show page 
const buyItem2 = (req, res) => {
    vgConsole.findByIdAndUpdate(req.params.id, { $inc: { quantity: -1 } }, (err, foundConsole) => {
        
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/products/customer/${req.params.id}`)
        }
    })
}

// create
const createConsole = (req, res) => {
    if (req.body.isUsed === 'on') {
        req.body.isUsed = true
    } else {
        req.body.isUsed = false
    }
    
    vgConsole.create(req.body, (err, createdConsole) => {
        if (err) {
            res.status(400).json(err)
        } else [
            res.status(200).redirect('/products/')
        ]
    })
}

// edit
const editConsole = (req, res) => {
    vgConsole.findById(req.params.id, (err, foundConsole) => {
        if (err) {
            res.status(400).json(err)
        } else {
            
            res.status(200).render('Edit', { vgconsole: foundConsole})
        }
    })
}

// show
const showUniqueConsole = (req, res) => {

    vgConsole.findById(req.params.id, (err, foundConsole) => {
        if (err) {
            
            res.status(400).json(err)
        } else {
            
            res.status(200).render('Show', { vgconsole: foundConsole })
        }
    })
}

// show2
// renders show2
const showUniqueConsole2 = (req, res) => {

    vgConsole.findById(req.params.id, (err, foundConsole) => {
        if (err) {
            
            res.status(400).json(err)
        } else {
            
            res.status(200).render('Show2', { vgconsole: foundConsole })
        }
    })
}

module.exports = {
    findAllConsoles,
    findAllConsoles2,
    newConsole,
    about,
    about2,
    contact,
    contact2,
    deleteConsole,
    updateConsole,
    buyItem,
    buyItem2,
    createConsole,
    editConsole,
    showUniqueConsole,
    showUniqueConsole2
}