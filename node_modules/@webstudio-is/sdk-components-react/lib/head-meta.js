import { jsx as r } from "react/jsx-runtime";
import { ReactSdkContext as i } from "@webstudio-is/react-sdk/runtime";
import { forwardRef as d, useContext as f } from "react";
import { XmlNode as p } from "./xml-node.js";
const O = "meta", l = ["property", "name", "content"], u = d(({ ...e }, n) => {
  const { renderer: a } = f(i), m = /* @__PURE__ */ new Set([...l, ...Object.keys(e)]), o = {};
  for (const t of m)
    t in e && e[t] !== void 0 && (o[t] = e[t]);
  if (a === void 0)
    return /* @__PURE__ */ r("meta", { ...o });
  const s = Object.fromEntries(
    Object.entries(o).map(([t, c]) => [
      t == null ? void 0 : t.toLowerCase(),
      c
    ])
  );
  return /* @__PURE__ */ r(p, { tag: O, ...s, ref: n });
});
u.displayName = "HeadMeta";
export {
  u as HeadMeta,
  O as defaultTag
};
