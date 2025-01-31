import { useState } from "react";

type TypeStudentsProps = {
    students:string[];
    setStudents: React.Dispatch<React.SetStateAction<string[]>>
}

export default function CreateStudents({ students, setStudents }: TypeStudentsProps) {
    function addStudent() {
        const studentName = prompt('Введите имя студента');
        if (studentName) {
        setStudents(prev => [...prev, studentName])
    }
    console.log(students)
}

    return (
        <button className='btn' onClick={addStudent}>Добавить студента</button>
      );
}