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

⚙️ Backend Setup (FastAPI)
🔧 Installation
Create and activate a virtual environment:

bash

python -m venv venv
source venv/bin/activate      # Use `venv\Scripts\activate` on Windows
Install backend dependencies: Create a requirements.txt file with the following content:

txt

fastapi
uvicorn
pydantic
requests
python-dotenv
Then install them using pip:

bash

pip install -r requirements.txt
▶️ Run the Backend
Navigate into the app directory and start the server:

bash

cd app
uvicorn main:app --reload
Local API Server: http://127.0.0.1:8000

Swagger API Docs: http://127.0.0.1:8000/docs

🌐 Frontend Setup (React)
📦 Installation
Go into the frontend directory:

bash

cd my-app
Install frontend dependencies:

bash

npm install
Start the development server:

bash

npm run dev     # or use `npm start` for Create React App
Local Frontend: http://localhost:3000

📡 API Overview
🔁 Generate Video – POST /generate-video/
Sends student progress data to Gan.ai to initiate personalized video generation.

📨 Request Body (JSON)
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
  "raw_response": { ... }
}
📺 Video Playback
Log into your Gan.ai Dashboard to view, download, or share the generated videos.

✨ Key Features
📽 AI Video Generation
Personalized motivational videos based on student progress.

Avatar-based engagement using Gan.ai.

🎯 React Frontend
Animated progress visualization.

Real-time form validation.

Weekly update tracker UI.

Sends form data to the backend API.

🚀 FastAPI Backend
Handles secure POST requests.

Integrates with Gan.ai for video generation.

Returns video inference ID and status.

📄 .env File (Example)
Place in the root of your backend project.

env
Copy
Edit
GAN_API_TOKEN=your_gan_api_token
🔒 Note: Keep this file private. Add .env to .gitignore.
