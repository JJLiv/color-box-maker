import React, { useState } from "react";

const Box = ({ id, width, height, backgroundColor }) => {
    
    return (
        <ul>
            <li>Box Width: {width}</li>
            <li>Box Height: {height}</li>
            <li>Box Color: {backgroundColor}</li>
        </ul>
    )
};

export default Box;