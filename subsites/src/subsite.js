import { animate, createTimeline, utils, svg, splitText, stagger } from 'animejs';

//heart animation on cybersecurity projects page
const $heart = utils.$('.square2');

function animateHeartGrid() {
  animate($heart, {
    scale: [
      { to: [1, 1.5] },
      { to: 1 }
    ],
    boxShadow: [
      { to: '0 0 1.5rem 0 red' },
      { to: '0 0 1rem 0 red' }
    ],
    loop: true,
    alternate: true,
    delay: stagger(170, {
      grid: [5,5],
      from: utils.random(13,13)
    }),
    duration: 3000,
    onComplete: animateHeartGrid
  });
}

animateHeartGrid();