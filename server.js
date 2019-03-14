const express = require('express');

const server = express();

const superwidget = require('./funkykong');

server.use(express.json());



server.get('/', (req, res) => {
  res.status(200).json('hey it works');
});

server.get('/widgets', (rec, rez) => {
    superwidget.getAll('widgets')
    .then( stuff => {
        rez.status(201).json(stuff);
    })
    .catch(err =>{
        rez.status(500).json(err)
    })

})

server.post('/widgets/post', (rec, rez) => {
    superwidget.put(rec.body)
    .then(stuff =>{
        rez.status(202).json(stuff)
    })
    .catch(err => {
        rez.status(501).json(err)
    })
})

server.delete('widgets/delete/:id', (rec, rez) => {
    const ids = rec.params.id;
    console.log(ids);
    superwidget.pull(ids)
    .then(stuff =>{
        rez.status(202).json(stuff)
    })
    .catch(err => {
        rez.status(501).json(err)
    })
})


module.exports = server;
