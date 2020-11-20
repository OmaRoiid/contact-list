import React, { Component } from 'react'
import Contact from './Contact'

export default class ContactsList extends Component {

        state={
            contactsList:[
                {
                    id:1,
                    name:"OmarS",
                    email:"omars@gmail.com",
                    phone:"01100634348"
                },
                 {
                    id: 2,
                    name:"OmarB",
                    email:"omarb@gmail.com",
                    phone:"01100632325"
                },
                 {
                    id:3,
                    name:"SherefA",
                    email:"sherefa@gmail.com",
                    phone:"01100636367"
                },
            ] 
        }
    render() {
        const {contactsList}=this.state;
        return (
            <div>
                {contactsList.map(item=>
                   <Contact key={item.id}  name={item.name} email={item.email} phone={item.phone} />
                )}
                
            </div>
        )
    }
}
