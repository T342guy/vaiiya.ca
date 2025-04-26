/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Box as Box, Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Button as Button, Text as Text, Image as Image, Heading as Heading, List as List, ListItem as ListItem, Slot as Slot, Paragraph as Paragraph, Separator as Separator, Italic as Italic, Span as Span, Superscript as Superscript } from "@webstudio-is/sdk-components-react";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuTrigger as NavigationMenuTrigger, NavigationMenuContent as NavigationMenuContent, NavigationMenuViewport as NavigationMenuViewport } from "@webstudio-is/sdk-components-react-radix";
import { Link as Link, Body as Body, RichTextLink as RichTextLink } from "@webstudio-is/sdk-components-react-router";


      export const siteName = "VAIIYA";

      export const favIconAsset: string | undefined =
        "VAIIYA_only_i_s_FAVICON_D7F0CCQXVnLuLHhVjItzf.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["Tomorrow-ExtraBold_Hh5NxcXNNYJ_DNoMc0B-X.ttf","Tomorrow-MediumItalic_tWlScBxsMqceBCk_wMESf.ttf","Tomorrow-BoldItalic_FrgLNr4s6I5zEaNzlS5Ll.ttf","Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf","Tomorrow-Regular_s0Wr57WzsMgyqIi9h8wja.ttf","Tomorrow-Thin_zo6SCReiSDWGdAx13pSzL.ttf","Tomorrow-ExtraLight_QdECQrY8d4spB9PIO0u46.ttf","Tomorrow-Black_47xDJmnedtXo13t6a9Ha7.ttf","Tomorrow-ExtraBoldItalic_rpUFBE_BHYyD04j8cuYUe.ttf","Tomorrow-Light_zCNH-jceZ7pcVv_lFVYD1.ttf","Tomorrow-BlackItalic_j2doUIEC0oWgc-w_Yt5Yx.ttf","Tomorrow-SemiBold_HA3A31iCcdl5rXSejhoNn.ttf","Tomorrow-LightItalic_eBVjmQ_Y4FN3KwPk0lOgi.ttf","Tomorrow-ThinItalic_iPgW8x3haXf20SS44KcjE.ttf","Tomorrow-Bold_AK7kfh61DcQ8st1QIure5.ttf","Tomorrow-Medium_6hc1etsxjooZwwpQuGmJV.ttf","Tomorrow-SemiBoldItalic_OEEbGBnw8QebjPBWgHF8_.ttf","Tomorrow-ExtraLightItalic_hv_S5dZjv_dDAIwnhnh3w.ttf","Tomorrow-Italic_c1rnCDipwYGTZ8qrY5mdH.ttf"]

      export const pageBackgroundImageAssets: string[] =
        ["Untitled_0Sb78cJTz21abRBz7HqQ7.webp","Pattern_79YdcihVRk2R5H0fuZxz7.svg","App_Wide_2x_1_(1)_69MShZLi3pDA9oCPN794H.webp"]

      

      const Page = (_props: { system: any; }) => {
return <Body
className={`w-body`}>
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
className={`w-box czr2pxy copqmak ct8c5y2 c10zkoym cignq8x cavd3zn c9ylysu c1tbut6b c1tzxl2z c16n19h8 cwqojdn c7klx50 c1qrxaqp cjkeggx c8pi8fa cow6lkx c1oxjrsz csud216 c1xiy5b1 cq7d8me c1ycnvnd`}>
<Slot>
</Slot>
<Box
tag={"nav"}
aria-label={"main"}
className={`w-box c1mcu1jn cry9bxc c1qyy4dh ct02u4h c1lfjoq7 c1g50ce cgtnddv c1le23sj c40yjke c1kzn7na c17q2jvf ct49a6u c102r6kr c4sllhu clmbo8f cc3dq2t`}>
<Slot>
<Fragment_1>
<NavigationMenu
className={`w-navigation-menu c1cqu2xh cry9bxc c7vx2dq c1xuq60h c1p217py c193ydh7 crglsme c14ip164 c1bkqfhr c1qyy4dh ct02u4h c13ldpkq c1gw84sn cjq768y c1le23sj c40yjke c1kzn7na c17q2jvf`}>
<Box
className={`w-box`}>
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
className={`w-image c20huwx`} />
</Link>
</Box>
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
href={"/blog/home"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Blog"}
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
tag={"section"}
className={`w-box cna0hdz c1mzb2kd cdtylqg chmjof8 c1w3n4cj cn1jd01 c1as2ysv c1ru090q c1syziaj c19ffyra cnqbj7z c1axwber`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80 cavd3zn`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g c1qom380`}>
<Separator
className={`w-separator`} />
<Heading
tag={"h1"}
className={`w-heading c11nr3ex cy1haag c32myit cwrra4i c139s0bz c3lq6r8 c1muyosp cvw3fbs cjhfojh c1cmxm2w c2c7i6t c13cx24t c1my01bv c8itdy4 c74kosi c1qom380 c1357293 c9jnjeu cjfg1nn c3u045t c180fws7 c1dhz37v c1vy1xjw`}>
{"DISCLAIMERS AND LEGAL"}
</Heading>
<Paragraph
className={`w-paragraph c16xpvrq c1qom380 c1j113cj c1357293 c9jnjeu cwlbdha cjfg1nn cn12ej2 c8dp7hf c1glz8f4 c10dt6tb c1foc3vw`}>
<Span
className={`w-text-1`}>
<Superscript
className={`w-superscript-text`}>
{"\"T342\" is the maintainer and owner of this project."}
</Superscript>
</Span>
{""}
<br />
{""}
<Span
className={`w-text-1`}>
<Superscript
className={`w-superscript-text`}>
{"He will be referred as \"T342\" in this page."}
</Superscript>
</Span>
{""}
<br />
{""}
{""}
<br />
{""}
{"The VAIIYA website project is an unofficial project."}
{""}
<br />
{""}
{"Embark studios has NO affiliations, connections, or influence to this project. "}
{""}
<br />
{""}
{""}
<br />
{""}
{"This project's code is OPEN SOURCE and is licensed under the GNU GPLv3. Copyright T342. "}
{""}
<br />
{""}
{"The GitHub repository can be found "}
<RichTextLink
href={"https://github.com/T342guy/vaiiya.ca"}
target={"_blank"}
prefetch={"intent"}
className={`w-rich-text-link cas8jb9`}>
<Italic
className={`w-italic-text`}>
{"HERE"}
</Italic>
</RichTextLink>
{"."}
{""}
<br />
{""}
{"Community made content in this project is under the "}
<Italic
className={`w-italic-text`}>
{"CC BY 4.0"}
</Italic>
{" license. "}
{""}
<br />
{""}
{"The license can be found on the CC website "}
<RichTextLink
href={"https://creativecommons.org/licenses/by/4.0/"}
target={"_blank"}
prefetch={"intent"}
className={`w-rich-text-link cas8jb9`}>
<Italic
className={`w-italic-text`}>
{"HERE"}
</Italic>
</RichTextLink>
{"."}
{""}
<br />
{""}
{""}
<br />
{""}
{"All game content and materials are copyright of Embark Studios AB. "}
{""}
<br />
{""}
{"THE FINALS and EMBARK trademarks and logos are trademarks or registered trademarks of Embark Studios AB."}
{""}
<br />
{""}
{""}
<br />
{""}
{"The VAIIYA website project is protected by fair dealing."}
{""}
<br />
{""}
{"\"Fair Dealing\""}
{""}
<br />
{""}
{"Copyright Act of 1985, section 29."}
{""}
<br />
{""}
{"Fair dealing for the purpose of research, private study, education, parody or satire does not infringe copyright."}
{""}
<br />
{""}
{"view the HTML doc "}
<RichTextLink
href={"https://laws-lois.justice.gc.ca/eng/acts/c-42/FullText.html"}
target={"_blank"}
prefetch={"intent"}
className={`w-rich-text-link cas8jb9`}>
<Italic
className={`w-italic-text`}>
{"HERE"}
</Italic>
</RichTextLink>
</Paragraph>
</Box>
<Box
className={`w-box czr2pxy c1bkqfhr cry9bxc c1qyy4dh ct02u4h cdxiycg`} />
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
href={"/blog/home"}
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
href={"/project/community-backers"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Community backers!"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/project/support-the-project"}
target={"_self"}
className={`w-link catu86a csru8nn c1e9wxra c1c9nyn co9inq6 c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c13b531o c1my01bv c135vpv5 c1y6imu0 c3qzgd0 cl60rel c1ib9cr2 c1ukphsi c12mjb61`}>
{"Support the project!"}
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
href={"/legal/disclaimer-and-legal"}
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
</Fragment_1>
</Slot>
</Body>
}


      export { Page }
    