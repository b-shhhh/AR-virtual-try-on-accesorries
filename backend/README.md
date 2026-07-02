# AuraAR Backend

Small optional REST backend for the AuraAR academic prototype.

The main app is Firebase-first. Use this backend only as a local mock/demo API if Firebase is not configured.

## Run

```bash
npm run backend
```

The server starts on `http://localhost:4000`.

## Endpoints

- `GET /health`
- `GET /api/products`
- `GET /api/users/:userId/stats`
- `GET /api/users/:userId/wishlist`
- `POST /api/users/:userId/wishlist` with `{ "productId": "earring-01" }`
- `DELETE /api/users/:userId/wishlist/:productId`
- `POST /api/tryons` with `{ "userId": "...", "accessoryId": "...", "faceRatio": 94.7, "fps": 30 }`
- `POST /api/sus-responses` with `{ "userId": "...", "answers": [1,2,3,4,5,1,2,3,4,5] }`

Facial images, video frames, and raw landmark coordinates are not sent to this backend.
Only optional summary values such as `faceRatio` and `fps` are accepted.
