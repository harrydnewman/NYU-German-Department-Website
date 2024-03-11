const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();

let storedMessages = [];

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '/build')));

// Parse JSON bodies
app.use(bodyParser.json());

// Define API routes
app.post('/submit', (req, res) => {
    

    const { eventName, date, time, location, eventDescription} = req.body;

    storedMessages.push({ eventName, date, time, location, eventDescription });

    console.log(storedMessages);

    res.send('Thank you for submitting!');
});

app.get('/messages', (req, res) => {
    res.json(storedMessages);
});

// Serve the React app for any other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('/test', function(request, response) {
    response.send("Test: Server is working")
})

app.listen(8000, function() {
    console.log("App listening on port 8000")
})