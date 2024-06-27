// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import { timerRefs } from './refs.js/timerRefs';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timerRefs.buttonEl.removeAttribute('disabled');
    console.log(selectedDates[0]);
  },
};

flatpickr(timerRefs.inputEl, options);
