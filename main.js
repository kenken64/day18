var express = require("express")
var bodyParser = require("body-parser")

const PORT = process.argv[2] || process.env.NODE_PORT || 3000

var app = express();

var cart = {
};


app.use(express.static(__dirname + "/public"))

// Don't do this if bower_components is inside public directory
app.use("/bower_components", express.static(__dirname + "/bower_components"))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/api/cart/add", function(req, res) {
    var userid = req.body.userId
    console.log("Cart for userid", userid, cart[userid]);
    if(! cart[userId]){
      cart[userId] = []
    }

    cart[userid].push({                // Push new value in array
      name: req.body.name,
      quantity: req.body.quantity
    })

    console.log("Cart:", cart)
    res.status(202).end()
})

app.get("/api/cart/refresh", function(req, res) {
    console.log("Sending back cart information")
    var userid = req.query.userId

    res.json(cart[userid])
})

app.post("/api/cart/checkout", function(req, res) {
    console.log("Cart has been checked out")
    var userid = req.body.userId
    cart[userid] = []
    res.status(202).end()
})

app.listen(PORT, function() {
    console.log("Server is running on", PORT)
})
