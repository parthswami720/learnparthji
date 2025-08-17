const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatMessages = document.getElementById("chat-messages");

// Function to add message to chat
function addMessage(content, className) {
    const div = document.createElement("div");
    div.className = className;
    div.innerHTML = `<p>${content}</p>`;
    chatMessages.appendChild(div);
    // Scroll to bottom automatically
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to send user message
function sendMessage() {
    const msg = input.value.trim();
    if (!msg) return;

    // Add user message
    addMessage(msg, "message-sent");
    input.value = "";

    // Simulate a reply after 1 second
    setTimeout(() => {
        addMessage("This is a reply: " + msg, "message-received");
    }, 1000);
}

// Click send button
sendBtn.addEventListener("click", sendMessage);

// Press Enter key to send
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
});
