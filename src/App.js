import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes'
import React,{ Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    }
  }

  render(){
    return(
      <div className="App">
        <Navbar dark color='primary'>
        <div className="container">

          <NavbarBrand href='#'>conFusion</NavbarBrand>
        </div>

        </Navbar>
        <Menu dishes={this.state.dishes}/>
      

      </div>
    )
  }
}



export default App;
