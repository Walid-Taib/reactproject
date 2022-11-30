import React,{ Component } from "react";
import { Card,CardImg,CardTitle,CardImgOverlay} from "reactstrap";

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
                <div key={dish.id} className="col-12 col-md-5 m-1">
                  <Card 
                    onClick={() =>  this.props.onclick(dish.id)}>
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
        </div>)
    }
}

export default Menu;