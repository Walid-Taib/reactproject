import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
    import { Loading } from './LoadingComponent';

    function RenderCard({item, isLoading, errMess}) {
    
        if (isLoading) {
            return(
                    <Loading />
            );
        }
        else if (errMess) {
            return(
                    <h4>{errMess}</h4>
            );
        }
        else 
            return(
                <Card>
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    </CardBody>
                </Card>
            );
    
    }
    
function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promo} isLoading={props.promoLoading} errMess={props.promoerror}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} isLoading={props.leaderloading} errMess={props.leadererror}/>
                </div>
            </div>
        </div>
    );
}

export default Home;