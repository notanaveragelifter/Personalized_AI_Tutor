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


## ✨ Key Features

### 📽 AI Video Generation
- Personalized motivational videos for each student
- Avatar-driven engagement using **Gan.ai**

### 🎯 React Frontend
- Animated progress circle
- Real-time form validation
- Weekly deadline tracker
- Sends student data to backend

### 🚀 FastAPI Backend
- Handles secure POST requests
- Communicates with Gan.ai's API
- Returns video status and check link

---

## 🚀 Conclusion

**Personalized AI Tutor** is more than just a tech project — it’s a vision for the future of education. By combining the emotional impact of personalized videos with the power of AI avatars, this platform aims to **revolutionize how students stay motivated, track progress, and receive encouragement**.

This solution is designed to scale — empowering educators, coaching institutes, and edtech platforms to **automate personalized engagement at scale**. With seamless React-FastAPI integration and cutting-edge AI via Gan.ai, we believe this project is a glimpse into the future of **AI-powered learning support**.

> _"Students don't just need data. They need encouragement, motivation, and a voice that tells them they're doing great. We’re building that voice."_  

---

## 🌟 Why This Could Be the Next Big Thing

- 📈 **Mass personalization** — no more generic encouragement. Every student gets their own avatar message.
- 🧠 **AI meets empathy** — we bridge the gap between automation and human connection.
- 🔁 **Scalable impact** — ideal for edtech startups, tutoring platforms, and online universities.
- 🧰 **Plug-and-play** — easily integrate with LMS or student progress tracking tools.
- 💬 **Multichannel ready** — future support for email, WhatsApp, and SMS distribution.
- 🪄 **Customizable avatars & tone** — adaptable for age, region, language, or sentiment.

---

> This is not just a tutor. This is your personalized AI coach, motivator, and cheerleader — built for the future of education.






