import{aj as i,k as H,ak as N}from"./vendor-d00568ff.js";typeof window<"u"&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.18.1",i,{Fragment:H,Component:N});var P={};function B(){P={}}function v(n){return n.type===H?"Fragment":typeof n.type=="function"?n.type.displayName||n.type.name:typeof n.type=="string"?n.type:"#text"}var O=[],k=[];function z(){return O.length>0?O[O.length-1]:null}var W=!1;function C(n){return typeof n.type=="function"&&n.type!=H}function u(n){for(var s=[n],c=n;c.__o!=null;)s.push(c.__o),c=c.__o;return s.reduce(function(y,_){y+="  in "+v(_);var f=_.__source;return f?y+=" (at "+f.fileName+":"+f.lineNumber+")":W||(W=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),y+`
`},"")}var $=typeof WeakMap=="function";function A(n){var s=[];return n.__k&&n.__k.forEach(function(c){c&&typeof c.type=="function"?s.push.apply(s,A(c)):c&&typeof c.type=="string"&&s.push(c.type)}),s}function L(n){return n?typeof n.type=="function"?n.__===null?n.__e!==null&&n.__e.parentNode!==null?n.__e.parentNode.localName:"":L(n.__):n.type:""}var J=N.prototype.setState;function Y(n){return n==="table"||n==="tfoot"||n==="tbody"||n==="thead"||n==="td"||n==="tr"||n==="th"}N.prototype.setState=function(n,s){return this.__v==null&&this.state==null&&console.warn(`Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.

`+u(z())),J.call(this,n,s)};var X=/^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/,V=N.prototype.forceUpdate;function d(n){var s=n.props,c=v(n),y="";for(var _ in s)if(s.hasOwnProperty(_)&&_!=="children"){var f=s[_];typeof f=="function"&&(f="function "+(f.displayName||f.name)+"() {}"),f=Object(f)!==f||f.toString?f+"":Object.prototype.toString.call(f),y+=" "+_+"="+JSON.stringify(f)}var E=s.children;return"<"+c+y+(E&&E.length?">..</"+c+">":" />")}N.prototype.forceUpdate=function(n){return this.__v==null?console.warn(`Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.

