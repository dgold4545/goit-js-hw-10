import{f as d,i as f}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const u={inputEl:document.querySelector("#datetime-picker"),buttonEl:document.querySelector("[data-start]"),timerEl:document.querySelector(".timer"),daysEl:document.querySelector("[data-days]"),dataEl:document.querySelector("[data-hours]"),minutesEl:document.querySelector("[data-minutes]"),secondsEl:document.querySelector("[data-seconds]")};function m(t){t.buttonEl.setAttribute("disabled",!0)}function y(t){t.buttonEl.removeAttribute("disabled")}function p(t){const o=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),a=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:s,minutes:l,seconds:a}}function h({days:t,hours:r,minutes:i,seconds:n},e){e.secondsEl.textContent=n,e.minutesEl.textContent=i,e.dataEl.textContent=r,e.daysEl.textContent=t}let c=null;const E={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),c=t[0],c<=new Date?(f.error({title:"Error",position:"topCenter",message:"Please choose a date in the future",position:"topRight"}),m(u)):y(u),setInterval(()=>{h(p(c-new Date),u)},1e3)}};d(u.inputEl,E);
//# sourceMappingURL=commonHelpers.js.map
