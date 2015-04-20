// ===
// Packages
// ===

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// ===
// Reply schema
// ===

var ReplySchema = new Schema({
  kind:    {type: String, required: true},
  content: {type: String, required: true}
});

// ===
// Schema export
// ===

module.exports = mongoose.model('Reply', ReplySchema);