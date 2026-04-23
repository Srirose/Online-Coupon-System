#  Coupon System

## Features
- Validate coupon (no state change)
- Apply coupon (one-time per user)
- 100% discount support
- Concurrency handling
- Frontend UI with coupon display

## Tech Stack
- Frontend: React.js
- Backend: Node.js, Express
- Database: MongoDB

## APIs
### POST /validate-coupon
- Checks coupon validity
- Returns discount & final amount

### POST /apply-coupon
- Applies coupon
- Creates transaction
- Marks coupon as used

## Run Project

### Backend
cd backend
npm install
node server.js

### Frontend
cd frontend
npm install
npm start
