function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequire7bc7=r);var i=r("7Y9D8");const l=document.querySelector(".form");function u(e,o){return new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}l.addEventListener("submit",(function(o){o.preventDefault();const n=l.querySelector('[name="delay"]').value,t=l.querySelector('[name="step"]').value,r=l.querySelector('[name="amount"]').value;for(let o=0;o<r;o++){u(o,+n+ +t*o).then((({position:o,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${o+1} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${o+1} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.95f788e4.js.map