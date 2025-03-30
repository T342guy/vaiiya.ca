import { css as n } from "@webstudio-is/template";
import { colors as o, borderRadius as s, fontSize as c, fontSizeLineHeight as u, weights as l, boxShadow as a, opacity as h, borderWidth as g, height as d, spacing as t } from "./theme.js";
const $ = n`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0 solid ${o.border};
  border-radius: ${s.md};
  font-size: ${c.sm};
  line-height: ${u.sm};
  font-weight: ${l.medium};
  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: ${a.ring};
  }
  &:disabled {
    pointer-events: none;
    opacity: ${h[50]};
  }
`, p = n`
  &:hover {
    background-color: ${o.accent};
    color: ${o.accentForeground};
  }
`, f = n`
  border: ${g.DEFAULT} solid ${o.input};
  background-color: ${o.background};
  &:hover {
    background-color: ${o.accent};
    color: ${o.accentForeground};
  }
`, b = n`
  height: ${d[10]};
  padding: ${t[2]} ${t[4]};
`, m = n`
  height: ${d[9]};
  border-radius: ${s.md};
  padding: 0 ${t[3]};
`, y = n`
  height: ${t[10]};
  width: ${t[10]};
  padding: ${t[0]} ${t[1.5]};
`, B = (r, i = "default") => {
  const e = [...$];
  return r === "ghost" && e.push(...p), r === "outline" && e.push(...f), i === "default" && e.push(...b), i === "sm" && e.push(...m), i === "icon" && e.push(...y), e;
};
export {
  B as getButtonStyle
};
