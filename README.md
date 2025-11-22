🚀 AI Chat App – Jarvis Style

A Futuristic AI Chat Application built with FastAPI + Vanilla JavaScript

    


---

🎯 Overview

This project is a Jarvis-styled AI Chat App featuring:

FastAPI backend

Futuristic UI

Smooth animations

Typing indicator

Send & reply sound effects

AI voice responses

Fully responsive layout


Designed as a portfolio project to showcase backend + frontend + UI creativity.


---

🖼️ Screenshots

🧠 Main Interface

> (Add your screenshot here)



Drag and drop your screenshot here after uploading to GitHub.

✨ Typing Animation

> (Add screenshot here)



🔊 AI Voice Reply

> (Add screenshot here)




---

✨ Features

🔹 Backend (FastAPI)

/chat endpoint

JSON request/response

Easy to extend with any LLM

Production-ready structure


🔹 Frontend (HTML + CSS + Vanilla JS)

Clean Jarvis-theme UI

Send message sound (send.mp3)

AI reply voice (reply.mp3)

Typing indicator with 3 glowing dots

Auto-scroll chat area

Responsive on laptop & mobile


🔹 Audio System

File	Purpose

send.mp3	WhatsApp-style send sound
reply.mp3	Jarvis-style AI voice



---

📁 Project Structure

Project3_AI_Chat_App/
│── main.py
│── requirements.txt
│── README.md
│
├── static/
│    ├── index.html
│    ├── style.css
│    ├── script.js
│    ├── reply.mp3
│    ├── send.mp3
│    ├── favicon.ico
│    ├── favicon-32x32.png
│    └── favicon-16x16.png
│
└── venv/


---

⚙️ Installation

1️⃣ Clone this repository

git clone https://github.com/yourusername/Project3_AI_Chat_App.git
cd Project3_AI_Chat_App

2️⃣ Install dependencies

pip install -r requirements.txt

3️⃣ Run the backend

uvicorn main:app --reload

4️⃣ Open in browser

http://127.0.0.1:8000


---

🔌 API Endpoint

POST /chat

Request:

{
  "message": "Hello"
}

Response:

{
  "reply": "Hi! Jarvis here. I received your message."
}


---

🌐 Technologies Used

Python

FastAPI

Uvicorn

JavaScript (ES6)

HTML5

CSS3



---

🔮 Future Upgrades

Dark/Light Theme

Multiple AI Voices

Chat history storage

Login system

Cloud deployment (Render / Railway)



---

🙌 Author

Ashutosh Chavan
📌 LinkedIn: www.linkedin.com/in/ashutosh-chavan-2a987a165
📌 GitHub Profile: https://github.com/ashutoshchavan7777


---

📜 License

This project is free to use for learning and portfolio purposes.


---