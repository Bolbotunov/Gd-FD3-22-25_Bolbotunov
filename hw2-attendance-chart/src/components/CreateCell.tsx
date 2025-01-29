import { useState } from 'react';
import '../createTable.css';


type CellType = {
    id: number;
}

export default function CreateCell(props: CellType) {
    const [mark, setMark] = useState('')
    function handleMark() {
        setMark('присутствует')
    }

    return (
        <div className='cell' key={props.id} onClick={handleMark}>{mark}</div>
    )
}


