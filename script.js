// ==========================================================
// RENDER POEMS
// ==========================================================
const poemList = document.getElementById("poem-list");

POEMS.forEach((poem, i) => {
  const wrapper = document.createElement("div");
  wrapper.className = "poem";

  const num = String(i + 1).padStart(2, "0");

  wrapper.innerHTML = `
    <button class="poem-toggle" aria-expanded="false">
      <h3>${escapeHTML(poem.title)}</h3>
      <span class="mark">${num} +</span>
    </button>
    <div class="poem-body">
      <div class="poem-body-inner">
        ${poem.dedication ? `<p class="poem-dedication">${escapeHTML(poem.dedication)}</p>` : ""}
        <pre>${escapeHTML(poem.body)}</pre>
      </div>
    </div>
  `;

  const btn = wrapper.querySelector(".poem-toggle");
  const body = wrapper.querySelector(".poem-body");

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    body.style.maxHeight = isOpen ? "0px" : body.scrollHeight + "px";
  });

  poemList.appendChild(wrapper);
});

// ==========================================================
// RENDER ESSAYS
// ==========================================================
const essayList = document.getElementById("essay-list");

ESSAYS.forEach((essay) => {
  const el = document.createElement("article");
  el.className = "essay";
  const paragraphs = essay.body
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHTML(p)}</p>`)
    .join("");
  el.innerHTML = `<h3>${escapeHTML(essay.title)}</h3>${paragraphs}`;
  essayList.appendChild(el);
});

// ==========================================================
// RENDER QUOTES
// ==========================================================
const quoteGrid = document.getElementById("quote-grid");

QUOTES.forEach((quote, i) => {
  const num = String(i + 1).padStart(3, "0");
  const card = document.createElement("div");
  card.className = "quote-card";
  card.innerHTML = `<span class="qnum">No. ${num}</span><p>${escapeHTML(quote)}</p>`;
  quoteGrid.appendChild(card);
});

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ==========================================================
// STARFIELD ANIMATION
// ==========================================================
(function starfield() {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  const hero = document.querySelector(".hero");
  let stars = [];
  let shootingStar = null;
  let reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    const rect = hero.getBoundingClientRect();
    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    initStars(rect.width, rect.height);
  }

  function initStars(w, h) {
    const count = Math.floor((w * h) / 4500);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.3,
      baseAlpha: Math.random() * 0.6 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.015 + 0.005,
    }));
  }

  function maybeSpawnShootingStar(w, h) {
    if (reduced) return;
    if (!shootingStar && Math.random() < 0.004) {
      const startX = Math.random() * w * 0.6;
      shootingStar = {
        x: startX,
        y: Math.random() * h * 0.3,
        vx: 4 + Math.random() * 3,
        vy: 2 + Math.random() * 1.5,
        life: 1,
      };
    }
  }

  function draw() {
    const w = canvas.width / devicePixelRatio;
    const h = canvas.height / devicePixelRatio;
    ctx.clearRect(0, 0, w, h);

    stars.forEach((s) => {
      s.phase += s.speed;
      const alpha = s.baseAlpha * (0.6 + 0.4 * Math.sin(s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(237, 233, 227, ${alpha.toFixed(2)})`;
      ctx.fill();
    });

    maybeSpawnShootingStar(w, h);
    if (shootingStar) {
      const s = shootingStar;
      ctx.beginPath();
      const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 8, s.y - s.vy * 8);
      grad.addColorStop(0, `rgba(211, 173, 107, ${s.life})`);
      grad.addColorStop(1, "rgba(211, 173, 107, 0)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.vx * 8, s.y - s.vy * 8);
      ctx.stroke();

      s.x += s.vx;
      s.y += s.vy;
      s.life -= 0.012;
      if (s.life <= 0 || s.x > w || s.y > h) shootingStar = null;
    }

    if (!reduced) requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
  if (reduced) {
    // draw a single static frame for reduced-motion users
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((s) => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(237, 233, 227, ${s.baseAlpha})`;
      ctx.fill();
    });
  }
})();
