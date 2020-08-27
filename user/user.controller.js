const User = require("./user.model");

/*module.exports.signup = async (req, res) => {
  console.log("req.body", req.body);
  try {
    const user = new user(req.body);
    const newUser = await user.save();
    res.status(201).json({ newUser });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};*/

module.exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ err });
    }
    res.json({
      user
    });
  });
};
