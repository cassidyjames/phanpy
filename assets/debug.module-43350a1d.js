import{al as a,g as M,am as I}from"./vendor-df8eaf20.js";typeof window<"u"&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.19.2",a,{Fragment:M,Component:I});var H={};function G(){H={}}function v(e){return e.type===M?"Fragment":typeof e.type=="function"?e.type.displayName||e.type.name:typeof e.type=="string"?e.type:"#text"}var j=[],T=[];function z(){return j.length>0?j[j.length-1]:null}var W=!1;function P(e){return typeof e.type=="function"&&e.type!=M}function f(e){for(var s=[e],l=e;l.__o!=null;)s.push(l.__o),l=l.__o;return s.reduce(function(y,_){y+="  in "+v(_);var c=_.__source;return c?y+=" (at "+c.fileName+":"+c.lineNumber+")":W||(W=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),y+`
`},"")}var J=typeof WeakMap=="function";function A(e){var s=[];return e.__k&&e.__k.forEach(function(l){l&&typeof l.type=="function"?s.push.apply(s,A(l)):l&&typeof l.type=="string"&&s.push(l.type)}),s}function L(e){return e?typeof e.type=="function"?e.__===null?e.__e!==null&&e.__e.parentNode!==null?e.__e.parentNode.localName:"":L(e.__):e.type:""}var X=I.prototype.setState;function Y(e){return e==="table"||e==="tfoot"||e==="tbody"||e==="thead"||e==="td"||e==="tr"||e==="th"}I.prototype.setState=function(e,s){return this.__v==null&&this.state==null&&console.warn(`Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.

`+f(z())),X.call(this,e,s)};var V=/^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/,q=I.prototype.forceUpdate;function d(e){var s=e.props,l=v(e),y="";for(var _ in s)if(s.hasOwnProperty(_)&&_!=="children"){var c=s[_];typeof c=="function"&&(c="function "+(c.displayName||c.name)+"() {}"),c=Object(c)!==c||c.toString?c+"":Object.prototype.toString.call(c),y+=" "+_+"="+JSON.stringify(c)}var O=s.children;return"<"+l+y+(O&&O.length?">..</"+l+">":" />")}I.prototype.forceUpdate=function(e){return this.__v==null?console.warn(`Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.

