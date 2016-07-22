var express = require("express")
var bodyParser = require("body-parser")

const PORT = process.argv[2] || process.env.NODE_PORT || 3000

var app = express();

app.use(express.static(__dirname + "/public"))

// Don't do this if bower_components is inside public directory
app.use("/bower_components", express.static(__dirname + "/bower_components"))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/api/cart/add", function(req, res) {
    console.log("TODO: This method will implement the add to cart feature")
    res.status(202).end()
})

app.get("/api/cart/refresh", function(req, res) {
    console.log("TODO: This method will return the contents of the cart")
    res.status(202).end()
})

app.post("/api/cart/checkout", function(req, res) {
    console.log("TODO: This method will remove the cart contents")
    res.status(202).end()
})

app.listen(PORT, function() {
    console.log("Server is running on", PORT)
})
