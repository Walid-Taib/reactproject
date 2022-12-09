import 'bootstrap/dist/css/bootstrap.min.css';
import {DISHES} from './shared/dishes'
import React,{ Component } from 'react';
import Main from './components/MainComponent';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
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
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
      </div>
    )
  }
}



export default App;
