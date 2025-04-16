const Item = require("../mongoose/model/item");

const products = [
    { name: "Aurora Lamp", price: 49.99, stock: 100, description: "A sleek lamp that mimics the northern lights." },
    { name: "Zephyr Speaker", price: 89.99, stock: 60, description: "Portable speaker with crystal-clear sound and long battery life." },
    { name: "Nimbus Watch", price: 199.99, stock: 25, description: "Smartwatch with weather updates and fitness tracking." },
    { name: "Echo Mug", price: 24.99, stock: 150, description: "Temperature-controlled mug with built-in reminder beeps." },
    { name: "Luna Charger", price: 34.99, stock: 85, description: "Wireless charger with moonlight glow and fast charge." },
    { name: "Drift Backpack", price: 59.99, stock: 40, description: "Lightweight, waterproof backpack for everyday adventures." },
    { name: "Pulse Earbuds", price: 79.99, stock: 70, description: "Noise-canceling earbuds with deep bass and gesture control." },
    { name: "Stellar Pen", price: 12.49, stock: 200, description: "Metallic pen with stylus tip and LED flashlight." },
    { name: "Quartz Clock", price: 29.99, stock: 90, description: "Minimal wall clock with a silent quartz mechanism." },
    { name: "Nebula Projector", price: 99.99, stock: 30, description: "Ceiling projector that turns your room into a galaxy." },
    { name: "Fusion Bottle", price: 19.99, stock: 110, description: "Infuser water bottle with BPA-free material." },
    { name: "Glide Mousepad", price: 14.99, stock: 130, description: "Extended mousepad with anti-slip base and stitched edges." },
    { name: "Blaze Heater", price: 69.99, stock: 50, description: "Compact room heater with auto shut-off safety." },
    { name: "Nova Fan", price: 44.99, stock: 75, description: "Silent desk fan with 360-degree rotation and LED display." },
    { name: "Orbit Wallet", price: 39.99, stock: 65, description: "Slim RFID wallet with GPS tracking feature." },
    { name: "Zen Garden Kit", price: 22.99, stock: 95, description: "Desktop zen garden with rake, sand, and mini stones." },
    { name: "Pixel Frame", price: 54.99, stock: 45, description: "Digital photo frame with Wi-Fi and cloud storage." },
    { name: "Ignite Lighter", price: 17.99, stock: 120, description: "USB-rechargeable lighter with windproof plasma arc." },
    { name: "Haven Diffuser", price: 27.49, stock: 80, description: "Aromatic diffuser with color-changing LED lights." },
    { name: "Trek Journal", price: 15.99, stock: 140, description: "Durable travel journal with weatherproof pages." }
  ];

  
module.exports.getItems = (req, res) => {
  console.log("calledd");
  try {
    Item.find({}).then((data) => {
      res.status(200).send(data)
    });

    // Item.insertMany(products).then((data)=> {
    //     res.status(300).send({status: 'success'})
    // })
  } catch {
    res.status(400).json({ status: "failure" });
  }
};
