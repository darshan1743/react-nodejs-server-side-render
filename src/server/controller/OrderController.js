const Order = require("../mongoose/model/order");
const User = require("../mongoose/model/user");

module.exports.getOrder = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalOrders = await Order.countDocuments();

    const orders = await Order.find({})
      .populate("user")
      .populate("items.item")
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      status: 'success',
      data: orders,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalOrders / limit),
        totalItems: totalOrders,
        itemsPerPage: limit
      }
    });
  } catch (error) {
    res.status(500).json({ status: "failure", error: error.message });
  }
};

module.exports.makeOrder = async (req, res) => {
  try {
    const user = await User.find({ name: req.body.user });

    const newOrder = new Order({
      user: user[0]._id,
      items: req.body.cartData,
    });

    await newOrder.save();
    const updatedUser = await User.findByIdAndUpdate(
      user[0]._id,
      { $push: { orders: newOrder._id } },
      { new: true }
    );
    console.log(updatedUser, "updatedUser");

    res.status(200).send({ message: "Order created successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
