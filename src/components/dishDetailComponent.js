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
        return(list)

    }
    else{
        return(<div>hello</div>)
    }
}


class DishDetail extends Component{
    
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false,
            rating:'',
            name:'',
            comment:'',

        };
        this.handSubmit=this.handSubmit.bind(this)
        this.ToggleModal=this.ToggleModal.bind(this);

    }
    handSubmit(event){
        console.log('Current state is ' +JSON.stringify(this.state) );
        alert('Current state is ' +JSON.stringify(this.state));
        event.preventDefault();
    }
    ToggleModal(){
        this.setState({isModalOpen:!this.state.isModalOpen});
    }




    render(){

        return (
            <div className="container">
                <Modal isOpen={this.state.isModalOpen} toggle={this.ToggleModal}>
                    <ModalHeader>Add Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text name="name" id="name" placeholder="name" model='.name' validators={{required}} />
                                    <Errors model='.name' className="text-danger" show='touched' messages={{required:'required'}}/>
                                </Col>
                            </Row>

                        </LocalForm>
                    </ModalBody>
                </Modal>

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
                    <Button outline onClick={this.ToggleModal}>Add Comment</Button>
                </div>
            </div>
            </div>
        );
}
}

export default DishDetail;