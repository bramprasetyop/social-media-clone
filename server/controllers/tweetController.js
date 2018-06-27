const Tweet = require("../model/tweetModel");

function newTweet(req, res) {

  let addTweet = {
    tweet: req.body.tweet
  }
  Tweet.create(addTweet)
    .then(tweet => {
      res.status(200).json({
        message: 'new tweet added',
        tweet
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}

function getTweet(req, res) {
  Tweet.find()
    .then(tweet => {
      res.status(200).json({
        message: 'get tweet',
        tweet
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}

function deleteTweet(req, res) {
  Tweet.findByIdAndRemove(req.params.id)
    .then(tweet => {
      res.status(200).json({
        message: 'delete tweet',
        tweet
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'failed',
        err
      })
    })
}





module.exports = {
  newTweet,
  getTweet,
  deleteTweet
};