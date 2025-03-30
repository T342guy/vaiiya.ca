import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { css as i, $ as f, PlaceholderValue as w } from "@webstudio-is/template";
import { radix as o } from "./shared/proxy.js";
import { height as h, width as d, borderRadius as s, borderWidth as c, colors as e, spacing as t, fontSize as m, fontSizeLineHeight as $, boxShadow as a, opacity as g, zIndex as b } from "./shared/theme.js";
import { CheckMarkIcon as y } from "@webstudio-is/icons/svg";
const l = (u, p) => /* @__PURE__ */ n(
  o.SelectItem,
  {
    value: u,
    "ws:style": i`
        position: relative;
        display: flex;
        width: ${d.full};
        cursor: default;
        user-select: none;
        align-items: center;
        border-radius: ${s.md};
        padding: ${t[1.5]} ${t[2]} ${t[1.5]} ${t[8]};
        font-size: ${m.sm};
        line-height: ${$.sm};
        outline: none;
        &:focus {
          background-color: ${e.accent};
          color: ${e.accentForeground};
        }
        &[data-disabled] {
          pointer-events: none;
          opacity: ${g[50]};
        }
      `,
    children: [
      /* @__PURE__ */ r(
        o.SelectItemIndicator,
        {
          "ws:style": i`
          position: absolute;
          left: ${t[2]};
          display: flex;
          height: ${h[3.5]};
          width: ${d[3.5]};
          align-items: center;
          justify-content: center;
        `,
          children: /* @__PURE__ */ r(f.HtmlEmbed, { "ws:label": "Indicator Icon", code: y })
        }
      ),
      /* @__PURE__ */ r(o.SelectItemText, { children: new w(p) })
    ]
  }
), z = {
  category: "radix",
  description: "Use within a form to give your users a list of options to choose from.",
  order: 10,
  template: /* @__PURE__ */ n(o.Select, { children: [
    /* @__PURE__ */ r(
      o.SelectTrigger,
      {
        "ws:style": i`
          display: flex;
          height: ${h[10]};
          width: ${d.full};
          align-items: center;
          justify-content: between;
          border-radius: ${s.md};
          border: ${c.DEFAULT} solid ${e.input};
          background-color: ${e.background};
          padding: ${t[2]} ${t[3]};
          font-size: ${m.sm};
          line-height: ${$.sm};
          &::placeholder {
            color: ${e.mutedForeground};
          }
          &:focus-visible {
            outline: none;
            box-shadow: ${a.ring};
          }
          &:disabled {
            cursor: not-allowed;
            opacity: ${g[50]};
          }
        `,
        children: /* @__PURE__ */ r(o.SelectValue, { placeholder: "Theme" })
      }
    ),
    /* @__PURE__ */ r(
      o.SelectContent,
      {
        "ws:style": i`
          position: relative;
          z-index: ${b[50]};
          min-width: 8rem;
          overflow: hidden;
          border-radius: ${s.md};
          border: ${c.DEFAULT} solid ${e.border};
          background-color: ${e.popover};
          color: ${e.popoverForeground};
          box-shadow: ${a.md};
        `,
        children: /* @__PURE__ */ n(
          o.SelectViewport,
          {
            "ws:style": i`
            padding: ${t[1]};
            height: var(--radix-select-trigger-height);
            width: ${d.full};
            min-width: var(--radix-select-trigger-width);
          `,
            children: [
              l("light", "Light"),
              l("dark", "Dark"),
              l("system", "System")
            ]
          }
        )
      }
    )
  ] })
};
export {
  z as meta
};
