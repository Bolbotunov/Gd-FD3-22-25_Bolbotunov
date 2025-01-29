export  const countCells: number = 5;

export const getDates = (() => {
    const datesArray = ['Имена/Даты'];
    let today = new Date();
    for (let i = 0; i < countCells; i++) {
        let newDay = new Date(today);
        newDay.setDate(today.getDate() + i);
        const year = newDay.getFullYear();
        const month = (newDay.getMonth() + 1).toString().padStart(2, '0');
        const day = newDay.getDate().toString().padStart(2, '0');
        datesArray.push(`${year}/${month}/${day}`);
    }
    return datesArray;
})();

export function CreateDates() {
    return (
        <div className='row'>
            {getDates.map((item, index) => (
                <div className='cell' key={index}>{item}</div>
            ))}
        </div>
    );
}
