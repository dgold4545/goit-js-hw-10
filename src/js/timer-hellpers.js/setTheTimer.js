import { timerRefs } from '../timer-refs.js/timerRefs';
import { addLeadingZero } from './addLeadingZero';

export function setTheTime({ days, hours, minutes, seconds }, timerRefs) {
  timerRefs.secondsEl.textContent = addLeadingZero(seconds);
  timerRefs.minutesEl.textContent = addLeadingZero(minutes);
  timerRefs.dataEl.textContent = addLeadingZero(hours);
  timerRefs.daysEl.textContent = addLeadingZero(days);
}
