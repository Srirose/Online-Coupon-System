import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
  code: String,
  isActive: { type: Boolean, default: true },
  discountAmount: Number   // 👈 NEW
});
export default mongoose.model("Coupon", couponSchema);