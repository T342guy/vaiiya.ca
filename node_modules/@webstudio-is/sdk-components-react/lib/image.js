import { jsx as g } from "react/jsx-runtime";
import { forwardRef as l, useContext as u } from "react";
import { Image as v } from "@webstudio-is/image";
import { ReactSdkContext as x } from "@webstudio-is/react-sdk/runtime";
const y = l(
  ({
    loading: a = "lazy",
    width: e,
    height: r,
    optimize: m = !0,
    decoding: c,
    // @todo: it's a hack made for the builder and should't be in the runtime at all.
    $webstudio$canvasOnly$assetId: d,
    ...s
  }, f) => {
    const o = String(s.src ?? ""), { imageLoader: i, renderer: N } = u(x);
    let n = c, t = o;
    return N === "canvas" && (a = "eager", n = "sync", t = d ?? o, e !== void 0 && r !== void 0 && Number.isNaN(e) && Number.isNaN(r) && (m = !1, e = void 0, r = void 0)), /* @__PURE__ */ g(
      v,
      {
        loading: a,
        decoding: n,
        optimize: m,
        width: e,
        height: r,
        ...s,
        loader: i,
        src: o,
        ref: f
      },
      t
    );
  }
);
y.displayName = "Image";
export {
  y as Image
};
