if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),d={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3c99db12"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_...all_.05b1c160.js",revision:null},{url:"assets/_name_.7abce007.js",revision:null},{url:"assets/404.d6017b72.js",revision:null},{url:"assets/index.7b7fafde.css",revision:null},{url:"assets/index.86b594ce.js",revision:null},{url:"assets/README.43549382.js",revision:null},{url:"assets/vendor.62125dcc.js",revision:null},{url:"assets/virtual_pwa-register.6d357894.js",revision:null},{url:"index.html",revision:"bc4ab18381974b4443d247c46d65f8bd"},{url:"favicon.svg",revision:"fd480326ce2f9db2043fceedae54cb67"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"ad75e969a728c027de80a613e9c5cecb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
