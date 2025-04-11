# 🎓 Personalized AI Tutor — EdTech Platform with AI Avatars

A full-stack AI-powered EdTech platform that generates **personalized motivational videos** using AI avatars based on student progress and deadlines. Built with **FastAPI** (backend) and **React** (frontend), with seamless integration to [Gan.ai](https://gan.ai) for video generation.

---

## 🧠 What It Does

- Students interact with a friendly React UI to submit weekly goals.
- Progress data is sent to the FastAPI backend.
- The backend uses Gan.ai to generate a **motivational video** using a selected avatar.
- Students receive timely encouragement and track their weekly academic momentum.

---

## 📁 Project Structure

```
Personalized_AI_Tutor/
├── app/                     # ⚙️ FastAPI backend
│   └── main.py              # Entry point for backend and video generation logic
│
├── my-app/                  # 🌐 React frontend
│   ├── public/              # Static assets (favicon, index.html, etc.)
│   └── src/                 # Frontend source code
│       ├── App.js           # Main React component
│       └── components/      # Reusable UI components
│
├── venv/                    # 🐍 Python virtual environment (not pushed to Git)
├── .env                     # 🔐 API tokens and secrets (excluded via .gitignore)
├── .gitignore               # 🚫 Ignore rules for Git
├── requirements.txt         # 📦 Backend Python dependencies
└── README.md                # 📖 Project documentation
```

---

## ✨ Features

### 📽 AI Video Generation (Backend)
- Generates personalized motivational videos using [Gan.ai](https://gan.ai)
- Accepts student data and video details via POST requests
- Returns unique `inference_id` for tracking video generation

### 🌐 React Frontend
- Clean UI with form to collect student progress
- Animated progress indicator
- Real-time validation and submission
- Interacts with backend via REST API

### 🔒 Security
- API tokens managed securely via `.env` files
- `.env` excluded from version control using `.gitignore`

---


