import React,{ Component } from "react";
import { Media ,Card,CardImg,CardBody,CardText,CardTitle,CardImgOverlay} from "reactstrap";

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
    

    renderDish=(dish)=>{
        if(dish!==null)
            return(
                <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            );
        
        else
            return(<div>hello world</div>)
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
            {this.renderDish(this.state.dishSelected)}
        </div>)
    }
}

export default Menu;