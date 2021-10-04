import React from 'react';

const Catagory = (props) => {
    const { name, available, img } = props.catagory;
    return (
        <div className="col-3">
            <img src={img} className="img-fluid" alt="" />
            <h4>{name}</h4>
            <p>Available Course: {available}</p>
            <button className="btn btn-danger">View All Course</button>
        </div>
    );
};

export default Catagory;