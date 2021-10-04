import React from 'react';

const Member = (props) => {
    const { name, role, img } = props.member;
    return (
        <div className="border g-4 col-lg-4 col-md-4">
            <img src={img} alt="" className="member-img" />
            <h4>{name}</h4>
            <p>{role}</p>
        </div>
    );
};

export default Member;