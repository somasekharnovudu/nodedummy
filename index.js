const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/data', (req, resp) => {
    resp.send(data)
})
app.listen(4000, () => {
    console.log('=====listening on server')
})