import * as React from 'react';
import {Thumbnail, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './Card.css';

function TeacherCard(props) {
    function handleSubmit() {
        props.history.push(`/teachers/${props.topic}/${props.name}`);
    }
    return (
        <Thumbnail className="teacher-card cleafix">
            <div>
                <img className="teacher-image" src={props.img_src} alt="teacher-image"/>
                <h3>{props.name}</h3>
                <h4>{props.topic}</h4>
                <p className="teacher-desc">{props.desc}</p>
                <Button className="teacher-button" bsStyle="primary" onClick={handleSubmit}>GO!</Button>
            </div>
        </Thumbnail>
    )
}

export default withRouter(TeacherCard);