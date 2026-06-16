const toggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");

toggle.addEventListener("click", () => {
    if(chatBox.style.display === "block"){
        chatBox.style.display = "none";
    } else {
        chatBox.style.display = "block";
    }
});
