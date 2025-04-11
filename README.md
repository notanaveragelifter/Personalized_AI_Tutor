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

⚙️ Installation & Setup
🐍 Backend (FastAPI)
bash
Copy
Edit
cd app
python3 -m venv venv
source venv/bin/activate
pip install -r ../requirements.txt
uvicorn main:app --reload
The backend server will start at http://localhost:8000

🌐 Frontend (React)
bash
Copy
Edit
cd my-app
npm install
npm start
The frontend will run at http://localhost:3000

Make sure both servers are running in parallel for full functionality. The frontend communicates with the backend via HTTP requests to generate videos.

📡 API Documentation
Endpoint: POST /generate-video/
Request JSON:

json
Copy
Edit
{
  "avatar_id": "avatar123",
  "title": "Keep Going!",
  "name": "Ajeet",
  "progress": 78,
  "deadline": "2025-04-30",
  "token": "your_gan_api_token"
}
Success Response:

json
Copy
Edit
{
  "message": "Video generation started!",
  "inference_id": "abc123xyz",
  "status": "in_progress",
  "check_status_url": "https://dashboard.gan.ai/video/abc123xyz"
}

🔧 Tech Stack
Layer	Tech Used
Frontend	React, HTML/CSS
Backend	FastAPI, Python
Deployment	Localhost / Gan.ai
API	Gan.ai Video API
State Mgmt	React useState
🛠 Sample Code
🔁 React Form Submission
jsx
Copy
Edit
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await axios.post('http://localhost:8000/generate-video/', {
    avatar_id: "avatar123",
    title: "Great job!",
    name: "Student Name",
    progress: 85,
    deadline: "2025-04-30",
    token: process.env.REACT_APP_GAN_API_TOKEN
  });
  console.log(response.data);
};
🔗 FastAPI Endpoint
python
Copy
Edit
@app.post("/generate-video/")
def generate_video(data: VideoRequest):
    headers = {"Authorization": f"Bearer {GAN_API_TOKEN}"}
    payload = data.dict(exclude={"token"})
    response = requests.post("https://api.gan.ai/video", json=payload, headers=headers)
    return response.json()
🗂 YAML Reference (for documentation)
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
    - python-dotenv
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
📧 Email delivery of videos

📲 WhatsApp/SMS notifications when videos are ready

📊 Admin dashboard for tutors to monitor student progress

🧠 More avatars and tone customization options

🔐 OAuth login for students

🙌 Contribution
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📜 License
MIT © 2025 — Built with ❤️ by Ajeet Singh

yaml
Copy
Edit

---

Let me know if you want this customized for **deployment on Vercel/Render**, **Dockerized**, or **with

