'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Product = void 0;
const mongoose_1 = require('mongoose');
const productSchema = new mongoose_1.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
exports.Product = (0, mongoose_1.model)('Product', productSchema);
