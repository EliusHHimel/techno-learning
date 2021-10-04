import React from 'react';
import Course from '../Course/Course';

// Show course from different catagory in services page

const CoursesCatagory = (props) => {
    const { name, catid, courses } = props.catagory
    return (
        <div id={catid}>
            <h2 className="fw-bolder border bg-secondary text-white p-1">{name}</h2>
            <div className="row">
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default CoursesCatagory;