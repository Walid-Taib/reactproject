import React ,{Component} from "react"; 
import {DISHES} from '../shared/dishes';
import {NavbarBrand ,Navbar} from 'reactstrap'
import Menu from "./MenuComponent";
import DishDetail from "./dishDetailComponent";


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
                <Navbar dark color='primary'>
                    <div className="container">
                        <NavbarBrand href='#' >conFusion</NavbarBrand>
                    </div>
                </Navbar>
                <div>
                    <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onSelectedDish(dishId)} />
                    <DishDetail dishSelected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>

                </div>
            </div>
            
            
        )
    }
}

export default Main;