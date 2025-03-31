import { jsx as t } from "react/jsx-runtime";
import { forwardRef as n } from "react";
const a = n((e, o) => {
  const {
    children: s,
    // @todo: it's a hack made for Image component for the builder and should't be in the runtime at all.
    $webstudio$canvasOnly$assetId: i,
    ...r
  } = e;
  return /* @__PURE__ */ t("a", { ...r, href: r.href ?? "#", ref: o, children: s });
});
a.displayName = "Link";
export {
  a as Link
};
