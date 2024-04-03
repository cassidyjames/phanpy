function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./compose-_sMTqgyC.js","./vendor-YNBWu-Mz.js","./index-_Y-Lyw2n.js","./db-VHhRFCXL.js","./useTitle-3DvqVLcR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as u,f as p}from"./useTitle-3DvqVLcR.js";import{U as w,p as _,_ as m,a as e,K as f}from"./vendor-YNBWu-Mz.js";import{I as S}from"./intl-segmenter-suspense-jv8BOjAL.js";const h=w(()=>u(()=>import("./compose-_sMTqgyC.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url));window.opener&&(console=window.opener.console);function g(){var s,a;const[t,r]=_("default"),{editStatus:n,replyToStatus:o,draftStatus:c}=window.__COMPOSE__||{};return p(n?"Editing source status":o?`Replying to @${((s=o.account)==null?void 0:s.acct)||((a=o.account)==null?void 0:a.username)}`:"Compose"),m(()=>{if(t==="closed"){try{window.opener.focus()}catch{}window.close()}},[t]),t==="closed"?e("div",{class:"box",children:[e("p",{children:"You may close this page now."}),e("p",{children:e("button",{onClick:()=>{window.close()},children:"Close window"})})]}):e(S,{children:e(h,{editStatus:n,replyToStatus:o,draftStatus:c,standalone:!0,hasOpener:window.opener,onClose:i=>{const{newStatus:d,fn:l=()=>{}}=i||{};try{d&&window.opener.__STATES__.reloadStatusPage++,l(),r("closed")}catch{}}})})}f(e(g,{}),document.getElementById("app-standalone"));
//# sourceMappingURL=compose-tC7zUgiQ.js.map
