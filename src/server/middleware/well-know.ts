export default defineEventHandler((event) => {
  if (event.req.url?.startsWith('/.well-known/appspecific/com.chrome.devtools.json')) {
    setHeader(event, 'Content-Type', 'application/json')
    return {} // return a blank JSON to prevent Vue Router warning
  }
})
