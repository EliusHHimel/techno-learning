import React from 'react';

const Course = (props) => {
    const { title, fee, img } = props.course;
    return (
        <div className="col-4 border my-3">
            <img src={img} alt="" className="catagory-img mt-2" />
            <h3>{title}</h3>
            <h5>Course Fee: {fee}</h5>
            <button className="btn btn-warning mb-2">Buy Course</button>
        </div>
    );
};

export default Course;