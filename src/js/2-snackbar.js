// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
  event.preventDefault();

  const delayValue = document.querySelector('[name="delay"]').value;
  const checkboxValue = document.querySelector('[name="state"]:checked').value;

  const createPromise = setTimeout(() => {
    const snackbarPromise = new Promise((resolve, reject) => {
      if (checkboxValue === 'fulfilled') {
        resolve(delayValue);
      } else {
        reject(delayValue);
      }
    });

    snackbarPromise
      .then(delayValue => {
        iziToast.success({
          position: 'topCenter',
          message: `✅ Fulfilled promise in ${delayValue}ms`,
        });
      })
      .catch(delayValue => {
        iziToast.error({
          position: 'topCenter',
          message: `❌ Rejected promise in ${delayValue}ms`,
        });
      });
  }, delayValue);
}
