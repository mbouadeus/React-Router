import * as React from 'react';

export default function Course(props) {
    return (
        <li className="course media group">
            <img className="course-img" src={props.img} alt="course"/>
            <div>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </li>
    )
}