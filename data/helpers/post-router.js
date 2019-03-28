const express = require('express')

const router = express.Router()

// importing our data as 'posts'
const posts = require('./postDb.js')

// getting all the Posts...
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

// getting a post by it's ID...
router.get('/:id', (req, res) => {
    const id = req.params.id

    posts
    .getById(id)
    .then(post => {
        if(post.length < 0) {
            res
            .status(404)
            .json({message: `The post with the ID of ${id} couldn't be found.`})
        } else {
            res
            .status(201)
            .json(post)
        }
    })
    .catch(error => {
        console.log(error)
        res
        .status(500)
        .json({message: "The Post could not be retrieved from the server."})
    })
})

// adding a Post to our array...
router.post('/', (req, res) => {
    const post = req.body

    posts
    .insert(post)
    .then(newPost => {
        res.status(201).json(newPost)
    })
    .catch(error => {
        console.log(error)
        res
        .status(500)
        .json({message: "There was an error while saving your Post to the database."})
    })
})



module.exports = router;