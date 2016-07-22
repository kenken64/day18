var express = require("express")
var bodyParser = require("body-parser")
var cookieSession = require("cookie-session")

var session = require("express-session")

const PORT = process.argv[2] || process.env.NODE_PORT || 3000

var app = express();

app.use(cookieSession({
    secret: "lt7P0tx4t4",
    resave: false,
    saveUninitialized: true
}))

app.use(function(req, res, next) {
    if(! req.session.cart ) {
      req.session.cart = []
    }

    next()
})

app.use(express.static(__dirname + "/public"))

// Don't do this if bower_components is inside public directory
app.use("/bower_components", express.static(__dirname + "/bower_components"))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/api/cart/add", function(req, res) {
    req.session.cart.push({                // Push new value in array
      name: req.body.name,
      quantity: req.body.quantity
    })

    console.log("Cart:", req.session.cart)
    res.status(202).end()
})

app.get("/api/cart/refresh", function(req, res) {
    console.log("Sending back cart information")
    res.json(req.session.cart)
})

app.post("/api/cart/checkout", function(req, res) {
    console.log("Cart has been checked out")
    req.session.cart = []
    res.status(202).end()
})

app.listen(PORT, function() {
    console.log("Server is running on", PORT)
})
