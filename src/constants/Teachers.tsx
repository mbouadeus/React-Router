import React from 'react';
import Card from '../components/Card';
import {CardDeck} from 'reactstrap';
import TeacherList from '../reducers/reducer-teachers';

const Teachers = () => {
    
    let teachers = TeacherList.map(({img_src, id, name, topic, bio}) => (
        <Card className="teacher-card" key={id} img_src={img_src} id={id} name={name} topic={topic} bio={bio} />
    ))
    
    return (
        <div className="main-content">
            <h2 className="main-content-title">Teachers</h2>
            <ul className="teacher-group">
                
                    {teachers}
               
            </ul>
        </div>
    );
}

export default Teachers;