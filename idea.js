const ART_SELECTOR = '.linos';
const BUTTON_SELECTOR = '[data-window]';
const OPEN_CLASS = 'is-open';
const LABEL_OPEN = 'Otvoriť okienko';
const LABEL_CLOSE = 'Zavrieť okienko';

const art = document.querySelector(ART_SELECTOR);
const button = document.querySelector(BUTTON_SELECTOR);

button.addEventListener('click', () => {
  const open = art.classList.toggle(OPEN_CLASS);
  button.setAttribute('aria-pressed', String(open));
  button.textContent = open ? LABEL_CLOSE : LABEL_OPEN;
});
