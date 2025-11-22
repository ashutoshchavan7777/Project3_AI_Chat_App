// === Grab elements ===
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatWindow = document.getElementById("chat-window");
const typingEl = document.getElementById("typing");

// === Sounds (make sure files exist in /static) ===
const sendSound = new Audio("/static/send2.mp3");     // short beep for send
sendSound.volume = 1.0;

const replyVoice = new Audio("/static/reply.mp3");   // Jarvis human voice
replyVoice.volume = 1.0;

// === Timing controls ===
const THINK_TIME = 1300;        // how long Jarvis "thinks" (typing...)
const REPLY_VOICE_DELAY = 450;  // delay between Jarvis bubble and voice start

// ===========================
//  Add message bubble
// ===========================
function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);

    // Label
    const label = document.createElement("span");
    label.classList.add("label");
    label.textContent = sender === "you" ? "You" : "Jarvis";

    // Text body
    const body = document.createElement("div");
    body.textContent = text;

    msg.appendChild(label);
    msg.appendChild(body);

    // Insert BEFORE typing indicator so typing stays at bottom
    if (typingEl && typingEl.parentNode === chatWindow) {
        chatWindow.insertBefore(msg, typingEl);
    } else {
        chatWindow.appendChild(msg);
    }

    // Scroll to bottom
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// ===========================
//  Handle send event
// ===========================
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    // 1) Instant beep when user sends
    try {
        sendSound.currentTime = 0;
        sendSound.play().catch(() => {});
    } catch (_) {}

    // 2) Add your message bubble
    addMessage(text, "you");

    // 3) Clear input
    input.value = "";
    input.focus();

    // 4) Show typing indicator
    if (typingEl) {
        typingEl.classList.remove("hidden");
    }

    // 5) Artificial thinking delay
    await new Promise((resolve) => setTimeout(resolve, THINK_TIME));

    // 6) Get reply from backend
    let replyText = "";
    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: text }),
        });

        const data = await response.json();
        replyText = data.reply || "I received your message.";
    } catch (err) {
        console.error(err);
        replyText = "Sorry, something went wrong talking to the server.";
    }

    // 7) Hide typing
    if (typingEl) {
        typingEl.classList.add("hidden");
    }

    // 8) Add Jarvis bubble
    addMessage("Jarvis: " + replyText, "jarvis");

    // 9) After small delay, play Jarvis voice
    setTimeout(() => {
        try {
            replyVoice.currentTime = 0;
            replyVoice.play().catch(() => {});
        } catch (err) {
            console.error("Error playing reply voice:", err);
        }
    }, REPLY_VOICE_DELAY);
});