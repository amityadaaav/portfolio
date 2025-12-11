export function getBotReply(message) {
  message = message.toLowerCase();

  if (message.includes("react")) return "React is a JavaScript library for building UI!";
  if (message.includes("portfolio")) return "Want to see projects? I can guide you.";
  if (message.includes("skills")) return "Amit is skilled in React, MERN, and AI.";

  return "I am still learning 😊 Ask me something else!";
}
