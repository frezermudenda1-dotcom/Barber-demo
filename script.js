/ ===============================
// BARBER WEBSITE SCRIPT.JS
// WhatsApp + Booking + UI Effects
// ===============================


// 1. WHATSAPP BOOKING BUTTON
function openWhatsApp() {
  const phone = "260772503680"; // 👉 replace with barber's number
  const message = "Hello, I want to book a haircut appointment.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}


// 2. BOOKING FORM HANDLER
function submitBooking(event) {
  event.preventDefault();

  const name = document.getElementById("name")?.value;
  const phone = document.getElementById("phone")?.value;
  const time = document.getElementById("time")?.value;

  if (!name || !phone || !time) {
    alert("Please fill in all fields.");
    return;
  }

  // Message sent to WhatsApp
  const whatsappMessage =
    `Hello, I want to book an appointment.%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Preferred Time: ${time}`;

  const barberNumber = "260772503680"; // change this too
  const url = `https://wa.me/${barberNumber}?text=${whatsappMessage}`;

  window.open(url, "_blank");
}


// 3. SMOOTH SCROLL NAVIGATION
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// 4. FLOATING WHATSAPP BUTTON (AUTO CREATE)
window.addEventListener("load", function () {
  const btn = document.createElement("a");

  btn.href = "https://wa.me/260772503680"; // change number
  btn.target = "_blank";
  btn.innerText = "💬 WhatsApp";

  // Styling (premium look)
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.backgroundColor = "#25D366";
  btn.style.color = "white";
  btn.style.padding = "14px 18px";
  btn.style.borderRadius = "50px";
  btn.style.fontSize = "14px";
  btn.style.fontWeight = "bold";
  btn.style.textDecoration = "none";
  btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  btn.style.zIndex = "9999";

  document.body.appendChild(btn);
});


// 5. SIMPLE SCROLL ANIMATION (fade in effect)
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fade");

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "0.6s ease";
    }
  });
});


// 6. INITIAL FADE SETUP (run on load)
window.addEventListener("load", function () {
  const elements = document.querySelectorAll(".fade");

  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
  });
});
