import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Contacts extends Component {
     static propTypes = {
        name: PropTypes.string.isRequired,
         email: PropTypes.string.isRequired, 
          phone: PropTypes.string.isRequired
    }
    state={
        showContact:false
    }
    onShowClick = e =>{
        this.setState({showContact:!this.state.showContact})
    }
    render() {
        const {name,email,phone}=this.props
        return (
            <div className="card card-body mb-3">
                <h4 >{name} <i onClick={this.onShowClick} class="fas fa-chevron-down"></i></h4>
                {this.state.showContact ? (<ul className="list-group">
                    <li className="list-group-item">Email : {email}</li>
                    <li  className="list-group-item">Phone : {phone}</li>
                </ul>) :null }
            </div>
        )
    }
}


