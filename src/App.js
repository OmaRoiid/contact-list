import React,{Component} from 'react'
import Header from './Components/Header/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactsList from './Components/Contacts/ContactsList.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Provider  from './Context'

library.add(faStroopwafel)

class App extends Component {
  render(){
  return (
  <Provider>
    <Header/>
    <div className="container">
     <ContactsList/>
    </div>
  </Provider>
  );
  }
}

export default App;
