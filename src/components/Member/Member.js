import React from 'react';

// Show team members in about section
const Member = (props) => {
    const { name, role, img } = props.member;
    return (
        <div className="border col-lg-4 col-md-4">
            <img src={img} alt="" className="member-img mt-1" />
            <h4>{name}</h4>
            <p>{role}</p>
        </div>
    );
};

export default Member;