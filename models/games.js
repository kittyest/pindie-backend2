const mongoose = require("mongoose");
const categories = require("./categories");
const users = require("./users");

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: categories,
    },
  ],
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: users,
    },
  ],
});

const games = mongoose.model("games", gameSchema);
module.exports = games;
