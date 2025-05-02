const User = require("../mongoose/model/user");

module.exports.getUser = (req, res) => {
  try {
    // from users only select name feild and from orders only sleect quantity field
    User.find({}, { name: 1 })
      .populate({
        path: "orders",
        select: {
          "items.quantity": 1,
          _id: 1,
        },
      })
      .then((data) => {
        res.status(200).json({ data: data });
      });
  } catch (error) {
    res.status(500);
  }
};
