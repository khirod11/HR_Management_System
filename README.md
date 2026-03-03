# 🏢 HR Management System (HRMS)

A full-stack HR Management System where HR can manage employee registration and track attendance.

The project is built using:

* 🔹 Backend: Django (Python)
* 🔹 Database: PostgreSQL (Production) / MySQL (Local)
* 🔹 Frontend: HTML/CSS/JavaScript
* 🔹 Deployment:

  * Backend hosted on Render
  * Frontend hosted on Netlify

---

## 🚀 Live Demo

Production Deploy: https://hrmsyst.netlify.app/
---

## 📁 Project Structure

HR_Management_System/
│
├── hrms_backend/        # Django backend APIs
├── hrms_frontend/       # Frontend UI files
├── venv/                # Virtual environment (not pushed to GitHub)
└── README.md

---

## 🔧 Backend Setup (Local Development)

### 1️⃣ Clone the repository

git clone https://github.com/your-username/HR_Management_System.git
cd HR_Management_System

### 2️⃣ Create virtual environment

python -m venv venv

Activate environment:

venv\Scripts\activate

### 3️⃣ Install dependencies

pip install -r requirements.txt

### 4️⃣ Configure Database

Update settings.py with your local database credentials.

### 5️⃣ Run migrations

python manage.py migrate

### 6️⃣ Create Superuser

python manage.py createsuperuser

### 7️⃣ Run server

python manage.py runserver

Backend runs on:
http://127.0.0.1:8000/

---

## 🌍 Production Deployment

### 🔹 Backend Deployment (Render)

* Connected GitHub repository to Render
* Configured environment variables:

  * SECRET_KEY
  * DEBUG=False
  * DATABASE_URL (External PostgreSQL)
* Start Command used:

python manage.py migrate && python manage.py createsuperuser --noinput || true && gunicorn hrms_backend.wsgi:application --bind 0.0.0.0:$PORT

---

### 🔹 Frontend Deployment (Netlify)

* Base directory: hrms_frontend
* Build command: npm install && npm run build
* Publish directory: build

---

## 🔐 Admin Panel

Access Django admin panel at:

/admin/

Use superuser credentials created during deployment.

---

## ✨ Features

✔ Employee Registration
✔ Attendance Management
✔ Admin Panel for HR
✔ REST APIs
✔ Production Deployment

---

## 🛠 Tech Stack

Backend:

* Python
* Django
* Gunicorn
* PostgreSQL

Frontend:

* HTML
* CSS
* JavaScript

Hosting:

* Render
* Netlify

---

## 👨‍💻 Author

Developed by: Khirod Chandra Nayak

---


