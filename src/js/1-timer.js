// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { timerRefs } from './timer-refs.js/timerRefs';
import { addDisabled } from './timer-hellpers.js/addDisabled';
import { removeDisabled } from './timer-hellpers.js/removeDisabled';
import { convertMs } from './timer-hellpers.js/convertMs';
import { setTheTime } from './timer-hellpers.js/setTheTimer';

let userSelectedDate = null;

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

    const da = setInterval(() => {
      setTheTime(convertMs(userSelectedDate - new Date()), timerRefs);
    }, 1000);

    // clearInterval(da);
  },
};

flatpickr(timerRefs.inputEl, options);
