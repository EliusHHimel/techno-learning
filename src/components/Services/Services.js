import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CoursesCatagory from '../CoursesCatagory/CoursesCatagory';

const Services = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hmeliushossainhimel/education-db/master/catagory.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, []);

    return (
        <div>
            {
                catagories.map(catagory => <CoursesCatagory key={catagory.catid} catagory={catagory}></CoursesCatagory>)
            }
        </div>
    );
};

export default Services;