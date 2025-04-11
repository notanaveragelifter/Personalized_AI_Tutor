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


yaml
Copy
Edit

---
## ⚙️ Backend Setup (FastAPI)

### 🔧 Installation

Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate        # For Windows: venv\Scripts\activate
Create a requirements.txt file:

txt
Copy
Edit
fastapi
uvicorn
pydantic
requests
python-dotenv
Install dependencies:

bash
Copy
Edit
pip install -r requirements.txt
▶️ Run the Backend
Start the backend server:

bash
Copy
Edit
cd app
uvicorn main:app --reload
API is now available at:

Local API Server: http://127.0.0.1:8000

Swagger Docs: http://127.0.0.1:8000/docs

🌐 Frontend Setup (React)
📦 Installation
Navigate to the React app folder:

bash
Copy
Edit
cd my-app
Install frontend dependencies:

bash
Copy
Edit
npm install
Start the frontend development server:

bash
Copy
Edit
npm run dev       # or use `npm start` for Create React App
Frontend is now available at:

http://localhost:3000

📡 API: Generate Video (POST /generate-video/)
Sends student progress data to Gan.ai to generate a personalized video.

📨 Request Body
json
Copy
Edit
{
  "avatar_id": "8c134b8e-eba2-48e7-a648-8bf4458a517d",
  "title": "Week 5 Update",
  "name": "Sarla",
  "progress": 67,
  "deadline": "Friday",
  "token": "static_token"
}
✅ Sample Response
json
Copy
Edit
{
  "message": "Video generation started",
  "inference_id": "abc123xyz",
  "status": "processing",
  "check_status_url": "/check-status/abc123xyz",
  "raw_response": {
    "details": "..."
  }
}
📺 Video Playback
Log into your Gan.ai dashboard to view, download, or share the generated videos.

✨ Key Features
📽 AI Video Generation
Personalized motivational videos

Avatar-based engagement using Gan.ai

🎯 React Frontend
Animated progress circle

Real-time form validation

Weekly status update UI

Sends student data to backend API

🚀 FastAPI Backend
Handles secure POST requests

Communicates with Gan.ai API


