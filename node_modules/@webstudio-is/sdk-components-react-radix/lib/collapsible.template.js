import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { $ as o, PlaceholderValue as l } from "@webstudio-is/template";
import { radix as t } from "./shared/proxy.js";
import { getButtonStyle as r } from "./shared/styles.js";
const p = {
  category: "radix",
  description: "An interactive component which expands and collapses some content, triggered by a button.",
  order: 5,
  template: /* @__PURE__ */ n(t.Collapsible, { children: [
    /* @__PURE__ */ e(t.CollapsibleTrigger, { children: /* @__PURE__ */ e(o.Button, { "ws:style": r("outline"), children: new l("Click to toggle content") }) }),
    /* @__PURE__ */ e(t.CollapsibleContent, { children: /* @__PURE__ */ e(o.Text, { children: new l("Collapsible Content") }) })
  ] })
};
export {
  p as meta
};
