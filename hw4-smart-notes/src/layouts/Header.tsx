import { MyHeader } from "../styles/MyHeader.styled"
import { CommonStylesTitlesHeader } from "../styles/CommonStyles.styled"
import MyModal from "../components/MyModal"


type PropsTitleType = {
  title: string;
}

export function Header({ title } : PropsTitleType) {
    return (
      <>
        <MyHeader>
          <CommonStylesTitlesHeader>
            {title}
          </CommonStylesTitlesHeader>
          <MyModal />
        </MyHeader>
      </>
    )
}