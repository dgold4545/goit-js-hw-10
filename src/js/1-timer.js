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
      addDisabled(timerRefs.buttonEl);
    } else {
      removeDisabled(timerRefs.buttonEl);
    }
  },
};

timerRefs.buttonEl.addEventListener('click', harlerBurronElClick);

function harlerBurronElClick() {
  const da = setInterval(() => {
    setTheTime(convertMs(userSelectedDate - new Date()), timerRefs);

    if (
      timerRefs.dataEl.textContent === '00' &&
      timerRefs.daysEl.textContent === '00' &&
      timerRefs.minutesEl.textContent === '00' &&
      timerRefs.secondsEl.textContent === '00'
    ) {
      clearInterval(da);
      removeDisabled(timerRefs.inputEl);
      // removeDisabled(timerRefs.buttonEl);
    }
  }, 1000);
  addDisabled(timerRefs.inputEl);
  addDisabled(timerRefs.buttonEl);
}

addDisabled(timerRefs.buttonEl);

flatpickr(timerRefs.inputEl, options);
