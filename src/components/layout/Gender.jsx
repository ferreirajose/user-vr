import './Gender.css'; 

import React from 'react';

const Gender = props => (
    <div className="Gender">

        {props.gender === 'male' ? (
            <span class="material-symbols-outlined male-icon">
                male
            </span>
        ) : (
            <span class="material-symbols-outlined female-icon">
                female
            </span>
        )}
    </div>
)

export default Gender
