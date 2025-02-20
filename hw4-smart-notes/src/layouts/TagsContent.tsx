import { CommonStylesTitles } from "../styles/CommonStyles.styled"
import { MyContent } from "../styles/MyContent.styled";
import NavigationSectionTags from "../sections/NavigationSectionTags";
import TagsSection from "../sections/TagsSection";
import { useSelector } from "react-redux";



export default function TagsContent() {
  const tags = useSelector((store: any) => store.tagsSlice)
    return (
      <>
        <MyContent>
            <NavigationSectionTags/>
            <TagsSection tags = {tags}/>
        </MyContent>
      </>
    )
}