self.addEventListener('install', (e => {
   self.skipWaiting(); //forces update
    console.log('instaled')
}))

self.addEventListener('activate', (e => {
    self.clients.claim(); //claims all clients immidetly
    console.log('activated')
}))

self.addEventListener('fetch', (e => {
    e.respondWith(fetch(e.request))
    console.log('fetch')
    console.log(e)
}))