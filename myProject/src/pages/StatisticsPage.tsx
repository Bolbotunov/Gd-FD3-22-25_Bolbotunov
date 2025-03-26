import { BlurContainer, ContentContainer } from '../styles/Common.styled';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function StatisticsPage() {
  function MyCalendar() {
    const [date, setDate] = useState<CalendarProps['value']>(new Date());

    const handleChange: CalendarProps['onChange'] = (value) => {
      setDate(value);
    };

    return <Calendar onChange={handleChange} value={date} />;
  }

  return (
    <>
      <BlurContainer>
        <ContentContainer>
          <MyCalendar />
        </ContentContainer>
      </BlurContainer>
    </>
  );
}
