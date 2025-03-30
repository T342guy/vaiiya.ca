import { jsx as t } from "react/jsx-runtime";
import { forwardRef as d } from "react";
const h = d(({ children: i, checked: e, defaultChecked: r, ...o }, c) => /* @__PURE__ */ t(
  "input",
  {
    ...o,
    defaultChecked: e ?? r,
    type: "checkbox",
    ref: c
  }
));
h.displayName = "Checkbox";
export {
  h as Checkbox
};
