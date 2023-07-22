(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();function i(e){const n={btns:document.querySelectorAll("._btn"),contents:document.querySelectorAll("._content"),moving:function(l,c){l.forEach(t=>{t.addEventListener("click",o=>{let s=o.target.dataset.btn;localStorage.setItem("page",s),console.log("used Switch Content",s),e(),localStorage.getItem("page")===s&&(window.location.hash=s)})})}};n.moving(n.btns,n.contents)}function u(){const e={openBtn:document.querySelector(".header__btn"),closeBtns:document.querySelectorAll("._close"),nav:document.querySelector(".header__nav"),navBtns:document.querySelectorAll(".nav__btn._btn"),overlay:document.querySelector(".header__overlay"),body:document.querySelector("body"),toggler:function(){e.openBtn.classList.toggle("_close"),e.nav.classList.toggle("_show"),e.overlay.classList.toggle("_show"),e.body.classList.toggle("_lock")},action:function(){e.openBtn.addEventListener("click",e.toggler),e.overlay.addEventListener("click",e.toggler),e.activeLink()},removeActiveLink:function(){e.navBtns.forEach(n=>n.classList.remove("_active"))},activeLink:function(){e.navBtns.forEach(n=>{n.addEventListener("click",()=>{e.removeActiveLink(),n.classList.contains("_active")||n.classList.add("_active")})})}};e.action()}function a(){const e={elem:document.documentElement,btn:document.querySelector("._resize"),icon:{min:"icons/min-size.svg",max:"icons/max-size.svg"},action:()=>{e.btn.addEventListener("click",()=>{e.btn.classList.contains("_resize-on")?e.fullOff():e.fullOn()})},fullOn:()=>{e.btn.classList.add("_resize-on"),e.btn.children[0].setAttribute("src",e.icon.min),(e.elem.requestFullscreen||e.elem.mozRequestFullScreen||e.elem.webkitRequestFullscreen||e.elem.msRequestFullscreen)&&(e.elem.requestFullscreen()||e.elem.mozRequestFullScreen()||e.elem.webkitRequestFullscreen()||e.elem.msRequestFullscreen())},fullOff:()=>{(document.exitFullscreen||document.mozCancelFullScreen||document.webkitExitFullscreen||document.msExitFullscreen)&&(document.exitFullscreen()||document.mozCancelFullScreen()||document.webkitExitFullscreen()||document.msExitFullscreen(),e.btn.classList.remove("_resize-on"),e.btn.children[0].setAttribute("src",e.icon.max))}};e.action()}function d(){const e={btn:document.querySelector("._theme-btn"),icon:{sun:"icons/sun.svg",moon:"icons/moon.svg"},currentTheme:localStorage.getItem("theme"),currentIcon:localStorage.getItem("icon"),action:()=>{e.currentTheme==="dark"?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),e.btn.children[0].setAttribute("src",e.icon.sun)):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),e.btn.children[0].setAttribute("src",e.icon.moon)),e.btn.addEventListener("click",function(){document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?(e.currentTheme="dark",e.btn.children[0].setAttribute("src",e.icon.sun),console.log("Меняем тему на темную")):(e.currentTheme="light",e.btn.children[0].setAttribute("src",e.icon.moon),console.log("Меняем тему на светлую")),localStorage.setItem("theme",e.currentTheme)}),document.body.style.display="block"}};e.action()}function r(){const e=document.querySelectorAll("._content"),n=document.querySelectorAll("._btn");e.forEach(l=>{l.dataset.content===localStorage.getItem("page")&&(document.querySelectorAll("._show").forEach(c=>{c.classList.remove("_show"),document.body.classList.remove("_lock")}),document.querySelectorAll("._close").forEach(c=>{c.classList.remove("_close")}),n.forEach(c=>{c.dataset.btn===localStorage.getItem("page")&&c.classList.add("_active")}),l.classList.add("_show"))}),window.scrollTo(0,0)}i(r);u();a();d();window.onload=function(){r(),setTimeout(()=>{window.scrollTo(0,0)},50)};