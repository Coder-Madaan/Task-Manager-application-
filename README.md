# Full-Stack Task Manager Application

A modern, full-stack todo application built with React and Node.js, featuring user authentication and real-time task management.

## Features

- User authentication (register, login, logout)
- Create, read, update, and delete tasks
- Filter and sort tasks
- Responsive design with Tailwind CSS
- Secure API with JWT authentication

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Context API for state management
- Custom hooks
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- Middleware for route protection


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Coder-Madaan/Task-Manager-application-
cd <to-root-directory>
```
2. Install dependencies
```
cd backend
npm install
npm run dev
```
in another terminal do the following 
```
cd frontend
npm install
npm run dev
```
### Setup a .env file in backend folder
   
- PORT=5000     //use this port only as it is same in the routes specified
- MONGODB_URI=your_mongodb_uri
- JWT_SECRET=your_jwt_secret

