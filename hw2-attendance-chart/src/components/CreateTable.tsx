import './createTable.css';
import CreateCell from './CreateCell';

export default function CreateTable() {
    const students: string[] = ['Oleg', 'Egor', 'Maria']
    const countCells: number = 5
    let getDates = (() => {
        const datesArray = ['names / dates']
        let today = new Date()
        for (let i = 0; i < 5; i++) {
            let newDay = new Date(today)
            newDay.setDate(today.getDate() + i)
            const year = newDay.getFullYear();
            const month = (newDay.getMonth() + 1).toString().padStart(2, '0');
            const day = newDay.getDate().toString().padStart(2, '0');
            datesArray.push(`${day}/${month}/${year}`)
        }
        return datesArray;
    })()


    const addStudent = () => {
        const studentName = prompt('Enter student name');
        if (studentName) {
          
        }
        return studentName;
    }


    return (
        <>
            <div className="wrapper flex">
                <div className='row'>
                    {getDates.map((item, index) => {
                        return (<div className='cell' key={index}>{item}</div>)
                    })}
                </div>
                <div className='row'>
                    <div className='cell'>{students[0]}</div>
                  {Array.from({length: countCells}).map((_, index) => {
                    return <CreateCell key = {index}/>
                  })}
                </div>
                <div className='row'>
                    <div className='cell'>{students[1]}</div>
                    {Array.from({length: countCells}).map((_, index) => {
                    return <CreateCell key = {index}/>
                  })}
                </div>
                <div className='row'>
                    <div className='cell'>{students[2]}</div>
                    {Array.from({length: countCells}).map((_, index) => {
                    return <CreateCell key = {index}/>
                  })}
                </div>
                <div style ={{
                    padding:'20px'
                }}>
                    <button className='btn' onClick={addStudent}>Add student</button>
                    <button className='btn'>Add date</button>
                </div>
            </div>
        </>
    )
}