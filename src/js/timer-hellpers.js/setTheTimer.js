import { timerRefs } from '../timer-refs.js/timerRefs';

export function setTheTime({ days, hours, minutes, seconds }, timerRefs) {
  timerRefs.secondsEl.textContent = seconds;
  timerRefs.minutesEl.textContent = minutes;
  timerRefs.dataEl.textContent = hours;
  timerRefs.daysEl.textContent = days;
}
