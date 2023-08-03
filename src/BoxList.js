import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

const BoxList = () => {
    INITIAL_STATE = [
        {id: uuid(), width: 5, height: 5, backgroundColor: 'Red'},
        {id: uuid(), width: 6, height: 7, backgroundColor: 'Green'},
    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }
    return (
        <div>
            <h3>Box List</h3>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({ id, width, height, backgroundColor }) => {
                    <Box id={id} 
                    width={width} 
                    height={height} 
                    backgroundColor={backgroundColor} 
                    key={id} 
                    />
                })}
            </div>
        </div>
    )
};

export default BoxList;