const form = document.querySelector('.about-us__form');
const input = document.querySelector('.about-us__form_input');

function createError() {
  const errrorMessage = document.createElement('small');
  errrorMessage.classList.add('input-error-message');
  errrorMessage.textContent = 'Недопустимый формат';

  return errrorMessage;
}

input.addEventListener('input', () => {
  input.classList.remove('input-error-border');
  input.previousElementSibling
    ? input.previousElementSibling.remove()
    : null;
})

form.addEventListener('submit', ev => {
  ev.preventDefault();

  if (!input.value) {
    input.classList.add('input-error-border');
    !input.previousElementSibling
      ? input.insertAdjacentElement('beforebegin', createError())
      : null;
    return;
  }
});
