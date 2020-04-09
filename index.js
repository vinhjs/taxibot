const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = process.env.PORT || 1337

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/webhook', (req, res) => {
    console.log("/webhook");
    console.log(req.params);
    res.send("OK");
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))