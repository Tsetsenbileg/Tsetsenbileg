const router = require("express").Router();
let Sentence = require("../models/sentence.model");

router.route("/").get((req, res) => {
  Sentence.find()
    .then((sentence) => res.json(sentence))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const str = req.body.str;
  const category = req.body.category;
  const type = req.body.type;

  const newSentence = new Sentence({
    str,
    category,
    type,
  });

  newSentence
    .save()
    .then(() => res.json("Sentence added! "))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
