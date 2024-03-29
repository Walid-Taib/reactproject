import React ,{Component} from "react"; 
import {DISHES} from '../shared/dishes';
import Menu from "./MenuComponent";
import DishDetail from "./dishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeCompnent";
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import About from "./AboutUsComponent";
import Contact from "./ContactCompnent";


import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addComment ,fetchDishes, fetchleader, fetchpromo } from "../redux/ActionCreators";
import { actions } from "react-redux-form";


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps=dispatch=>({
  addComment:(dishId,rating,author,comment)=>dispatch(addComment(dishId,rating,author,comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  fetchpromo :()=>{dispatch(fetchpromo())},
  fetchleader:()=>{dispatch(fetchleader())},
  resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))}

})




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
    componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchpromo();
      this.props.fetchleader();
    }


    render(){
      const HomePage = () => {
        console.log(this.props.promotions.isLoading)
        return(
          
            <Home 
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promo={this.props.promotions.promotions.filter((promo)=>promo.featured)[0]}
                promoerror={this.props.promotions.errmess}
                promoLoading={this.props.promotions.isLoading}
                leaderloading={this.props.leaders.isLoading}
                leadererror={this.props.leaders.errmess}
                leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}

            />
        );
      }
  
      const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
              isLoading={this.props.dishes.isLoading}
              errMess={this.props.dishes.errMess}
              comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
              addComment={this.props.addComment}
            />
        );
      };
      
          return (
            <div>
              <Header />
              <div>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />}  />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
                    <Redirect to="/home" />
                </Switch>
              </div>
              <Footer />
            </div>
          );
        }
      }
      
      export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));