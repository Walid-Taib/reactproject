import React ,{Component} from "react"; 
import {DISHES} from '../shared/dishes';
import {NavbarBrand ,Navbar} from 'reactstrap'
import Menu from "./MenuComponent";
import DishDetail from "./dishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";


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
        return(
            <div>

                <div>
                    <Header/>
                    <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onSelectedDish(dishId)} />
                    <DishDetail dishSelected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
                    <Footer/>
                </div>
            </div>
            
            
        )
    }
}

export default Main;