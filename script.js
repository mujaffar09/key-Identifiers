let eventKey = document.querySelector(".event-key");
let eventKeyCode = document.querySelector(".event-key-code");
let eventCode = document.querySelector(".event-code");

document.addEventListener("keydown", (event) => {
  eventKey.innerText = event.key;
  eventKeyCode.innerText = event.which;
  eventCode.innerText = event.code;
});
