// src/constants.ts
var SYSTEM_FONTS = /* @__PURE__ */ new Map([
  [
    "System UI",
    {
      stack: ["system-ui", "sans-serif"],
      description: "System UI fonts are those native to the operating system interface. They are highly legible and easy to read at small sizes, contains many font weights, and is ideal for UI elements."
    }
  ],
  // Modern font stacks
  // https://github.com/system-fonts/modern-font-stacks
  [
    "Transitional",
    {
      stack: ["Charter", "Bitstream Charter", "Sitka Text", "Cambria", "serif"],
      description: "Transitional typefaces are a mix between Old Style and Modern typefaces that was developed during The Enlightenment. One of the most famous examples of a Transitional typeface is Times New Roman, which was developed for the Times of London newspaper."
    }
  ],
  [
    "Old Style",
    {
      stack: [
        "Iowan Old Style",
        "Palatino Linotype",
        "URW Palladio L",
        "P052",
        "serif"
      ],
      description: "Old Style typefaces are characterized by diagonal stress, low contrast between thick and thin strokes, and rounded serifs, and were developed in the Renaissance period. One of the most famous examples of an Old Style typeface is Garamond."
    }
  ],
  [
    "Humanist",
    {
      stack: [
        "Seravek",
        "Gill Sans Nova",
        "Ubuntu",
        "Calibri",
        "DejaVu Sans",
        "source-sans-pro",
        "sans-serif"
      ],
      description: "Humanist typefaces are characterized by their organic, calligraphic forms and low contrast between thick and thin strokes. These typefaces are inspired by the handwriting of the Renaissance period and are often considered to be more legible and easier to read than other sans-serif typefaces."
    }
  ],
  [
    "Geometric Humanist",
    {
      stack: [
        "Avenir",
        "Montserrat",
        "Corbel",
        "URW Gothic",
        "source-sans-pro",
        "sans-serif"
      ],
      description: "Geometric Humanist typefaces are characterized by their clean, geometric forms and uniform stroke widths. These typefaces are often considered to be modern and sleek in appearance, and are often used for headlines and other display purposes. Futura is a famous example of this classification."
    }
  ],
  [
    "Classical Humanist",
    {
      stack: [
        "Optima",
        "Candara",
        "Noto Sans",
        "source-sans-pro",
        "sans-serif"
      ],
      description: "Classical Humanist typefaces are characterized by how the strokes subtly widen as they reach the stroke terminals without ending in a serif. These typefaces are inspired by classical Roman capitals and the stone-carving on Renaissance-period tombstones."
    }
  ],
  [
    "Neo-Grotesque",
    {
      stack: [
        "Inter",
        "Roboto",
        "Helvetica Neue",
        "Arial Nova",
        "Nimbus Sans",
        "Arial",
        "sans-serif"
      ],
      description: "Neo-Grotesque typefaces are a style of sans-serif that was developed in the late 19th and early 20th centuries and is characterized by its clean, geometric forms and uniform stroke widths. One of the most famous examples of a Neo-Grotesque typeface is Helvetica."
    }
  ],
  [
    "Monospace Slab Serif",
    {
      stack: ["Nimbus Mono PS", "Courier New", "monospace"],
      description: "Monospace Slab Serif typefaces are characterized by their fixed-width letters, which have the same width regardless of their shape, and its simple, geometric forms. Used to emulate typewriter output for reports, tabular work and technical documentation."
    }
  ],
  [
    "Monospace Code",
    {
      stack: [
        "ui-monospace",
        "Cascadia Code",
        "Source Code Pro",
        "Menlo",
        "Consolas",
        "DejaVu Sans Mono",
        "monospace"
      ],
      description: "Monospace Code typefaces are specifically designed for use in programming and other technical applications. These typefaces are characterized by their monospaced design, which means that all letters and characters have the same width, and their clear, legible forms."
    }
  ],
  [
    "Industrial",
    {
      stack: [
        "Bahnschrift",
        "DIN Alternate",
        "Franklin Gothic Medium",
        "Nimbus Sans Narrow",
        "sans-serif-condensed",
        "sans-serif"
      ],
      description: "Industrial typefaces originated in the late 19th century and was heavily influenced by the advancements in technology and industry during that time. Industrial typefaces are characterized by their bold, sans-serif letterforms, simple and straightforward appearance, and the use of straight lines and geometric shapes."
    }
  ],
  [
    "Rounded Sans",
    {
      stack: [
        "ui-rounded",
        "Hiragino Maru Gothic ProN",
        "Quicksand",
        "Comfortaa",
        "Manjari",
        "Arial Rounded MT",
        "Arial Rounded MT Bold",
        "Calibri",
        "source-sans-pro",
        "sans-serif"
      ],
      description: "Rounded typefaces are characterized by the rounded curved letterforms and give a softer, friendlier appearance. The rounded edges give the typeface a more organic and playful feel, making it suitable for use in informal or child-friendly designs. The rounded sans-serif style has been popular since the 1950s, and it continues to be widely used in advertising, branding, and other forms of graphic design."
    }
  ],
  [
    "Slab Serif",
    {
      stack: [
        "Rockwell",
        "Rockwell Nova",
        "Roboto Slab",
        "DejaVu Serif",
        "Sitka Small",
        "serif"
      ],
      description: "Slab Serif typefaces are characterized by the presence of thick, block-like serifs on the ends of each letterform. These serifs are usually unbracketed, meaning they do not have any curved or tapered transitions to the main stroke of the letter."
    }
  ],
  [
    "Antique",
    {
      stack: [
        "Superclarendon",
        "Bookman Old Style",
        "URW Bookman",
        "URW Bookman L",
        "Georgia Pro",
        "Georgia",
        "serif"
      ],
      description: "Antique typefaces, also known as Egyptians, are a subset of serif typefaces that were popular in the 19th century. They are characterized by their block-like serifs and thick uniform stroke weight."
    }
  ],
  [
    "Didone",
    {
      stack: [
        "Didot",
        "Bodoni MT",
        "Noto Serif Display",
        "URW Palladio L",
        "P052",
        "Sylfaen",
        "serif"
      ],
      description: "Didone typefaces, also known as Modern typefaces, are characterized by the high contrast between thick and thin strokes, vertical stress, and hairline serifs with no bracketing. The Didone style emerged in the late 18th century and gained popularity during the 19th century."
    }
  ],
  [
    "Handwritten",
    {
      stack: [
        "Segoe Print",
        "Bradley Hand",
        "Chilanka",
        "TSCu_Comic",
        "casual",
        "cursive"
      ],
      description: "Handwritten typefaces are designed to mimic the look and feel of handwriting. Despite the vast array of handwriting styles, this font stack tend to adopt a more informal and everyday style of handwriting."
    }
  ],
  [
    "Arial",
    {
      stack: ["Arial", "Roboto", "sans-serif"],
      description: "A clean, sans-serif font designed for legibility and versatility. Ideal for modern, minimalistic designs or digital content that requires simplicity."
    }
  ],
  [
    "Times New Roman",
    {
      stack: ["Times New Roman", "sans"],
      description: "A classic serif font known for its formal, professional appearance. Best suited for traditional documents, reports, and academic writing."
    }
  ],
  [
    "Courier New",
    {
      stack: ["Courier New", "monospace"],
      description: "A monospaced serif font with uniform spacing, mimicking typewriter text. Perfect for coding, technical documents, or retro-styled designs."
    }
  ],
  // Chineese fonts
  [
    "SimSun",
    {
      stack: ["SimSun", "Songti SC, sans-serif"],
      description: "A traditional serif font designed for Chinese characters, offering clear and readable text. Ideal for formal Chinese documents or multilingual content requiring both Chinese and Latin text."
    }
  ],
  [
    "PingFang SC",
    {
      stack: ["PingFang SC", "Microsoft Ya Hei", "sans-serif"],
      description: "A modern sans-serif font designed for simplified Chinese characters. Sleek and clean, it\u2019s best for digital content and interfaces where modern, streamlined design is needed."
    }
  ]
]);
var DEFAULT_FONT_FALLBACK = "sans-serif";
var FONT_FORMATS = /* @__PURE__ */ new Map([
  ["woff", "woff"],
  ["woff2", "woff2"],
  ["ttf", "truetype"]
]);
var FONT_MIME_TYPES = Array.from(FONT_FORMATS.keys()).map((format) => `.${format}`).join(", ");
var FONT_STYLES = ["normal", "italic", "oblique"];

