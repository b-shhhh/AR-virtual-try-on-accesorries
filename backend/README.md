# AuraAR Backend

Production-ready REST API backend for the AuraAR academic prototype built with Node.js.

## Architecture

```
backend/
├── middleware/          # Request processing & validation
│   ├── corsHandler.js   # CORS configuration
│   ├── errorHandler.js  # Centralized error handling
│   ├── requestLogger.js # Request logging & timing
│   └── validation.js    # Input validation rules
├── models/              # Data models & persistence
│   ├── Store.js         # File-based data store (JSON)
│   └── Product.js       # Product model
├── services/            # Business logic layer
│   ├── productService.js
│   ├── userService.js
│   ├── wishlistService.js
│   ├── tryonService.js
│   └── susService.js
├── routes/              # HTTP endpoint handlers
│   ├── health.js
│   ├── products.js
│   ├── wishlist.js
│   ├── users.js
│   ├── tryons.js
│   └── sus.js
├── data/                # Data storage
│   ├── products.json
│   └── store.json
├── router.js            # Route dispatcher
└── server.mjs           # Server entry point
```

## Running the Server

```bash
npm run backend
```

Server starts on `http://localhost:4000`

## API Endpoints

### Health & Info
- `GET /health` - Server health check

### Products
- `GET /api/products` - Get all products
- `GET /api/products?q=search` - Search products
- `GET /api/products?category=earrings` - Filter by category
- `GET /api/products/:productId` - Get single product
- `GET /api/products/stats` - Get product statistics

### Users
- `GET /api/users/:userId/stats` - User statistics (wishlist, try-ons, interactions)
- `GET /api/users/:userId` - Full user profile

### Wishlist
- `GET /api/users/:userId/wishlist` - Get user's wishlist (with product details)
- `POST /api/users/:userId/wishlist` - Add to wishlist
  - Body: `{ "productId": "earring-01" }`
- `DELETE /api/users/:userId/wishlist/:productId` - Remove from wishlist

### Try-Ons
- `POST /api/tryons` - Record a try-on session
  - Body: `{ "userId": "user123", "accessoryId": "earring-01", "faceRatio": 94.7, "fps": 30 }`
- `GET /api/users/:userId/tryons` - Get user's try-on history

### SUS Responses (System Usability Scale)
- `POST /api/sus-responses` - Record SUS response
  - Body: `{ "userId": "user123", "answers": [1,2,3,4,5,1,2,3,4,5] }`
- `GET /api/users/:userId/sus` - Get user's latest SUS response with score
- `GET /api/sus/stats` - Global SUS statistics

## Response Format

All responses include consistent JSON structure:

**Success (200, 201):**
```json
{
  "success": true,
  "data": { /* endpoint-specific data */ },
  "count": 10  // optional, for lists
}
```

**Error (4xx, 5xx):**
```json
{
  "error": "Error message",
  "statusCode": 400,
  "timestamp": "2026-07-07T10:30:00.000Z"
}
```

## Features

✅ Modular architecture (middleware → router → services → models)
✅ Centralized error handling
✅ Request logging with timing
✅ Input validation
✅ CORS support
✅ Product search & filtering
✅ User stats & profiles
✅ Wishlist management
✅ Try-on session tracking
✅ SUS survey scoring & analytics
✅ File-based persistence (JSON)

## Data Storage

Uses JSON files in `backend/data/`:
- `products.json` - Product catalog
- `store.json` - User wishlists, try-ons, SUS responses

For production, replace with a real database (MongoDB, PostgreSQL, etc.)

## Environment Variables

- `PORT` - Server port (default: 4000)

## Notes

- Facial images, video frames, and raw landmark coordinates are NOT sent to this backend
- Only summary values (faceRatio, fps) are accepted
- The backend is Firebase-first compatible; use locally for testing without Firebase
