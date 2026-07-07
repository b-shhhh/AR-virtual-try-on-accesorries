# AuraAR - AR Virtual Try-On for Accessories

A monorepo project with separate frontend (React + Vite) and backend (Node.js) applications.

## Project Structure

```
aura-ar/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API services
│   │   ├── firebase/        # Firebase config & services
│   │   ├── data/            # Static data
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/              # Static assets
│   ├── assets/              # Frontend assets
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── backend/                 # Node.js REST API
│   ├── middleware/          # Request processing & validation
│   │   ├── corsHandler.js
│   │   ├── errorHandler.js
│   │   ├── requestLogger.js
│   │   └── validation.js
│   ├── models/              # Data models
│   │   ├── Store.js
│   │   └── Product.js
│   ├── services/            # Business logic
│   │   ├── productService.js
│   │   ├── userService.js
│   │   ├── wishlistService.js
│   │   ├── tryonService.js
│   │   └── susService.js
│   ├── routes/              # API route handlers
│   │   ├── health.js
│   │   ├── products.js
│   │   ├── wishlist.js
│   │   ├── users.js
│   │   ├── tryons.js
│   │   └── sus.js
│   ├── data/                # Data files (JSON)
│   │   ├── products.json
│   │   └── store.json
│   ├── scripts/             # Utility scripts
│   ├── database/            # Database configs
│   ├── router.js            # Route dispatcher
│   ├── server.mjs           # Server entry point
│   ├── README.md            # Backend documentation
│   └── package.json
│
├── dist/                    # Built frontend
├── node_modules/            # Root dependencies (if any)
├── package.json             # Root monorepo config
└── README.md               # This file
```

## Installation

### Install all dependencies:
```bash
npm run install:all
```

Or manually:
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

## Running the Application

### Frontend Development
```bash
npm run frontend
```
Starts Vite dev server at `http://localhost:5173`

### Backend Development
```bash
npm run backend:dev
```
Starts Node.js server at `http://localhost:4000`

### Frontend Production Build
```bash
npm run frontend:build
```
Creates optimized build in `frontend/dist/`

### Backend Production
```bash
npm run backend
```
Starts the backend server

## Available Scripts

From root directory:
- `npm run frontend` - Start frontend dev server
- `npm run frontend:build` - Build frontend for production
- `npm run backend` - Start backend server (production)
- `npm run backend:dev` - Start backend server (development)
- `npm run seed:firebase` - Seed Firebase with products
- `npm run seed:products` - Generate product seed data
- `npm run install:all` - Install all dependencies

## Frontend

**Location:** `/frontend`

React application with:
- Vite for fast builds
- Tailwind CSS for styling
- Firebase for authentication & database
- MediaPipe for face detection
- React Router for navigation
- Three.js for 3D AR visualization

### Frontend Commands
From `/frontend` directory:
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Backend

**Location:** `/backend`

Node.js REST API with:
- Modular architecture (middleware → router → services → models)
- Centralized error handling
- Request logging
- Input validation
- CORS support
- JSON file persistence

### Backend Endpoints

**Health:**
- `GET /health`

**Products:**
- `GET /api/products`
- `GET /api/products?q=search`
- `GET /api/products/:productId`

**Users:**
- `GET /api/users/:userId/stats`
- `GET /api/users/:userId`

**Wishlist:**
- `GET /api/users/:userId/wishlist`
- `POST /api/users/:userId/wishlist`
- `DELETE /api/users/:userId/wishlist/:productId`

**Try-Ons:**
- `POST /api/tryons`
- `GET /api/users/:userId/tryons`

**SUS Responses:**
- `POST /api/sus-responses`
- `GET /api/users/:userId/sus`

See [backend/README.md](backend/README.md) for detailed API documentation.

### Backend Commands
From `/backend` directory:
```bash
npm run start           # Start production server
npm run dev            # Start development server
npm run seed:firebase  # Seed Firebase
npm run seed:products  # Generate products
```

## Environment Variables

### Backend
- `PORT` - Server port (default: 4000)

### Frontend
- React/Vite standard environment variables

## Development Workflow

1. **Start both servers:**
   ```bash
   # Terminal 1: Frontend
   npm run frontend

   # Terminal 2: Backend
   npm run backend:dev
   ```

2. **Frontend** will be available at `http://localhost:5173`
3. **Backend API** will be available at `http://localhost:4000`

## Data Storage

- **Frontend:** Firebase Firestore + local state
- **Backend:** JSON files in `backend/data/`
  - For production, replace with a real database (MongoDB, PostgreSQL, etc.)

## Key Features

✅ Modular monorepo structure  
✅ Separate frontend and backend  
✅ AR face detection with MediaPipe  
✅ 3D model visualization  
✅ Product catalog with search  
✅ Wishlist management  
✅ Try-on session tracking  
✅ SUS usability survey  
✅ Firebase authentication  
✅ RESTful API  
✅ Responsive design  

## Notes

- The main app is **Firebase-first**. Backend is optional for local development/testing.
- Facial images and raw landmarks are **not** sent to the backend (only summary metrics like faceRatio and fps).
- For production, migrate from JSON file storage to a proper database.

## License

MIT
