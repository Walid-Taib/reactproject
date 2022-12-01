import 'bootstrap/dist/css/bootstrap.min.css';
import {DISHES} from './shared/dishes'
import React,{ Component } from 'react';
import Main from './components/MainComponent';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css'
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
        <Main/>
      

      </div>
    )
  }
}



export default App;