`+f(z())):this.__P==null&&console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

`+f(this.__v)),q.call(this,e)},function(){(function(){var t=a.__b,o=a.diffed,n=a.__,p=a.vnode,i=a.__r;a.diffed=function(r){P(r)&&T.pop(),j.pop(),o&&o(r)},a.__b=function(r){P(r)&&j.push(r),t&&t(r)},a.__=function(r,u){T=[],n&&n(r,u)},a.vnode=function(r){r.__o=T.length>0?T[T.length-1]:null,p&&p(r)},a.__r=function(r){P(r)&&T.push(r),i&&i(r)}})();var e=!1,s=a.__b,l=a.diffed,y=a.vnode,_=a.__r,c=a.__e,O=a.__,U=a.__h,x=J?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,g=[];a.__e=function(t,o,n,p){if(o&&o.__c&&typeof t.then=="function"){var i=t;t=new Error("Missing Suspense. The throwing component was: "+v(o));for(var r=o;r;r=r.__)if(r.__c&&r.__c.__c){t=i;break}if(t instanceof Error)throw t}try{(p=p||{}).componentStack=f(o),c(t,o,n,p),typeof t.then!="function"&&setTimeout(function(){throw t})}catch(u){throw u}},a.__=function(t,o){if(!o)throw new Error(`Undefined parent passed to render(), this is the second argument.
Check if the element is available in the DOM/has the correct id.`);var n;switch(o.nodeType){case 1:case 11:case 9:n=!0;break;default:n=!1}if(!n){var p=v(t);throw new Error("Expected a valid HTML node as a second argument to render.	Received "+o+" instead: render(<"+p+" />, "+o+");")}O&&O(t,o)},a.__b=function(t){var o=t.type;if(e=!0,o===void 0)throw new Error(`Undefined component passed to createElement()

You likely forgot to export your component or might have mixed up default and named imports`+d(t)+`

`+f(t));if(o!=null&&typeof o=="object")throw o.__k!==void 0&&o.__e!==void 0?new Error("Invalid type passed to createElement(): "+o+`

Did you accidentally pass a JSX literal as JSX twice?

  let My`+v(t)+" = "+d(o)+`;
  let vnode = <My`+v(t)+` />;

This usually happens when you export a JSX literal and not the component.

`+f(t)):new Error("Invalid type passed to createElement(): "+(Array.isArray(o)?"array":o));if(t.ref!==void 0&&typeof t.ref!="function"&&typeof t.ref!="object"&&!("$$typeof"in t))throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [`+typeof t.ref+`] instead
`+d(t)+`

`+f(t));if(typeof t.type=="string"){for(var n in t.props)if(n[0]==="o"&&n[1]==="n"&&typeof t.props[n]!="function"&&t.props[n]!=null)throw new Error(`Component's "`+n+'" property should be a function, but got ['+typeof t.props[n]+`] instead
`+d(t)+`

`+f(t))}if(typeof t.type=="function"&&t.type.propTypes){if(t.type.displayName==="Lazy"&&x&&!x.lazyPropTypes.has(t.type)){var p="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var i=t.type();x.lazyPropTypes.set(t.type,!0),console.warn(p+"Component wrapped in lazy() is "+v(i))}catch{console.warn(p+"We will log the wrapped component's name once it is loaded.")}}var r=t.props;t.type.__f&&delete(r=function(u,m){for(var b in m)u[b]=m[b];return u}({},r)).ref,function(u,m,b,N,k){Object.keys(u).forEach(function(w){var h;try{h=u[w](m,w,N,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(S){h=S}h&&!(h.message in H)&&(H[h.message]=!0,console.error("Failed prop type: "+h.message+(k&&`
`+k()||"")))})}(t.type.propTypes,r,0,v(t),function(){return f(t)})}s&&s(t)},a.__r=function(t){_&&_(t),e=!0},a.__h=function(t,o,n){if(!t||!e)throw new Error("Hook can only be invoked from render methods.");U&&U(t,o,n)};var C=function(t,o){return{get:function(){var n="get"+t+o;g&&g.indexOf(n)<0&&(g.push(n),console.warn("getting vnode."+t+" is deprecated, "+o))},set:function(){var n="set"+t+o;g&&g.indexOf(n)<0&&(g.push(n),console.warn("setting vnode."+t+" is not allowed, "+o))}}},R={nodeName:C("nodeName","use vnode.type"),attributes:C("attributes","use vnode.props"),children:C("children","use vnode.props.children")},D=Object.create({},R);a.vnode=function(t){var o=t.props;if(t.type!==null&&o!=null&&("__source"in o||"__self"in o)){var n=t.props={};for(var p in o){var i=o[p];p==="__source"?t.__source=i:p==="__self"?t.__self=i:n[p]=i}}t.__proto__=D,y&&y(t)},a.diffed=function(t){var o,n=t.type,p=t.__;if(t.__k&&t.__k.forEach(function(E){if(typeof E=="object"&&E&&E.type===void 0){var $=Object.keys(E).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+$+`}.

`+f(t))}}),typeof n=="string"&&(Y(n)||n==="p")){var i=L(p);if(i!=="")n==="table"&&i!=="td"&&Y(i)?(console.log(i,p.__e),console.error("Improper nesting of table. Your <table> should not have a table-node parent."+d(t)+`

`+f(t))):n!=="thead"&&n!=="tfoot"&&n!=="tbody"||i==="table"?n==="tr"&&i!=="thead"&&i!=="tfoot"&&i!=="tbody"&&i!=="table"?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+d(t)+`

`+f(t)):n==="td"&&i!=="tr"?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+d(t)+`

`+f(t)):n==="th"&&i!=="tr"&&console.error("Improper nesting of table. Your <th> should have a <tr>."+d(t)+`

`+f(t)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+d(t)+`

`+f(t));else if(n==="p"){var r=A(t).filter(function(E){return V.test(E)});r.length&&console.error("Improper nesting of paragraph. Your <p> should not have "+r.join(", ")+"as child-elements."+d(t)+`

`+f(t))}}if(e=!1,l&&l(t),t.__k!=null)for(var u=[],m=0;m<t.__k.length;m++){var b=t.__k[m];if(b&&b.key!=null){var N=b.key;if(u.indexOf(N)!==-1){console.error('Following component has two or more children with the same key attribute: "'+N+`". This may cause glitches and misbehavior in rendering process. Component: 

`+d(t)+`

`+f(t));break}u.push(N)}}if(t.__c!=null&&t.__c.__H!=null){var k=t.__c.__H.__;if(k)for(var w=0;w<k.length;w+=1){var h=k[w];if(h.__H){for(var S=0;S<h.__H.length;S++)if((o=h.__H[S])!=o){var F=v(t);throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index "+w+" in component "+F+" was called with NaN.")}}}}}}();export{G as resetPropWarnings};
//# sourceMappingURL=debug.module-43350a1d.js.map
