import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Catagory from '../Catagory/Catagory';

// This is the middle section component of home component

const MiddleSection = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hmeliushossainhimel/education-db/master/catagory.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div className="course-catagory">
            <h2 className="mt-4">Our Courses/Services Catagories</h2>
            <div className="row">
                {catagories.map(catagory => <Catagory key={catagory.name} catagory={catagory}></Catagory>)}
            </div>
        </div>
    );
};

export default MiddleSection;