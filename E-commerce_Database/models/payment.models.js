const mongoose = require("mongoose");

const paymentMethodSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["card", "bank", "wallet"],
    required: true,
  },

  provider: {
    type: String,
    enum: ["stripe", "paypal", "braintree"],
    required: true,
  },

  providerPaymentMethodId: {
    type: String,
    required: true,
  },

  brand: String,      // Visa, Mastercard
  last4: String,      // 4242
  expMonth: Number,
  expYear: Number,

  isDefault: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export const payment = mongoose.model("")