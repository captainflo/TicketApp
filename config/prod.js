// prod.js - production keys here!!!
module.exports = {
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripeKey: process.env.STRIPE_KEY,
  secret: process.env.SECRET,
};
