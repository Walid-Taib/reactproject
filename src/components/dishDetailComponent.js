import React ,{Component} from "react";
import {Card ,CardImg ,CardBody,CardTitle, CardText }  from 'reactstrap';

class DishDetail extends Component{
    



    renderComment=(dish)=>{
        console.log('dish comment:')

        if(dish!==null){
            const list =dish.comments.map((comments)=>{
                return(
                    <div key={comments.id}>
                        <p>{comments.comment}</p>
                        <p>--  {comments.date}</p>
                    </div>
                )
            })
            return(
            <div>
                <h4>Comments</h4>
                {list}
            </div>)
        }
        else{

            return(<div></div>)
        }
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
            return(<div></div>)
    }

    render(){
        const test=this.props.dishSelected;
        if(test==null){

        }
        else{
            return(<div>  
                     {test.name}

            </div>)
        }
        return(
        <div className="container">


        </div>)
    }
}


export default DishDetail;