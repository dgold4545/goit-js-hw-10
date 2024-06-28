import{f,i as m}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const c={inputEl:document.querySelector("#datetime-picker"),buttonEl:document.querySelector("[data-start]"),timerEl:document.querySelector(".timer"),daysEl:document.querySelector("[data-days]"),dataEl:document.querySelector("[data-hours]"),minutesEl:document.querySelector("[data-minutes]"),secondsEl:document.querySelector("[data-seconds]")};function p(t){t.buttonEl.setAttribute("disabled",!0)}function y(t){t.buttonEl.removeAttribute("disabled")}function h(t){const o=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:s,minutes:d,seconds:l}}function u(t){return String(t).padStart(2,"0")}function E({days:t,hours:r,minutes:i,seconds:n},e){e.secondsEl.textContent=u(n),e.minutesEl.textContent=u(i),e.dataEl.textContent=u(r),e.daysEl.textContent=u(t)}let a=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),a=t[0],a<=new Date?(m.error({title:"Error",position:"topCenter",message:"Please choose a date in the future",position:"topRight"}),p(c)):y(c),setInterval(()=>{E(h(a-new Date),c)},1e3)}};f(c.inputEl,b);
//# sourceMappingURL=commonHelpers.js.map
