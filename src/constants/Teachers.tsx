import * as React from 'react';
import TeacherCard from '../components/TeacherCard';
import TeacherList from '../reducers/reducer-teachers';

export default function Teachers() {
    const teachers = TeacherList.map(({img_src, id, name, topic, bio}) => (
        <TeacherCard className="teacher-card" key={id} img_src={img_src} name={name} topic={topic} bio={bio} />
    ));
    return (
        <div className="main-content">
            <h2 className="main-content-title">Teachers</h2>
            <ul className="teacher-group">
                {teachers}
            </ul>
        </div>
    )
}
