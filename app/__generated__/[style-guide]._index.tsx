/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, RichTextLink as RichTextLink, Link as Link, Form as Form } from "@webstudio-is/sdk-components-react-router";
import { Box as Box, Fragment as Fragment_1, Heading as Heading, Text as Text, Paragraph as Paragraph, CodeText as CodeText, List as List, ListItem as ListItem, Span as Span, Blockquote as Blockquote, Separator as Separator, HtmlEmbed as HtmlEmbed, Image as Image, Input as Input, Textarea as Textarea, Button as Button, Slot as Slot } from "@webstudio-is/sdk-components-react";
import { Accordion as Accordion, AccordionItem as AccordionItem, AccordionHeader as AccordionHeader, AccordionTrigger as AccordionTrigger, AccordionContent as AccordionContent, Label as Label, NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuTrigger as NavigationMenuTrigger, NavigationMenuContent as NavigationMenuContent, NavigationMenuViewport as NavigationMenuViewport, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";


      export const siteName = "VAIIYAwebsite";

      export const favIconAsset: string | undefined =
        "VAIIYA_only_i_s_FAVICON_D7F0CCQXVnLuLHhVjItzf.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"]

      export const pageBackgroundImageAssets: string[] =
        ["Group_1_3Lze2enBpFNP3rVOtd0Yp.svg","Pattern_79YdcihVRk2R5H0fuZxz7.svg","App_Wide_2x_1_(1)_69MShZLi3pDA9oCPN794H.webp","Icons_Zs8GOxaeJO22wgbZCoQDR.svg"]

      

      const Page = (_props: { system: any; }) => {
let [formState, set$formState] = useVariableState<any>("initial")
return <Body
id={"top"}
className={`w-body ${""}`}>
<Box
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c11ykhog c1kt5iwx c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
className={`w-heading c11nr3ex cy1haag c32myit cwrra4i c4rpps8 c1d23h5a cnu4kgu c1yb3n9o cbrrmm8 cuo9dm5 c40zsbj c13cx24t c1my01bv c8itdy4 c1dhz37v c1xzir7e`}>
{"Style Guide"}
</Heading>
<Text
className={`w-text c1nkzcyu che9upb`}>
{"Craft Version 1.0"}
</Text>
<Paragraph
className={`w-paragraph cz5g8eb c1nkzcyu`}>
{"Here is the community style guide according to "}
<RichTextLink
href={"https://docs.webstudio.is/university/craft"}
target={"_blank"}
className={`w-rich-text-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Craft"}
</RichTextLink>
{", the recommended starting point for Webstudio Projects. "}
<RichTextLink
href={"https://docs.webstudio.is/university/foundations/css-variables"}
target={"_blank"}
className={`w-rich-text-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"CSS variables"}
</RichTextLink>
{" containing colors, sizes, and more are on the Global Root. "}
</Paragraph>
</Box>
<Box
id={"layout"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"Layout"}
</Heading>
</Box>
<Box
className={`w-box copqmak c9sypx0 c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cna0hdz c1mzb2kd c1vaudkt cci8rp4 c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"section"}
</Text>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h ch3bbj5 c1mzb2kd c1vaudkt cci8rp4 c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"section"}
</Text>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1778y6x c1wt8a7g c2keyc8 cnkorcr c1fd0kk1 c11gzs80 c1fhkm63 clv8gve c1lfjoq7 c1s46o9r cdczzub c1357293 c9jnjeu czr2pxy c155uc7w ck4tzbx`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"container"}
</Text>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 copqmak c1vrexag ct02u4h c1fhkm63 clv8gve c1lfjoq7 c10zkoym ct8c5y2 c1f64byh co2qwzx ck4tzbx c1g7fxd7 cx6c9kw c174sw29`}>
<Box
className={`w-box c7rvndl c2w8hv4`}>
<Text
className={`w-text c1yehcfp c1umavhe caipwxg cbvffy can94pj cuccfz7 cir85gx c1qom380 cr8yqfm c1ufwdzl c5blvcv cml0h3f c5m8ase clv8gve`}>
{"grid"}
</Text>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Grid quickly provides the properties to create a grid. Once added, switch over to Local and type in your template columns."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Note, grid turns into flex on 767. This is because grid children may use start/end columns and would require us to reset each one manually on mobile. By setting the parent to flex, those values are ignored."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
id={"colors"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"Colors"}
</Heading>
<Paragraph
className={`w-paragraph che9upb c1rco612`}>
{"Change these values on the Global Root. It's best practice to map semantic variables such as "}
<Span
className={`w-text-1 c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`}>
{"--foreground-primary"}
</Span>
{" to another variable such as "}
<Span
className={`w-text-1 c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`}>
{"--gray-10"}
</Span>
{"."}
</Paragraph>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Foreground"}
</Heading>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-primary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c12y6bqh c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-secondary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1bd9ep2 ck4tzbx`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-accent"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cpp0nin c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-muted"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 czt9u4x c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-border"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cchda18 c6pvryr`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Background"}
</Heading>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-primary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cvgv9nf ck4tzbx`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-secondary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1llqm3g c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-accent"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1iv8y8b c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-card"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cow0ixc c6pvryr`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Other"}
</Heading>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--focus-color"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c17o0p2u c6pvryr`} />
</Box>
</Box>
</Box>
<Box
id={"links-buttons"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"Buttons and Links"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c16xs6ny c1wt8a7g c1fhkm63 clv8gve c1lfjoq7 c133lpx4 c14u5o53 ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"button-group"}
</Text>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c10zkoym ct8c5y2 c15cml01`}>
<Link
className={`w-link cnrz8fp c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c10ldywu cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cheslu6 cl60rel c1ib9cr2 cr2cdex`}>
<Text
tag={"span"}
className={`w-text`}>
{"button"}
</Text>
</Link>
<Link
className={`w-link cnrz8fp c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c10ldywu cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy c3pidkv c1kol985 cheslu6 cl60rel c1ib9cr2 cr2cdex`}>
<Text
tag={"span"}
className={`w-text`}>
{"is-button-small"}
</Text>
</Link>
<Link
className={`w-link c1mtjugd c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1gkfupp cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy ckz5c6u cl60rel c1ib9cr2 c1vlwcj`}>
{"is-button-secondary"}
</Link>
<Link
className={`w-link c1plv2ab c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 cn2jcgb cdcs8wy c1m1praz c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx cblpe2z cheslu6 cl60rel c1ib9cr2 c82bfcw c1ukphsi`}>
{"is-button-tertiary"}
</Link>
<Link
className={`w-link cnrz8fp c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c10ldywu cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cheslu6 cl60rel c1ib9cr2 cr2cdex`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle></svg>"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h`} />
<Text
tag={"span"}
className={`w-text`}>
{"button with icon"}
</Text>
</Link>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c16xs6ny c1wt8a7g c1fhkm63 clv8gve c1lfjoq7 c133lpx4 c14u5o53 ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"link"}
</Text>
<Link
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Link text you can edit"}
</Link>
<Link
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"is-link-nav"}
</Link>
</Box>
</Box>
</Box>
<Box
id={"elements"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"Elements"}
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"heading-1|2|3|4|5|6"}
</Text>
<Heading
className={`w-heading c11nr3ex cy1haag c32myit cwrra4i c4rpps8 c1d23h5a cnu4kgu c1yb3n9o cbrrmm8 cuo9dm5 c40zsbj c13cx24t c1my01bv c8itdy4 c1dhz37v c1xzir7e`}>
{"Heading 1 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"Heading 2 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Heading 3 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Heading 4 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1kol985 c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Heading 5 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1kol985 c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Heading 6 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines"}
</Paragraph>
<Blockquote
className={`w-blockquote cwrra4i c1kne9qb c1mwdnfw cm42med cptxs8s csdfh58 c15hexcm`}>
<Span
className={`w-text-1 c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"blockquote"}
</Span>
{" text you can edit"}
</Blockquote>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"list"}
</Text>
<List
className={`w-list cwrra4i cry9bxc c1lfjoq7 c1md20bl c1e892th`}>
<ListItem
className={`w-list-item cnrz8fp`}>
<Span
className={`w-text-1 c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"list-item"}
</Span>
{" text you can edit"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp`}>
{"List Item text you can edit"}
</ListItem>
<ListItem
className={`w-list-item cnrz8fp`}>
{"List Item text you can edit"}
</ListItem>
</List>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"separator"}
</Text>
<Separator
className={`w-separator c57dhyt czr2pxy c32myit cwrra4i`} />
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"code"}
</Text>
<CodeText
code={"console.log(\"Hello World\");"}
lang={""}
className={`w-code-text c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`} />
</Box>
</Box>
<Box
id={"forms"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"Forms"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Form"}
</Text>
<Form
state={formState}
onStateChange={(state: any) => {
formState = state
set$formState(formState)
}}
className={`w-webhook-form`}>
{(formState === 'initial' || formState === 'error') &&
<Box
className={`w-box cry9bxc c1lfjoq7 c10zkoym ct8c5y2`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1482uel`}>
<Label
htmlFor={"inputName"}
className={`w-label`}>
{"Name"}
</Label>
<Input
placeholder={"Name"}
required={true}
name={"name"}
id={"inputName"}
className={`w-text-input c1a8d7ts c1b2tb9q c122t6uk c1xm4ef6 ccfzz03 cub2gss cgcvr98 c1xjllne c1e7helk cg5i74l c1e3v5m0 cl60rel c2zsigv c1rqinhn c10oncvz`} />
</Box>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1482uel`}>
<Label
htmlFor={"inputPhone"}
className={`w-label`}>
{"Phone"}
</Label>
<Input
placeholder={"Phone"}
required={true}
name={"phone"}
id={"inputPhone"}
className={`w-text-input c1a8d7ts c1b2tb9q c122t6uk c1xm4ef6 ccfzz03 cub2gss cgcvr98 c1xjllne c1e7helk cg5i74l c1e3v5m0 cl60rel c2zsigv c1rqinhn c10oncvz`} />
</Box>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1482uel`}>
<Label
htmlFor={"inputEmail"}
className={`w-label`}>
{"Email"}
</Label>
<Input
placeholder={"Email"}
required={true}
type={"email"}
name={"email"}
id={"inputEmail"}
className={`w-text-input c1a8d7ts c1b2tb9q c122t6uk c1xm4ef6 ccfzz03 cub2gss cgcvr98 c1xjllne c1e7helk cg5i74l c1e3v5m0 cl60rel c2zsigv c1rqinhn c10oncvz`} />
</Box>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1482uel`}>
<Label
htmlFor={"inputMessage"}
className={`w-label`}>
{"Message"}
</Label>
<Textarea
placeholder={"Message"}
name={"message"}
required={true}
id={"inputMessage"}
className={`w-text-area c1a8d7ts c1b2tb9q c122t6uk c1xm4ef6 ccfzz03 cub2gss cgcvr98 c1xjllne c1e7helk cg5i74l c1e3v5m0 cl60rel c2zsigv c1rqinhn c10oncvz`} />
</Box>
</Box>
<Button
className={`w-button cnrz8fp c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c10ldywu cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cheslu6 cl60rel c1ib9cr2 cr2cdex`}>
{"Submit"}
</Button>
</Box>
}
{(formState === 'success') &&
<Box
className={`w-box`}>
{"Thank you for getting in touch!"}
</Box>
}
{(formState === 'error') &&
<Box
className={`w-box cle73z7`}>
{"Sorry, something went wrong."}
</Box>
}
</Form>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"radix"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"Radix"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Accordion"}
</Text>
<Accordion
collapsible={true}
defaultValue={"0"}
className={`w-accordion cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 czr2pxy`}>
<AccordionItem
data-ws-index="0"
className={`w-item`}>
<AccordionHeader
className={`w-item-header`}>
<AccordionTrigger
className={`w-item-trigger c1fhkm63 cqeb86t c1admj5d cf64rkw cry9bxc c1lxiyww c18v2pa2 c1qyy4dh cagnu3y cm8ogiu cg5i74l cuj80l1 c1mqkgmf c1gur2a0 c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j czr2pxy c1dkse89 cl60rel c1ib9cr2`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Accordion 1"}
</Heading>
<Box
className={`w-box cwdwelg cg4iiql ch2prsz c5m8ase c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ani={"expand"}
className={`w-item-content`}>
<Box
className={`w-box c15ucb9y`}>
<Text
tag={"span"}
className={`w-text`}>
{"Yes. It adheres to the WAI-ARIA design pattern."}
</Text>
</Box>
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-index="1"
className={`w-item`}>
<AccordionHeader
className={`w-item-header`}>
<AccordionTrigger
className={`w-item-trigger c1fhkm63 cqeb86t c1admj5d cf64rkw cry9bxc c1lxiyww c18v2pa2 c1qyy4dh cagnu3y cm8ogiu cg5i74l cuj80l1 c1mqkgmf c1gur2a0 c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j czr2pxy c1dkse89 cl60rel c1ib9cr2`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Accordion 2"}
</Heading>
<Box
className={`w-box cwdwelg cg4iiql ch2prsz c5m8ase c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ani={"expand"}
className={`w-item-content`}>
<Box
className={`w-box c15ucb9y`}>
<Text
tag={"span"}
className={`w-text`}>
{"Yes. It adheres to the WAI-ARIA design pattern."}
</Text>
</Box>
</AccordionContent>
</AccordionItem>
</Accordion>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Navigation Menu"}
</Text>
<Slot>
<Fragment_1>
<NavigationMenu
className={`w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf`}>
<NavigationMenuList
className={`w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
type={"button"}
className={`w-button catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
<Text
className={`w-text`}>
{"Features"}
</Text>
<Box
className={`w-box c7ewoh2 c5m8ase clv8gve ch2prsz cg4iiql c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
data-ws-index="0"
className={`w-menu-content c1cvcmzo cdwd3jx copqmak c1117wcl c10zkoym c1f64byh c1hne9jt c3xzas1 c1n6cdq4 c82q2z`}>
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.3487 8.56625L9.12498 7.375L7.93748 4.14875C7.86716 3.95771 7.73992 3.79283 7.57295 3.67637C7.40598 3.5599 7.2073 3.49746 7.00373 3.49746C6.80015 3.49746 6.60147 3.5599 6.4345 3.67637C6.26753 3.79283 6.1403 3.95771 6.06998 4.14875L4.87498 7.375L1.64873 8.5625C1.45768 8.63282 1.29281 8.76005 1.17634 8.92702C1.05988 9.094 0.997437 9.29267 0.997437 9.49625C0.997437 9.69983 1.05988 9.8985 1.17634 10.0655C1.29281 10.2324 1.45768 10.3597 1.64873 10.43L4.87498 11.625L6.06248 14.8512C6.1328 15.0423 6.26003 15.2072 6.427 15.3236C6.59397 15.4401 6.79265 15.5025 6.99623 15.5025C7.1998 15.5025 7.39848 15.4401 7.56545 15.3236C7.73242 15.2072 7.85965 15.0423 7.92998 14.8512L9.12498 11.625L12.3512 10.4375C12.5423 10.3672 12.7071 10.2399 12.8236 10.073C12.9401 9.906 13.0025 9.70733 13.0025 9.50375C13.0025 9.30017 12.9401 9.1015 12.8236 8.93452C12.7071 8.76755 12.5423 8.64032 12.3512 8.57L12.3487 8.56625ZM8.56248 10.7638C8.49461 10.7888 8.43297 10.8282 8.38183 10.8793C8.33068 10.9305 8.29124 10.9921 8.26623 11.06L6.99998 14.4906L5.73623 11.0625C5.71125 10.9939 5.67157 10.9316 5.61996 10.88C5.56835 10.8284 5.50606 10.7887 5.43748 10.7638L2.00935 9.5L5.43748 8.23625C5.50606 8.21128 5.56835 8.17159 5.61996 8.11998C5.67157 8.06837 5.71125 8.00608 5.73623 7.9375L6.99998 4.50938L8.26373 7.9375C8.28874 8.00537 8.32818 8.067 8.37933 8.11815C8.43047 8.1693 8.49211 8.20874 8.55998 8.23375L11.9906 9.5L8.56248 10.7638ZM8.99998 3C8.99998 2.86739 9.05266 2.74021 9.14642 2.64645C9.24019 2.55268 9.36737 2.5 9.49998 2.5H10.5V1.5C10.5 1.36739 10.5527 1.24021 10.6464 1.14645C10.7402 1.05268 10.8674 1 11 1C11.1326 1 11.2598 1.05268 11.3535 1.14645C11.4473 1.24021 11.5 1.36739 11.5 1.5V2.5H12.5C12.6326 2.5 12.7598 2.55268 12.8535 2.64645C12.9473 2.74021 13 2.86739 13 3C13 3.13261 12.9473 3.25979 12.8535 3.35355C12.7598 3.44732 12.6326 3.5 12.5 3.5H11.5V4.5C11.5 4.63261 11.4473 4.75979 11.3535 4.85355C11.2598 4.94732 11.1326 5 11 5C10.8674 5 10.7402 4.94732 10.6464 4.85355C10.5527 4.75979 10.5 4.63261 10.5 4.5V3.5H9.49998C9.36737 3.5 9.24019 3.44732 9.14642 3.35355C9.05266 3.25979 8.99998 3.13261 8.99998 3ZM15.5 6C15.5 6.13261 15.4473 6.25979 15.3535 6.35355C15.2598 6.44732 15.1326 6.5 15 6.5H14.5V7C14.5 7.13261 14.4473 7.25979 14.3535 7.35355C14.2598 7.44732 14.1326 7.5 14 7.5C13.8674 7.5 13.7402 7.44732 13.6464 7.35355C13.5527 7.25979 13.5 7.13261 13.5 7V6.5H13C12.8674 6.5 12.7402 6.44732 12.6464 6.35355C12.5527 6.25979 12.5 6.13261 12.5 6C12.5 5.86739 12.5527 5.74021 12.6464 5.64645C12.7402 5.55268 12.8674 5.5 13 5.5H13.5V5C13.5 4.86739 13.5527 4.74021 13.6464 4.64645C13.7402 4.55268 13.8674 4.5 14 4.5C14.1326 4.5 14.2598 4.55268 14.3535 4.64645C14.4473 4.74021 14.5 4.86739 14.5 5V5.5H15C15.1326 5.5 15.2598 5.55268 15.3535 5.64645C15.4473 5.74021 15.5 5.86739 15.5 6Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"SEO goal setting"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Achieve SEO goals"}
</Paragraph>
</Box>
</Link>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.9412 5.0419C12.2931 4.39231 11.5228 3.87744 10.6747 3.527C9.82668 3.17655 8.91762 2.99745 8 3.00003H7.975C4.12937 3.01315 1 6.18753 1 10.0707V11.5C1 11.7652 1.10536 12.0196 1.29289 12.2071C1.48043 12.3947 1.73478 12.5 2 12.5H14C14.2652 12.5 14.5196 12.3947 14.7071 12.2071C14.8946 12.0196 15 11.7652 15 11.5V10C15.0026 9.07839 14.8219 8.16544 14.4684 7.31426C14.115 6.46307 13.5959 5.69065 12.9412 5.0419ZM14 11.5H7.48187L10.9044 6.79378C10.9824 6.68653 11.0147 6.55266 10.9941 6.42162C10.9735 6.29058 10.9016 6.1731 10.7944 6.09503C10.6871 6.01695 10.5533 5.98468 10.4222 6.00531C10.2912 6.02594 10.1737 6.09778 10.0956 6.20503L6.245 11.5H2V10.0707C2 9.87815 2.00937 9.68815 2.02688 9.50003H3.5C3.63261 9.50003 3.75979 9.44735 3.85355 9.35358C3.94732 9.25981 4 9.13264 4 9.00003C4 8.86742 3.94732 8.74024 3.85355 8.64647C3.75979 8.55271 3.63261 8.50003 3.5 8.50003H2.20438C2.84938 6.07128 4.95438 4.23503 7.5 4.02128V5.50003C7.5 5.63264 7.55268 5.75981 7.64645 5.85358C7.74021 5.94735 7.86739 6.00003 8 6.00003C8.13261 6.00003 8.25979 5.94735 8.35355 5.85358C8.44732 5.75981 8.5 5.63264 8.5 5.50003V4.02065C9.74041 4.12504 10.9178 4.61209 11.8694 5.4145C12.8211 6.21692 13.5001 7.29508 13.8125 8.50003H12.5C12.3674 8.50003 12.2402 8.55271 12.1464 8.64647C12.0527 8.74024 12 8.86742 12 9.00003C12 9.13264 12.0527 9.25981 12.1464 9.35358C12.2402 9.44735 12.3674 9.50003 12.5 9.50003H13.9794C13.9925 9.66565 14 9.8319 14 10V11.5Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"User-friendly dashboard"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Complex SEO audits"}
</Paragraph>
</Box>
</Link>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.5 13.5C14.5 13.6326 14.4473 13.7598 14.3536 13.8536C14.2598 13.9473 14.1326 14 14 14H2C1.86739 14 1.74021 13.9473 1.64645 13.8536C1.55268 13.7598 1.5 13.6326 1.5 13.5V3.5C1.5 3.36739 1.55268 3.24021 1.64645 3.14645C1.74021 3.05268 1.86739 3 2 3C2.13261 3 2.25979 3.05268 2.35355 3.14645C2.44732 3.24021 2.5 3.36739 2.5 3.5V9.39812L5.67063 6.625C5.7569 6.54947 5.86652 6.5059 5.9811 6.50157C6.09569 6.49725 6.20828 6.53244 6.3 6.60125L9.97563 9.35812L13.6706 6.125C13.7191 6.07704 13.7768 6.0395 13.8403 6.01467C13.9038 5.98985 13.9717 5.97827 14.0398 5.98065C14.1079 5.98303 14.1749 5.99931 14.2365 6.0285C14.2981 6.05769 14.3531 6.09917 14.398 6.15038C14.443 6.2016 14.4771 6.26148 14.4981 6.32633C14.5191 6.39119 14.5266 6.45965 14.5201 6.52752C14.5137 6.59538 14.4935 6.66122 14.4607 6.72097C14.4279 6.78073 14.3832 6.83314 14.3294 6.875L10.3294 10.375C10.2431 10.4505 10.1335 10.4941 10.0189 10.4984C9.90431 10.5028 9.79173 10.4676 9.7 10.3988L6.02437 7.64313L2.5 10.7269V13H14C14.1326 13 14.2598 13.0527 14.3536 13.1464C14.4473 13.2402 14.5 13.3674 14.5 13.5Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Visual reports"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Your site’s performance."}
</Paragraph>
</Box>
</Link>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14 4.94376C13.8823 5.00471 13.7452 5.01644 13.6189 4.97635C13.4925 4.93627 13.3873 4.84767 13.3262 4.73001C12.849 3.7872 12.1266 2.99033 11.235 2.42314C11.1794 2.38809 11.1313 2.34245 11.0934 2.2888C11.0554 2.23516 11.0285 2.17457 11.0139 2.1105C10.9994 2.04643 10.9977 1.98012 11.0088 1.91538C11.0199 1.85063 11.0437 1.78871 11.0787 1.73314C11.1138 1.67757 11.1594 1.62946 11.2131 1.59153C11.2667 1.55361 11.3273 1.52662 11.3914 1.51211C11.4554 1.4976 11.5217 1.49585 11.5865 1.50697C11.6512 1.51808 11.7132 1.54184 11.7687 1.57689C12.8078 2.24222 13.6516 3.17162 14.2137 4.27001C14.2747 4.38771 14.2864 4.5248 14.2463 4.65114C14.2062 4.77747 14.1176 4.88273 14 4.94376ZM2.23185 5.00001C2.32345 4.99998 2.41328 4.97477 2.49153 4.92716C2.56979 4.87955 2.63346 4.81135 2.6756 4.73001C3.15285 3.7872 3.87523 2.99033 4.76685 2.42314C4.87907 2.35236 4.95857 2.2399 4.98787 2.1105C5.01718 1.9811 4.99388 1.84536 4.9231 1.73314C4.85232 1.62092 4.73986 1.54141 4.61046 1.51211C4.48106 1.48281 4.34532 1.50611 4.2331 1.57689C3.19397 2.24222 2.35021 3.17162 1.7881 4.27001C1.74862 4.34621 1.72942 4.43129 1.73235 4.51706C1.73527 4.60283 1.76022 4.6864 1.8048 4.75973C1.84938 4.83307 1.91208 4.89369 1.98687 4.93577C2.06166 4.97785 2.14603 4.99998 2.23185 5.00001ZM13.8631 11.4963C13.9517 11.6482 13.9986 11.8207 13.9992 11.9966C13.9998 12.1724 13.9541 12.3453 13.8665 12.4978C13.779 12.6503 13.6528 12.7771 13.5007 12.8652C13.3485 12.9534 13.1758 12.9999 13 13H10.45C10.3352 13.5652 10.0286 14.0733 9.5821 14.4382C9.13559 14.8032 8.57665 15.0025 7.99997 15.0025C7.42329 15.0025 6.86435 14.8032 6.41784 14.4382C5.97134 14.0733 5.66473 13.5652 5.54997 13H2.99997C2.82423 12.9997 2.65169 12.953 2.49973 12.8648C2.34776 12.7765 2.22173 12.6498 2.13435 12.4973C2.04696 12.3448 2.00129 12.172 2.00195 11.9963C2.00261 11.8205 2.04957 11.6481 2.1381 11.4963C2.70122 10.5244 2.99997 9.14251 2.99997 7.50001C2.99997 6.17393 3.52676 4.90216 4.46444 3.96448C5.40212 3.0268 6.67389 2.50001 7.99997 2.50001C9.32605 2.50001 10.5978 3.0268 11.5355 3.96448C12.4732 4.90216 13 6.17393 13 7.50001C13 9.14189 13.2987 10.5238 13.8631 11.4963ZM9.41372 13H6.58622C6.68981 13.2921 6.88135 13.545 7.13451 13.7239C7.38767 13.9027 7.69002 13.9987 7.99997 13.9987C8.30993 13.9987 8.61227 13.9027 8.86543 13.7239C9.11859 13.545 9.31013 13.2921 9.41372 13ZM13 12C12.335 10.8581 12 9.34439 12 7.50001C12 6.43915 11.5785 5.42173 10.8284 4.67159C10.0783 3.92144 9.06084 3.50001 7.99997 3.50001C6.93911 3.50001 5.92169 3.92144 5.17154 4.67159C4.4214 5.42173 3.99997 6.43915 3.99997 7.50001C3.99997 9.34501 3.66372 10.8588 2.99997 12H13Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Smart Keyword Generator"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Automatic suggestions"}
</Paragraph>
</Box>
</Link>
</Box>
<Box
className={`w-box`}>
<Link
className={`w-link cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 czx9unu cn1jd01 c12hsjsj c1ru090q c1syziaj c119suh8 cnqbj7z c1semaqr c1kectvc c18nx7en c422x95 c13zjl4p c135vpv5 c1bkqfhr c1h61a8n ci33z0 ce02iuh c15hexcm c1axwber c1l2ougi c9p707e c4rln6h c11nocyb c58h60l ce4uoav c141dmt7`}>
<Text
className={`w-text c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"One-Click Optimization"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Perform complex SEO audits and optimizations with a single click."}
</Paragraph>
</Link>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Developers"}
</Link>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="2"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
type={"button"}
className={`w-button catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
<Text
className={`w-text`}>
{"Company"}
</Text>
<Box
className={`w-box c7ewoh2 c5m8ase clv8gve ch2prsz cg4iiql c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
data-ws-index="1"
className={`w-menu-content c1cvcmzo cdwd3jx copqmak c1117wcl ceu66s9 c1f64byh c1hne9jt c3xzas1 c1n6cdq4 c82q2z`}>
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-users-round\"><path d=\"M18 21a8 8 0 0 0-16 0\"></path><circle cx=\"10\" cy=\"8\" r=\"5\"></circle><path d=\"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"About"}
</Text>
</Box>
</Link>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-newspaper\"><path d=\"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2\"></path><path d=\"M18 14h-8\"></path><path d=\"M15 18h-5\"></path><path d=\"M10 6h8v4h-8V6Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Blog"}
</Text>
</Box>
</Link>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-person-standing\"><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><path d=\"m9 20 3-6 3 6\"></path><path d=\"m6 8 6 2 6-2\"></path><path d=\"M12 10v4\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Careers"}
</Text>
</Box>
</Link>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-rss\"><path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Press"}
</Text>
</Box>
</Link>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="3"
className={`w-menu-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Blog"}
</Link>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="4"
className={`w-menu-item`}>
<Link
href={"/contact-the-dev"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Contact the dev!"}
</Link>
</NavigationMenuItem>
</NavigationMenuList>
<Box
className={`w-box cdwd3jx c1lzcxwg cry9bxc ct02u4h cdtylqg chmjof8 czr2pxy c3xzas1 c1n6cdq4`}>
<NavigationMenuViewport
data-ani={"zoom"}
className={`w-menu-viewport cavd3zn cpkqq5o cfugi66 cv2gy63 cxn73lu c5dy17i c1hsfuam cbvt2h6 coapalq cm26ajs cd3iwfe c1yhcvvf cwc6hbl c11r52nx ceu30e1 ce02iuh`} />
</Box>
</NavigationMenu>
</Fragment_1>
</Slot>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Sheet"}
</Text>
<Slot>
<Fragment_1>
<Dialog>
<DialogTrigger>
<Button
aria-label={"Open mobile menu"}
type={"button"}
className={`w-button cnrz8fp ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c10ldywu cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cheslu6 c9x99qz cl60rel c1ib9cr2 cr2cdex c891fy0 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c149s0mc c1ycnvnd`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</Button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c1d5jdd9`}>
<DialogContent
className={`w-dialog-content c1fhkm63 cx6c9kw ctopzly colc7hu c174sw29 cmaksb1 c1i9o1yp cktaign chyzecn ctgnupg c1i7z02k c5hqtns c4a9xim coam49y c15xw1g2`}>
<Box
className={`w-box cx6c9kw c1nd8hlk`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/home"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
<Image
loading={"eager"}
src={"/assets/VAIIYA_Logo.svg_bW9proSqkitpZzOPJx7H2.webp"}
width={512}
height={130}
alt={"logo"}
className={`w-image cwdqmmh`} />
</Link>
</Fragment_1>
</Slot>
<DialogClose
aria-label={"Close mobile menu"}
className={`w-close-button cnrz8fp ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c10ldywu cbm6zv4 c1b1wvmf c1mcu1jn c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c1xty5yn c1g1x4wk cheslu6 c9x99qz cl60rel c1ib9cr2 cr2cdex c4rd7b9 c1k6tqmo c1bxqinn ckrlbpk c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
</Box>
<Box
tag={"nav"}
aria-label={"Main mobile"}
className={`w-box cx6c9kw c1rstvfo c1bulmrh c12f3mdq c2ogfof`}>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 coxb4hz`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/home"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Features"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/home"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Integration"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/home"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Updates"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/home"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"FAQ"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/home"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Pricing"}
</Link>
</ListItem>
</List>
</Box>
<Link
className={`w-link cnrz8fp c13b531o c1my01bv c14z1eqr c1ktl1y1 cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c10ldywu cbm6zv4 c1b1wvmf c12sm2j2 c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx czr2pxy cheslu6 cl60rel c1ib9cr2 cr2cdex`}>
{"DOWNLOAD APP"}
</Link>
</DialogContent>
</DialogOverlay>
</Dialog>
</Fragment_1>
</Slot>
<Paragraph
className={`w-paragraph`}>
{"Must be on 767 or lower to see it."}
</Paragraph>
</Box>
</Box>
</Box>
<Box
id={"utility"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"Utility"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"slots"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"Slots"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-slot"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"custom"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"Custom"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Card"}
</Text>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 ce02iuh c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Heading text you can edit"}
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7`}>
<Paragraph
className={`w-paragraph`}>
{"Paragraph text you can edit"}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<Link
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Link text you can edit"}
</Link>
</Box>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Featured Logo"}
</Text>
<Box
className={`w-box copqmak c10zkoym ct8c5y2 corcrpm cstj0zg c1vrexag cx6c9kw c174sw29`}>
<Image
className={`w-image coejy3h c1fhiulb c1av00hf cji8cjn`} />
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"list-icons"}
</Text>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 c32myit c1z0l37u c1ml0hr7`}>
<ListItem
className={`w-list-item c1622pe5 c7uk64 cwlpv0j crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1vax25q`}>
{"List Item text you can edit"}
</ListItem>
</List>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"badge"}
</Text>
<Box
className={`w-box csru8nn c1md20bl c1e892th c1qyy4dh ct02u4h cxk6kow conc6us c108v1a0 c81fpui coapalq c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c12sm2j2 c1pu3n16 c135vpv5 ca7cv43`}>
<Text
className={`w-text cl7jefz c341xsy c11dowh9 c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c7vx2dq c1mgacbo cff1ay0 c14z73t1 ci6yy9q c1plv2ab ckmcr2z`}>
{"New"}
</Text>
<Text
className={`w-text`}>
{"The text you can edit"}
</Text>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"notes"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"Notes"}
</Heading>
<Paragraph
className={`w-paragraph che9upb c1rco612`}>
{"Add notes for yourself or other creators that explain any nuances of the build."}
</Paragraph>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Paragraph
className={`w-paragraph`}>
{"The following CSS variables were the modifications or additions made to the default "}
<RichTextLink
href={"https://wstd.us/craft"}
target={"_blank"}
className={`w-rich-text-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Craft"}
</RichTextLink>
{" variables, jyfi."}
</Paragraph>
<CodeText
code={"--gray-0: #FFFFFF;\n--gray-3: #D9D9D9;\n--gray-9: #282729;\n--gray-12: #000000;\n--purple-0: #F9F5FF;\n--purple-5: #9855FF;\n--purple-6: #8C45FF;\n--purple-8: #653B94;\n--purple-11: #2A193C;\n--purple-12: #020103;\n--gradient-1: linear-gradient(270deg, #0D0718 0%, rgba(15, 8, 27, 0));\n--gradient-2: linear-gradient(180deg, #FFFFFF 54.17%, #B372CF 100%);\n--gradient-3: linear-gradient(180deg, rgba(0, 0, 0, 0));\n--gradient-4: linear-gradient(180deg, transparent 0%, #371866 100%);\n--gradient-5: linear-gradient(179.77deg, rgba(3, 1, 6, 0));\n--gradient-6: linear-gradient(107.08deg, #190D2E 0.54%, #020103 99.46%);\n--gradient-7:  radial-gradient(circle,  #56299D 0%, #020103 100%);\n--gradient-8: linear-gradient(180deg, #010002 0%, #361764 100%);\n--gradient-9: linear-gradient(180deg, #000000 29%, rgba(0, 0, 0, 0));\n--gradient-10: linear-gradient(180.17deg, rgba(2, 1, 3, 0));\n--gradient-11: linear-gradient(180deg, #000000 0%, #371866 100%);\n--background-tertiary: var(--gray-9);\n--size-lg: 1100px;\n--font-size-fluid-3: clamp(.85rem,2vw,1.125rem);\n--font-size-fluid-2: clamp(1.5rem,6vw,2.5rem);\n--font-size-fluid-1: clamp(1.25rem,4vw,1.5rem);\n--font-letterspacing-0: -2px;"}
className={`w-code-text c2i0393 c19evryj cntnubm c16hrg7f c1qakuu0 czr2pxy cz20ayj cf58xc1`} />
</Box>
</Box>
</Box>
</Box>
<Box
tag={"nav"}
className={`w-box c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1sl0nnp c1qakuu0 c47o47j cw5izhw`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1778y6x c18v2pa2 c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 co39b1z`}>
<Link
href={"/style-guide#layout"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Layout"}
</Link>
<Link
href={"/style-guide#colors"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Colors"}
</Link>
<Link
href={"/style-guide#links-buttons"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Links & Buttons"}
</Link>
<Link
href={"/style-guide#elements"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Elements"}
</Link>
<Link
href={"/style-guide#forms"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Forms"}
</Link>
<Link
href={"/style-guide#radix"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Radix"}
</Link>
<Link
href={"/style-guide#utility"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Utility"}
</Link>
<Link
href={"/style-guide"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Slots"}
</Link>
<Link
href={"/style-guide#custom"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Custom"}
</Link>
<Link
href={"/style-guide#notes"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
{"Notes"}
</Link>
</Box>
</Box>
</Box>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1qyy4dh ct02u4h c1md20bl c1e892th c1fd0kk1 c11gzs80 cna0hdz c1mzb2kd`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf cy1haag c32myit cwrra4i c12y6bqh c1mpwk4w`}>
{"👇Template for new pages👇"}
</Heading>
<Paragraph
className={`w-paragraph c1rco612 c1qom380 czt9u4x`}>
{"When creating a new page, you can copy the \"Page Wrapper\" instance below (see navigator) and paste it on the new page. It contains the skeleton of a page, including a nav, footer, and section."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n  /* So we don't need to add a token to every paragraph to remove margin. */\n  p {\n    margin: 0;\n  }\n\n  /* * {\n    /* Make links scroll to their sections smoothly. */\n    scroll-behavior: smooth;\n  } */\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>\n:root {\n  --ani-duration: var(--duration-default, .2s);\n  --ani-delay: 0s;\n  --ani-slide-offset: 20%;\n  --ani-zoom-in-scale: 1;\n  --ani-zoom-out-scale: .85;\n  --ani-flip-rotate: 30deg;\n  --ani-easing: var(--easing-default, ease);\n  --ani-fill-mode: forwards;\n}\n[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}\n@keyframes fadeIn{from{opacity:0}\nto{opacity:1}}\n@keyframes fadeOut{from{opacity:1}\nto{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}\n@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}\nto{opacity:1;translate:none}}\n@keyframes slideOut{from{opacity:1;translate:none}\nto{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}\n@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}\nto{opacity:1;scale:1}}\n@keyframes zoomOut{from{opacity:1;scale:1}\nto{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}\n@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}\nto{rotate:y 0;opacity:1}}\n@keyframes flipOutY{from{rotate:y 0;opacity:1}\nto{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}\n@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}\nto{rotate:x 0;opacity:1}}\n@keyframes flipOutX{from{rotate:x 0;opacity:1}\nto{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}\n@keyframes expandDown{from{height:0}\nto{height:var(--newHeight)}}\n@keyframes expandUp{from{height:var(--newHeight)}\nto{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}\n@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}\n</style>"}
className={`w-html-embed`} />
<Box
tag={"header"}
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh ct02u4h c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1a5jpyh c3u045t c1fysxfs c1tuvjqt`}>
<Box
className={`w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/home"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p cl60rel c1ib9cr2 c1d7u282`}>
<Image
loading={"eager"}
src={"/assets/VAIIYA_Logo.svg_bW9proSqkitpZzOPJx7H2.webp"}
width={512}
height={130}
alt={"logo"}
className={`w-image cwdqmmh`} />
</Link>
</Fragment_1>
</Slot>
<Box
tag={"nav"}
aria-label={"main"}
className={`w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t`}>
<Slot>
<Fragment_1>
<NavigationMenu
className={`w-navigation-menu c1cqu2xh cry9bxc cvblku1 c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf`}>
<NavigationMenuList
className={`w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h cdq89vd c1tcoltv c3qzgd0 c1y6imu0 c1n13r54 c1le23sj c40yjke c1kzn7na c17q2jvf c1gw84sn cjq768y`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
type={"button"}
className={`w-button catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
<Text
className={`w-text`}>
{"Features"}
</Text>
<Box
className={`w-box c7ewoh2 c5m8ase clv8gve ch2prsz cg4iiql c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
data-ws-index="0"
className={`w-menu-content c1cvcmzo cdwd3jx copqmak c1117wcl c10zkoym c1f64byh c1hne9jt c3xzas1 c1n6cdq4 c82q2z`}>
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.3487 8.56625L9.12498 7.375L7.93748 4.14875C7.86716 3.95771 7.73992 3.79283 7.57295 3.67637C7.40598 3.5599 7.2073 3.49746 7.00373 3.49746C6.80015 3.49746 6.60147 3.5599 6.4345 3.67637C6.26753 3.79283 6.1403 3.95771 6.06998 4.14875L4.87498 7.375L1.64873 8.5625C1.45768 8.63282 1.29281 8.76005 1.17634 8.92702C1.05988 9.094 0.997437 9.29267 0.997437 9.49625C0.997437 9.69983 1.05988 9.8985 1.17634 10.0655C1.29281 10.2324 1.45768 10.3597 1.64873 10.43L4.87498 11.625L6.06248 14.8512C6.1328 15.0423 6.26003 15.2072 6.427 15.3236C6.59397 15.4401 6.79265 15.5025 6.99623 15.5025C7.1998 15.5025 7.39848 15.4401 7.56545 15.3236C7.73242 15.2072 7.85965 15.0423 7.92998 14.8512L9.12498 11.625L12.3512 10.4375C12.5423 10.3672 12.7071 10.2399 12.8236 10.073C12.9401 9.906 13.0025 9.70733 13.0025 9.50375C13.0025 9.30017 12.9401 9.1015 12.8236 8.93452C12.7071 8.76755 12.5423 8.64032 12.3512 8.57L12.3487 8.56625ZM8.56248 10.7638C8.49461 10.7888 8.43297 10.8282 8.38183 10.8793C8.33068 10.9305 8.29124 10.9921 8.26623 11.06L6.99998 14.4906L5.73623 11.0625C5.71125 10.9939 5.67157 10.9316 5.61996 10.88C5.56835 10.8284 5.50606 10.7887 5.43748 10.7638L2.00935 9.5L5.43748 8.23625C5.50606 8.21128 5.56835 8.17159 5.61996 8.11998C5.67157 8.06837 5.71125 8.00608 5.73623 7.9375L6.99998 4.50938L8.26373 7.9375C8.28874 8.00537 8.32818 8.067 8.37933 8.11815C8.43047 8.1693 8.49211 8.20874 8.55998 8.23375L11.9906 9.5L8.56248 10.7638ZM8.99998 3C8.99998 2.86739 9.05266 2.74021 9.14642 2.64645C9.24019 2.55268 9.36737 2.5 9.49998 2.5H10.5V1.5C10.5 1.36739 10.5527 1.24021 10.6464 1.14645C10.7402 1.05268 10.8674 1 11 1C11.1326 1 11.2598 1.05268 11.3535 1.14645C11.4473 1.24021 11.5 1.36739 11.5 1.5V2.5H12.5C12.6326 2.5 12.7598 2.55268 12.8535 2.64645C12.9473 2.74021 13 2.86739 13 3C13 3.13261 12.9473 3.25979 12.8535 3.35355C12.7598 3.44732 12.6326 3.5 12.5 3.5H11.5V4.5C11.5 4.63261 11.4473 4.75979 11.3535 4.85355C11.2598 4.94732 11.1326 5 11 5C10.8674 5 10.7402 4.94732 10.6464 4.85355C10.5527 4.75979 10.5 4.63261 10.5 4.5V3.5H9.49998C9.36737 3.5 9.24019 3.44732 9.14642 3.35355C9.05266 3.25979 8.99998 3.13261 8.99998 3ZM15.5 6C15.5 6.13261 15.4473 6.25979 15.3535 6.35355C15.2598 6.44732 15.1326 6.5 15 6.5H14.5V7C14.5 7.13261 14.4473 7.25979 14.3535 7.35355C14.2598 7.44732 14.1326 7.5 14 7.5C13.8674 7.5 13.7402 7.44732 13.6464 7.35355C13.5527 7.25979 13.5 7.13261 13.5 7V6.5H13C12.8674 6.5 12.7402 6.44732 12.6464 6.35355C12.5527 6.25979 12.5 6.13261 12.5 6C12.5 5.86739 12.5527 5.74021 12.6464 5.64645C12.7402 5.55268 12.8674 5.5 13 5.5H13.5V5C13.5 4.86739 13.5527 4.74021 13.6464 4.64645C13.7402 4.55268 13.8674 4.5 14 4.5C14.1326 4.5 14.2598 4.55268 14.3535 4.64645C14.4473 4.74021 14.5 4.86739 14.5 5V5.5H15C15.1326 5.5 15.2598 5.55268 15.3535 5.64645C15.4473 5.74021 15.5 5.86739 15.5 6Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"SEO goal setting"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Achieve SEO goals"}
</Paragraph>
</Box>
</Link>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.9412 5.0419C12.2931 4.39231 11.5228 3.87744 10.6747 3.527C9.82668 3.17655 8.91762 2.99745 8 3.00003H7.975C4.12937 3.01315 1 6.18753 1 10.0707V11.5C1 11.7652 1.10536 12.0196 1.29289 12.2071C1.48043 12.3947 1.73478 12.5 2 12.5H14C14.2652 12.5 14.5196 12.3947 14.7071 12.2071C14.8946 12.0196 15 11.7652 15 11.5V10C15.0026 9.07839 14.8219 8.16544 14.4684 7.31426C14.115 6.46307 13.5959 5.69065 12.9412 5.0419ZM14 11.5H7.48187L10.9044 6.79378C10.9824 6.68653 11.0147 6.55266 10.9941 6.42162C10.9735 6.29058 10.9016 6.1731 10.7944 6.09503C10.6871 6.01695 10.5533 5.98468 10.4222 6.00531C10.2912 6.02594 10.1737 6.09778 10.0956 6.20503L6.245 11.5H2V10.0707C2 9.87815 2.00937 9.68815 2.02688 9.50003H3.5C3.63261 9.50003 3.75979 9.44735 3.85355 9.35358C3.94732 9.25981 4 9.13264 4 9.00003C4 8.86742 3.94732 8.74024 3.85355 8.64647C3.75979 8.55271 3.63261 8.50003 3.5 8.50003H2.20438C2.84938 6.07128 4.95438 4.23503 7.5 4.02128V5.50003C7.5 5.63264 7.55268 5.75981 7.64645 5.85358C7.74021 5.94735 7.86739 6.00003 8 6.00003C8.13261 6.00003 8.25979 5.94735 8.35355 5.85358C8.44732 5.75981 8.5 5.63264 8.5 5.50003V4.02065C9.74041 4.12504 10.9178 4.61209 11.8694 5.4145C12.8211 6.21692 13.5001 7.29508 13.8125 8.50003H12.5C12.3674 8.50003 12.2402 8.55271 12.1464 8.64647C12.0527 8.74024 12 8.86742 12 9.00003C12 9.13264 12.0527 9.25981 12.1464 9.35358C12.2402 9.44735 12.3674 9.50003 12.5 9.50003H13.9794C13.9925 9.66565 14 9.8319 14 10V11.5Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"User-friendly dashboard"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Complex SEO audits"}
</Paragraph>
</Box>
</Link>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.5 13.5C14.5 13.6326 14.4473 13.7598 14.3536 13.8536C14.2598 13.9473 14.1326 14 14 14H2C1.86739 14 1.74021 13.9473 1.64645 13.8536C1.55268 13.7598 1.5 13.6326 1.5 13.5V3.5C1.5 3.36739 1.55268 3.24021 1.64645 3.14645C1.74021 3.05268 1.86739 3 2 3C2.13261 3 2.25979 3.05268 2.35355 3.14645C2.44732 3.24021 2.5 3.36739 2.5 3.5V9.39812L5.67063 6.625C5.7569 6.54947 5.86652 6.5059 5.9811 6.50157C6.09569 6.49725 6.20828 6.53244 6.3 6.60125L9.97563 9.35812L13.6706 6.125C13.7191 6.07704 13.7768 6.0395 13.8403 6.01467C13.9038 5.98985 13.9717 5.97827 14.0398 5.98065C14.1079 5.98303 14.1749 5.99931 14.2365 6.0285C14.2981 6.05769 14.3531 6.09917 14.398 6.15038C14.443 6.2016 14.4771 6.26148 14.4981 6.32633C14.5191 6.39119 14.5266 6.45965 14.5201 6.52752C14.5137 6.59538 14.4935 6.66122 14.4607 6.72097C14.4279 6.78073 14.3832 6.83314 14.3294 6.875L10.3294 10.375C10.2431 10.4505 10.1335 10.4941 10.0189 10.4984C9.90431 10.5028 9.79173 10.4676 9.7 10.3988L6.02437 7.64313L2.5 10.7269V13H14C14.1326 13 14.2598 13.0527 14.3536 13.1464C14.4473 13.2402 14.5 13.3674 14.5 13.5Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Visual reports"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Your site’s performance."}
</Paragraph>
</Box>
</Link>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14 4.94376C13.8823 5.00471 13.7452 5.01644 13.6189 4.97635C13.4925 4.93627 13.3873 4.84767 13.3262 4.73001C12.849 3.7872 12.1266 2.99033 11.235 2.42314C11.1794 2.38809 11.1313 2.34245 11.0934 2.2888C11.0554 2.23516 11.0285 2.17457 11.0139 2.1105C10.9994 2.04643 10.9977 1.98012 11.0088 1.91538C11.0199 1.85063 11.0437 1.78871 11.0787 1.73314C11.1138 1.67757 11.1594 1.62946 11.2131 1.59153C11.2667 1.55361 11.3273 1.52662 11.3914 1.51211C11.4554 1.4976 11.5217 1.49585 11.5865 1.50697C11.6512 1.51808 11.7132 1.54184 11.7687 1.57689C12.8078 2.24222 13.6516 3.17162 14.2137 4.27001C14.2747 4.38771 14.2864 4.5248 14.2463 4.65114C14.2062 4.77747 14.1176 4.88273 14 4.94376ZM2.23185 5.00001C2.32345 4.99998 2.41328 4.97477 2.49153 4.92716C2.56979 4.87955 2.63346 4.81135 2.6756 4.73001C3.15285 3.7872 3.87523 2.99033 4.76685 2.42314C4.87907 2.35236 4.95857 2.2399 4.98787 2.1105C5.01718 1.9811 4.99388 1.84536 4.9231 1.73314C4.85232 1.62092 4.73986 1.54141 4.61046 1.51211C4.48106 1.48281 4.34532 1.50611 4.2331 1.57689C3.19397 2.24222 2.35021 3.17162 1.7881 4.27001C1.74862 4.34621 1.72942 4.43129 1.73235 4.51706C1.73527 4.60283 1.76022 4.6864 1.8048 4.75973C1.84938 4.83307 1.91208 4.89369 1.98687 4.93577C2.06166 4.97785 2.14603 4.99998 2.23185 5.00001ZM13.8631 11.4963C13.9517 11.6482 13.9986 11.8207 13.9992 11.9966C13.9998 12.1724 13.9541 12.3453 13.8665 12.4978C13.779 12.6503 13.6528 12.7771 13.5007 12.8652C13.3485 12.9534 13.1758 12.9999 13 13H10.45C10.3352 13.5652 10.0286 14.0733 9.5821 14.4382C9.13559 14.8032 8.57665 15.0025 7.99997 15.0025C7.42329 15.0025 6.86435 14.8032 6.41784 14.4382C5.97134 14.0733 5.66473 13.5652 5.54997 13H2.99997C2.82423 12.9997 2.65169 12.953 2.49973 12.8648C2.34776 12.7765 2.22173 12.6498 2.13435 12.4973C2.04696 12.3448 2.00129 12.172 2.00195 11.9963C2.00261 11.8205 2.04957 11.6481 2.1381 11.4963C2.70122 10.5244 2.99997 9.14251 2.99997 7.50001C2.99997 6.17393 3.52676 4.90216 4.46444 3.96448C5.40212 3.0268 6.67389 2.50001 7.99997 2.50001C9.32605 2.50001 10.5978 3.0268 11.5355 3.96448C12.4732 4.90216 13 6.17393 13 7.50001C13 9.14189 13.2987 10.5238 13.8631 11.4963ZM9.41372 13H6.58622C6.68981 13.2921 6.88135 13.545 7.13451 13.7239C7.38767 13.9027 7.69002 13.9987 7.99997 13.9987C8.30993 13.9987 8.61227 13.9027 8.86543 13.7239C9.11859 13.545 9.31013 13.2921 9.41372 13ZM13 12C12.335 10.8581 12 9.34439 12 7.50001C12 6.43915 11.5785 5.42173 10.8284 4.67159C10.0783 3.92144 9.06084 3.50001 7.99997 3.50001C6.93911 3.50001 5.92169 3.92144 5.17154 4.67159C4.4214 5.42173 3.99997 6.43915 3.99997 7.50001C3.99997 9.34501 3.66372 10.8588 2.99997 12H13Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Smart Keyword Generator"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Automatic suggestions"}
</Paragraph>
</Box>
</Link>
</Box>
<Box
className={`w-box`}>
<Link
className={`w-link cry9bxc c1lfjoq7 c1t3frhm c1z0l37u c1ml0hr7 cv2gy63 cxn73lu c5dy17i c1hsfuam cg37ob1 czx9unu cn1jd01 c12hsjsj c1ru090q c1syziaj c119suh8 cnqbj7z c1semaqr c1kectvc c18nx7en c422x95 c13zjl4p c135vpv5 c1bkqfhr c1h61a8n ci33z0 ce02iuh c15hexcm c1axwber c1l2ougi c9p707e c4rln6h c11nocyb c58h60l ce4uoav c141dmt7`}>
<Text
className={`w-text c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"One-Click Optimization"}
</Text>
<Paragraph
className={`w-paragraph catu86a`}>
{"Perform complex SEO audits and optimizations with a single click."}
</Paragraph>
</Link>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Developers"}
</Link>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="2"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
type={"button"}
className={`w-button catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
<Text
className={`w-text`}>
{"Company"}
</Text>
<Box
className={`w-box c7ewoh2 c5m8ase clv8gve ch2prsz cg4iiql c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
data-ws-index="1"
className={`w-menu-content c1cvcmzo cdwd3jx copqmak c1117wcl ceu66s9 c1f64byh c1hne9jt c3xzas1 c1n6cdq4 c82q2z`}>
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-users-round\"><path d=\"M18 21a8 8 0 0 0-16 0\"></path><circle cx=\"10\" cy=\"8\" r=\"5\"></circle><path d=\"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"About"}
</Text>
</Box>
</Link>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-newspaper\"><path d=\"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2\"></path><path d=\"M18 14h-8\"></path><path d=\"M15 18h-5\"></path><path d=\"M10 6h8v4h-8V6Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Blog"}
</Text>
</Box>
</Link>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-person-standing\"><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><path d=\"m9 20 3-6 3 6\"></path><path d=\"m6 8 6 2 6-2\"></path><path d=\"M12 10v4\"></path></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Careers"}
</Text>
</Box>
</Link>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link cnrz8fp cry9bxc ci3odkx cp3rjlh cay7lmp cwc6hbl c11r52nx cr8yqfm c1ufwdzl c5blvcv cml0h3f c135vpv5 c1lxiyww c1hsxdv1 cveinpz c1qyy4dh c1wt8a7g cz5x2lt c11b1em2 cgdd4q9 ci33z0 cqej0ws codg43x cax3zcx cl60rel c1ib9cr2 c1d7u282 c7x5mt0 c44vfqt c1e8zdxj c1xs0wst c7s1hdt cso8rzz c10fha7n c1b7r3cd`}>
<Box
className={`w-box c1u3r42f c1kzehto cf7kp5e c1kb883z cst7gfs c461xgp c3hwam5 c1642u22 c1lgfx2t cax3zcx`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-rss\"><path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle></svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Text
className={`w-text cy1haag c12y6bqh`}>
{"Press"}
</Text>
</Box>
</Link>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="3"
className={`w-menu-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Blog"}
</Link>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="4"
className={`w-menu-item`}>
<Link
href={"/contact-the-dev"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Contact the dev!"}
</Link>
</NavigationMenuItem>
</NavigationMenuList>
<Box
className={`w-box cdwd3jx c1lzcxwg cry9bxc ct02u4h cdtylqg chmjof8 czr2pxy c3xzas1 c1n6cdq4`}>
<NavigationMenuViewport
data-ani={"zoom"}
className={`w-menu-viewport cavd3zn cpkqq5o cfugi66 cv2gy63 cxn73lu c5dy17i c1hsfuam cbvt2h6 coapalq cm26ajs cd3iwfe c1yhcvvf cwc6hbl c11r52nx ceu30e1 ce02iuh`} />
</Box>
</NavigationMenu>
</Fragment_1>
</Slot>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={`w-box`}>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`} />
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box cna0hdz c1mzb2kd ${"footer"}`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c18v2pa2 c174sw29 cmaksb1 c1i9o1yp`}>
<Link
href={"/home"}
className={`w-link c1pu3n16 cld4m44 c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p c1x4yn0w cl60rel c1ib9cr2 c1d7u282`}>
<Image
alt={"Logo"}
src={"/assets/VAIIYA_Logo.svg_bW9proSqkitpZzOPJx7H2.webp"}
width={512}
height={130}
className={`w-image c18lgxql`} />
</Link>
<Box
className={`w-box cry9bxc c1lxiyww c1s46o9r cdczzub c1jjfh4b`}>
<Box
tag={"nav"}
aria-labelledby={"menu1Title"}
className={`w-box cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<Heading
tag={"h2"}
id={"menu1Title"}
className={`w-heading c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Product"}
</Heading>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Features"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Integration"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Updates"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"FAQ"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Pricing"}
</Link>
</ListItem>
</List>
</Box>
<Box
tag={"nav"}
aria-labelledby={"menu2Title"}
className={`w-box cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<Heading
tag={"h2"}
id={"menu2Title"}
className={`w-heading c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Company"}
</Heading>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"About"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Blog"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Careers"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Manifesto"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Press"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Contract"}
</Link>
</ListItem>
</List>
</Box>
<Box
tag={"nav"}
aria-labelledby={"menu3Title"}
className={`w-box cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<Heading
tag={"h2"}
id={"menu3Title"}
className={`w-heading c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Resources"}
</Heading>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/contact-the-dev"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Contact the developer!"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Community"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Guides"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Docs"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Press"}
</Link>
</ListItem>
</List>
</Box>
<Box
tag={"nav"}
aria-labelledby={"menu4Title"}
className={`w-box cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<Heading
tag={"h2"}
id={"menu4Title"}
className={`w-heading c160atll c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Legal"}
</Heading>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/legal/disclaimer"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"DISCLAIMERS"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Terms"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/placeholders/soontmpagewithnotice"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Security"}
</Link>
</ListItem>
</List>
</Box>
</Box>
</Box>
<Box
className={`w-box cry9bxc ct02u4h c1lfjoq7 c16xs6ny`}>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c1md20bl c1e892th c1y4fwd4`}>
<Text
className={`w-text`}>
{"© 2025 T342, under the GNU GPLv3."}
</Text>
<Link
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Credits"}
</Link>
</Box>
</Box>
</Box>
</Box>
<Link
href={"https://webstudio.is/"}
target={"_blank"}
rel={"nofollow"}
className={`w-link cx7e777 cn12ej2 c1ngdwug c10yh23j c7f1npl c1sjzfnm c1trj0l7 cjqo3r0 cbuoy5w c393lej csxsvt6 c1oj4qw c183qt6d c1twgu0n c5r7m82 c1fhiulb cifio c1u7hg1c c1qqyhy5 c1mb8swa c1awhn4n c1qyy4dh ct02u4h csru8nn c135vpv5 c119suh8 cujxabw c17xbrdu c1lvufj2 c1oohece co9inq6 c18nx7en c13zjl4p ch9sscy c272dxa`}>
<Image
width={20}
height={20}
alt={"Webstudio Logo"}
optimize={false}
className={`w-image c13fq7lq c1ckxn0n`} />
<Text
tag={"span"}
className={`w-text`}>
{"Built with Webstudio"}
</Text>
</Link>
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    