// src/get-font-faces.ts
var sanitizeCssUrl = (str) => JSON.stringify(str);
var formatFace = (asset, format, url) => {
  if ("variationAxes" in asset.meta) {
    const { wght, wdth } = asset.meta?.variationAxes ?? {};
    return {
      fontFamily: asset.meta.family,
      fontStyle: "normal",
      fontDisplay: "swap",
      src: `url(${sanitizeCssUrl(url)}) format("${format}")`,
      fontStretch: wdth ? `${wdth.min}% ${wdth.max}%` : void 0,
      fontWeight: wght ? `${wght.min} ${wght.max}` : void 0
    };
  }
  return {
    fontFamily: asset.meta.family,
    fontStyle: asset.meta.style,
    fontWeight: asset.meta.weight,
    fontDisplay: "swap",
    src: `url(${sanitizeCssUrl(url)}) format("${format}")`
  };
};
var getKey = (asset) => {
  if ("variationAxes" in asset.meta) {
    return asset.meta.family + Object.values(asset.meta.variationAxes).join("");
  }
  return asset.meta.family + asset.meta.style + asset.meta.weight;
};
var getFontFaces = (assets, options) => {
  const { assetBaseUrl } = options;
  const faces = /* @__PURE__ */ new Map();
  for (const asset of assets) {
    const url = `${assetBaseUrl}${asset.name}`;
    const assetKey = getKey(asset);
    const face = faces.get(assetKey);
    const format = FONT_FORMATS.get(asset.format);
    if (format === void 0) {
      continue;
    }
    if (face === void 0) {
      const face2 = formatFace(asset, format, url);
      faces.set(assetKey, face2);
      continue;
    }
    face.src += `, url(${sanitizeCssUrl(url)}) format("${format}")`;
  }
  return Array.from(faces.values());
};

