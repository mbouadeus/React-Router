import React from 'react';
import CourseContainer from "../containers/CourseContainer";
import { HTMLCourses, CSSCourses, JSCourses } from '../reducers/reducer-courses';

const navLink = [
    {id: "html", topic: "HTML", data: HTMLCourses},
    {id: "css", topic: "CSS", data: CSSCourses},
    {id: "js", topic: "Javascript", data: JSCourses}
];
const Courses = ({match, match: {params: {topic}}}) => (
    <div className="main-content courses">
        {topic === undefined ? (
            <CourseContainer data={HTMLCourses} />
        ) : (
            <CourseContainer data={navLink.find(({id}) => id===topic).data} />
        )}
    </div>
);

export default Courses;