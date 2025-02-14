import { MyContent } from "../styles/MyContent.styled";
import NavigationSection from "../sections/NavigationSection";
import NotesSection from "../sections/NotesSection";
import { showNewNote } from "../slices/componentsSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";





export default function NotesContent() {
  const show = useSelector((store: any) => store.componentsSlice.showNewNote)

  // useEffect(() => {
  //   console.log("showNewNote value updated:", show); 
  // }, [show]);

    return (
      <>
        <MyContent>
            <NotesSection/>
        </MyContent>
      </>
    )
}


