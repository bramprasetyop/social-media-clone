var express = require('express');
var router = express.Router();

const {
  newTweet,
  getTweet,
  deleteTweet
} = require("../controllers/tweetController");

/* GET tweetlisting. */
router.post('/', newTweet).get('/tweets', getTweet).delete('/tweets/delete/:id', deleteTweet)

module.exports = router;