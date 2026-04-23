import { validateCoupon, applyCoupon } from "../services/couponService.js";
import Coupon from "../models/Coupon.js";
export const validate = async (req, res) => {
  const { userId, couponCode, amount } = req.body;

  const result = await validateCoupon(userId, couponCode, amount);
  console.log(req.body);

  res.json(result);
};

export const apply = async (req, res) => {
  try {
    const { userId, couponCode, amount } = req.body;

    const result = await applyCoupon(userId, couponCode, amount);

    res.json({ success: true, data: result });

  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
export const getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find({ isActive: true });

    res.json(coupons);
  } catch (err) {
    res.status(500).json({ message: "Error fetching coupons" });
  }
};