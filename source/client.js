'use strict'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'

import Pages from './pages/containers/Pages.jsx'

render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.getElementById('render-target')
)
