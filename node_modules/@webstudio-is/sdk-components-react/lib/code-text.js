import { jsx as r } from "react/jsx-runtime";
import { forwardRef as i } from "react";
const d = ({
  innerRef: e,
  ...t
}) => /* @__PURE__ */ r("code", { ...t, style: { padding: 20 }, ref: e, children: 'Open the "Settings" panel to edit the code.' }), l = i(({ code: e, children: t, ...n }, o) => t === void 0 && e === void 0 || String(e).trim().length === 0 ? /* @__PURE__ */ r(d, { innerRef: o, ...n }) : /* @__PURE__ */ r("code", { ...n, ref: o, children: e ?? t }));
l.displayName = "CodeText";
export {
  l as CodeText
};
