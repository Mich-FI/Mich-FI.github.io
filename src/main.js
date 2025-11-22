import { engine, animate, utils } from 'animejs';

animate('.square', {
  rotate: 90,
  alternate: true,
  ease: 'inOutExpo',
  x: '2rem',
  y: '-2rem',
  loop: true
});