from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import time
import logging
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Retrieve the API key from the environment variable
GANAI_API_KEY = os.getenv("GANAI_API_KEY")

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins; 
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# Static Token for Authentication
SECRET_TOKEN = "static_token"  

GANAI_BASE_URL = "https://os.gan.ai/v1"

@app.get("/")
async def root():
    return {
        "message": "Welcome to Gan.ai Video Generator API"
    }

class VideoRequest(BaseModel):
    avatar_id: str
    title: str 
    name: str
    progress: int
    deadline: str
    audio_url: str = None
    token: str  

def poll_video_status(inference_id: str, max_attempts: int = 30, delay: int = 5):
    for attempt in range(max_attempts):
        url = f"{GANAI_BASE_URL}/avatars/inference/{inference_id}"
        headers = {
            "ganos-api-key": GANAI_API_KEY,
            "accept": "application/json"
        }

        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            return None

        data = response.json()
        if data.get("status") == "completed" and data.get("video"):
            return data

        time.sleep(delay)
    return None

@app.post("/generate-video/")
async def generate_video(request: VideoRequest, background_tasks: BackgroundTasks):
    # Check for valid token
    if request.token != SECRET_TOKEN:
        raise HTTPException(status_code=403, detail="Unauthorized: Invalid token.")

    logger.info(f"Starting video generation for avatar_id: {request.avatar_id}")

    # Create custom message
    message = f"Hey {request.name}, you're making fantastic progress—{request.progress}% of the course is already behind you! With the deadline coming up on {request.deadline}, now’s the perfect time to keep that momentum going. I’m really proud of your dedication—just a little more to go. You’ve absolutely got this!"
    payload = {
        "avatar_id": request.avatar_id,
        "title": request.title,
        "text": message
    }

    if request.audio_url:
        payload["audio_url"] = request.audio_url

    headers = {
        "ganos-api-key": GANAI_API_KEY,
        "Content-Type": "application/json"
    }

    try:
        url = f"{GANAI_BASE_URL}/avatars/create_video"
        logger.info(f"Making request to: {url}")
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()

        data = response.json()
        logger.info(f"Received response: {data}")

        inference_id = data.get("inference_id")
        if not inference_id:
            raise HTTPException(status_code=500, detail="No inference ID received from API")

        background_tasks.add_task(poll_video_status, inference_id)

        return {
            "message": "Video generation started",
            "inference_id": inference_id,
            "status": "processing",
            "check_status_url": f"/check-status/{inference_id}",
            "raw_response": data
        }
    except requests.exceptions.HTTPError as e:
        logger.error(f"HTTP Error: {str(e)}")
        if e.response.status_code == 404:
            raise HTTPException(status_code=404, detail="API endpoint not found. Please check the API URL.")
        elif e.response.status_code == 401:
            raise HTTPException(status_code=401, detail="Invalid API key. Please check your GANAI_API_KEY.")
        else:
            raise HTTPException(status_code=e.response.status_code, detail=str(e))
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
