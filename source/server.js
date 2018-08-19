'use strict'

import http from 'http'
import React from 'react'
import { renderToString } from 'react-dom/server'

const port = process.env.PORT || 3000

function requestHandler (req ,res) {
  const html = renderToString(<h1>Hello World!</h1>)

  res.write(html)
  res.end()
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
  if (err) return console.error(err.message), process.exit(1)
  console.log(`Listening on port ${port}`)
})

