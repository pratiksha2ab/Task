
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: " TWITTER_CONSUMER_KEY",
  TWITTER_CONSUMER_SECRET: " TWITTER_CONSUMER_SECRET",
  TWITTER_ACCESS_TOKEN:"TWITTER_ACCESS_TOKEN",
  TWITTER_TOKEN_SECRET: "TWITTER_TOKEN_SECRET",
};

const DB_USER = "root";
const DB_PASSWORD = "root";

const CLOUD_MONGODB = {
  
  MONGODB_URI: `mongodb url`,
};
const SESSION = {
    COOKIE_KEY: "thisappisawesome",
  };
  
  const KEYS = {
    ...TWITTER_TOKENS,
    ...CLOUD_MONGODB,
    ...SESSION,
  };
  
  module.exports = KEYS;
  