import React ,{Component} from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const     RenderDish=({dish})=>{
        if(dish!==undefined)
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



const     RenderComment=({comments})=>{
    console.log(comments)
    if(comments!==null){
        const list =comments.map((comment)=>{return(
            <div key={comment.id}>{comment.comment}</div> )
        })
        return(list)

    }
    else{
        return(<div>hello</div>)
    }
}


class DishDetail extends Component{
    






    render(){

        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{this.props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={this.props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComment  comments={this.props.comments}/>
                </div>
            </div>
            </div>
        );
}
}

export default DishDetail;