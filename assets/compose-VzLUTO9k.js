const __vite__fileDeps=["./compose-7mnCffZo.js","./vendor-_vjglg-I.js","./status-Eoxo0DCN.js","./useTitle-5sEywo3_.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as p,l as w,r as _,I as m}from"./useTitle-5sEywo3_.js";import{U as S,p as f,_ as r,a as e,O as h}from"./vendor-_vjglg-I.js";const g=S(()=>p(()=>import("./compose-7mnCffZo.js"),__vite__mapDeps([0,1,2,3]),import.meta.url));window.opener&&(console=window.opener.console);function y(){var s,a;const[t,c]=f("default"),{editStatus:n,replyToStatus:o,draftStatus:d}=window.__COMPOSE__||{};return w(n?"Editing source status":o?`Replying to @${((s=o.account)==null?void 0:s.acct)||((a=o.account)==null?void 0:a.username)}`:"Compose"),r(()=>{_()},[]),r(()=>{if(t==="closed"){try{window.opener.focus()}catch{}window.close()}},[t]),t==="closed"?e("div",{class:"box",children:[e("p",{children:"You may close this page now."}),e("p",{children:e("button",{onClick:()=>{window.close()},children:"Close window"})})]}):e(m,{children:e(g,{editStatus:n,replyToStatus:o,draftStatus:d,standalone:!0,hasOpener:window.opener,onClose:i=>{const{newStatus:l,fn:u=()=>{}}=i||{};try{l&&window.opener.__STATES__.reloadStatusPage++,u(),c("closed")}catch{}}})})}h(e(y,{}),document.getElementById("app-standalone"));
//# sourceMappingURL=compose-VzLUTO9k.js.map