if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),f={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3c99db12"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_...all_.97b69276.js",revision:null},{url:"assets/_name_.6424f495.js",revision:null},{url:"assets/404.8c10b812.js",revision:null},{url:"assets/index.76607692.js",revision:null},{url:"assets/index.82becabe.css",revision:null},{url:"assets/README.80f971a7.js",revision:null},{url:"assets/vendor.35c7ab08.js",revision:null},{url:"assets/virtual_pwa-register.6d357894.js",revision:null},{url:"index.html",revision:"6edbd354e6feeb73f3c979078f231f2f"},{url:"favicon.svg",revision:"fd480326ce2f9db2043fceedae54cb67"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"4f26f190d5fa420652f78d2375ae593b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
