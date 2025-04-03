import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { $ as a, ws as l } from "@webstudio-is/template";
import { imagePlaceholderDataUrl as s } from "@webstudio-is/image";
const n = `
# Styling Markdown with Markdown Embed

Markdown Embed allows styling of Markdown, which primarily comes from external data.

## How to Use Markdown Embed

- Every element is shown in the Navigator.
- Apply styles and Tokens to each element.
- Adjustments to elements apply universally within this embed, ensuring consistency across your content.

---

## This sample text contains all the elements that can be styled.

Any elements that were not used above are used below.

### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

[Links](#) connect your content to relevant resources.

**Bold text** makes your important points stand out.

*Italic text* is great for emphasizing terms.

1. First Step
2. Second Step

![Image placeholder](${s})

> Capture attention with a powerful quote.

Using \`console.log("Hello World");\` will log to the console.

| Header 1   | Header 2   | Header 3   |
|------------|------------|------------|
| Cell 1.1   | Cell 1.2   | Cell 1.3   |
| Cell 2.1   | Cell 2.2   | Cell 2.3   |
| Cell 3.1   | Cell 3.2   | Cell 3.3   |
`.trim(), c = {
  category: "data",
  description: "Used to add markdown code to the page",
  order: 4,
  template: /* @__PURE__ */ t(a.MarkdownEmbed, { code: n, children: [
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Paragraph", selector: " p" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Heading 1", selector: " h1" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Heading 2", selector: " h2" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Heading 3", selector: " h3" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Heading 4", selector: " h4" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Heading 5", selector: " h5" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Heading 6", selector: " h6" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Bold", selector: " :where(strong, b)" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Italic", selector: " :where(em, i)" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Link", selector: " a" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Image", selector: " img" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Blockquote", selector: " blockquote" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Code Text", selector: " code" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "List", selector: " :where(ul, ol)" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "List Item", selector: " li" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Separator", selector: " hr" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Table", selector: " table" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Table Row", selector: " tr" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Table Header Cell", selector: " th" }),
    /* @__PURE__ */ e(l.descendant, { "ws:label": "Table Cell", selector: " td" })
  ] })
};
export {
  c as meta
};
