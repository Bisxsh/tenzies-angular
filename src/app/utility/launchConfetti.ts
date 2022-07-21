import * as confetti from 'canvas-confetti';

let myConfetti: any;
let stopped: boolean;

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function launchConfetti() {
  stopped = false;
  let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  myConfetti = confetti.create(undefined, {
    resize: true,
    useWorker: true
  });

  myConfetti(Object.assign({}, defaults, { particleCount:150, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  myConfetti(Object.assign({}, defaults, { particleCount:150, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));

  let interval = setInterval(function() {

    if (stopped) return clearInterval(interval);

    myConfetti(Object.assign({}, defaults, { particleCount: 150, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    myConfetti(Object.assign({}, defaults, { particleCount: 150, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
}

export function cancelConfetti() {
  if (!myConfetti) return;
  stopped=true;
}

