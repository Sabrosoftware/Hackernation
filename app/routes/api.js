// ===
// Packages
// ===

var Problem = require('../models/problem');
var Reply   = require('../models/reply');

module.exports = function(app, express) {

  var apiRouter = express.Router();

  // ===
  // Test route to make sure we can enter http://localhost:port/api
  // ===
  apiRouter.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });

  // ===
  // Route that involves all the problems
  // ===
  apiRouter.route('/problems')
  // create a problem (accessed at POST http://localhost:port/problem)
  .post(function(req, res) {
    var problem = new Problem();

    problem.title       = req.body.title;
    problem.description = req.body.description;
    problem.replies     = req.body.replies;

    problem.save(function(err) {
      if (err) res.send(err);
      res.json({message: 'Problem created!'});
    });
  })
  // get all the problems (accessed at GET http://localhost:port/api/problems)
  .get(function(req, res) {
    Problem.find(function(err, problem_list) {
      if (err) res.send(err);
      res.json(problem_list);
    });
  });


  // ===
  // Route that involves a particular problem
  // ===
  apiRouter.route('/problems/:problem_id')
  .get(function(req, res) {
    Problem.findById(req.params.problem_id, function(err, problem) {
      if (err) res.send(err);
      res.json(user);
    });
  })
  .put(function(req, res) {
    Problem.findById(req.params.problem_id, function(err, problem) {
      if (err) res.send(err);
      
      if (req.body.title)       problem.title = req.body.title;
      if (req.body.description) problem.description = req.body.description;
      if (req.body.replies)     problem.replies = req.body.replies;
      
      problem.save(function(err) {
        if (err) res.send(err);
        res.json({message: 'Problem updated!'});
      });
    });
  })
  .delete(function(req, res) {
    Problem.remove({
      _id: req.params.prolem_id
    }, function(err, problem) {
         if (err) res.send(err);
         res.json({message: 'Problem deleted!'});
       });
  });


  // ===
  // Route that involves the replies to a particular problem
  // ===
  apiRouter.route('/problems/:problem_id/replies')
  // create a reply to a particular problem
  .post(function(req, res) {
    Problem.findById(req.params.problem_id, function(err, problem) {
      var reply = new Reply();

      reply.kind    = req.body.kind;
      reply.content = req.body.content;

      problem.replies.push(reply);

      problem.save(function(err) {
        if (err) res.send(err);

        res.json({message: 'Reply created!'});
      });
    });
  })
  // get all replies to a particular problem
  .get(function(req, res) {
    Problem.findById(req.params.problem_id, function(err, problem) {
      if (err) res.send(err);
      res.json(problem.replies);
    });
  });

  return apiRouter;

};