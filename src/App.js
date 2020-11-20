import React,{Component} from 'react'
import Contacts from './Components/Contacts/Contact.js'
import Header from './Components/Header/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactsList from './Components/Contacts/ContactsList.js'

class App extends Component {
  render(){
  return (
    <>
    <Header/>
    <div className="container">
     <ContactsList/>
    </div>
    </>
  );
  }
}

export default App;
