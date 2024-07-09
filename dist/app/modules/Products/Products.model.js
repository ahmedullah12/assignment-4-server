"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
productSchema.statics.isProductExists = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield exports.Product.findById(id);
        return !!product;
    });
};
exports.Product = (0, mongoose_1.model)('Product', productSchema);
