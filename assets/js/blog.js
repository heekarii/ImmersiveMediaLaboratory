/* Blog helpers shared by blog.html and post.html */
const SHOW_DRAFTS = new URLSearchParams(location.search).has("drafts");
const ALL_POSTS = (LAB.blog || []).slice().sort((a,b) => b.d.localeCompare(a.d));
const POSTS = ALL_POSTS.filter(p => !p.draft || SHOW_DRAFTS);
const CAT_STYLE = {
  "Lab Life": {bg:"linear-gradient(150deg,#d16a9c,#e59cbf 55%,#f6c9a8)", badge:"background:#fdeef5;color:#c2477f"},
  "Research": {bg:"linear-gradient(150deg,#2625cd,#3671ef 55%,#70b7f7)", badge:""},
};
const catStyle = c => CAT_STYLE[c] || {bg:"linear-gradient(150deg,#212a35,#39507e 55%,#4c79d6)", badge:"background:var(--bg-2);color:var(--sub)"};
const fmtDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-US", {year:"numeric", month:"short", day:"numeric"});
const validId = id => /^[a-z0-9][a-z0-9-]*$/i.test(id || "");

/* author → avatar: director / member photo or initials; anything else gets the lab logo */
function authorAvatar(name, size=32){
  const box = `width:${size}px;height:${size}px;font-size:${Math.round(size/2.8)}px`;
  const key = (name || "").trim().toLowerCase();
  const dir = LAB.director;
  if (key && dir.name.toLowerCase().startsWith(key))
    return `<span class="avatar" style="${box};background:linear-gradient(135deg,var(--blue-deep),var(--blue) 50%,var(--cyan))">${avatarInner(dir.name, dir.photo, dir.crop)}</span>`;
  const i = LAB.members.findIndex(m => m.n.toLowerCase() === key);
  if (i >= 0) return `<span class="avatar" style="${box};background:${avatarBg(i)}">${avatarInner(LAB.members[i].n, LAB.members[i].photo, LAB.members[i].crop)}</span>`;
  return `<span class="avatar" style="${box};background:var(--bg-2)"><img src="assets/logo-mark.svg" alt="" style="opacity:1;inset:18%;width:64%;height:64%"></span>`;
}
const byline = (p, size) => `<span class="byline">${authorAvatar(p.author, size)}<span><b>${esc(p.author || "IMM Lab")}</b><span>${fmtDate(p.d)}</span></span></span>`;
const catBadge = c => `<span class="badge" style="${catStyle(c).badge}">${esc(c)}</span>`;