// src/schema.ts
import { z } from "zod";
var FontFormat = z.union([
  z.literal("ttf"),
  z.literal("woff"),
  z.literal("woff2")
]);
var AxisName = z.enum([
  "wght",
  "wdth",
  "slnt",
  "opsz",
  "ital",
  "GRAD",
  "XTRA",
  "XOPQ",
  "YOPQ",
  "YTLC",
  "YTUC",
  "YTAS",
  "YTDE",
  "YTFI"
]);
var VariationAxes = z.record(
  AxisName,
  z.object({
    name: z.string(),
    min: z.number(),
    default: z.number(),
    max: z.number()
  })
);
var FontMetaStatic = z.object({
  family: z.string(),
  style: z.enum(FONT_STYLES),
  weight: z.number()
});
var FontMetaVariable = z.object({
  family: z.string(),
  variationAxes: VariationAxes
});
var FontMeta = z.union([FontMetaStatic, FontMetaVariable]);

// src/font-weights.ts
var fontWeights = {
  "100": {
    label: "Thin",
    names: ["thin", "hairline"]
  },
  "200": {
    label: "Extra Light",
    names: ["extra light", "extralight", "ultra light", "ultralight"]
  },
  "300": {
    label: "Light",
    names: ["light"]
  },
  "400": {
    label: "Normal",
    names: ["normal", "regular"]
  },
  "500": {
    label: "Medium",
    names: ["medium"]
  },
  "600": {
    label: "Semi Bold",
    names: ["semi bold", "semibold", "demi bold", "demibold"]
  },
  "700": {
    label: "Bold",
    names: ["bold", "bold"]
  },
  "800": {
    label: "Extra Bold",
    names: ["extra bold", "extrabold", "ultra bold", "ultrabold"]
  },
  "900": {
    label: "Black",
    names: ["black", "heavy"]
  }
};
var fontWeightNames = new Map(
  Object.keys(fontWeights).map((weight) => {
    const weightData = fontWeights[weight];
    return weightData.names.map((name) => [name, weight]);
  }).flat()
);
export {
  DEFAULT_FONT_FALLBACK,
  FONT_FORMATS,
  FONT_MIME_TYPES,
  FONT_STYLES,
  FontFormat,
  FontMeta,
  FontMetaStatic,
  SYSTEM_FONTS,
  fontWeightNames,
  fontWeights,
  getFontFaces
};
