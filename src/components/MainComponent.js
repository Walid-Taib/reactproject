import React ,{Component} from "react"; 
import {DISHES} from '../shared/dishes';
import Menu from "./MenuComponent";
import DishDetail from "./dishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./HomeCompnent";
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            selectedDish:null,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }
    onSelectedDish=(dish)=>{
        this.setState({selectedDish:dish});

    }


    render(){
        const HomePage = () => {
            return(
                <Home 
                    dish={this.state.dishes.filter((dish) => dish.name)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.name)[0]}
                    leader={this.state.leaders.filter((leader) => leader.name)[0]}
                />
            );
          }
        return(
            <div>

                <div>
                    <Header/>
                    <Switch>
                        <Route component={HomePage} path='/Home'/>
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