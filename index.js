import paths from './paths.js';

const field = document.getElementById('field');
paths.forEach((path) => {
  const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  el.setAttribute('d', path);
  el.className.baseVal = 'beetle';
  el.style.fill = 'white';
  el.style.pointerEvents = 'all';
  field.appendChild(el);
});

let active = null;
const updateActive = () => {
  document.querySelectorAll('#field path').forEach(el => {
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
