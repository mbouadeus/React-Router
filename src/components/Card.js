import React from 'react';
import { Card as card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Button } from 'reactstrap';

const Card = (props) => (
    <div>
        <Col sm="4" className="card">
        <card >
            <CardImg top width="100%" src={props.img_src} id={props.id} />
            
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.topic}</CardSubtitle>
                <CardText>{props.bio}</CardText>
                <Button className="center">Search</Button>
            </CardBody>
           
        </card>
        </Col>
    </div>
)


export default Card;