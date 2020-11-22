import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Consumer} from '../../Context'



export default class Contacts extends Component {
     static propTypes = {
        name: PropTypes.string.isRequired,
         email: PropTypes.string.isRequired, 
          phone: PropTypes.string.isRequired,
    }
    state={
        showContact:false
    }
    onShowClick = e =>{
        this.setState({showContact:!this.state.showContact})
    }
    deleteContact=(id,MakeOpperationOnSharedState)=>{
    
        MakeOpperationOnSharedState({type:'DELETE',payload:id})//action obj contains to values action{ type , payload}

    }
    render() {
         const {id,name,email,phone}=this.props
         return(
        <Consumer>
            {value =>{
                const { MakeOpperationOnSharedState } = value
                return(
                    <div className="card card-body mb-3">
                <h4 >{name} 
                <i onClick={this.onShowClick} class="fas fa-chevron-down" style={{cursor:"pointer"}}></i>
                <i onClick={this.deleteContact.bind(this,id,MakeOpperationOnSharedState)} class="fas fa-trash-alt" style={{cursor:"pointer",float:"right" , color:"red"}}></i>
                </h4>
               
                
                {this.state.showContact ? (<ul className="list-group">
                    <li className="list-group-item">Email : {email}</li>
                    <li  className="list-group-item">Phone : {phone}</li>
                </ul>) :null }
            </div>
                )
            }}
        </Consumer>
       
         )
    }
}


