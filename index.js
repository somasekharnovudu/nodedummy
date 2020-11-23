const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/data/:name', (req, resp) => {
    const { name } = req.params;
    const response = data.find((dataObj) => dataObj.id === name);
    resp.send(response.items)
})
app.listen(4000, () => {
    console.log('=====listening on server')
})
