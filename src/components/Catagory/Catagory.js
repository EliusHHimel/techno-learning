import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = (props) => {
    const { name, available, img, catid } = props.catagory;
    return (
        <div className="col-3 border">
            <img src={img} className="catagory-img img-fluid" alt="" />
            <h4>{name}</h4>
            <p>Available Course: {available}</p>
            <Link to={`/services/#${catid}`} className="btn btn-danger">View All Course</Link>
        </div>
    );
};

export default Catagory;