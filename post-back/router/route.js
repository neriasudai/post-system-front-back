const express = require("express");

const { Post } = require("../model/posts");

const router = express.Router();

router.get("/", async (req, res) => {
  const all = await Post.find();
  res.send(all);
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  });
  await post.save();
});

module.exports = router;
