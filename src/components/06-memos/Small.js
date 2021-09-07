import React, { memo } from 'react';

export const Small = memo(({ counter }) => {

    console.log("Small");

    return (
        <div>
            <small>{ counter }</small>
        </div>
    )
})
