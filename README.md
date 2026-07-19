# Modern Form

A modern full-stack form application built with **Angular**, **NestJS**, and **MongoDB Atlas**. The application allows users to submit form data through a responsive Angular frontend, which is processed by a NestJS REST API and stored securely in MongoDB.

---

## 🚀 Tech Stack

### Frontend

* Angular 18
* TypeScript
* Bootstrap 5
* RxJS

### Backend

* NestJS
* TypeScript
* Mongoose
* REST API

### Database

* MongoDB Atlas

---

# 📁 Project Structure

```text
Modern-Form/
├── form-fe/          # Angular Frontend
└── form-be/          # NestJS Backend
```

---

# ✨ Features

* Modern responsive UI
* Form validation
* REST API integration
* MongoDB Atlas database
* Secure environment variables
* Cross-Origin Resource Sharing (CORS) support
* Clean and scalable project structure

---

# 📦 Installation

## 1. Clone the repository

```bash
git clone https://github.com/<your-username>/Modern-Form.git
cd Modern-Form
```

---

## 2. Install Frontend Dependencies

```bash
cd form-fe
npm install
```

Run the Angular application:

```bash
ng serve
```

Frontend runs on:

```
http://localhost:4200
```

---

## 3. Install Backend Dependencies

```bash
cd ../form-be
npm install
```

Create a `.env` file inside the **form-be** folder.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

Run the NestJS server:

```bash
npm run start:dev
```

Backend runs on:

```
http://localhost:3000
```

---

# 🔗 API Endpoint

| Method | Endpoint | Description                 |
| ------ | -------- | --------------------------- |
| POST   | `/user`  | Submit form data            |
| GET    | `/user`  | Fetch all submitted records |

---

# 🗄 Database

This project uses **MongoDB Atlas** with **Mongoose** for storing user information.

Example fields:

* Full Name
* Phone Number
* Favorite Player
* Instagram Username
* Screen Time

---

# 🌐 Environment Variables

Backend (`form-be/.env`)

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

Never commit your `.env` file to GitHub.

---

# ▶️ Available Commands

### Angular

```bash
npm start
ng serve
ng build
```

### NestJS

```bash
npm run start:dev
npm run build
npm run start:prod
```

---

# 🚀 Deployment

### Frontend

* Vercel

Root Directory:

```
form-fe
```

### Backend

* Render

Root Directory:

```
form-be
```

Add the required environment variables in the Render dashboard before deployment.

---

# 👨‍💻 Author

**Ankush Jha**

Built with ❤️ using Angular, NestJS, and MongoDB.
