import React, { Component } from 'react'
import {Consumer} from '../../Context'
import {v1 as uuid} from "uuid"; 
 class Add extends Component {
     state={
         name:'',
         email:'',
         phone:''
     }
     onChange=e=>this.setState({
         [e.target.name]:e.target.value
     })
     addNewContact=(MakeOpperationOnSharedState,e)=>{
         e.preventDefault()
         const { name ,email,phone} = this.state
         const newContact={
             id:uuid(),//auto gnerated  id package
             name,
             email,
             phone

         }
         MakeOpperationOnSharedState({type:'ADD',payload:newContact})


     }
    render() {
        let {name,email,phone} = this.state

        return(
            <Consumer>
                {value=>{
                    const { MakeOpperationOnSharedState } =value;
                    return(
                         <div>
                <h1>Add One</h1>
                <div className="card mb-3">
                 <div className="card-header">Add Contact</div>
                 <div className="card-body">
                <form onSubmit={this.addNewContact.bind(this,MakeOpperationOnSharedState)}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input name="name" type="text" class="form-control form-control-lg p-3 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={name} onChange={this.onChange}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label >Email</label>
    <input name="email" type="email"  className="form-control form-control-lg p-3 "  placeholder="ex email@email.com" value={email} onChange={this.onChange}/>
  </div>
  <div class="form-group">
    <label f>Phone NUmber</label>
    <input name="phone" type="text" className="form-control form-control-lg p-3"  placeholder="01*************" value={phone} onChange={this.onChange}/>
  </div>
  
  <button type="submit" class="btn btn-primary btn-block">Add</button>
  </form>
  </div>
       </div>
            </div>
                    )
                }}
                
            </Consumer>
        )
    }
}
export default Add
