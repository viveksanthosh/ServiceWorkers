self.addEventListener('install', (e => {
    console.log('instaled')
}))

self.addEventListener('activate', (e => {
    console.log('activated')
}))

self.addEventListener('fetch', (e => {
    console.log('fetch')
    console.log(e)
}))