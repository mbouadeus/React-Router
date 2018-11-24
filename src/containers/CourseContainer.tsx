import * as React from 'react';
import Course from '../components/Course';


export default function CourseContainer({data, topic}) {
  const courses = data.map((course) => {
    return <Course title={course.title}
                   desc={course.description}
                   img={course.img_src}
                   key={course.id} />
  }); 
  return (
    <div>
        <h2 className="main-content-title">{topic}</h2>
        {courses}
    </div>
  );
}