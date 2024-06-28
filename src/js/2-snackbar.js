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
          title: 'OK',
          position: 'topCenter',
          message: `✅ Fulfilled promise in ${delayValue}ms`,
          backgroundColor: '#59A10D',
          titleColor: 'white',
          messageColor: 'white',
          progressBarColor: '#326101',
          titleSize: '16px',
          iconColor: '#fff',
        });
      })
      .catch(delayValue => {
        iziToast.error({
          title: 'Error',
          position: 'topCenter',
          message: `❌ Rejected promise in ${delayValue}ms`,
          titleColor: 'white',
          messageColor: 'white',
          backgroundColor: '#ef4040',
          progressBarColor: '#b51b1b',
          titleSize: '16px',
          iconColor: '#fff',
        });
      });
  }, delayValue);
}
