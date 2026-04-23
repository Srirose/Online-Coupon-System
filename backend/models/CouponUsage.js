import mongoose from "mongoose";

const usageSchema = new mongoose.Schema({
  userId: String,
  couponId: mongoose.Schema.Types.ObjectId
});

// Prevent duplicate usage
usageSchema.index({ userId: 1, couponId: 1 }, { unique: true });

export default mongoose.model("CouponUsage", usageSchema);