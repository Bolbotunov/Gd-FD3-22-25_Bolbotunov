import React, { useState, useEffect } from 'react';
import CreateCell from './CreateCell';

export default function CreateTable() {
    let getDates = (() => {
        const datesArray = ['names / dates'];
        let today = new Date();
        for (let i = 0; i < 5; i++) {
            let newDay = new Date(today);
            newDay.setDate(today.getDate() + i);
            const year = newDay.getFullYear();
            const month = (newDay.getMonth() + 1).toString().padStart(2, '0');
            const day = newDay.getDate().toString().padStart(2, '0');
            datesArray.push(`${day}/${month}/${year}`);
        }
        return datesArray;
    })();

    type StudentsList = string[];
    const LOCAL_STORAGE_KEY = 'PASS';
    const countCells: number = 5;

    const [students, setStudents] = useState<StudentsList>(() => {
        const storedStudents = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedStudents ? JSON.parse(storedStudents) : [];
    });

    function addStudent() {
        const studentName = prompt('Enter student name');
        if (studentName) {
            setStudents(prev => {
                const updatedStudents = [...prev, studentName];
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedStudents));
                return updatedStudents;
            });
        }
    }

    useEffect(() => {
        const storedStudents = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedStudents) {
            setStudents(JSON.parse(storedStudents));
        }
    }, []);

    return (
        <>
            <div className="wrapper flex">
                <div className='row'>
                    {getDates.map((item, index) => (
                        <div className='cell' key={index}>{item}</div>
                    ))}
                </div>
                {students.length > 0 && students.map((item, indexStud) => (
                    <div className='row' key={indexStud}>
                        <div className='cell'>{item}</div>
                        {Array.from({ length: countCells }).map((_, index) => (
                            <CreateCell key={index} id={index} />
                        ))}
                    </div>
                ))}

                <div style={{ padding: '20px' }}>
                    <button className='btn' onClick={addStudent}>Add student</button>
                    <button className='btn'>Add date</button>
                </div>
            </div>
        </>
    );
}
