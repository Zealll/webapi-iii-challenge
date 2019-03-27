
// function capitalLetters(req, res, next) {
//     const name = req.body.name || "" //if there name is an empty string it will give an error letting us know exactly whats wrong

//     if (name.toUpperCase() === name) {
//         next()
//     } else {
        
//         res.status(403).json({message: "Name that you entered needs to have only Capital Letters."})
//     }
// }

function capitalLetters(req, res, next) {
    const name = req.body.name.toUpperCase()
    
    req.body.name = name;
    next()
}

function count(req, res, next){
    if (count === 1) {
        next()
    } else {
        res.status(404).json({message: "OOOOOPSIE!!!"})
    }
}




module.exports = {
    capitalLetters,
    count
}