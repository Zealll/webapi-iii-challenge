const express = require('express')

const router = express.Router()

// importing our data as 'users'
const db = require('./userDb.js')



// Endpoints Start Here:

// getting all the user data...
router.get('/', (req, res) => {
    db
    .get()
    .then(users => {
        res.json(users)
    })
    .catch(() => {
        res
        .status(500)
        .json({message: "The Users information could not be retreived."})
    })
})





module.exports = router;