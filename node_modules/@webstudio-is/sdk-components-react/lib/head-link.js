import { jsx as o } from "react/jsx-runtime";
import { ReactSdkContext as c } from "@webstudio-is/react-sdk/runtime";
import { forwardRef as m, useContext as d } from "react";
import { XmlNode as l } from "./xml-node.js";
const p = "link", O = ["rel", "hrefLang", "href", "type", "as"], u = m(({ ...e }, n) => {
  const { renderer: i } = d(c), s = /* @__PURE__ */ new Set([...O, ...Object.keys(e)]), r = {};
  for (const t of s)
    t in e && e[t] !== void 0 && (r[t] = e[t]);
  if (i === void 0)
    return /* @__PURE__ */ o("link", { ...r });
  const a = Object.fromEntries(
    Object.entries(r).map(([t, f]) => [
      t == null ? void 0 : t.toLowerCase(),
      f
    ])
  );
  return /* @__PURE__ */ o(l, { tag: p, ...a, ref: n });
});
u.displayName = "HeadLink";
export {
  u as HeadLink,
  p as defaultTag
};
