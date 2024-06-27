// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import { timerRefs } from './refs.js/timerRefs';
import { addDisabled } from './hellpers.js/addDisabled';
import { removeDisabled } from './hellpers.js/removeDisabled';

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
      alert('Please choose a date in the future');
      addDisabled(timerRefs);
    } else {
      alert('you chose the right time Bitch');
      removeDisabled(timerRefs);
    }
  },
};

flatpickr(timerRefs.inputEl, options);
