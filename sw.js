const CACHE = "sigpro-mobile-v4";
const STATIC = ["./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith("sigpro-mobile-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  const html=u.pathname.endsWith("/")||u.pathname.endsWith("/index.html")||e.request.mode==="navigate";
  if(html){e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match("./index.html")));return}
  e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)));
});