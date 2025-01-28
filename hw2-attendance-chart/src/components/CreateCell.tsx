import './createTable.css';

type CellType = {
    key:number;
}

export default function CreateCell(props: CellType) {
    
    return (
        <div className='cell' key={props.key}></div>
    )
}