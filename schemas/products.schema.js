const mongoose = require ('mongoose');


const schema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    password: {type: String, required: true},
    status: {type: String, enum: ["FOR_SALE", "SOLD_OUT"], default: "FOR_SALE" },
},
{timestamp: true}
);
const Product = mongoose.model("Product",schema);
module.exports = Product;

//**스키마를 잡는게 제일 중요하다. */