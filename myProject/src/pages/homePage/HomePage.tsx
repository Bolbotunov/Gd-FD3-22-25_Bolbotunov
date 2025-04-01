import TodayBlock from './TodayBlock';
import InformationSection from './informationSection';
import { HomePageFlex } from './HomePage.styled';

export default function HomePage() {
  return (
    <HomePageFlex>
      <TodayBlock />
      <InformationSection />
    </HomePageFlex>
  );
}
