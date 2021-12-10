//apontamento do model que criamos para as Tarefas
const tarefas = require('../models/tarefas');

const getAll = (req, res) => {
  console.log(req.url);
  tarefas.find(function(err, tarefas){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(tarefas);
  })
};


const postTarefa = (req, res) => {
  console.log(req.body)

  let tarefa = new tarefas(req.body)

  tarefa.save(function(err){
    if(err) {
      res.status(500).send({ message: err.message})

    }
    res.status(201).send(tarefa.toJSON())
    
  })
  };

  const getById =(req, res) => {
    const id = req.params.id;
    tarefas.find ({ id } , function (err, tarefas) {
      if( err ) {
        res . status (500) . send({ message : err . message } )
  }

  res . status(200).send(tarefas);
})
  };



module.exports = {
  getAll,
  postTarefa,
  getById,
};
