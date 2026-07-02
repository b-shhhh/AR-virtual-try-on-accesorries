# AuraAR Database

This folder documents the Firebase database design for the AuraAR prototype.

AuraAR uses Firebase for authentication and Firestore for database storage. The small Node backend in `backend/` can be kept as an optional local mock, but the active frontend data layer is Firebase-first.

## Current Storage

- Authentication: Firebase Auth
- Catalog and app data: Firestore collections
- Local fallback data: built into the frontend so the prototype still opens before Firebase is configured
- Firestore product seed file: `database/firestore-products-seed.json`

Generate the 100-product seed file with:

```bash
npm run seed:products
```

After adding your real Firebase config in `src/firebase/config.js`, upload the same 100 products to Firestore with:

```bash
npm run seed:firebase-products
```

## Collections

### products

Stores catalog and AR asset metadata.

```json
{
  "id": "earring-01",
  "name": "Earring 01",
  "category": "earrings",
  "price": 1999,
  "currency": "NPR",
  "thumbnailUrl": "/assets/products/earring-01.svg",
  "tryOnImageUrl": "/assets/products/earring-01.svg",
  "modelUrl": "/assets/earring_01.glb",
  "arSupported": true
}
```

### users

Stores profile-level user data. Authentication comes from Firebase Auth.

```json
{
  "id": "user-001",
  "email": "student@example.com",
  "displayName": "Student",
  "createdAt": "2026-07-02T00:00:00.000Z"
}
```

### wishlists

Stores saved products per user.

```json
{
  "userId": "user-001",
  "productIds": ["earring-01", "glasses-01"],
  "updatedAt": "2026-07-02T00:00:00.000Z"
}
```

### tryOns

Stores non-sensitive try-on summary events. Do not store images, video frames, or raw face landmark coordinates.

```json
{
  "id": "tryon-001",
  "userId": "user-001",
  "productId": "earring-01",
  "accessoryId": "earring-01",
  "faceRatio": 94.7,
  "fps": 30,
  "createdAt": "2026-07-02T00:00:00.000Z"
}
```

### susResponses

Stores System Usability Scale evaluation responses.

```json
{
  "id": "sus-001",
  "userId": "user-001",
  "answers": [5, 1, 5, 1, 5, 1, 5, 1, 5, 1],
  "score": 100,
  "comments": "",
  "createdAt": "2026-07-02T00:00:00.000Z"
}
```

## Privacy Rule

The database should only store application data and research summary values. The AR camera stream, captured frames, facial landmark arrays, and face images should remain local to the user's browser.
