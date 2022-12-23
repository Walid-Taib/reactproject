import React ,{Component} from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Row, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Errors, LocalForm } from "react-redux-form";



const required=(val)=>val &&val.length;






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
    if(comments!==null){
        const list =comments.map((comment)=>{return(
            <div key={comment.id}>{comment.comment}</div> )
        })
        return(
            <div>
                {list}
                <CommentForm/>
            </div>
        )

    }
    else{
        return(<div>hello</div>)
    }
}


const DishDetail=(props)=> {
    return(

            <div className="container">


            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComment  comments={props.comments}/>
                </div>
            </div>
            </div>
        );
    
}



class CommentForm extends Component{
    constructor(props){
        super(props)
        this.state={
            isModalOpen:false
        }
        this.ChangeModal=this.ChangeModal.bind(this);
        this.HandSubmit=this.HandSubmit.bind(this)
    }
    ChangeModal(){
        this.setState({isModalOpen:!this.state.isModalOpen});
    }
    HandSubmit(values){
        alert(JSON.stringify(values));
        this.ChangeModal();
    }
    render(){
        return(
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.ChangeModal}>
                    <ModalHeader>Add Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.HandSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text name="name" id="name" placeholder="name" model='.name' validators={{required}} className="form-control" />
                                    <Errors model='.name' className="text-danger" show='touched' messages={{required:'required'}}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} htmlFor="rating">Rating</Label>
                                <Col md={10}>
                                    <Control.select className="form-control" md={10} model='rating' name="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col>
                                    <Control.textarea size={10} md={10} model='.comment' className="form-control" name="comment" id="name"/>

                                </Col>
                            </Row>
                            <Button type={onsubmit} color="primary">Add Comment</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Button  onClick={this.ChangeModal}>Add Comment</Button>
            </div>)
    }
}

export default DishDetail;