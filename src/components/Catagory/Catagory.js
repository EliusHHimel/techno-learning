import React from 'react';
import { Link } from 'react-router-dom';

// Show course catagory in home page/component

const Catagory = (props) => {
    const { name, available, img, catid } = props.catagory;
    return (
        <div className="col-lg-3 col-md-4 border mt-3">
            <img src={img} className="catagory-img img-fluid" alt="" />
            <h4>{name}</h4>
            <p>Available Course: {available}</p>
            <Link to={`/services#${catid}`} className="btn btn-danger">View All Course</Link>
        </div>
    );
};

export default Catagory;