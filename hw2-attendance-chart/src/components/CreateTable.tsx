import React, { useState, useEffect } from 'react';
import CreateDates from './CreateDates';
import CreateStudents from './CreateStudents';

type TypeDates = {
    [dates: string]: boolean;
}

type TypeLabelState = {
    [key: string]: boolean;
  }
  export default function CreateTable() {
    const [dates, setDates] = useState(['Имена/Даты']);
    const [students, setStudents] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState<TypeLabelState>({});
    const LOCAL_STORAGE_KEY = "PASS";
  

    function addLabel(date: string, studentIndex: number, dateIndex: number) {
      setLabel(prev => ({
        ...prev,
        [`${studentIndex}-${dateIndex}`]: !prev[`${studentIndex}-${dateIndex}`]
      }));
    }
  

    function saveData() {
        setLoading(true);
        setTimeout(() => {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ students, dates, label }));
          setLoading(false);
        }, 2000);
      }

      useEffect(() => {
        try {
            const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (savedData) {
              const { students, dates, label } = JSON.parse(savedData);
              setStudents(students);
              setDates(dates);
              setLabel(label)
            }
        } catch(error) {
            console.error("Ошибка:", error);
        }
      }, []);


    return (
      <>
        <div className="wrapper flex">
          <div className='row'>
            {dates.map((item, index) => (
              <div className='cell' key={index}>{item}</div>
            ))}
          </div>
          {students.map((student, studentIndex) => (
            <div className='row' key={studentIndex}>
              <div className='cell'>{studentIndex + 1}. {student}</div>
              {dates.slice(1).map((date, dateIndex) => (
                <div key={dateIndex} className='cell' onClick={() => addLabel(date, studentIndex, dateIndex)}>
                  {label[`${studentIndex}-${dateIndex}`] && <span style={{color:'yellow'}}>V</span>}
                </div>
              ))}
            </div>
          ))}
          <div style={{ padding: '20px' }}>
            <CreateStudents students={students} setStudents={setStudents}/>
            <CreateDates dates={dates} setDates={setDates}/>
          </div>
  
          <div style={{ padding: '20px' }}>
            <button className='save-btn' disabled={loading} onClick={saveData}>
              {loading ? 'Идет сохранение...' : 'Сохранить'}
            </button>
          </div>
        </div>
      </>
    );
  }
 