import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Member from '../Member/Member';

// About us component

const About = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hmeliushossainhimel/fake-data/main/applicants.JSON')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, [])
    return (
        <div>

            <div className="d-lg-flex d-md-flex mt-4">

                <div className="container-fluid">
                    <h1>~ About Us ~</h1>
                    <p className="text-justify">At <strong>Techno <span className="text-danger">Learning</span></strong>, we believe there is a better way to do marketing. A more valuable way where customers are earned rather than bought. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. We're excited to simplify SEO for everyone through our software, education, and community</p>
                </div>
            </div>
            <div className="mt-4">
                <div className="container-fluid mb-3">
                    <h1>~ Our Team ~</h1>
                </div>
                <div className="container-fluid row mb-3">
                    {
                        members.map(member => <Member key={member.key} member={member}></Member>)
                    }

                </div>
            </div>

        </div >
    );
};

export default About;