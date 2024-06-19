__d((function(g,r,_i,_a,m,_e,d){
/*! @license DOMPurify 2.5.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.4/LICENSE */
var e,t;e=this,t=function(){'use strict';function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function o(e,a,i){return o=n()?Reflect.construct:function(e,n,o){var a=[null];a.push.apply(a,n);var i=new(Function.bind.apply(e,a));return o&&t(i,o.prototype),i},o.apply(null,arguments)}function a(e){return i(e)||l(e)||c(e)||s()}function i(e){if(Array.isArray(e))return u(e)}function l(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=Object.hasOwnProperty,p=Object.setPrototypeOf,h=Object.isFrozen,y=Object.getPrototypeOf,b=Object.getOwnPropertyDescriptor,_=Object.freeze,v=Object.seal,T=Object.create,N='undefined'!=typeof Reflect&&Reflect,E=N.apply,A=N.construct;E||(E=function(e,t,n){return e.apply(t,n)}),_||(_=function(e){return e}),v||(v=function(e){return e}),A||(A=function(e,t){return o(e,a(t))});var S,w=H(Array.prototype.forEach),x=H(Array.prototype.pop),C=H(Array.prototype.push),O=H(String.prototype.toLowerCase),k=H(String.prototype.toString),L=H(String.prototype.match),D=H(String.prototype.replace),R=H(String.prototype.indexOf),M=H(String.prototype.trim),I=H(RegExp.prototype.test),F=(S=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A(S,t)});function U(e){return'number'==typeof e&&isNaN(e)}function H(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return E(e,t,o)}}function z(e,t,n){var o;n=null!==(o=n)&&void 0!==o?o:O,p&&p(e,null);for(var a=t.length;a--;){var i=t[a];if('string'==typeof i){var l=n(i);l!==i&&(h(t)||(t[a]=l),i=l)}e[i]=!0}return e}function P(e){var t,n=T(null);for(t in e)!0===E(f,e,[t])&&(n[t]=e[t]);return n}function j(e,t){for(;null!==e;){var n=b(e,t);if(n){if(n.get)return H(n.get);if('function'==typeof n.value)return H(n.value)}e=y(e)}return function(e){return console.warn('fallback value for',e),null}}var B=_(['a','abbr','acronym','address','area','article','aside','audio','b','bdi','bdo','big','blink','blockquote','body','br','button','canvas','caption','center','cite','code','col','colgroup','content','data','datalist','dd','decorator','del','details','dfn','dialog','dir','div','dl','dt','element','em','fieldset','figcaption','figure','font','footer','form','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','i','img','input','ins','kbd','label','legend','li','main','map','mark','marquee','menu','menuitem','meter','nav','nobr','ol','optgroup','option','output','p','picture','pre','progress','q','rp','rt','ruby','s','samp','section','select','shadow','small','source','spacer','span','strike','strong','style','sub','summary','sup','table','tbody','td','template','textarea','tfoot','th','thead','time','tr','track','tt','u','ul','var','video','wbr']),G=_(['svg','a','altglyph','altglyphdef','altglyphitem','animatecolor','animatemotion','animatetransform','circle','clippath','defs','desc','ellipse','filter','font','g','glyph','glyphref','hkern','image','line','lineargradient','marker','mask','metadata','mpath','path','pattern','polygon','polyline','radialgradient','rect','stop','style','switch','symbol','text','textpath','title','tref','tspan','view','vkern']),W=_(['feBlend','feColorMatrix','feComponentTransfer','feComposite','feConvolveMatrix','feDiffuseLighting','feDisplacementMap','feDistantLight','feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur','feImage','feMerge','feMergeNode','feMorphology','feOffset','fePointLight','feSpecularLighting','feSpotLight','feTile','feTurbulence']),q=_(['animate','color-profile','cursor','discard','fedropshadow','font-face','font-face-format','font-face-name','font-face-src','font-face-uri','foreignobject','hatch','hatchpath','mesh','meshgradient','meshpatch','meshrow','missing-glyph','script','set','solidcolor','unknown','use']),Y=_(['math','menclose','merror','mfenced','mfrac','mglyph','mi','mlabeledtr','mmultiscripts','mn','mo','mover','mpadded','mphantom','mroot','mrow','ms','mspace','msqrt','mstyle','msub','msup','msubsup','mtable','mtd','mtext','mtr','munder','munderover']),$=_(['maction','maligngroup','malignmark','mlongdiv','mscarries','mscarry','msgroup','mstack','msline','msrow','semantics','annotation','annotation-xml','mprescripts','none']),K=_(['#text']),V=_(['accept','action','align','alt','autocapitalize','autocomplete','autopictureinpicture','autoplay','background','bgcolor','border','capture','cellpadding','cellspacing','checked','cite','class','clear','color','cols','colspan','controls','controlslist','coords','crossorigin','datetime','decoding','default','dir','disabled','disablepictureinpicture','disableremoteplayback','download','draggable','enctype','enterkeyhint','face','for','headers','height','hidden','high','href','hreflang','id','inputmode','integrity','ismap','kind','label','lang','list','loading','loop','low','max','maxlength','media','method','min','minlength','multiple','muted','name','nonce','noshade','novalidate','nowrap','open','optimum','pattern','placeholder','playsinline','poster','preload','pubdate','radiogroup','readonly','rel','required','rev','reversed','role','rows','rowspan','spellcheck','scope','selected','shape','size','sizes','span','srclang','start','src','srcset','step','style','summary','tabindex','title','translate','type','usemap','valign','value','width','xmlns','slot']),X=_(['accent-height','accumulate','additive','alignment-baseline','ascent','attributename','attributetype','azimuth','basefrequency','baseline-shift','begin','bias','by','class','clip','clippathunits','clip-path','clip-rule','color','color-interpolation','color-interpolation-filters','color-profile','color-rendering','cx','cy','d','dx','dy','diffuseconstant','direction','display','divisor','dur','edgemode','elevation','end','fill','fill-opacity','fill-rule','filter','filterunits','flood-color','flood-opacity','font-family','font-size','font-size-adjust','font-stretch','font-style','font-variant','font-weight','fx','fy','g1','g2','glyph-name','glyphref','gradientunits','gradienttransform','height','href','id','image-rendering','in','in2','k','k1','k2','k3','k4','kerning','keypoints','keysplines','keytimes','lang','lengthadjust','letter-spacing','kernelmatrix','kernelunitlength','lighting-color','local','marker-end','marker-mid','marker-start','markerheight','markerunits','markerwidth','maskcontentunits','maskunits','max','mask','media','method','mode','min','name','numoctaves','offset','operator','opacity','order','orient','orientation','origin','overflow','paint-order','path','pathlength','patterncontentunits','patterntransform','patternunits','points','preservealpha','preserveaspectratio','primitiveunits','r','rx','ry','radius','refx','refy','repeatcount','repeatdur','restart','result','rotate','scale','seed','shape-rendering','specularconstant','specularexponent','spreadmethod','startoffset','stddeviation','stitchtiles','stop-color','stop-opacity','stroke-dasharray','stroke-dashoffset','stroke-linecap','stroke-linejoin','stroke-miterlimit','stroke-opacity','stroke','stroke-width','style','surfacescale','systemlanguage','tabindex','targetx','targety','transform','transform-origin','text-anchor','text-decoration','text-rendering','textlength','type','u1','u2','unicode','values','viewbox','visibility','version','vert-adv-y','vert-origin-x','vert-origin-y','width','word-spacing','wrap','writing-mode','xchannelselector','ychannelselector','x','x1','x2','xmlns','y','y1','y2','z','zoomandpan']),Z=_(['accent','accentunder','align','bevelled','close','columnsalign','columnlines','columnspan','denomalign','depth','dir','display','displaystyle','encoding','fence','frame','height','href','id','largeop','length','linethickness','lspace','lquote','mathbackground','mathcolor','mathsize','mathvariant','maxsize','minsize','movablelimits','notation','numalign','open','rowalign','rowlines','rowspacing','rowspan','rspace','rquote','scriptlevel','scriptminsize','scriptsizemultiplier','selection','separator','separators','stretchy','subscriptshift','supscriptshift','symmetric','voffset','width','xmlns']),J=_(['xlink:href','xml:id','xlink:title','xml:space','xmlns:xlink']),Q=v(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ee=v(/<%[\w\W]*|[\w\W]*%>/gm),te=v(/\${[\w\W]*}/gm),ne=v(/^data-[\-\w.\u00B7-\uFFFF]/),re=v(/^aria-[\-\w]+$/),oe=v(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ae=v(/^(?:\w+script|data):/i),ie=v(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),le=v(/^html$/i),ce=v(/^[a-z][.\w]*(-[.\w]+)+$/i),ue=function(){return window},se=function(t,n){if('object'!==e(t)||'function'!=typeof t.createPolicy)return null;var o=null,a='data-tt-policy-suffix';n.currentScript&&n.currentScript.hasAttribute(a)&&(o=n.currentScript.getAttribute(a));var i='dompurify'+(o?'#'+o:'');try{return t.createPolicy(i,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn('TrustedTypes policy '+i+' could not be created.'),null}},me=(function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue(),o=function(e){return t(e)};if(o.version='2.5.4',o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;var i=n.document,l=n.document,c=n.DocumentFragment,u=n.HTMLTemplateElement,s=n.Node,f=n.Element,p=n.NodeFilter,h=n.NamedNodeMap,y=void 0===h?n.NamedNodeMap||n.MozNamedAttrMap:h,b=n.HTMLFormElement,v=n.DOMParser,T=n.trustedTypes,N=f.prototype,E=j(N,'cloneNode'),A=j(N,'nextSibling'),S=j(N,'childNodes'),H=j(N,'parentNode');if('function'==typeof u){var me=l.createElement('template');me.content&&me.content.ownerDocument&&(l=me.content.ownerDocument)}var fe=se(T,i),pe=fe?fe.createHTML(''):'',de=l,he=de.implementation,ge=de.createNodeIterator,ye=de.createDocumentFragment,be=de.getElementsByTagName,ve=i.importNode,Te={};try{Te=P(l).documentMode?l.documentMode:{}}catch(e){}var Ne={};o.isSupported='function'==typeof H&&he&&void 0!==he.createHTMLDocument&&9!==Te;var Ee,Ae,Se=Q,we=ee,xe=te,Ce=ne,Oe=re,ke=ae,Le=ie,De=ce,Re=oe,Me=null,Ie=z({},[].concat(a(B),a(G),a(W),a(Y),a(K))),Fe=null,Ue=z({},[].concat(a(V),a(X),a(Z),a(J))),He=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ze=null,Pe=null,je=!0,Be=!0,Ge=!1,We=!0,qe=!1,Ye=!0,$e=!1,Ke=!1,Ve=!1,Xe=!1,Ze=!1,Je=!1,Qe=!0,et=!1,tt=!0,nt=!1,rt={},ot=null,at=z({},['annotation-xml','audio','colgroup','desc','foreignobject','head','iframe','math','mi','mn','mo','ms','mtext','noembed','noframes','noscript','plaintext','script','style','svg','template','thead','title','video','xmp']),it=null,lt=z({},['audio','video','img','source','image','track']),ct=null,ut=z({},['alt','class','for','id','label','name','pattern','placeholder','role','summary','title','value','style','xmlns']),st='http://www.w3.org/1998/Math/MathML',mt='http://www.w3.org/2000/svg',ft='http://www.w3.org/1999/xhtml',pt=ft,dt=!1,ht=null,gt=z({},[st,mt,ft],k),yt=['application/xhtml+xml','text/html'],bt=null,_t=l.createElement('form'),vt=function(e){return e instanceof RegExp||e instanceof Function},Tt=function(t){bt&&bt===t||(t&&'object'===e(t)||(t={}),t=P(t),Ee=Ee=-1===yt.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,Ae='application/xhtml+xml'===Ee?k:O,Me='ALLOWED_TAGS'in t?z({},t.ALLOWED_TAGS,Ae):Ie,Fe='ALLOWED_ATTR'in t?z({},t.ALLOWED_ATTR,Ae):Ue,ht='ALLOWED_NAMESPACES'in t?z({},t.ALLOWED_NAMESPACES,k):gt,ct='ADD_URI_SAFE_ATTR'in t?z(P(ut),t.ADD_URI_SAFE_ATTR,Ae):ut,it='ADD_DATA_URI_TAGS'in t?z(P(lt),t.ADD_DATA_URI_TAGS,Ae):lt,ot='FORBID_CONTENTS'in t?z({},t.FORBID_CONTENTS,Ae):at,ze='FORBID_TAGS'in t?z({},t.FORBID_TAGS,Ae):{},Pe='FORBID_ATTR'in t?z({},t.FORBID_ATTR,Ae):{},rt='USE_PROFILES'in t&&t.USE_PROFILES,je=!1!==t.ALLOW_ARIA_ATTR,Be=!1!==t.ALLOW_DATA_ATTR,Ge=t.ALLOW_UNKNOWN_PROTOCOLS||!1,We=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,qe=t.SAFE_FOR_TEMPLATES||!1,Ye=!1!==t.SAFE_FOR_XML,$e=t.WHOLE_DOCUMENT||!1,Xe=t.RETURN_DOM||!1,Ze=t.RETURN_DOM_FRAGMENT||!1,Je=t.RETURN_TRUSTED_TYPE||!1,Ve=t.FORCE_BODY||!1,Qe=!1!==t.SANITIZE_DOM,et=t.SANITIZE_NAMED_PROPS||!1,tt=!1!==t.KEEP_CONTENT,nt=t.IN_PLACE||!1,Re=t.ALLOWED_URI_REGEXP||Re,pt=t.NAMESPACE||ft,He=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&vt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(He.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&vt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(He.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&'boolean'==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(He.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),qe&&(Be=!1),Ze&&(Xe=!0),rt&&(Me=z({},a(K)),Fe=[],!0===rt.html&&(z(Me,B),z(Fe,V)),!0===rt.svg&&(z(Me,G),z(Fe,X),z(Fe,J)),!0===rt.svgFilters&&(z(Me,W),z(Fe,X),z(Fe,J)),!0===rt.mathMl&&(z(Me,Y),z(Fe,Z),z(Fe,J))),t.ADD_TAGS&&(Me===Ie&&(Me=P(Me)),z(Me,t.ADD_TAGS,Ae)),t.ADD_ATTR&&(Fe===Ue&&(Fe=P(Fe)),z(Fe,t.ADD_ATTR,Ae)),t.ADD_URI_SAFE_ATTR&&z(ct,t.ADD_URI_SAFE_ATTR,Ae),t.FORBID_CONTENTS&&(ot===at&&(ot=P(ot)),z(ot,t.FORBID_CONTENTS,Ae)),tt&&(Me['#text']=!0),$e&&z(Me,['html','head','body']),Me.table&&(z(Me,['tbody']),delete ze.tbody),_&&_(t),bt=t)},Nt=z({},['mi','mo','mn','ms','mtext']),Et=z({},['foreignobject','annotation-xml']),At=z({},['title','style','font','a','script']),St=z({},G);z(St,W),z(St,q);var wt=z({},Y);z(wt,$);var xt=function(e){var t=H(e);t&&t.tagName||(t={namespaceURI:pt,tagName:'template'});var n=O(e.tagName),o=O(t.tagName);return!!ht[e.namespaceURI]&&(e.namespaceURI===mt?t.namespaceURI===ft?'svg'===n:t.namespaceURI===st?'svg'===n&&('annotation-xml'===o||Nt[o]):Boolean(St[n]):e.namespaceURI===st?t.namespaceURI===ft?'math'===n:t.namespaceURI===mt?'math'===n&&Et[o]:Boolean(wt[n]):e.namespaceURI===ft?!(t.namespaceURI===mt&&!Et[o])&&!(t.namespaceURI===st&&!Nt[o])&&!wt[n]&&(At[n]||!St[n]):!('application/xhtml+xml'!==Ee||!ht[e.namespaceURI]))},Ct=function(e){C(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=pe}catch(t){e.remove()}}},Ot=function(e,t){try{C(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){C(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),'is'===e&&!Fe[e])if(Xe||Ze)try{Ct(t)}catch(e){}else try{t.setAttribute(e,'')}catch(e){}},kt=function(e){var t,n;if(Ve)e='<remove></remove>'+e;else{var o=L(e,/^[\r\n\t ]+/);n=o&&o[0]}'application/xhtml+xml'===Ee&&pt===ft&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+'</body></html>');var a=fe?fe.createHTML(e):e;if(pt===ft)try{t=(new v).parseFromString(a,Ee)}catch(e){}if(!t||!t.documentElement){t=he.createDocument(pt,'template',null);try{t.documentElement.innerHTML=dt?pe:a}catch(e){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(l.createTextNode(n),i.childNodes[0]||null),pt===ft?be.call(t,$e?'html':'body')[0]:$e?t.documentElement:i},Lt=function(e){return ge.call(e.ownerDocument||e,e,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT|p.SHOW_PROCESSING_INSTRUCTION|p.SHOW_CDATA_SECTION,null,!1)},Dt=function(e){return e instanceof b&&(void 0!==e.__depth&&'number'!=typeof e.__depth||void 0!==e.__removalCount&&'number'!=typeof e.__removalCount||'string'!=typeof e.nodeName||'string'!=typeof e.textContent||'function'!=typeof e.removeChild||!(e.attributes instanceof y)||'function'!=typeof e.removeAttribute||'function'!=typeof e.setAttribute||'string'!=typeof e.namespaceURI||'function'!=typeof e.insertBefore||'function'!=typeof e.hasChildNodes)},Rt=function(t){return'object'===e(s)?t instanceof s:t&&'object'===e(t)&&'number'==typeof t.nodeType&&'string'==typeof t.nodeName},Mt=function(e,t,n){Ne[e]&&w(Ne[e],(function(e){e.call(o,t,n,bt)}))},It=function(e){var t;if(Mt('beforeSanitizeElements',e,null),Dt(e))return Ct(e),!0;if(I(/[\u0080-\uFFFF]/,e.nodeName))return Ct(e),!0;var n=Ae(e.nodeName);if(Mt('uponSanitizeElement',e,{tagName:n,allowedTags:Me}),e.hasChildNodes()&&!Rt(e.firstElementChild)&&(!Rt(e.content)||!Rt(e.content.firstElementChild))&&I(/<[/\w]/g,e.innerHTML)&&I(/<[/\w]/g,e.textContent))return Ct(e),!0;if('select'===n&&I(/<template/i,e.innerHTML))return Ct(e),!0;if(7===e.nodeType)return Ct(e),!0;if(Ye&&8===e.nodeType&&I(/<[/\w]/g,e.data))return Ct(e),!0;if(!Me[n]||ze[n]){if(!ze[n]&&Ut(n)){if(He.tagNameCheck instanceof RegExp&&I(He.tagNameCheck,n))return!1;if(He.tagNameCheck instanceof Function&&He.tagNameCheck(n))return!1}if(tt&&!ot[n]){var a=H(e)||e.parentNode,i=S(e)||e.childNodes;if(i&&a)for(var l=i.length-1;l>=0;--l){var c=E(i[l],!0);c.__removalCount=(e.__removalCount||0)+1,a.insertBefore(c,A(e))}}return Ct(e),!0}return e instanceof f&&!xt(e)?(Ct(e),!0):'noscript'!==n&&'noembed'!==n&&'noframes'!==n||!I(/<\/no(script|embed|frames)/i,e.innerHTML)?(qe&&3===e.nodeType&&(t=e.textContent,t=D(t,Se,' '),t=D(t,we,' '),t=D(t,xe,' '),e.textContent!==t&&(C(o.removed,{element:e.cloneNode()}),e.textContent=t)),Mt('afterSanitizeElements',e,null),!1):(Ct(e),!0)},Ft=function(e,t,n){if(Qe&&('id'===t||'name'===t)&&(n in l||n in _t||'__depth'===n||'__removalCount'===n))return!1;if(Be&&!Pe[t]&&I(Ce,t));else if(je&&I(Oe,t));else if(!Fe[t]||Pe[t]){if(!(Ut(e)&&(He.tagNameCheck instanceof RegExp&&I(He.tagNameCheck,e)||He.tagNameCheck instanceof Function&&He.tagNameCheck(e))&&(He.attributeNameCheck instanceof RegExp&&I(He.attributeNameCheck,t)||He.attributeNameCheck instanceof Function&&He.attributeNameCheck(t))||'is'===t&&He.allowCustomizedBuiltInElements&&(He.tagNameCheck instanceof RegExp&&I(He.tagNameCheck,n)||He.tagNameCheck instanceof Function&&He.tagNameCheck(n))))return!1}else if(ct[t]);else if(I(Re,D(n,Le,'')));else if('src'!==t&&'xlink:href'!==t&&'href'!==t||'script'===e||0!==R(n,'data:')||!it[e])if(Ge&&!I(ke,D(n,Le,'')));else if(n)return!1;return!0},Ut=function(e){return'annotation-xml'!==e&&L(e,De)},Ht=function(t){var n,a,i,l;Mt('beforeSanitizeAttributes',t,null);var c=t.attributes;if(c){var u={attrName:'',attrValue:'',keepAttr:!0,allowedAttributes:Fe};for(l=c.length;l--;){var s=n=c[l],f=s.name,p=s.namespaceURI;if(a='value'===f?n.value:M(n.value),i=Ae(f),u.attrName=i,u.attrValue=a,u.keepAttr=!0,u.forceKeepAttr=void 0,Mt('uponSanitizeAttribute',t,u),a=u.attrValue,!u.forceKeepAttr&&(Ot(f,t),u.keepAttr))if(We||!I(/\/>/i,a))if(Ye&&I(/((--!?|])>)|<\/(style|title)/i,a))Ot(f,t);else{qe&&(a=D(a,Se,' '),a=D(a,we,' '),a=D(a,xe,' '));var h=Ae(t.nodeName);if(Ft(h,i,a)){if(!et||'id'!==i&&'name'!==i||(Ot(f,t),a="user-content-"+a),fe&&'object'===e(T)&&'function'==typeof T.getAttributeType)if(p);else switch(T.getAttributeType(h,i)){case'TrustedHTML':a=fe.createHTML(a);break;case'TrustedScriptURL':a=fe.createScriptURL(a)}try{p?t.setAttributeNS(p,f,a):t.setAttribute(f,a),Dt(t)?Ct(t):x(o.removed)}catch(e){}}}else Ot(f,t)}Mt('afterSanitizeAttributes',t,null)}},zt=function e(t){var n,o=Lt(t);for(Mt('beforeSanitizeShadowDOM',t,null);n=o.nextNode();)if(Mt('uponSanitizeShadowNode',n,null),!It(n)){var a=H(n);1===n.nodeType&&(a&&a.__depth?n.__depth=(n.__removalCount||0)+a.__depth+1:n.__depth=1),(n.__depth>=255||U(n.__depth))&&Ct(n),n.content instanceof c&&(n.content.__depth=n.__depth,e(n.content)),Ht(n)}Mt('afterSanitizeShadowDOM',t,null)};return o.sanitize=function(t){var a,l,u,f,p,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((dt=!t)&&(t='\x3c!--\x3e'),'string'!=typeof t&&!Rt(t)){if('function'!=typeof t.toString)throw F('toString is not a function');if('string'!=typeof(t=t.toString()))throw F('dirty is not a string, aborting')}if(!o.isSupported){if('object'===e(n.toStaticHTML)||'function'==typeof n.toStaticHTML){if('string'==typeof t)return n.toStaticHTML(t);if(Rt(t))return n.toStaticHTML(t.outerHTML)}return t}if(Ke||Tt(h),o.removed=[],'string'==typeof t&&(nt=!1),nt){if(t.nodeName){var y=Ae(t.nodeName);if(!Me[y]||ze[y])throw F('root node is forbidden and cannot be sanitized in-place')}}else if(t instanceof s)1===(l=(a=kt('\x3c!----\x3e')).ownerDocument.importNode(t,!0)).nodeType&&'BODY'===l.nodeName||'HTML'===l.nodeName?a=l:a.appendChild(l);else{if(!Xe&&!qe&&!$e&&-1===t.indexOf('<'))return fe&&Je?fe.createHTML(t):t;if(!(a=kt(t)))return Xe?null:Je?pe:''}a&&Ve&&Ct(a.firstChild);for(var b=Lt(nt?t:a);u=b.nextNode();)if((3!==u.nodeType||u!==f)&&!It(u)){var _=H(u);1===u.nodeType&&(_&&_.__depth?u.__depth=(u.__removalCount||0)+_.__depth+1:u.__depth=1),(u.__depth>=255||U(u.__depth))&&Ct(u),u.content instanceof c&&(u.content.__depth=u.__depth,zt(u.content)),Ht(u),f=u}if(f=null,nt)return t;if(Xe){if(Ze)for(p=ye.call(a.ownerDocument);a.firstChild;)p.appendChild(a.firstChild);else p=a;return(Fe.shadowroot||Fe.shadowrootmod)&&(p=ve.call(i,p,!0)),p}var v=$e?a.outerHTML:a.innerHTML;return $e&&Me['!doctype']&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&I(le,a.ownerDocument.doctype.name)&&(v='<!DOCTYPE '+a.ownerDocument.doctype.name+'>\n'+v),qe&&(v=D(v,Se,' '),v=D(v,we,' '),v=D(v,xe,' ')),fe&&Je?fe.createHTML(v):v},o.setConfig=function(e){Tt(e),Ke=!0},o.clearConfig=function(){bt=null,Ke=!1},o.isValidAttribute=function(e,t,n){bt||Tt({});var o=Ae(e),a=Ae(t);return Ft(o,a,n)},o.addHook=function(e,t){'function'==typeof t&&(Ne[e]=Ne[e]||[],C(Ne[e],t))},o.removeHook=function(e){if(Ne[e])return x(Ne[e])},o.removeHooks=function(e){Ne[e]&&(Ne[e]=[])},o.removeAllHooks=function(){Ne={}},o})();return me},'object'==typeof _e&&void 0!==m?m.exports=t():'function'==typeof define&&define.amd?define(t):(e='undefined'!=typeof globalThis?globalThis:e||self).DOMPurify=t()}),1297,[]);