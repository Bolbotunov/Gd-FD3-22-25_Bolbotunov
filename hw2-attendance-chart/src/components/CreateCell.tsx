import '../createTable.css';

type CellType = {
    id: number;
}

export default function CreateCell(props: CellType) {

    return (
        <div className='cell' key={props.id}></div>
    )
}