const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser());
app.get('/', (req, res) => res.send('HTTP Server for exercise'));

app.get('/api/fail', (req, res) => res.status(403).json({msg: 'You are not allowed to access this'}));

app.use('/api/employee', require('./employeeServer'));

app.listen(3000, () => console.log('HTTP Server for exercise listening on port 3000!'));