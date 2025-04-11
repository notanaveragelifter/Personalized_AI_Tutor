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

Personalized_AI_Tutor/ ├── app/ # FastAPI backend │ ├── main.py │ └── video_generator.py ├── my-app/ # React frontend │ ├── public/ │ └── src/ │ ├── App.js │ └── components/ ├── venv/ # Python virtual environment ├── .env # API tokens and secrets (not shared) ├── .gitignore ├── requirements.txt # Backend Python dependencies └── README.md

yaml
Copy
Edit

---

## ⚙️ Backend Setup (FastAPI)

### 🔧 Installation

```bash
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate      # or venv\Scripts\activate on Windows

# Install backend dependencies
pip install -r requirements.txt
requirements.txt
txt
Copy
Edit
fastapi
uvicorn
pydantic
requests
python-dotenv
▶️ Run Backend
bash
Copy
Edit
cd app
uvicorn main:app --reload
Local server: http://127.0.0.1:8000

Swagger API docs: http://127.0.0.1:8000/docs

🌐 Frontend Setup (React)
bash
Copy
Edit
cd my-app
npm install
npm run dev     # or npm start if using Create React App
Local frontend: http://localhost:3000

📡 API: Generate Video (POST /generate-video/)
Sends student data to Gan.ai and initiates video generation.

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
✅ Response
json
Copy
Edit
{
  "message": "Video generation started",
  "inference_id": "abc123xyz",
  "status": "processing",
  "check_status_url": "/check-status/abc123xyz",
  "raw_response": { ... }
}
📺 Video Playback:
Log into your Gan.ai dashboard to view, download, or share generated videos.

✨ Key Features
📽 AI Video Generation
Personalized motivational videos for each student

Avatar-driven engagement using Gan.ai

🎯 React Frontend
Animated progress circle

Real-time validation

Weekly status tracker

Sends student data to backend

🚀 FastAPI Backend
Handles secure POST requests

Communicates with Gan.ai

Returns video generation status and ID

📄 .env File (Example)
env
Copy
Edit
GAN_API_TOKEN=your_gan_api_token
🔒 Keep this file private. Add .env to .gitignore.

🛠 YAML Summary (for docs)
yaml
Copy
Edit
project: Personalized AI Tutor
frontend:
  tech: React
  features:
    - Form UI for progress
    - Progress circle
    - Deadline tracker
    - POST request to backend
backend:
  tech: FastAPI
  dependencies:
    - fastapi
    - uvicorn
    - requests
    - pydantic
    - dotenv
api:
  POST /generate-video/:
    request:
      avatar_id: string
      title: string
      name: string
      progress: int
      deadline: string
      token: string
    response:
      message: string
      inference_id: string
      status: string
      check_status_url: string
🔮 Future Enhancements
📧 Email video delivery with congratulatory messages

📲 SMS/WhatsApp alerts when videos are ready

📊 Admin dashboard for tutors

🧠 More avatars and tone customization

🔐 OAuth login system for students
