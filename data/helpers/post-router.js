const express = require('express')

const router = express.Router()

// importing our data as 'posts'
const posts = require('./postDb.js')


router.get('/', (req, res) => {
    posts
    .get()
    .then(posts => {
        res.json(posts)
    })
    .catch(error => {
        console.log(error)
        res
        .status(500)
        .json({message: "Something went wrong with the server."})
    })
})



module.exports = router;