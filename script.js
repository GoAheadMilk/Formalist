// Small enhancements
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const btn = document.getElementById('hello-btn');
const msg = document.getElementById('hello-msg');
if (btn && msg) {
  btn.addEventListener('click', () => {
    msg.classList.remove('visually-hidden');
    msg.textContent = 'Hello there! 👋';
    btn.setAttribute('aria-expanded', 'true');
  });
}
