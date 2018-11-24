import * as React from 'react';
import {Thumbnail} from 'react-bootstrap';
import './Card.css';

export default function Course(props) {
    return (
        <Thumbnail className="course-card">
            <img className="course-img" src={props.img} alt="course image"/>
            <h3 className="course-title">{props.title}</h3>
            <p>{props.desc}</p>
        </Thumbnail>
    )
}