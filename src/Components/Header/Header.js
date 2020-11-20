import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
    render() {
        return (
      <nav class="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
          <div className="container">
            <a class="navbar-brand" href="/">Contact Manger</a>
            <div >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</div>

  
</nav>
        )
    }
}
 




