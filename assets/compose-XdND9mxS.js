import{p,ac as u,_ as w,e,aF as m}from"./db-5YOT5fo8.js";import{C as f}from"./compose-c572Tptx.js";import"./intl-segmenter-polyfill-XHDQHdV5.js";import"./index-_Y-Lyw2n.js";window.opener&&(console=window.opener.console);function S(){var s,a;const[t,i]=p("default"),{editStatus:n,replyToStatus:o,draftStatus:r}=window.__COMPOSE__||{};return u(n?"Editing source status":o?`Replying to @${((s=o.account)==null?void 0:s.acct)||((a=o.account)==null?void 0:a.username)}`:"Compose"),w(()=>{if(t==="closed"){try{window.opener.focus()}catch{}window.close()}},[t]),t==="closed"?e("div",{class:"box",children:[e("p",{children:"You may close this page now."}),e("p",{children:e("button",{onClick:()=>{window.close()},children:"Close window"})})]}):e(f,{editStatus:n,replyToStatus:o,draftStatus:r,standalone:!0,hasOpener:window.opener,onClose:c=>{const{newStatus:d,fn:l=()=>{}}=c||{};try{d&&window.opener.__STATES__.reloadStatusPage++,l(),i("closed")}catch{}}})}m(e(S,{}),document.getElementById("app-standalone"));
//# sourceMappingURL=compose-XdND9mxS.js.map