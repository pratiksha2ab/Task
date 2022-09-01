const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const keys = require("../keys/keys");
const User = require("../models/user");


passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((e) => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TWITTER_CONSUMER_KEY,
      consumerSecret: keys.TWITTER_CONSUMER_SECRET,
      callbackURL: "http://localhost:3000/auth/twitter/redirect",
    },
    async (token, tokenSecret, profile, done) => {
     
      const currentUser = await User.findOne({
        twitterId: profile._json.id_str,
      });
    
      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);


