import { animate, createTimeline, utils, svg, splitText, stagger } from 'animejs';

//header animation
animate('.pageheader', {
  delay: 700,
  opacity: [0,1],
  duration: 3500,
})

// paragraph animation
const[$p] = utils.$('p');
const split = splitText('p', {
  words:  { wrap: 'clip' },
});


split.addEffect((self) => animate(self.words, {
  y: ['100%', '0%'],
  duration: 1250,
  ease: 'out(3)',
  delay: stagger(100),
}))

//squares animation
const $squares = utils.$('.square');

function animateGrid() {
  animate($squares, {
    scale: [
      { to: [0, 1.25] },
      { to: 0 }
    ],
    boxShadow: [
      { to: '0 0 2rem 0 blue' },
      { to: '0 0 2rem 0 blue' }
    ],
    x: 300,
    rotate: 360,
    loop: true,
    alternate: true,
    delay: stagger(400, {
      grid: [1,4],
      from: utils.random(27, 27)
    }),
    duration: 500,
    onComplete: animateGrid
  });
}

animateGrid();

//svg text animation
animate(svg.createDrawable('.line'), {
  draw: ['0 0', '0 1'],
  ease: 'inOutQuad',
  duration: 5000,
  delay: stagger(100),
});

//cool row disappearing stagger animation
/*const tl = createTimeline({
  loop: true,
  defaults: { duration: 400 },
  delay: 500,
  loopDelay: 500,
})
.add('.row:nth-child(1) .square:nth-child(8)', { color: '#FFF', scale: 1.2 })
.add('.row:nth-child(1) .square', {
  scale: 0,
  delay: stagger(10, { from: 7 }),
}, '<')
.add('.row:nth-child(2) .square:first-child', { color: '#FFF', scale: 1.2 })
.add('.row:nth-child(2) .square', {
  scale: 0,
  delay: stagger(10, { from: 'first' }),
}, '<')
.add('.row:nth-child(3) .square:nth-child(6)', { color: '#FFF', scale: 1.2 })
.add('.row:nth-child(3) .square', {
  scale: 0,
  delay: stagger(10, { from: 'center' }),
}, '<')
.add('.row:nth-child(4) .square:last-child', { color: '#FFF', scale: 1.2 })
.add('.row:nth-child(4) .square', {
  scale: 0,
  delay: stagger(10, { from: 'last' }),
}, '<')
.set('.row .square', { color: 'currentColor' })
.add('.row .square', {
  scale: 1,
  delay: stagger(10, { from: 'random' }),
})

function animateGrid() {
  animate('.square', {
    boxShadow: [
      { to: '0 0 5rem 0 violet' },
      { to: '0 0 0rem 0 violet' }
    ],
    delay: stagger(80, { start: 20 }),
    //delay: 100,
    onComplete: animateGrid
  })
}

animateGrid();
*/


//simple stagger
/*animate('.square', {
  x: stagger('1rem', { start: 14}),
  delay: stagger(100, { start: 500 }),
})
*/

//simple stagger for moving 1 square
/*animate('.square', {
  x: '17rem',
  scale: stagger([1, .1]),
  delay: stagger(100),
  alternate: true,
  loop: true,
  ease: 'outExpo',
  duration: 1800,
  rotate: 360
});*/

// simple rotate animation
/*animate('.square', {
  //rotate: 360,
  alternate: true,
  ease: 'inOutExpo',
  loop: true,
  x: '17rem',
  scale: stagger([1, .1]),
  duration: 4000
});*/
