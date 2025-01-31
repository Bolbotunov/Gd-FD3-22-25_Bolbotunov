import React from 'react';

type AddStudentsProps = {
  dates: string[];
  setAttendance: React.Dispatch<React.SetStateAction<{ [student: string]: { [date: string]: boolean } }>>;
};

const AddStudents: React.FC<AddStudentsProps> = ({ dates, setAttendance }) => {
  const handleAddStudent = () => {
    const studentName = prompt('Введите имя студента');
    if (studentName) {
      setAttendance(prev => ({
        ...prev,
        [studentName]: dates.reduce((acc, date) => {
          acc[date] = false;
          return acc;
        }, {} as { [date: string]: boolean })
      }));
    }
  };

  return (
    <button className='btn' onClick={handleAddStudent}>
      Добавить студента
    </button>
  );
};

export default AddStudents;
