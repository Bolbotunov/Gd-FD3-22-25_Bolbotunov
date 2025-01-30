import React, { useState } from 'react';
import  CreateCell  from './CreateCell';
import { CreateDates } from './CreateDates';
import { countCells } from './CreateDates';


export default function CreateTable() {
    const LOCAL_STORAGE_KEY = 'PASS';
    const MARKS_STORAGE_KEY = 'MARKS';
    type StudentsList = string[];
    let getStudentsList: StudentsList = []
    let savedMarks: { [student: string]: { [id: number]: boolean } } = {};

    try {
        const storedStudents = localStorage.getItem(LOCAL_STORAGE_KEY);
        getStudentsList = storedStudents ? JSON.parse(storedStudents) : [];

        const storedMarks = localStorage.getItem(MARKS_STORAGE_KEY);
        savedMarks = storedMarks ? JSON.parse(storedMarks) : {};
    } catch (error) {
        console.log('error' , error)
    }

    const [students, setStudents] = useState(getStudentsList);
    const [marks, setMarks] = useState(savedMarks);
    const [loading, setLoading] = useState(false)
    const [newDate, setNewDate] = useState(0)


    function toggleMark(student: string, id: number) {
        setMarks((prev) => {
            const studentMarks = prev[student] || {};
            studentMarks[id] = !studentMarks[id];
            return {
                ...prev,
                [student]: studentMarks,
            };
        });
    }

    function addStudent() {
        const studentName = prompt('Введите имя студента');
        if (studentName) {
            setStudents(prev => {
                const updatedStudents = [...prev, studentName];
                return updatedStudents;
            });
        }
    }


function addDate() {
    setNewDate(newDate + 1)
}


    function saveStudents() {
        setLoading(true)
        setTimeout(()=>{
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(students));
            localStorage.setItem(MARKS_STORAGE_KEY, JSON.stringify(marks));
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
                                <CreateCell key={index} id={index} student = {item} mark={!!marks[item]?.[index]} toggleMark={toggleMark} />
                            ))}
                        </div>
                    ))}
                <div style={{ padding: '20px' }}>
                    <button className='btn' onClick={addStudent}>Добавить студента</button>
                    <button className='btn' onClick={addDate}>Добавить дату</button>
                </div>
                <div style={{ padding: '20px'}}>
                    <button className='save-btn' onClick = {saveStudents} disabled = {loading} >{loading ? 'Идет сохранение...' : 'Сохранить'}</button>
                    <div><p>{loading}</p></div>
                </div>
            </div>
        </>
    );
}
