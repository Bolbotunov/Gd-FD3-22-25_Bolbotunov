import { CommonStylesTitles } from "../styles/CommonStyles.styled"
import { MyContent } from "../styles/MyContent.styled";
import NavigationSection from "../sections/NavigationSection";
import TagsSection from "../sections/TagsSection";
import { useSelector } from "react-redux";



export default function TagsContent() {
  const tags = useSelector((store: any) => store.tagsSlice)
    return (
      <>
        <MyContent>
            <NavigationSection/>
            <TagsSection tags = {tags}/>
        </MyContent>
      </>
    )
}