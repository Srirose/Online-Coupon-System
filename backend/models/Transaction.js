import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: String,
  couponId: mongoose.Schema.Types.ObjectId,
  originalAmount: Number,
  finalAmount: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Transaction", transactionSchema);