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

export type NoteType = {
  id: string;
  title: string;
  text: string;
  tagId: string;
  created: Date;
};

type NotesSectionProps = {
  notes: NoteType[];
};
 
export default function NotesSection( { notes }: NotesSectionProps ) {
    const [noteToEdit, setNoteToEdit] = useState< NoteType | null>(null);
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

   function openModal(note:  NoteType) {
    setNoteToEdit(note)
    setIsOpen(true);
   
  }

  function closeModal() {
    setIsOpen(false);
    setNoteToEdit(null)
  }


    function deleteNoteHandler(title: string) {
        dispatch(deleteNote(title))
    }


    // function editNoteHandler(note: any) {
    //     openModal(dispatch(editNote(note)))
    // }

    return (
        <>
        <NavigationSection/>
              {notes.map((note:any) => (
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
                    <CommonBasicButtonStyles onClick={() => openModal(note)}>Edit</CommonBasicButtonStyles>
                    <CommonDeleteButtonStyles onClick={() => deleteNoteHandler(note.title)}>Delete</CommonDeleteButtonStyles>
                  </CommonButtonGroup>
                  </div>
                </div>
                </NotesListStyles>
                ))}
                <MyModal isOpen={isOpen} onClose={closeModal} noteToEdit={noteToEdit}/>
        </>
    )
}