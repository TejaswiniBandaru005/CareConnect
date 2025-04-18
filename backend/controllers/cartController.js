const Cart = require('../models/Cart');

// Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const cartItem = new Cart(req.body);
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all cart items
exports.getCartItems = async (req, res) => {
  try {
    const items = await Cart.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get cart item by ID
exports.getCartItem = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update cart item
exports.updateCartItem = async (req, res) => {
  try {
    const item = await Cart.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete cart item
exports.deleteCartItem = async (req, res) => {
  try {
    const item = await Cart.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted from cart" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
