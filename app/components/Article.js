var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the article with the schema object
var articleSchema = new Schema({
  // The headline is the article associate with the note
  title: String,
  // date is just a string
  date: String,
  // as is the noteText
  url: String
});

// Create the Article model using the noteSchema
var Article = mongoose.model("Article", articleSchema);

// Export the Article model
module.exports = Article;