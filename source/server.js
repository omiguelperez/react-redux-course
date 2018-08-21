'use strict'

import http from 'http'
import React from 'react'
import { 
  renderToString,
  renderToStaticMarkup
 } from 'react-dom/server'
import {
  ServerRouter,
  createServerRenderContext
} from 'react-router'

import Layout from './pages/components/Layout.jsx'
import Pages from './pages/containers/Pages.jsx'

const port = process.env.PORT || 3000

function requestHandler (req ,res) {
  const context = createServerRenderContext()

  let html = renderToString(
    <ServerRouter location={req.url} context={context}>
      <Pages />
    </ServerRouter>
  )

  const result = context.getResult()

  res.setHeader('Content-Type', 'text/html')

  if (result.redirect) {
    res.writeHead(301, {
      Location: result.redirect.pathname
    })
    res.end()
  }

  if (result.missed) {
    res.writeHead(404)

    html = renderToString(
      <ServerRouter location={req.url} context={context}>
        <Pages />
      </ServerRouter>
    )
  }

  res.write(
    renderToStaticMarkup(
      <Layout title="Aplicación" content={html} />
    )
  )
  res.end()
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
  if (err) return console.error(err.message), process.exit(1)
  console.log(`Listening on port ${port}`)
})