`+u(z())):this.__P==null&&console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

`+u(this.__v)),V.call(this,n)},function(){(function(){var e=i.__b,t=i.diffed,a=i.__,r=i.vnode,p=i.__r;i.diffed=function(o){C(o)&&k.pop(),O.pop(),t&&t(o)},i.__b=function(o){C(o)&&O.push(o),e&&e(o)},i.__=function(o,l){k=[],a&&a(o,l)},i.vnode=function(o){o.__o=k.length>0?k[k.length-1]:null,r&&r(o)},i.__r=function(o){C(o)&&k.push(o),p&&p(o)}})();var n=!1,s=i.__b,c=i.diffed,y=i.vnode,_=i.__r,f=i.__e,E=i.__,M=i.__h,U=i.__c,j=$?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,w=[],S=[];i.__e=function(e,t,a,r){if(t&&t.__c&&typeof e.then=="function"){var p=e;e=new Error("Missing Suspense. The throwing component was: "+v(t));for(var o=t;o;o=o.__)if(o.__c&&o.__c.__c){e=p;break}if(e instanceof Error)throw e}try{(r=r||{}).componentStack=u(t),f(e,t,a,r),typeof e.then!="function"&&setTimeout(function(){throw e})}catch(l){throw l}},i.__=function(e,t){if(!t)throw new Error(`Undefined parent passed to render(), this is the second argument.
Check if the element is available in the DOM/has the correct id.`);var a;switch(t.nodeType){case 1:case 11:case 9:a=!0;break;default:a=!1}if(!a){var r=v(e);throw new Error("Expected a valid HTML node as a second argument to render.	Received "+t+" instead: render(<"+r+" />, "+t+");")}E&&E(e,t)},i.__b=function(e){var t=e.type;if((typeof t=="string"&&Y(t)||t==="p")&&S.push(e),n=!0,t===void 0)throw new Error(`Undefined component passed to createElement()

You likely forgot to export your component or might have mixed up default and named imports`+d(e)+`

`+u(e));if(t!=null&&typeof t=="object")throw t.__k!==void 0&&t.__e!==void 0?new Error("Invalid type passed to createElement(): "+t+`

Did you accidentally pass a JSX literal as JSX twice?

  let My`+v(e)+" = "+d(t)+`;
  let vnode = <My`+v(e)+` />;

This usually happens when you export a JSX literal and not the component.

`+u(e)):new Error("Invalid type passed to createElement(): "+(Array.isArray(t)?"array":t));if(e.ref!==void 0&&typeof e.ref!="function"&&typeof e.ref!="object"&&!("$$typeof"in e))throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [`+typeof e.ref+`] instead
`+d(e)+`

`+u(e));if(typeof e.type=="string"){for(var a in e.props)if(a[0]==="o"&&a[1]==="n"&&typeof e.props[a]!="function"&&e.props[a]!=null)throw new Error(`Component's "`+a+'" property should be a function, but got ['+typeof e.props[a]+`] instead
`+d(e)+`

`+u(e))}if(typeof e.type=="function"&&e.type.propTypes){if(e.type.displayName==="Lazy"&&j&&!j.lazyPropTypes.has(e.type)){var r="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var p=e.type();j.lazyPropTypes.set(e.type,!0),console.warn(r+"Component wrapped in lazy() is "+v(p))}catch{console.warn(r+"We will log the wrapped component's name once it is loaded.")}}var o=e.props;e.type.__f&&delete(o=function(l,h){for(var b in h)l[b]=h[b];return l}({},o)).ref,function(l,h,b,x,T){Object.keys(l).forEach(function(g){var m;try{m=l[g](h,g,x,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(F){m=F}m&&!(m.message in P)&&(P[m.message]=!0,console.error("Failed prop type: "+m.message+(T&&`
`+T()||"")))})}(e.type.propTypes,o,0,v(e),function(){return u(e)})}s&&s(e)},i.__r=function(e){_&&_(e),n=!0},i.__h=function(e,t,a){if(!e||!n)throw new Error("Hook can only be invoked from render methods.");M&&M(e,t,a)};var I=function(e,t){return{get:function(){var a="get"+e+t;w&&w.indexOf(a)<0&&(w.push(a),console.warn("getting vnode."+e+" is deprecated, "+t))},set:function(){var a="set"+e+t;w&&w.indexOf(a)<0&&(w.push(a),console.warn("setting vnode."+e+" is not allowed, "+t))}}},R={nodeName:I("nodeName","use vnode.type"),attributes:I("attributes","use vnode.props"),children:I("children","use vnode.props.children")},D=Object.create({},R);i.vnode=function(e){var t=e.props;if(e.type!==null&&t!=null&&("__source"in t||"__self"in t)){var a=e.props={};for(var r in t){var p=t[r];r==="__source"?e.__source=p:r==="__self"?e.__self=p:a[r]=p}}e.__proto__=D,y&&y(e)},i.diffed=function(e){if(e.__k&&e.__k.forEach(function(g){if(typeof g=="object"&&g&&g.type===void 0){var m=Object.keys(g).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+m+`}.

`+u(e))}}),n=!1,c&&c(e),e.__k!=null)for(var t=[],a=0;a<e.__k.length;a++){var r=e.__k[a];if(r&&r.key!=null){var p=r.key;if(t.indexOf(p)!==-1){console.error('Following component has two or more children with the same key attribute: "'+p+`". This may cause glitches and misbehavior in rendering process. Component: 

`+d(e)+`

`+u(e));break}t.push(p)}}if(e.__c!=null&&e.__c.__H!=null){var o=e.__c.__H.__;if(o)for(var l=0;l<o.length;l+=1){var h=o[l];if(h.__H){for(var b=0;b<h.__H.length;b++)if((T=h.__H[b])!=T){var x=v(e);throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index "+l+" in component "+x+" was called with NaN.")}}}}var T},i.__c=function(e,t){for(var a=0;a<S.length;a++){var r=S[a],p=r.type,o=L(r.__);if(p==="table"&&Y(o))console.error("Improper nesting of table. Your <table> should not have a table-node parent."+d(r)+`

`+u(r));else if(p!=="thead"&&p!=="tfoot"&&p!=="tbody"||o==="table"){if(p==="tr"&&o!=="thead"&&o!=="tfoot"&&o!=="tbody"&&o!=="table")console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+d(r)+`

`+u(r));else if(p==="td"&&o!=="tr")console.error("Improper nesting of table. Your <td> should have a <tr> parent."+d(r)+`

`+u(r));else if(p==="th"&&o!=="tr")console.error("Improper nesting of table. Your <th> should have a <tr>."+d(r)+`

`+u(r));else if(p==="p"){var l=A(r).filter(function(h){return X.test(h)});l.length&&console.error("Improper nesting of paragraph. Your <p> should not have "+l.join(", ")+"as child-elements."+d(r)+`

`+u(r))}}else console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+d(r)+`

`+u(r))}S=[],U&&U(e,t)}}();export{B as resetPropWarnings};
//# sourceMappingURL=debug.module-6fedc5a9.js.map
