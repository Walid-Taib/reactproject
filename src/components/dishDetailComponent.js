import React ,{Component} from "react";
import {Card ,CardImg ,CardBody,CardTitle, CardText }  from 'reactstrap';

class DishDetail extends Component{
    



    renderComment=(dish)=>{
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
        return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6">
                    {this.renderDish(this.props.dishSelected)}

                </div>
                <div className="col-12 col-sm-6">
                    {this.renderComment(this.props.dishSelected)}

                </div>

            </div>
        </div>)
    }
}


export default DishDetail;