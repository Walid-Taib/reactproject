import React ,{Component} from "react"; 
import {DISHES} from '../shared/dishes';
import Menu from "./MenuComponent";
import DishDetail from "./dishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./HomeCompnent";

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            selectedDish:null
        }
    }
    onSelectedDish=(dish)=>{
        this.setState({selectedDish:dish});

    }


    render(){
        const Homepage=()=>{
            return(<div><Home/></div>)
        }
        return(
            <div>

                <div>
                    <Header/>
                    <Switch>
                        <Route component={Homepage} path='/Home'/>
                        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />

                        <Redirect to='/Home' />
                    </Switch>
                    <Footer/>
                </div>
            </div>
            
            
        )
    }
}

export default Main;