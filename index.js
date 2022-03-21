//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())

let counter = 0
let carsCounter = 0

app.get("/counter", (req, res) => {
    res.json([{counter: counter}, {carsCounter: carsCounter}])
})

app.post("/counter/increment", (req, res) => {
    counter++
    res.json([{counter: counter}, {carsCounter: carsCounter}])
})

app.post("/counter/decrement", (req, res) => {
    counter--
    res.json([{counter: counter}, {carsCounter: carsCounter}])
})

app.post("/counter/double", (req, res) => {
    counter*=2
    res.json([{counter: counter}, {carsCounter: carsCounter}])
})

app.delete("/counter", (req, res) => {
    counter = 0 
    res.json([{counter: counter}, {carsCounter: carsCounter}])
})

/* extension 1 */
app.put("/counter", (req, res) => {
    counter = req.query.value
    res.json([{counter: counter}, {carsCounter: carsCounter}])
})

/* extension 2 */

app.get("/counter/cars", (req, res) => {
    res.json([{carsCounter: carsCounter}, {counter: counter}])
})

app.post("/counter/cars/increment", (req, res) => {
    carsCounter++
    res.json([{carsCounter: carsCounter}, {counter: counter}])
})

app.post("/counter/cars/decrement", (req, res) => {
    carsCounter--
    res.json([{carsCounter: carsCounter}, {counter: counter}])
})

app.post("/counter/cars/double", (req, res) => {
    carsCounter*=2
    res.json([{carsCounter: carsCounter}, {counter: counter}])
})

app.delete("/counter/cars", (req, res) => {
    carsCounter = 0 
    res.json([{carsCounter: carsCounter}, {counter: counter}])
})

app.put("/counter/cars", (req, res) => {
    carsCounter = req.query.value
    res.json([{carsCounter: carsCounter}, {counter: counter}])
})


//Start up our server
const port = 3040
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})