// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { timerRefs } from './refs.js/timerRefs';
import { addDisabled } from './hellpers.js/addDisabled';
import { removeDisabled } from './hellpers.js/removeDisabled';
import { convertMs } from './hellpers.js/convertMs';

let userSelectedDate = null;
let a = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    userSelectedDate = selectedDates[0];

    if (userSelectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        position: 'topCenter',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      addDisabled(timerRefs);
    } else {
      removeDisabled(timerRefs);
    }
    const id = setInterval(() => {
      console.log(convertMs(userSelectedDate - new Date()));
    }, 1000);
  },
};

flatpickr(timerRefs.inputEl, options);
