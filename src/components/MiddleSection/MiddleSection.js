import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Catagory from '../Catagory/Catagory';

const MiddleSection = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hmeliushossainhimel/education-db/master/catagory.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <h2 className="mt-3">Our Courses/Services Catagory</h2>
            <div className="row">
                {catagories.map(catagory => <Catagory key={catagory.name} catagory={catagory}></Catagory>)}
            </div>
        </div>
    );
};

export default MiddleSection;