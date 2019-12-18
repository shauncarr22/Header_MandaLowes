const express = require('express');
const app = express();
const path = require('path');
const port = 3003;
const bodyParser = require('body-parser')
const cors = require('cors')
const connection = require('./config');

app.use(express.static('dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/getHeader', (req,res) => {
    res.sendFile(path.join(`${__dirname}/../dist/bundle.js`))
})

app.get('/spears', (req, res) => {
    connection.query('SELECT * FROM mando_header', function (error, results) {
        if (error){
            console.error(error)
        }else
            res.send(results)
      });
});

app.get('/spears/:id', (req, res) => {
    connection.query(`SELECT * FROM mando_header WHERE id = ${req.params.id}`, function (error, results) {
        if (error){
            console.error(error)
        }else
            res.send(results)
      });
});

app.post('/spears', (req, res) => {
    connection.query(`INSERT into mando_header (item,model,category) VALUES ('${req.body.item}','${req.body.model}'${req.body.category}')`, function (error, results) {
        if (error){
            console.error(error)
        }else
            res.send(results)
      });
});


app.listen(port, () => console.log(`listening from port: ${port}`));