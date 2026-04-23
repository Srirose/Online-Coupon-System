import express from "express";
import { validate, apply, getCoupons } from "../controllers/couponController.js";

const router = express.Router();

router.post("/validate-coupon", validate);
router.post("/apply-coupon", apply);
router.get("/coupons", getCoupons);

export default router;