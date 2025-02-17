import { CommonStylesText, NotesListStyles, CommonStylesTitles } from "../styles/CommonStyles.styled"
import { CommonBasicButtonStyles, CommonDeleteButtonStyles, CommonButtonGroup } from "../styles/MyButtonStyles.styled";
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, editNote }  from "../slices/componentsSlice";
import NavigationSection from "./NavigationSection";
import store from "../stores/store";
import { v4 } from 'uuid'
import Modal from 'react-modal'
import MyModal from "../components/MyModal";
import { useState } from "react";

export default function NotesSection() {
    const [noteToEdit, setNoteToEdit] = useState(null);
    const storedData = useSelector((store: any) => store.componentsSlice.notes)
    const dispatch = useDispatch()


    function deleteNoteHandler(title: string) {
        dispatch(deleteNote(title))
    }


    function editNoteHandler(note: any) {
        setNoteToEdit(note);
    }

    return (
        <>
        <NavigationSection/>
              {storedData.map((note:any) => (
                 <NotesListStyles>
                <div key={note.id}>
                    <CommonStylesTitles>
                        {note.title}
                    </CommonStylesTitles>
                    <p style={{textDecoration:'underline', fontWeight:'600'}}>{note.tagId}</p>
                    <CommonStylesText>
                       <br></br>
                       {note.text}
                    </CommonStylesText>
               <div>{note.created.toLocaleString()}</div>
               <div>
                  <CommonButtonGroup>
                    <CommonBasicButtonStyles>View</CommonBasicButtonStyles>
                    <CommonBasicButtonStyles onClick={() => editNoteHandler(note)}>Edit</CommonBasicButtonStyles>
                    <CommonDeleteButtonStyles onClick={() => deleteNoteHandler(note.title)}>Delete</CommonDeleteButtonStyles>
                  </CommonButtonGroup>
                  </div>
                </div>
                </NotesListStyles>
                ))}
        </>
    )
}