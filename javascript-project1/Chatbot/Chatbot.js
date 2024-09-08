// Define a function to handle sending messages
function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (!userInput) return;

  // Display the user's message
  displayMessage(userInput, "user-message");

  // Process the message and generate a response
  const botResponse = generateResponse(userInput);

  // Display the bot's response
  displayMessage(botResponse, "bot-message");

  // Clear the input field
  document.getElementById("user-input").value = "";
}

// Function to display messages in the chatbox
function displayMessage(message, className) {
  const chatbox = document.getElementById("chatbox");
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.className = `message ${className}`;
  chatbox.appendChild(messageElement);

  // Scroll to the bottom of the chatbox
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to generate a bot response based on user input
function generateResponse(input) {
  // Simple predefined responses
  const responses = {
    hello: "Hi there!",
    "how are you?": "I am a bot, but I am doing great!",
    bye: "Goodbye!",
  };

  // Normalize input and find response
  const normalizedInput = input.toLowerCase().trim();
  return responses[normalizedInput] || "Sorry, I don't understand that.";
}
