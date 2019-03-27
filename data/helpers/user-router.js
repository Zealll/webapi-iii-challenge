const express = require('express')

const router = express.Router()

// importing our data as 'users'
const users = require('./userDb.js')



// Endpoints Start Here:

// getting all the user data...
router.get('/', (req, res) => {
    users
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

// getting an individual user by it's ID...
router.get('/:id', (req, res) => {
    const id = req.params.id

    users
    .getById(id)
    .then(user => {
        // if the ID doesn't exist, it will return a specific error that is different from a server error.
        if(user.length < 0) {
            res
            .status(404)
            .json({message: `The post with the specified ID of ${id} does not exist.`})
        } else {
            res.json(user)
        }
    })
    .catch(error => {
        res
        .status(500)
        .json({message: "The User information could not be retrieved."})
    })
})





module.exports = router;