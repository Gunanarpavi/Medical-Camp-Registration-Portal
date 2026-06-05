function toggleChat() {
  const chatbotBox = document.getElementById("chatbotBox");
  chatbotBox.style.display = chatbotBox.style.display === "block" ? "none" : "block";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("chatMessages");
  const userText = input.value.trim();

  if (userText === "") {
    return;
  }

  messages.innerHTML += `<p class="user-message">${userText}</p>`;

  let reply = "Sorry, I did not understand. Please ask about camps, registration, contact, date, location, fee, or admin view.";

  const question = userText.toLowerCase();

  if (question.includes("register")) {
    reply = "To register, open the Registration page and fill in your name, age, contact number, and selected camp.";
  } else if (
    question.includes("date") ||
    question.includes("when") ||
    question.includes("day") ||
    question.includes("schedule")
  ) {
    reply = "Upcoming camp dates are listed on the Camp Details page. General Health Checkup is on 15 June 2026, Eye and Dental Care Camp is on 22 June 2026, Blood Donation Camp is on 30 June 2026, and Women Health Awareness Camp is on 6 July 2026.";
  } else if (
    question.includes("location") ||
    question.includes("place") ||
    question.includes("where") ||
    question.includes("address")
  ) {
    reply = "Camp locations are listed on the Camp Details page. Locations include Community Health Center, City Public School Hall, Town Hall, and Primary Health Centre.";
  } else if (
    question.includes("cost") ||
    question.includes("pay") ||
    question.includes("payment") ||
    question.includes("fee") ||
    question.includes("fees") ||
    question.includes("free")
  ) {
    reply = "The medical camp registration is free. You do not need to pay any cost or fee to attend the camp.";
  } else if (question.includes("contact") || question.includes("phone") || question.includes("email")) {
    reply = "You can contact the organizer through the Contact page. Phone, landline, and email details are provided there.";
  } else if (question.includes("admin")) {
    reply = "The Admin View page shows all registered participants stored in the browser.";
  } else if (question.includes("gallery") || question.includes("photo") || question.includes("image")) {
    reply = "You can view medical camp photos on the Gallery page.";
  } else if (question.includes("camp")) {
    reply = "You can view available and upcoming medical camps on the Camp Details page.";
  } else if (question.includes("hello") || question.includes("hi")) {
    reply = "Hello! How can I help you with the Medical Camp Registration Portal?";
  }

  messages.innerHTML += `<p class="bot-message">${reply}</p>`;
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}