import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { css as t, $ as a, PlaceholderValue as n } from "@webstudio-is/template";
import { DotIcon as m } from "@webstudio-is/icons/svg";
import { radix as e } from "./shared/proxy.js";
import { spacing as d, height as p, width as b, borderRadius as h, borderWidth as u, colors as i, boxShadow as f, opacity as w } from "./shared/theme.js";
const r = ({
  value: c,
  label: s
}) => /* @__PURE__ */ l(
  e.Label,
  {
    "ws:style": t`
      display: flex;
      align-items: center;
      gap: ${d[2]};
    `,
    children: [
      /* @__PURE__ */ o(
        e.RadioGroupItem,
        {
          value: c,
          "ws:style": t`
        aspect-ratio: 1 / 1;
        height: ${p[4]};
        width: ${b[4]};
        border-radius: ${h.full};
        border: ${u.DEFAULT} solid ${i.primary};
        color: ${i.primary};
        &:focus-visible {
          outline: none;
          box-shadow: ${f.ring};
        }
        &:disabled {
          cursor: not-allowed;
          opacity: ${w[50]};
        }
      `,
          children: /* @__PURE__ */ o(e.RadioGroupIndicator, { children: /* @__PURE__ */ o(a.HtmlEmbed, { "ws:label": "Indicator Icon", code: m }) })
        }
      ),
      /* @__PURE__ */ o(a.Text, { children: new n(s) })
    ]
  }
), R = {
  category: "radix",
  order: 100,
  description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
  template: /* @__PURE__ */ l(
    e.RadioGroup,
    {
      "ws:style": t`
        display: flex;
        flex-direction: column;
        gap: ${d[2]};
      `,
      children: [
        r({ value: "default", label: "Default" }),
        r({ value: "comfortable", label: "Comfortable" }),
        r({ value: "compact", label: "Compact" })
      ]
    }
  )
};
export {
  R as meta
};
