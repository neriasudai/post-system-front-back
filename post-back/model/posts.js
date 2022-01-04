const Joi = require("joi");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 4,
    maxlength: 225,
    required: true,
  },
  body: {
    type: String,
    minlength: 3,
    maxlength: 10000,
    required: true,
  },
  author: {
    type: String,
    minlength: 4,
    maxlength: 30,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", schema);

// const p1 = new Post({
//   title: "hello",
// });

function validatePost(post) {
  const schema = Joi.object({
    title: Joi.string().min(4).max(225).required(),
    body: Joi.string().min(4).max(10000).required(),
    author: Joi.string().min(4).max(30),
  });
  return schema.validate(post);
}

module.exports = {
  Post,
  validatePost,
};
