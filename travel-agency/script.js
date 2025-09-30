const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px'
  }
);

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

const parallaxCard = document.querySelector('[data-parallax]');
if (parallaxCard) {
  const dampen = 40;
  window.addEventListener('pointermove', event => {
    const { innerWidth, innerHeight } = window;
    const offsetX = (event.clientX / innerWidth - 0.5) * 2;
    const offsetY = (event.clientY / innerHeight - 0.5) * 2;
    parallaxCard.style.transform = `translateY(${offsetY * 10}px) rotateX(${offsetY * 3}deg) rotateY(${offsetX * -3}deg)`;
  });

  window.addEventListener('pointerleave', () => {
    parallaxCard.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
  });
}

const canvas = document.getElementById('aurora');
const ctx = canvas.getContext('2d');
let width, height;

const ribbons = Array.from({ length: 4 }, (_, index) => ({
  hue: 185 + index * 12,
  amplitude: 60 + index * 18,
  offset: Math.random() * 1000,
  speed: 0.0004 + index * 0.0001
}));

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

function drawAurora(time) {
  ctx.clearRect(0, 0, width, height);
  ctx.globalCompositeOperation = 'lighter';

  ribbons.forEach((ribbon, idx) => {
    ctx.beginPath();
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, `hsla(${ribbon.hue}, 70%, 70%, 0)`);
    gradient.addColorStop(0.5, `hsla(${ribbon.hue}, 80%, 65%, 0.25)`);
    gradient.addColorStop(1, `hsla(${ribbon.hue + 25}, 80%, 60%, 0)`);
    ctx.fillStyle = gradient;

    const waveHeight = height * 0.35 + idx * 40;

    ctx.moveTo(0, waveHeight);
    for (let x = 0; x <= width; x += 12) {
      const y = waveHeight + Math.sin(x * 0.01 + time * ribbon.speed + ribbon.offset) * ribbon.amplitude;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();
  });

  ctx.globalCompositeOperation = 'source-over';
  requestAnimationFrame(drawAurora);
}

resize();
requestAnimationFrame(drawAurora);
window.addEventListener('resize', resize);
