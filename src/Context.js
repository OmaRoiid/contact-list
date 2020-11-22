import React, { Component } from 'react'
const Context=React.createContext();
const Opperation=(state,action)=>{
    switch(action.type){
        case 'DELETE':
            return{
               
                contactsList:state.contactsList.filter(contact=>contact.id !== action.payload)
            }
              case 'ADD':
            return{
                ...state,
                contactsList:[action.payload,...state.contactsList]
            }
            default:
            return state
    } 
}

  class Provider extends Component{

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
            ],
            MakeOpperationOnSharedState:(action)=>{
                this.setState(state=>Opperation(state,action))
            }
        }
        render(){
            return(
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
            )
        }
}
export default Provider
export const Consumer =Context.Consumer;



