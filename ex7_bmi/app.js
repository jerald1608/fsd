const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data
// Serve static files (for potential CSS or client-side JavaScript)
app.use(express.static('public'));
// Define a route to serve an HTML form for BMI input
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});
// Handle form submission and calculate BMI

app.post('/calculate', (req, res) => {
const weight = parseFloat(req.body.weight);
const height = parseFloat(req.body.height);
const bmi = weight / (height * height);
res.send(`Your BMI is: ${bmi.toFixed(2)}`);
});
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});