// ===
// Packages
// ===

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var ReplySchema = require('./reply');



// ===
// Problem schema
// ===

var ProblemSchema = new Schema({
  title:       {type: String, required: true, index: {unique: true}},
  description: {type: String, required: true},
  replies:     [ReplySchema]
});

// ===
// Schema export
// ===

module.exports = mongoose.model('Problem', ProblemSchema);