import React from 'react';
import { Link } from 'react-router-dom';

// top section
const TopSection = () => {
    return (
        <div className="top-container text-start">
            <div className="top-section p-5">
                <h2>Hey!!!</h2>
                <h1 className="text-danger fw-bolder h1">Do you want to <br /> build your career in IT?</h1>
                <br />
                <h3>If yes, then you came to the right place. <br /> This is the best place to learn new technology</h3>
                <p>We have been helping our students build their careers through our courses for the last 10 years. We have a 95% success rate.</p>
                <Link to="/about" className="btn btn-primary" href="">Learn More</Link>
            </div>
        </div>
    );
};

export default TopSection;