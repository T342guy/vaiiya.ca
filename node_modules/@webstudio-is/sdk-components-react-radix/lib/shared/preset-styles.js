const o = (r, t, p) => ({
  property: r,
  value: { type: "unit", unit: p, value: t }
}), e = (r, t) => ({
  property: r,
  value: { type: "keyword", value: t }
}), d = (r, t, p, l) => ({
  property: r,
  value: { type: "rgb", alpha: 1, r: t, g: p, b: l }
}), b = [
  {
    property: "background-color",
    value: { type: "keyword", value: "transparent" }
  },
  {
    property: "background-image",
    value: { type: "keyword", value: "none" }
  },
  o("border-top-width", 0, "px"),
  o("border-right-width", 0, "px"),
  o("border-bottom-width", 0, "px"),
  o("border-left-width", 0, "px"),
  e("border-top-style", "solid"),
  e("border-right-style", "solid"),
  e("border-bottom-style", "solid"),
  e("border-left-style", "solid"),
  d("border-top-color", 226, 232, 240),
  d("border-right-color", 226, 232, 240),
  d("border-bottom-color", 226, 232, 240),
  d("border-left-color", 226, 232, 240),
  o("padding-top", 0, "px"),
  o("padding-right", 0, "px"),
  o("padding-bottom", 0, "px"),
  o("padding-left", 0, "px")
];
export {
  b as buttonReset
};
