'use strict'
const http = require('http')
const url = require('url')

const PORT = process.env.PORT || 3000
const PROTOCOL = 'http'
const { STATUS_CODES } = http

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

const root = `<html>
  <head>
    <style>
     body { background: #333; margin: 1.25rem }
     a { color: yellow; font-size: 2rem; font-family: sans-serif }
    </style>
  </head>
  <body>
    <a href='/hello'>Hello</a>
  </body>
  </html>
`

const server = http
  .createServer((req, res) => {
    res.setHeader('content-type', 'text/html')

    if (req.method !== 'GET') {
      res.statusCode = 405
      res.end(STATUS_CODES[res.statusCode] + '\r\n')
      return
    }

    const { pathname } = new url.URL(req.url, `${PROTOCOL}://${req.headers.host}`)
    if (pathname === '/') {
      res.end(root)
      return
    }

    if (pathname === '/hello') {
      res.end(hello)
      return
    }

    res.statusCode = 404
    res.end(STATUS_CODES[res.statusCode] + '\r\n')
  })
  .listen(PORT)

server.on('listening', () => {
  console.log(`Server running on port ${PORT}`)
})
