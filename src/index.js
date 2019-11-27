let express = require('express');
let app = express()

app.get('/', function(req, res) {
    res.status(200).send('Hello!')
})

let port = process.env.PORT
app.listen(port, function(err) {
    if (!err) {
        console.log('App is listening!')
    }
})