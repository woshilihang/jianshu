import { createGlobalStyle  } from 'styled-components';

export const Globalstyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1547957812056'); /* IE9 */
  src: url('./iconfont.eot?t=1547957812056#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1547957812056') format('woff'),
  url('./iconfont.ttf?t=1547957812056') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1547957812056#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// 全局重置样式
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
  }
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }

`;
