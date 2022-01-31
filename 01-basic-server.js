'use strict'
const http = require('http')

const PORT = process.env.PORT || 3000

const hello = `<html>
  <head>
    <style>
     body { background: #333; margin: 1.25rem }
     h1 { color: #EEE; font-family: sans-serif }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`

const server = http
  .createServer((req, res) => {
    res.setHeader('content-type', 'text/html')
    res.end(hello)
  })
  .listen(PORT)

server.on('listening', () => {
  console.log(`Server running on port ${PORT}`)
})
