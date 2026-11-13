export function setupNav() {
  const button = document.querySelector('.navbar-icon-button');
  const menu = document.querySelector('.w-nav-menu');
  if (!button || !menu) return;
  const setOpen = (open) => {
    menu.classList.toggle('is-visible', open);
    menu.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
  };
  const toggle = () => setOpen(button.getAttribute('aria-expanded') !== 'true');
  const escape = (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  };
  button.addEventListener('click', toggle);
  document.addEventListener('keydown', escape);
  return () => { button.removeEventListener('click', toggle); document.removeEventListener('keydown', escape); };
}
