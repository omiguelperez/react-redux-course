'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render () {
    return (
      <section name="home">
        <h1>Home</h1>
        <Link to="/user">Go to profile</Link>
      </section>
    )
  }
}

export default Home