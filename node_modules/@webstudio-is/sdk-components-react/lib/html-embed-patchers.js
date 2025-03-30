const l = () => document.readyState === "complete" || document.readyState === "interactive", t = [];
let s = !1;
const r = () => {
  if (l() === !1) {
    console.error("DOMContentLoaded event has not been fired yet");
    return;
  }
  if (s)
    return;
  s = !0;
  const d = document.addEventListener, a = window.addEventListener, c = new Event("DOMContentLoaded"), i = new Event("load");
  window.addEventListener = (e, n, o) => {
    e === "DOMContentLoaded" ? t.push(
      () => n.call(window, c)
    ) : (e === "load" && t.push(() => n.call(window, i)), a.call(window, e, n, o));
  }, document.addEventListener = (e, n, o) => {
    e === "DOMContentLoaded" ? t.push(
      () => n.call(document, c)
    ) : d.call(document, e, n, o);
  };
}, w = () => {
  for (const d of t)
    d();
  t.length = 0;
};
export {
  w as executeDomEvents,
  r as patchDomEvents
};
