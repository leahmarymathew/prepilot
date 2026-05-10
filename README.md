# PrepPilot

PrepPilot is a full-stack interview preparation platform with user authentication and a personalized dashboard for DSA progress tracking.

## Tech Stack

### Frontend
- Angular 21 (standalone components)
- Angular Material
- RxJS

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication

## Features
- User registration and login
- Protected frontend routes with auth guard
- Token-based API access via HTTP interceptor
- Dashboard data API with problem-solving and topic progress metrics
- Responsive dashboard layout with sidebar and navbar components

## Project Structure

```text
prepilot/
├── src/                     # Angular frontend
│   └── app/
│       ├── auth/            # Login and registration
│       ├── dashboard/       # Dashboard UI
│       ├── layout/          # Main protected layout
│       ├── services/        # Auth and dashboard services
│       └── shared/          # Navbar and sidebar components
├── backend/
│   ├── config/              # Database connection
│   ├── controllers/         # Route handlers
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   └── server.js            # Express entry point
└── README.md
```

## Getting Started

### Prerequisites
- Node.js and npm
- MongoDB instance

### 1) Install Frontend Dependencies

```bash
npm install
```

### 2) Install Backend Dependencies

```bash
cd backend
npm install
```

### 3) Configure Environment Variables

Create a `.env` file in `/backend` with:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4) Run the Backend

From `/backend`:

```bash
npm run dev
```

### 5) Run the Frontend

From project root:

```bash
npm start
```

Frontend: `http://localhost:4200`  
Backend: `http://localhost:5000`

## Available Scripts

### Frontend (root)
- `npm start` - Run Angular dev server
- `npm run build` - Build frontend app
- `npm test` - Run unit tests

### Backend (`/backend`)
- `npm run dev` - Run backend with nodemon
- `npm start` - Run backend with node

## API Endpoints

Base URL: `http://localhost:5000/api`

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Log in and receive JWT token
- `GET /dashboard` - Fetch dashboard data (requires `Authorization: Bearer <token>`)
