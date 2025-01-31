type TypeDatesProps = {
    dates:string[];
    setDates: React.Dispatch<React.SetStateAction<string[]>>
}

export default function CreateDates({ dates, setDates }: TypeDatesProps) {
    function addDate() {
        const today = new Date();
        const newDay = new Date(today);
        newDay.setDate(today.getDate() + dates.length - 1);
        const year = newDay.getFullYear();
        const month = (newDay.getMonth() + 1).toString().padStart(2, '0');
        const day = newDay.getDate().toString().padStart(2, '0');
        const newDate = `${year}/${month}/${day}`;
        setDates(prev => [...prev, newDate])
        console.log(dates)
    }

    return (
        <button className='btn' onClick={addDate}>Добавить дату</button>
      );
}