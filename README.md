<div align="center">

# 🎓 Student Management System

**A full-stack platform for managing student tasks, submissions, grading, and real-time collaboration.**

![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-4.6-010101?style=flat-square&logo=socket.io)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

[Features](#-features) · [Tech Stack](#-tech-stack) · [Quick Start](#-quick-start) · [API Reference](#-api-reference) · [Deployment](#-deployment)

</div>

---

## 📋 Overview

Student Management System (SMS) is a role-based web application that enables students, mentors, and admins to collaborate effectively. Students submit tasks and track their progress; mentors review and grade work; admins oversee the entire platform — all with real-time notifications powered by Socket.io.

---

## ✨ Features

| Category | Features |
|---|---|
| **Authentication** | JWT login/register, protected routes, role-based access |
| **Task Management** | Create, assign, update, delete tasks with priority levels |
| **Submission System** | Text/link submissions, file attachments, late detection |
| **Grading & Feedback** | Score submissions, AI-generated feedback, plagiarism check |
| **Real-time** | Socket.io notifications, live chat with typing indicators |
| **Analytics** | Student progress charts, weak-student detection, leaderboard |
| **Messaging** | Direct messaging between students and mentors |
| **Groups** | Create and manage student groups for collaborative tasks |

---

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Real-time**: Socket.io
- **Auth**: JSON Web Tokens (JWT) + bcryptjs
- **File Uploads**: Multer
- **Email**: Nodemailer

### Frontend
- **Framework**: React 18.2 with React Router v6
- **HTTP Client**: Axios
- **Real-time**: Socket.io Client
- **Styling**: CSS3 (custom, no frameworks)

---

## ⚡ Quick Start

### Prerequisites
- Node.js v16 or higher
- npm v8 or higher
- MongoDB (local or Atlas cloud URI)

### 1. Clone the Repository
```bash
git clone https://github.com/BYTEZEN-11/SMS.git
cd SMS
```

### 2. Configure Environment Variables
```bash
# Root .env (already provided — update values as needed)
PORT=5000
NODE_ENV=development
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
FRONTEND_URL=http://localhost:3000
```

### 3. Start the Backend
```bash
cd backend
npm install
npm run dev        # Development (nodemon auto-reload)
# npm start        # Production
```
> Backend runs at `http://localhost:5000`

### 4. Start the Frontend
```bash
cd frontend
npm install
npm start
```
> Frontend runs at `http://localhost:3000`

---

## 🔐 User Roles & Permissions

| Permission | Student | Mentor | Admin |
|---|:---:|:---:|:---:|
| View assigned tasks | ✅ | ✅ | ✅ |
| Submit tasks | ✅ | — | — |
| Create & manage tasks | — | ✅ | ✅ |
| Grade submissions | — | ✅ | ✅ |
| View analytics | — | ✅ | ✅ |
| Manage all users | — | — | ✅ |
| Change user roles | — | — | ✅ |
| Delete any content | — | — | ✅ |

---

## 📡 API Reference

### Authentication
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive JWT |
| `GET` | `/api/auth/me` | Get current authenticated user |

### Users
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/users` | List all users |
| `GET` | `/api/users/:id` | Get user by ID |
| `PUT` | `/api/users/:id` | Update user profile |
| `DELETE` | `/api/users/:id` | Delete user *(admin only)* |
| `PUT` | `/api/users/:id/role` | Change user role *(admin only)* |

### Tasks
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/tasks` | Create task *(mentor/admin)* |
| `GET` | `/api/tasks` | Get all tasks |
| `GET` | `/api/tasks/:id` | Get task by ID |
| `PUT` | `/api/tasks/:id` | Update task *(mentor/admin)* |
| `DELETE` | `/api/tasks/:id` | Delete task *(mentor/admin)* |
| `GET` | `/api/tasks/my-tasks` | Get student's own tasks |

### Submissions
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/submissions` | Submit a task |
| `GET` | `/api/submissions/my-submissions` | Get student's submissions |
| `GET` | `/api/submissions/task/:taskId` | Get submissions for a task |
| `PUT` | `/api/submissions/:id/grade` | Grade a submission |
| `PUT` | `/api/submissions/:id/feedback` | Add feedback |
| `POST` | `/api/submissions/:id/plagiarism/:taskId` | Run plagiarism check |

### Groups, Messages & Notifications
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/groups` | Create a group |
| `POST` | `/api/groups/add-member` | Add member to group |
| `GET` | `/api/messages/inbox` | Get inbox |
| `GET` | `/api/messages/conversation/:userId` | Get conversation |
| `GET` | `/api/notifications` | Get notifications |
| `PUT` | `/api/notifications/read-all` | Mark all as read |

### Analytics
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/analytics/student-progress` | Student progress report |
| `GET` | `/api/analytics/admin-stats` | System-wide statistics |
| `GET` | `/api/analytics/weak-students` | Identify at-risk students |
| `GET` | `/api/analytics/task/:taskId` | Per-task analytics |

---

## 🗂 Project Structure

```
SMS/
├── backend/
│   ├── config/          # Database & app configuration
│   ├── controllers/     # Route handler logic
│   ├── middleware/       # Auth, error handling
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express route definitions
│   ├── services/        # Business logic layer
│   ├── sockets/         # Socket.io event handlers
│   ├── utils/           # Logger, token generator, constants
│   ├── scripts/         # DB seeding & management scripts
│   ├── server.js        # App entry point
│   └── startup.js       # Pre-flight checks
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/  # Reusable UI components
│       ├── context/     # React context providers
│       ├── hooks/       # Custom React hooks
│       ├── pages/       # Page-level components
│       ├── services/    # Axios API service calls
│       ├── utils/       # Helpers & constants
│       ├── App.js
│       └── index.js
├── .env                 # Environment variables
└── render.yaml          # Render deployment config
```

---

## 🧪 Test Credentials

Seed the database first:
```bash
cd backend && npm run seed
```

| Role | Email | Password |
|---|---|---|
| Admin | admin@example.com | admin123 |
| Mentor | mentor@example.com | mentor123 |
| Student | student@example.com | student123 |

---

## 🚀 Deployment

### Backend — Render
```bash
# render.yaml is already configured.
# Connect your GitHub repo to Render and set environment variables in the dashboard.
```

### Frontend — Vercel
```bash
cd frontend
npm run build
vercel --prod
```

> Ensure `REACT_APP_API_URL` and `REACT_APP_SOCKET_URL` point to your live backend URL.

---

## 🔧 Troubleshooting

| Issue | Solution |
|---|---|
| MongoDB connection error | Check `MONGODB_URI` in `.env`; whitelist your IP in Atlas |
| Port already in use | Change `PORT` in `.env` or run `PORT=3001 npm start` for frontend |
| CORS error | Ensure `FRONTEND_URL` in backend `.env` matches exact frontend origin |
| Socket.io not connecting | Verify backend is running and `REACT_APP_SOCKET_URL` is correct |

---

## 🛡 Security

- Passwords hashed with **bcryptjs** (salt rounds: 10)
- Stateless auth via **JWT** (expiry configurable)
- Role-based middleware on all sensitive routes
- Input validation with **express-validator**
- CORS restricted to configured frontend origin
- Secure file upload filtering via **Multer**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push and open a Pull Request

---

<div align="center">

Made with ❤️ by **BYTEZEN-11**

⭐ Star this repo if you found it helpful!

</div>
