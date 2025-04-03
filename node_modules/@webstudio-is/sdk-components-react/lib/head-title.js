import { jsx as r } from "react/jsx-runtime";
import { ReactSdkContext as a } from "@webstudio-is/react-sdk/runtime";
import { forwardRef as d, useContext as f } from "react";
import { XmlNode as l } from "./xml-node.js";
const p = "title", O = [], u = d(({ ...e }, n) => {
  const { renderer: i } = f(a), s = /* @__PURE__ */ new Set([...O, ...Object.keys(e)]), o = {};
  for (const t of s)
    t in e && e[t] !== void 0 && (o[t] = e[t]);
  if (i === void 0)
    return /* @__PURE__ */ r("title", { ...o });
  const c = Object.fromEntries(
    Object.entries(o).map(([t, m]) => [
      t == null ? void 0 : t.toLowerCase(),
      m
    ])
  );
  return /* @__PURE__ */ r(l, { tag: p, ...c, ref: n });
});
u.displayName = "HeadTitle";
export {
  u as HeadTitle,
  p as defaultTag
};
