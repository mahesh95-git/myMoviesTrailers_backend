const mongoose = require("mongoose");
const Schema = mongoose.Schema();
const categorieSchema = Schema({
  categories: [
    {
      type: String,
      required: true,
    },
  ],
});
module.exports = mongoose.model("categorie", categorieSchema);
