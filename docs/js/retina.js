!function(){function t(){}function e(t){return r.retinaImageSuffix+t}function i(t,i){if(this.path=t||"",void 0!==i&&null!==i)this.at_2x_path=i,this.perform_check=!1
else{if(void 0!==document.createElement){var a=document.createElement("a")
a.href=this.path,a.pathname=a.pathname.replace(o,e),this.at_2x_path=a.href}else{var n=this.path.split("?")
n[0]=n[0].replace(o,e),this.at_2x_path=n.join("?")}this.perform_check=!0}}function a(t){this.el=t,this.path=new i(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"))
var e=this
this.path.check_2x_variant(function(t){t&&e.swap()})}var n="undefined"==typeof exports?window:exports,r={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0}
n.Retina=t,t.configure=function(t){null===t&&(t={})
for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])},t.init=function(t){null===t&&(t=n)
var e=t.onload||function(){}
t.onload=function(){var t,i,n=document.getElementsByTagName("img"),r=[]
for(t=0;t<n.length;t+=1)i=n[t],i.getAttributeNode("data-no-retina")||r.push(new a(i))
e()}},t.isRetina=function(){var t="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)"
return n.devicePixelRatio>1?!0:n.matchMedia&&n.matchMedia(t).matches?!0:!1}
var o=/\.\w+$/
n.RetinaImagePath=i,i.confirmed_paths=[],i.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},i.prototype.check_2x_variant=function(t){var e,a=this
return this.is_external()?t(!1):this.perform_check||void 0===this.at_2x_path||null===this.at_2x_path?this.at_2x_path in i.confirmed_paths?t(!0):(e=new XMLHttpRequest,e.open("HEAD",this.at_2x_path),e.onreadystatechange=function(){if(4!==e.readyState)return t(!1)
if(e.status>=200&&e.status<=399){if(r.check_mime_type){var n=e.getResponseHeader("Content-Type")
if(null===n||!n.match(/^image/i))return t(!1)}return i.confirmed_paths.push(a.at_2x_path),t(!0)}return t(!1)},e.send(),void 0):t(!0)},n.RetinaImage=a,a.prototype.swap=function(t){function e(){i.el.complete?(r.force_original_dimensions&&(i.el.setAttribute("width",i.el.offsetWidth),i.el.setAttribute("height",i.el.offsetHeight)),i.el.setAttribute("src",t)):setTimeout(e,5)}void 0===t&&(t=this.path.at_2x_path)
var i=this
e()},t.isRetina()&&t.init(n)}()
