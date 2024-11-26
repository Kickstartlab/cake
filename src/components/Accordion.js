import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item py-4 cursor-pointer border rounded-2xl p-5 mt-5 bg-white-100">
            <div className="accordion-title flex justify-between items-center gap-4"
                onClick={() => setIsActive(!isActive)}>

                <div className='font-nerko lg:text-2xl'>
                    {title}
                </div>

                <div className='p-2 rounded-full bg-white-50 w-6 h-6 flex items-center justify-center'>
                    {isActive ? '-' : '+'}
                </div>

            </div>
            {isActive && <div className="accordion-content mt-4 duration-100">{content}</div>}
        </div>
    );
};

export default Accordion
