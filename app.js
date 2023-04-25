const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use('/static', express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get('/data', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        'data': 5
    })
})


app.listen(3000, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port 3000!')
    }
})