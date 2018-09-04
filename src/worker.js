self.addEventListener('install', (e => {
    self.skipWaiting();
    console.log('instaled')
}))

self.addEventListener('activate', (e => {
    self.clients.clain();
    console.log('activated')
}))

self.addEventListener('fetch', (e => {
    console.log('fetch')
    console.log(e)
}))