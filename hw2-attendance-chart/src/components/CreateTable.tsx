import React, { useState, useEffect } from 'react';
import CreateCell from './CreateCell';
import CreateDates from './CreateDates';

export default function CreateTable() {
    const LOCAL_STORAGE_KEY = 'PASS';
    const countCells: number = 5;
    type StudentsList = string[];
    let getStudentsList: StudentsList = []

    try {
        const storedStudents = localStorage.getItem(LOCAL_STORAGE_KEY);
        getStudentsList = storedStudents ? JSON.parse(storedStudents) : [];
    } catch (error) {
        console.log('error' , error)
    }

    const [students, setStudents] = useState(getStudentsList);
    const [loading, setLoading] = useState(false)

    function addStudent() {
        const studentName = prompt('Введите имя студента');
        if (studentName) {
            setStudents(prev => {
                const updatedStudents = [...prev, studentName];
                return updatedStudents;
            });
        }
    }


    function saveStudents() {
        setLoading(true)
        // const data: savedJSON = {
        //     name,
        //     datesArray,
        // }

// {
//     name:'oleg',
//     '2025/01/29': true,
//     '2025/01/30': false,
//     '2025/01/31': true,
// }

        setTimeout(()=>{
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(students));
            setLoading(false)
        }, 2000)
    }

    return (
        <>
            <div className="wrapper flex">
                <CreateDates/>
                    {students.length > 0 && students.map((item, indexStud) => (
                        <div className='row' key={indexStud}>
                            <div className='cell'>{indexStud + 1}{') '}{item}</div>
                            {Array.from({ length: countCells }).map((_, index) => (
                                <CreateCell key={index} id={index} />
                            ))}
                        </div>
                    ))}
                <div style={{ padding: '20px' }}>
                    <button className='btn' onClick={addStudent}>Добавить студента</button>
                    <button className='btn'>Добавить дату</button>
                </div>
                <div style={{ padding: '20px'}}>
                    <button className='save-btn' onClick = {saveStudents} disabled = {loading} >{loading ? 'Идет сохранение...' : 'Сохранить'}</button>
                    <div><p>{loading}</p></div>
                </div>
            </div>
        </>
    );
}
