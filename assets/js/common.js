/* Shared chrome (nav, footer, toast) and helpers for every page. */
const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const mailOf = s => s.split("|").join("@");
const initials = n => n.replace(/,.*$/,"").split(/\s+/).map(w => w[0]).join("").slice(0,2).toUpperCase();
const HUES = [["#2625cd","#3671ef"],["#3671ef","#70b7f7"],["#1b6fd8","#84ece6"],["#4c79d6","#e59cbf"],["#39507e","#70b7f7"],["#2625cd","#84ece6"],["#d16a9c","#70b7f7"]];
const avatarBg = i => `linear-gradient(135deg,${HUES[i%HUES.length][0]},${HUES[i%HUES.length][1]})`;
/* avatar contents: initials, covered by the profile photo when `photo` is set (initials show if the image fails) */
const avatarInner = (name, photo) => esc(initials(name)) +
  (photo ? `<img src="${esc(photo)}" alt="" loading="lazy" onerror="this.remove()">` : "");
const COPY_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>`;

const PAGES = [
  ["research",     "Research",     "research.html"],
  ["director",     "Director",     "director.html"],
  ["projects",     "Projects",     "projects.html"],
  ["publications", "Publications", "publications.html"],
  ["members",      "Members",      "members.html"],
  ["gallery",      "Gallery",      "gallery.html"],
];

/* ---------- chrome ---------- */
(() => {
  const page = document.body.dataset.page;
  const link = ([id, label, href]) => `<a href="${href}"${id===page?' class="active" aria-current="page"':""}>${label}</a>`;
  document.body.insertAdjacentHTML("afterbegin", `
    <div id="progress"></div>
    <header class="nav" id="nav"><div class="wrap nav-in">
      <a href="index.html" class="brand"><img src="assets/logo-mark.svg" alt="">IMM Lab <small>Sejong Univ.</small></a>
      <nav class="menu">${PAGES.map(link).join("")}<a href="join.html" class="btn btn-primary btn-sm">Join us</a></nav>
      <button class="burger" id="burger" aria-label="Open menu"><span></span></button>
    </div></header>
    <div class="sheet" id="sheet"><div class="sheet-panel"><div class="sheet-grab"></div>
      ${link(["home","Home","index.html"])}${PAGES.map(link).join("")}${link(["join","Join us","join.html"])}
    </div></div>`);
  document.body.insertAdjacentHTML("beforeend", `
    <footer><div class="wrap">
      <div><img src="assets/logo.svg" alt="IMMLAB — Immersive Media Lab">
        Immersive Media Laboratory · Sejong University<br>#104, Ujeong-dang, 209 Neungdong-ro, Gwangjin-gu, Seoul, South Korea<br>
        <button class="copy" data-copy="${LAB.email}"><span class="mail-text" data-mail="${LAB.email}"></span>${COPY_ICON}</button></div>
      <nav>${PAGES.map(([,l,h]) => `<a href="${h}">${l}</a>`).join("")}<a href="join.html">Join us</a></nav>
    </div></footer>
    <div class="toast" id="toast"><span class="ok">✓</span><span id="toastMsg"></span></div>`);

  // shared "Join us" banner: <section data-cta></section>
  $$("[data-cta]").forEach(el => { el.className = "section"; el.innerHTML = `<div class="wrap">
    <div class="dark-card reveal"><div class="glow"></div>
      <span class="eyebrow">Join Our Lab</span>
      <h2 class="h2">Build the next way<br>people see the world.</h2>
      <p class="lead">We're looking for Ph.D./M.S. students and undergraduate researchers who love computer graphics and computer vision.</p>
      <div class="btn-row"><a href="join.html" class="btn btn-primary">See open positions</a><button class="btn btn-ghost" data-copy="${LAB.email}">Copy lab email</button></div>
    </div></div>`; });

  const sheet = $("#sheet");
  $("#burger").onclick = () => sheet.classList.add("open");
  sheet.addEventListener("click", e => { if (e.target === sheet || e.target.tagName === "A") sheet.classList.remove("open"); });

  const nav = $("#nav"), prog = $("#progress");
  let lastY = 0;
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    prog.style.transform = `scaleX(${h>0 ? y/h : 0})`;
    nav.classList.toggle("scrolled", y > 10);
    nav.classList.toggle("hide", y > lastY && y > 400 && !sheet.classList.contains("open"));
    lastY = y;
  };
  addEventListener("scroll", onScroll, {passive:true}); onScroll();
})();

/* ---------- toast + copy ---------- */
function toast(msg){
  const t = $("#toast"); $("#toastMsg").textContent = msg; t.classList.add("show");
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2200);
}
async function copyText(txt){
  try { await navigator.clipboard.writeText(txt); return true; }
  catch {
    const ta = document.createElement("textarea"); ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand("copy"); } catch {}
    ta.remove(); return ok;
  }
}
function bindMail(root=document){
  $$("[data-mail]", root).forEach(el => { (el.querySelector(".mail-text") || el).textContent = mailOf(el.dataset.mail); });
  $$("[data-copy]", root).forEach(b => { if (b._bound) return; b._bound = true; b.addEventListener("click", async () => {
    const m = mailOf(b.dataset.copy); toast(await copyText(m) ? "Email address copied" : m);
  }); });
  $$("[data-mailto]", root).forEach(a => a.href = "mailto:" + mailOf(a.dataset.mailto));
}

/* ---------- reveal + counters ---------- */
const revealIO = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting){ e.target.classList.add("in"); revealIO.unobserve(e.target); }
}), {threshold:.12});
const observeReveal = (root=document) => $$(".reveal:not(.in)", root).forEach(el => revealIO.observe(el));

const countIO = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; countIO.unobserve(e.target);
  const el = e.target, to = +el.dataset.count, t0 = performance.now(), dur = reduceMotion ? 1 : 1400;
  const step = now => { const k = Math.min(1,(now-t0)/dur); el.textContent = Math.round(to*(1-Math.pow(1-k,4))); if (k<1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}), {threshold:.6});
const observeCounts = (root=document) => $$("[data-count]", root).forEach(el => countIO.observe(el));

/* ---------- segmented control ---------- */
function seg(el, onChange){
  const thumb = $(".thumb", el), bs = $$("button", el);
  const place = b => { thumb.style.width = b.offsetWidth + "px"; thumb.style.transform = `translateX(${b.offsetLeft}px)`; };
  bs.forEach(b => b.addEventListener("click", () => { bs.forEach(x => x.classList.toggle("on", x===b)); place(b); onChange(b); }));
  const init = () => place($("button.on", el) || bs[0]);
  init(); new ResizeObserver(init).observe(el);
  if (document.fonts) document.fonts.ready.then(init);
}

/* ---------- chips (single select) ---------- */
function chips(el, items, onChange, allLabel="All"){
  el.innerHTML = `<button class="on" data-v="">${allLabel}</button>` + items.map(([v,l]) => `<button data-v="${esc(v)}">${esc(l ?? v)}</button>`).join("");
  el.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    $$("button", el).forEach(x => x.classList.toggle("on", x===b)); onChange(b.dataset.v || null);
  });
}

/* ---------- publications row ---------- */
const labNameRe = new RegExp("(" + LAB.labNames.map(n => n.replace(/\s/g,"\\s")).join("|") + ")", "gi");
function hilite(text, q){
  let s = esc(text);
  if (q) s = s.replace(new RegExp("(" + esc(q).replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + ")","gi"), "<mark>$1</mark>");
  return s;
}
function pubRow(p, q="", i=0){
  return `<article class="pub" style="animation:fade .5s ${Math.min(i,8)*35}ms var(--ease) both">
    <span class="yr">${p.y}</span>
    <div>
      <h4>${hilite(p.t,q)}</h4>
      <div class="au">${hilite(p.a,q).replace(labNameRe, "<b>$1</b>")}</div>
      <div class="ve">${(p.b||[]).map(b => `<span class="badge ${b.startsWith("Top")?"gold":""}">${esc(b)}</span>`).join("")}${hilite(p.v,q)}</div>
    </div>
    <span class="kind ${p.k}">${p.scope==="intl"?"Intl.":"Domestic"} ${p.k==="j"?"Journal":"Conference"}</span>
  </article>`;
}

/* ---------- member card + tilt ---------- */
function memberCard(m, i){
  return `<button class="member reveal" data-d="${i%4}" data-i="${i}" data-r="${esc(m.r)}" aria-label="${esc(m.n)} — details">
    <div class="avatar" style="background:${avatarBg(i)}">${avatarInner(m.n, m.photo)}</div>
    <h4>${esc(m.n)}</h4><div class="role">${esc(m.r)}</div>
    <div class="tags">${m.k.map(k => `<span class="tag">${esc(k)}</span>`).join("")}</div>
  </button>`;
}
function tilt(cards){
  if (reduceMotion || !matchMedia("(hover:hover)").matches) return;
  cards.forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect(), x = (e.clientX-r.left)/r.width - .5, y = (e.clientY-r.top)/r.height - .5;
      card.style.transform = `rotateY(${x*14}deg) rotateX(${-y*14}deg)`;
    });
    card.addEventListener("pointerleave", () => card.style.transform = "");
  });
}

/* detail drawer: openDrawer(html) */
let _drawer;
function openDrawer(html){
  if (!_drawer){
    document.body.insertAdjacentHTML("beforeend", `<div class="drawer" id="drawer" aria-hidden="true"><div class="d-panel" role="dialog" aria-modal="true"><button class="d-close" aria-label="Close">×</button><div id="dBody"></div></div></div>`);
    _drawer = $("#drawer");
    $(".d-close", _drawer).onclick = closeDrawer;
    _drawer.addEventListener("click", e => { if (e.target === _drawer) closeDrawer(); });
    addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });
  }
  $("#dBody").innerHTML = html;
  _drawer.classList.add("open"); _drawer.setAttribute("aria-hidden","false");
  $(".d-panel", _drawer).scrollTop = 0;
  $(".d-close", _drawer).focus({preventScroll:true});
  bindMail(_drawer);
  return _drawer;
}
function closeDrawer(){ if (_drawer){ _drawer.classList.remove("open"); _drawer.setAttribute("aria-hidden","true"); } }

/* glow that follows the pointer on dark cards */
function glowFollow(card){
  card.addEventListener("pointermove", e => { const r = card.getBoundingClientRect(); card.style.setProperty("--gx",(e.clientX-r.left)+"px"); card.style.setProperty("--gy",(e.clientY-r.top)+"px"); });
}

/* run after the page script has rendered its content */
addEventListener("DOMContentLoaded", () => { bindMail(); observeReveal(); observeCounts(); $$(".dark-card").forEach(glowFollow); });
