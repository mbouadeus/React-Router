import * as React from 'react';

export default function TeacherCard(props) {
    return (
        <div className="teacher-card">
            <img className="card-image" width="100%" src={props.img_src} />
            <div className="card-body">
                <div className="card-name">{props.name}</div>
                <div className="card-topic">{props.topic}</div>
                <div className="card-bio">{props.bio}</div>
                <a className="card-button">Search</a>
            </div>
        </div>
    )
}