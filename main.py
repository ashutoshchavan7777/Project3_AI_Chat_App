from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def root():
    return FileResponse("static/index.html")

@app.post("/chat")
async def chat(req: ChatRequest):
    msg = req.message.strip()
    reply = f"Jarvis: I received your message → {msg}"
    return {"reply": reply}
