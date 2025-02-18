import { MyContent } from "../styles/MyContent.styled";
import NavigationSection from "../sections/NavigationSection";
import NotesSection from "../sections/NotesSection";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { NoteType } from "../sections/NotesSection";





export default function NotesContent() {
    const notes = useSelector((store: any) => store.componentsSlice.notes)
    return (
      <>
        <MyContent>
            <NotesSection notes={notes}/>
        </MyContent>
      </>
    )
}


