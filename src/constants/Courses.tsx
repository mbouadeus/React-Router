import * as React from 'react';
import CourseContainer from "../containers/CourseContainer";
import { CSSCourses, HTMLCourses, JSCourses } from '../reducers/reducer-courses';

const navLinks = [
    {id: "html", topic: "HTML", data: HTMLCourses},
    {id: "css", topic: "CSS", data: CSSCourses},
    {id: "js", topic: "Javascript", data: JSCourses}
];

export default function Courses(props) {
    const {match: {params: {topic}}} = props;
    return (
        <div className="main-content courses">
            {topic !== undefined ? (
                <CourseContainer data={HTMLCourses}/>
            ) : (
                <CourseContainer data={navLinks.find(({id}) => id === topic).data}/>
                // https://github.com/Microsoft/TypeScript/issues/19415
            )}
        </div>
    )
}
