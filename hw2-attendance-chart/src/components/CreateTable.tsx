import React, { useState, useEffect } from 'react';
import AddStudents from './AddStudents';  // Импортируем компонент AddStudents

export default function CreateTable() {
  type AttendanceType = {
    [student: string]: {
      [date: string]: boolean;
    };
  };

  const [dates, setDates] = useState(['Имена/Даты']);
  const [attendance, setAttendance] = useState<AttendanceType>({});
  const [loading, setLoading] = useState(false);

  const LOCAL_STORAGE_KEY = "attendanceData";

  function addDate() {
    const today = new Date();
    const newDay = new Date(today);
    newDay.setDate(today.getDate() + dates.length - 1);
    const year = newDay.getFullYear();
    const month = (newDay.getMonth() + 1).toString().padStart(2, '0');
    const day = newDay.getDate().toString().padStart(2, '0');
    const newDate = `${year}/${month}/${day}`;
    setDates(prevDates => {
      const updatedDates = [...prevDates, newDate];
      setAttendance(prev => {
        const updatedAttendance = { ...prev };
        Object.keys(updatedAttendance).forEach(student => {
          updatedAttendance[student] = {
            ...updatedAttendance[student],
            [newDate]: false
          };
        });
        return updatedAttendance;
      });
      return updatedDates;
    });
  }

  function saveData() {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ attendance, dates }));
      setLoading(false);
    }, 2000);
  }

  function toggleAttendance(student: string, date: string) {
    setAttendance(prev => ({
      ...prev,
      [student]: {
        ...prev[student],
        [date]: !prev[student][date]
      }
    }));
  }

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const { attendance, dates } = JSON.parse(savedData);
      setAttendance(attendance);
      setDates(dates);
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
        {Object.keys(attendance).map((student, index) => (
          <div className='row' key={index}>
            <div className='cell'>{index + 1}) {student}</div>
            {dates.slice(1).map(date => (
              <div
                key={date}
                className='cell'
                onClick={() => toggleAttendance(student, date)}
                style={{ color: attendance[student]?.[date] ? 'green' : 'red' }}
              >
                {attendance[student]?.[date] ? 'присутствует' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ padding: '20px' }}>
        <AddStudents dates={dates} setAttendance={setAttendance} />  {/* Используем компонент AddStudents */}
        <button className='btn' onClick={addDate}>Добавить дату</button>
      </div>
      <div style={{ padding: '20px' }}>
        <button className='save-btn' onClick={saveData} disabled={loading}>
          {loading ? 'Идет сохранение...' : 'Сохранить'}
        </button>
        <div><p></p></div>
      </div>
    </>
  );
}
