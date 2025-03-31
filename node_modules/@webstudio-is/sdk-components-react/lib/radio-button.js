import { jsx as e } from "react/jsx-runtime";
import { forwardRef as i } from "react";
const a = i(({ children: n, checked: o, defaultChecked: t, ...r }, d) => /* @__PURE__ */ e(
  "input",
  {
    ...r,
    defaultChecked: o ?? t,
    type: "radio",
    ref: d
  }
));
a.displayName = "RadioButton";
export {
  a as RadioButton
};
