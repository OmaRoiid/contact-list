import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../../Context'

export default class ContactsList extends Component {
    render() {
        return(
            <Consumer>
                {value=>{
                    const { contactsList } =value
                    return(
                <div>
                {contactsList.map(item=>
                   <Contact key={item.id} id={item.id} name={item.name} email={item.email} phone={item.phone}   />
                )}
                  </div>
                    )
                }}
            </Consumer>
        )
    }
}
