import paths from './paths.js';

console.log(paths);

paths.forEach((path, index) => {
  document.getElementById('beetles').innerHTML += `<svg x="0px" y="0px" viewBox="32 0 182 490" style="position: absolute; top: 0px; left: 0px; pointer-events: none; width: 577px; height: 1153px;">
    <path class="beetle" d="${path}" style="fill: white; pointer-events:all;"/>
  </svg>`;
});

let active = null;

const updateActive = () => {
  document.querySelectorAll('path').forEach(el => {
    if (el === active || active === null) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

document.querySelectorAll('path').forEach(el => {
  el.addEventListener('mouseover', (event) => {
    active = event.target;
    updateActive();
  });
  el.addEventListener('mouseout', (event) => {
    active = null;
    updateActive();
  });
});

updateActive();
