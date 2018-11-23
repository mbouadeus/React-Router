import * as React from 'react';

export interface IProps {
    name: string,
    topic: string
}

export default function Featured(props) {
    const {name, topic}:IProps = props.matc.params;
    return (
        <div className="main-content">
            <h2 className="main-content-title">{name}</h2>
            <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
        </div>
    )
}