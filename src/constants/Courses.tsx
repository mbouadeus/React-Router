import * as React from 'react';
import CourseContainer from "../containers/CourseContainer";
import CourseNavs from '../reducers/reducer-courses';

export default function Courses(props) {
    const {match: {params: {topic}}} = props;
    return (
        <div className="main-content courses">
            {topic === undefined ? (
                <CourseContainer data={CourseNavs[0].data} topic={CourseNavs[0].topic}/>
            ) : topic === CourseNavs[0].id ? (
                <CourseContainer data={CourseNavs[0].data} topic={CourseNavs[0].topic}/>
            ) : topic === CourseNavs[1].id ? (
                <CourseContainer data={CourseNavs[1].data} topic={CourseNavs[1].topic}/>
            ) : topic === CourseNavs[2].id ? (
                <CourseContainer data={CourseNavs[2].data} topic={CourseNavs[2].topic}/>
            ): null
            }
        </div>
    )
}
