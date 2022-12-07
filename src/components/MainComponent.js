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
import About from "./AboutUsComponent";
import Contact from "./ContactCompnent";
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
        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };


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
                        <Route path='/menu/:dishId' component={DishWithId} />
                        <Route path='/aboutus' component={()=><About leaders={this.state.leaders}/>}/>
                        <Route path='/contactus' component={()=><Contact/>}/>
                        <Redirect to='/Home' />
                    </Switch>
                    <Footer/>
                </div>
            </div>
            
            
        )
    }
}
export default Main;