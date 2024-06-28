import { userSelectedDate } from '../1-timer';
import { setTheTime } from './setTheTimer';
import { convertMs } from './convertMs';
import { timerRefs } from '../timer-refs.js/timerRefs';
import { addDisabled } from './addDisabled';

export function harlerBurronElClick() {
  const da = setInterval(() => {
    setTheTime(convertMs(userSelectedDate - new Date()), timerRefs);

    if (
      timerRefs.dataEl.textContent === '00' &&
      timerRefs.daysEl.textContent === '00' &&
      timerRefs.minutesEl.textContent === '00' &&
      timerRefs.secondsEl.textContent === '00'
    ) {
      clearInterval(da);
    }
  }, 1000);
  addDisabled(timerRefs.buttonEl);
}
