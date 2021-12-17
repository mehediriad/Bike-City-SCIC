import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Bike.css';

const Bike = (props) => {
    const {_id, title ,company ,  description , price , img , model , type ,release} = props.product;
    const history = useHistory();
    const handleBuyNow = () =>{
        history.push(`/shipping/${_id}`);
    }
    return (
        <Col>
        <Card className="bike-card">
        <div className="bike-card-header">
            <div>
                <Card.Title>{title}</Card.Title>
                <span class="badge bg-light text-muted text-start mb-2">POWERED BY {company}</span>
            </div>
            <div>
                <h2>${price}</h2>
            </div>
        </div>
        
        
        <Card.Img variant="top" src={img} />
           
            <Card.Body>
                <div>
                    <h6>Model</h6>
                    <p>{model}</p>
                </div>
                <div className="bike-card-body-middle">
                    <h6>Type</h6>
                    <p>{type}</p>
                </div>
                <div>
                    <h6>Release</h6>
                    <p>{release}</p>
                </div>
                
                
                
            </Card.Body>
            {/* <p className="w-100 px-2">{description.slice(0,100)}</p> */}
            <Card.Footer>
                <div className="bike-card-footer">
                    <div className="dike-details">
                        <button className="btn btn-outline-secondary">Details</button>
                    </div>
                    <div className="orders-btn">
                        <button className="btn btn-primary" onClick={handleBuyNow}>Buy Now</button>
                    </div>
                </div>
            </Card.Footer>
        </Card>
 </Col>
    );
};

export default Bike;