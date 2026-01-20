import { BlurContainer } from '../../styles/Common.styled';
import {
  InformationBlock,
  ProfileWrapperStyle,
  RecommendedkCalBlock,
  WrapperSections,
} from './ProfilePage.styled';
import { MainTitle, MainSubTitle } from '../../styles/Fonts.styled';
import ProfileForm from './ProfileForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { UserMail } from './ProfilePage.styled';
import DeleteUserBtn from '../../authorization/DeleteUserBtn';
import { calculateNormDailyCalories } from '../../utils/calculateNormDailyCalories';

export default function ProfilePage() {
  const currentUser = useSelector((state: RootState) => state.authSlice);
  const recommendedCalories = currentUser.profile
    ? calculateNormDailyCalories(currentUser.profile)
    : null;
  return (
    <>
      <ProfileWrapperStyle>
        <InformationBlock>
          <RecommendedkCalBlock>
            {recommendedCalories?.normCalories}kCal
          </RecommendedkCalBlock>
          <MainSubTitle>
            Recommended daily calorie intake Everybody is unique. Try different
            calorie intake and seek what best fits you
          </MainSubTitle>
          <UserMail>{currentUser.userEmail}</UserMail>
          <DeleteUserBtn />
        </InformationBlock>
        <BlurContainer>
          <MainTitle>my profile</MainTitle>
          <WrapperSections>
            <ProfileForm />
          </WrapperSections>
        </BlurContainer>
      </ProfileWrapperStyle>
    </>
  );
}
