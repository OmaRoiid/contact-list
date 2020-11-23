import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
      <nav class="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
          <div className="container">
            <a class="navbar-brand" href="/">Contact Manger</a>
            <div >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/" class="nav-link" > <i className="fas fa-home"></i>Home <span class="sr-only">(current)</span></Link>
      </li>
       <li class="nav-item">
        <Link to="/add" class="nav-link" >  <i className="fas fa-plus"></i>Add</Link>
      </li>
        <li class="nav-item">
        <Link to="/about" class="nav-link" >  <i className="fas fa-question"></i>About</Link>
      </li>
      
    </ul>
  </div>
</div>

  
</nav>
        )
    }
}
 




