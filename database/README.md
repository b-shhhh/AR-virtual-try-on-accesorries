# AuraAR Database

This folder documents the database design for the AuraAR prototype.

The current runnable backend stores data in JSON files under `backend/data/` so the project can run without installing a separate database server. For final deployment, the same collections can be moved to Firebase Firestore, MongoDB, or any document database.

## Current Storage

- Product seed data: `backend/data/products.json`
- Runtime data: `backend/data/store.json`

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

Stores profile-level user data. Authentication can come from Firebase Auth or the current demo login mode.

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
