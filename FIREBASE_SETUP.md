# Firebase Setup Guide for 3D Models

This guide will help you upload your 3D models to Firebase Storage and set up the product data in Firestore.

## Step 1: Get Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/project/ar-virtual-jewelry-try-on)
2. Click the gear icon ⚙️ next to "Project Overview"
3. Select "Project settings"
4. Scroll down to "Your apps" section
5. Click on your web app (or create one if needed)
6. Copy the Firebase SDK config values

## Step 2: Update Firebase Config

Update `frontend/src/firebase/config.js` with your real Firebase values:

```javascript
export const firebaseConfig = {
  apiKey: "AIzaSyDp8gzj1MprdEMoNO-MtsxYW4vsJ0n9HNk",
  authDomain: "ar-virtual-jewelry-try-on.firebaseapp.com",
  projectId: "ar-virtual-jewelry-try-on",
  storageBucket: "ar-virtual-jewelry-try-on.appspot.com",
  messagingSenderId: "821485998234",
  appId: "1:821485998234:web:fd422bf60bf4da989a0f23"
};
```

## Step 3: Get Service Account Key (for uploading models)

1. Go to Firebase Console > Project Settings > Service Accounts
2. Click "Generate New Private Key"
3. Save the file as `backend/serviceAccountKey.json`

## Step 4: Install Dependencies

```bash
cd backend
npm install
```

## Step 5: Upload Models to Firebase Storage

Run the upload script:

```bash
cd backend
npm run upload:models
```

This will:
- Upload all GLB files from the `3d models` folder to Firebase Storage
- Create product entries in Firestore with:
  - Name
  - Description
  - Price
  - Category
  - Model URL (from Firebase Storage)
  - Thumbnail URL
  - Try-on image URL

## Step 6: Verify in Firebase Console

1. Go to Firebase Console > Storage
2. Check that your models are in the `models/` folder
3. Go to Firebase Console > Firestore Database
4. Check that products are in the `products` collection

## Files Created/Modified

- `frontend/src/data/modelsCatalog.js` - Product metadata for all 3D models
- `frontend/src/firebase/storage.js` - Firebase Storage utilities
- `frontend/src/firebase/products.js` - Updated to fetch from Firebase
- `backend/scripts/uploadModelsToStorage.mjs` - Script to upload models
- `backend/package.json` - Added firebase-admin dependency

## Model URLs

After uploading, your models will be accessible at:
```
https://storage.googleapis.com/ar-virtual-jewelry-try-on.appspot.com/models/FILENAME.glb
```

## Notes

- The script uses `firebase-admin` SDK for server-side uploads
- Models are made publicly accessible for easy access
- Product data includes all necessary fields for the AR try-on feature