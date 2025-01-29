import '../createTable.css';

type CellType = {
    id: number;
    student: string;
    mark: boolean;
    toggleMark: (student: string, id: number) => void;
};

export default function CreateCell({ id, student, mark, toggleMark }: CellType) {
    return (
        <div
            className='cell'
            onClick={() => toggleMark(student, id)}
            style={{color: mark ? 'green' : ''}}>
            {mark ? 'присутствует' : ''}
        </div>
    );
}
