import{f as m,i as p}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function u(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=u(t);fetch(t.href,o)}})();const n={inputEl:document.querySelector("#datetime-picker"),buttonEl:document.querySelector("[data-start]"),timerEl:document.querySelector(".timer"),daysEl:document.querySelector("[data-days]"),dataEl:document.querySelector("[data-hours]"),minutesEl:document.querySelector("[data-minutes]"),secondsEl:document.querySelector("[data-seconds]")};function l(e){e.setAttribute("disabled",!0)}function y(e){e.removeAttribute("disabled")}function E(e){const o=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:i,minutes:d,seconds:f}}function c(e){return String(e).padStart(2,"0")}function h({days:e,hours:r,minutes:u,seconds:s},t){t.secondsEl.textContent=c(s),t.minutesEl.textContent=c(u),t.dataEl.textContent=c(r),t.daysEl.textContent=c(e)}let a=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),a=e[0],a<=new Date?(p.error({title:"Error",position:"topCenter",message:"Please choose a date in the future",position:"topRight"}),l(n.buttonEl)):y(n.buttonEl)}};n.buttonEl.addEventListener("click",g);function g(){const e=setInterval(()=>{h(E(a-new Date),n),n.dataEl.textContent==="00"&&n.daysEl.textContent==="00"&&n.minutesEl.textContent==="00"&&n.secondsEl.textContent==="00"&&clearInterval(e)},1e3);l(n.inputEl),l(n.buttonEl)}l(n.buttonEl);m(n.inputEl,b);
//# sourceMappingURL=commonHelpers.js.map
