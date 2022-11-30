import React,{ Component } from "react";
import { Card,CardImg,CardTitle,CardImgOverlay} from "reactstrap";
import DishDetail from "./dishDetailComponent";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            dishSelected:null
        };
       
    }
    onDishSelect=(dish)=>{
        this.setState({dishSelected:dish})
    }
    



    render(){
         const menu=this.props.dishes.map((dish)=>{
            return (
                <div  className="col-12 col-md-5 m-1">
                  <Card key={dish.id}
                    onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                  </Card>
                </div>
              );
        })
        return(
        <div>
            {menu}
            <DishDetail dishSelected={this.state.dishSelected}/>
        </div>)
    }
}

export default Menu;