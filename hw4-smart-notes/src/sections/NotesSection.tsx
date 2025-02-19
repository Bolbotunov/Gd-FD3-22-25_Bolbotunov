import { CommonStylesText, NotesListStyles, CommonStylesTitles } from "../styles/CommonStyles.styled"
import { CommonBasicButtonStyles, CommonDeleteButtonStyles, CommonButtonGroup } from "../styles/MyButtonStyles.styled";
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote }  from "../slices/componentsSlice";
import NavigationSection from "./NavigationSection";
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
 
export default function NotesSection( { notes: any }: NotesSectionProps ) {
    const [noteToEdit, setNoteToEdit] = useState< NoteType | null>(null);
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()


    const notes = useSelector((store: any) => store.componentsSlice.notes);
    const filterList = useSelector((store: any) => store.componentsSlice.filterList);
    const filteredNotes = notes.filter((note: NoteType) =>
    note.title.toLowerCase().includes(filterList.toLowerCase())
  );

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

    return (
        <>
        <NavigationSection/>
      {filteredNotes.map((note: NoteType) => (
        <NotesListStyles key={note.id}>
          <div style={{width:'100%'}}>
            <CommonStylesTitles>{note.title}</CommonStylesTitles>
            <p style={{ textDecoration: 'underline', fontWeight: '600' }}>{note.tagId}</p>
            <CommonStylesText>
              <br />
              {note.text}
            </CommonStylesText>
            <div>{note.created.toLocaleString()}</div>
            <div>
              <CommonButtonGroup>
                <CommonBasicButtonStyles>View</CommonBasicButtonStyles>
                <CommonBasicButtonStyles onClick={() => openModal(note)}>Edit</CommonBasicButtonStyles>
                <CommonDeleteButtonStyles onClick={() => deleteNoteHandler(note.id)}>Delete</CommonDeleteButtonStyles>
              </CommonButtonGroup>
            </div>
          </div>
        </NotesListStyles>
      ))}
      <MyModal isOpen={isOpen} onClose={closeModal} noteToEdit={noteToEdit} />

        </>
    )
}