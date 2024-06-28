// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const snackbarRefs = {
  form: document.querySelector('.form'),
  inputEl: document.querySelector('[type="number"]'),
  button: document.querySelector('[type="submit"]'),
};

snackbarRefs.form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
  event.preventDefault();
  const currentValue = event.currentTarget;

  const delayValue = currentValue[0].value;

  createPromise(delayValue)
    .then(value => console.log(value))
    .catch(error => console.log(error));
}

function createPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ligth = false;
      if (ligth) {
        resolve(`'hello REsolVE'${delay}`);
      } else {
        reject(`'_______${delay}________________________reject'`);
      }
    }, delay);
  });
}
