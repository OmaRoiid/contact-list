import React,{Component} from 'react'
import {BrowserRouter as Router  , Route , Switch} from 'react-router-dom'
import Header from './Components/Header/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactsList from './Components/Contacts/ContactsList.js'
import AddContact from './Components/Contacts/Add'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Provider  from './Context'
import About from './Components/Pages/About'
import NotFound from './Components/Pages/NotFound'

library.add(faStroopwafel)

class App extends Component {
  render(){
  return (
  <Provider>
   <Router>
    <Header/>
    <div className="container">
      <Switch>
     <Route exact path="/" component={ContactsList}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/add" component={AddContact}/>
     <Route  component={NotFound}/>
     </Switch>
    </div>
    </Router>
  </Provider>
  );
  }
}

export default App;
