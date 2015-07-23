module.exports = function(app) {
  var express = require('express');
  var ultimataRouter = express.Router();
  var ultimata = [
    {
      id: 1,
      title: "Brush your teeth for two minutes or with a sharpie, write 'Rotten Teeth' on your lips",
      shortTitle: "Brush yo teeth",
      status: 'pending'
    },
    {
      id: 2,
      title: "Do six seated twists or use a walking cane for one week",
      shortTitle: "Twist yo back",
      status: 'done'
    },
    {
      id: 3,
      title: "Only eat half of your dessert or eat an entire cake and 1 gallon tub of ice cream in less than 30 minutes",
      shortTitle: "Eat small portions",
      status: 'failed'
    }
  ];

  ultimataRouter.get('/', function(req, res) {
    var data = [];
    ultimata.forEach(function(item){
      data.push({
        type: 'ultimata',
        id: item.id.toString(),
        attributes: {
          title: item.title,
          "short-title": item.shortTitle,
          status: item.status
        }
      });
    });
    res.set('Content-Type', 'application/vnd.api+json');
    res.send({
      'data': data
    });
  });

  ultimataRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  ultimataRouter.get('/:id', function(req, res) {
    res.send({
      'ultimata': {
        id: req.params.id
      }
    });
  });

  ultimataRouter.put('/:id', function(req, res) {
    res.send({
      'ultimata': {
        id: req.params.id
      }
    });
  });

  ultimataRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/ultimata', ultimataRouter);
};
