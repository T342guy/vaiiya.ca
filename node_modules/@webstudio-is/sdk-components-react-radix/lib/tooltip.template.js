import { jsxs as d, jsx as o } from "react/jsx-runtime";
import { $ as t, PlaceholderValue as r, css as l } from "@webstudio-is/template";
import { radix as e } from "./shared/proxy.js";
import { getButtonStyle as s } from "./shared/styles.js";
import { zIndex as a, borderRadius as h, colors as i, spacing as n, fontSize as p, fontSizeLineHeight as c, boxShadow as m } from "./shared/theme.js";
const $ = {
  category: "radix",
  description: "Displays content that is related to the trigger, when the trigger is hovered with the mouse or focused with the keyboard. You are reading an example of a tooltip right now.",
  order: 7,
  template: /* @__PURE__ */ d(e.Tooltip, { children: [
    /* @__PURE__ */ o(e.TooltipTrigger, { children: /* @__PURE__ */ o(t.Button, { "ws:style": s("outline"), children: new r("Button") }) }),
    /* @__PURE__ */ o(
      e.TooltipContent,
      {
        "ws:style": l`
          z-index: ${a[50]};
          overflow: hidden;
          border-radius: ${h.md};
          background-color: ${i.popover};
          padding: ${n[1.5]} ${n[3]};
          font-size: ${p.sm};
          line-height: ${c.sm};
          color: ${i.popoverForeground};
          box-shadow: ${m.md};
        `,
        children: /* @__PURE__ */ o(t.Text, { children: new r("The text you can edit") })
      }
    )
  ] })
};
export {
  $ as meta
};
