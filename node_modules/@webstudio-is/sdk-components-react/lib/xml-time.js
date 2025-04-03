import { jsx as f } from "react/jsx-runtime";
import { forwardRef as m, useContext as a } from "react";
import { ReactSdkContext as T } from "@webstudio-is/react-sdk/runtime";
const l = "short", u = "dateTime attribute is not set", N = "", c = (e) => {
  if (e === "")
    return;
  let t = new Date(e);
  if (Number.isNaN(t.getTime()) === !1)
    return t;
  if (/^\d+$/.test(e)) {
    let o = Number(e);
    e.length === 10 && (o *= 1e3), t = new Date(o);
  }
  if (Number.isNaN(t.getTime()) === !1)
    return t;
}, d = m(
  ({ dateStyle: e = l, datetime: t = u }, o) => {
    const { renderer: i } = a(T), s = t === null ? N : t.toString(), n = c(s);
    let r = s;
    return n && (r = n.toISOString(), e === "short" && (r = r.split("T")[0])), i === void 0 ? r : /* @__PURE__ */ f("time", { ref: o, children: r });
  }
);
export {
  d as XmlTime
};
