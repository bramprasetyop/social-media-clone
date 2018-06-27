const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let tweetSchema = new Schema(
  {
    tweet: {
      type: String
    }
  },
  { timestamps: true }
);





const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;