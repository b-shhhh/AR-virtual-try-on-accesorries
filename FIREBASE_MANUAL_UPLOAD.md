# Manual Firebase Upload Guide

Since your Firebase is currently empty, here's how to manually upload your 3D models:

## Option 1: Manual Upload via Firebase Console

### Step 1: Upload 3D Models to Firebase Storage
1. Go to [Firebase Console](https://console.firebase.google.com/project/ar-virtual-jewelry-try-on)
2. Click on "Storage" in the left menu
3. Click "Get Started" if you haven't set up Storage yet
4. Create a folder called `models`
5. Upload all your GLB files from the `3d models` folder to the `models` folder

### Step 2: Add Products to Firestore
1. Go to "Firestore Database" in Firebase Console
2. Click "Create Database" if you haven't set up Firestore yet
3. Create a collection called `products`
4. For each product in `backend/database/models-products.json`, add a document:

**Example for one product:**
- Document ID: `8bit_sunglassesheart`
- Fields:
  - name: "8-bit Heart Sunglasses"
  - category: "sunglasses"
  - price: 2499
  - currency: "NPR"
  - description: "Unique heart-shaped sunglasses..."
  - modelUrl: "https://storage.googleapis.com/ar-virtual-jewelry-try-on.appspot.com/models/8bit_sunglassesheart.glb"
  - thumbnailUrl: "https://source.unsplash.com/800x800/?sunglasses,jewelry,product"
  - tryOnImageUrl: "https://storage.googleapis.com/ar-virtual-jewelry-try-on.appspot.com/models/8bit_sunglassesheart.glb"
  - arSupported: true

## Option 2: Automated Upload (Recommended)

### Step 1: Get Service Account Key
1. Go to Firebase Console > Project Settings > Service Accounts
2. Click "Generate New Private Key"
3. Save the file as `backend/serviceAccountKey.json`

### Step 2: Update Firebase Config
Update `frontend/src/firebase/config.js` with your real values:
- apiKey: (from Project Settings > Your Apps)
- appId: (from Project Settings > Your Apps)
- messagingSenderId: (from Project Settings > Your Apps)

### Step 3: Install and Run
```bash
cd backend
npm install
npm run upload:models
```

## Model URLs After Upload

Your models will be accessible at:
```
https://storage.googleapis.com/ar-virtual-jewelry-try-on.appspot.com/models/FILENAME.glb
```

## Product Count

You have **38 products** ready to upload:
- 18 sunglasses
- 12 earrings
- 8 necklaces