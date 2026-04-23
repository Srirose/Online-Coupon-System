import Coupon from "../models/Coupon.js";
import CouponUsage from "../models/CouponUsage.js";
import Transaction from "../models/Transaction.js";

export const validateCoupon = async (userId, code, amount) => {
  const coupon = await Coupon.findOne({ code });
  const discount = coupon.discountAmount;
  const finalAmount = Math.max(amount - discount, 0);

  if (!coupon || !coupon.isActive) {
    return { valid: false };
  }

  const alreadyUsed = await CouponUsage.findOne({
    userId,
    couponId: coupon._id
  });

  if (alreadyUsed) {
    return { valid: false };
  }

  return {
    valid: true,
    discount,
    finalAmount
  };
};

export const applyCoupon = async (userId, code, amount) => {
  const coupon = await Coupon.findOne({ code });


  if (!coupon || !coupon.isActive) {
    throw new Error("Invalid coupon");
  }
  const discount = coupon.discountAmount;
  const finalAmount = Math.max(amount - discount, 0);


  // TRY inserting usage (this handles concurrency)
  try {
    await CouponUsage.create({
      userId,
      couponId: coupon._id
    });
  } catch (err) {
    throw new Error("Coupon already used");
  }

  const transaction = await Transaction.create({
    userId,
    couponId: coupon._id,
    originalAmount: amount,
    discount,
    finalAmount
  });

  return transaction;
};