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
 

const MAX_LENGTH_TEXT = 250
const VISIBLE_LENGTH_TEXT = 245
export default function NotesSection( { notes: any }: NotesSectionProps ) {

    const [noteToEdit, setNoteToEdit] = useState< NoteType | null>(null);
    const [isOpen, setIsOpen] = useState(false)
    const [isView, setIsView] = useState(false)
    const dispatch = useDispatch()

    const notes = useSelector((store: any) => store.componentsSlice.notes);
    const filterWord = useSelector((store: any) => store.componentsSlice.filterWord);
    // const selectedTag = useSelector((store: any) => store.components.tagsSlice);
    const tags = useSelector((store: any) => store.tagsSlice);

    const filteredNotes = notes.filter((note: NoteType) =>
    note.title.toLowerCase().includes(filterWord.toLowerCase()) ||
    note.text.toLowerCase().includes(filterWord.toLowerCase()) ||
    note.tagId.includes(tags.title)
  );

   function openModal(note:  NoteType) {
    setNoteToEdit(note)
    setIsOpen(true);
    setIsView(false)
  }

  function closeModal() {
    setIsOpen(false);
    setNoteToEdit(null);
    setIsView(false)
  }

  function viewModal(note:  NoteType) {
    setIsView(true)
    setNoteToEdit(note)
    setIsOpen(true);
  }

    function deleteNoteHandler(id: string) {
        dispatch(deleteNote(id))
    }

    return (
        <>
      {filteredNotes.map((note: NoteType) => (
        <NotesListStyles key={note.id}>
          <div style={{width:'100%'}}>
            <CommonStylesTitles>{note.title}</CommonStylesTitles>
            <p style={{ textDecoration: 'underline', fontWeight: '600' }}>{note.tagId}</p>
            <CommonStylesText>
              <br />
              {note.text.length > MAX_LENGTH_TEXT ? note.text.slice(0, VISIBLE_LENGTH_TEXT) + '...' : note.text}
            </CommonStylesText>
            <div>{note.created.toLocaleString()}</div>
            <div>
              <CommonButtonGroup>
                <CommonBasicButtonStyles onClick={() => viewModal(note)}>View</CommonBasicButtonStyles>
                <CommonBasicButtonStyles onClick={() => openModal(note)}>Edit</CommonBasicButtonStyles>
                <CommonDeleteButtonStyles onClick={() => deleteNoteHandler(note.id)}>Delete</CommonDeleteButtonStyles>
              </CommonButtonGroup>
            </div>
          </div>
        </NotesListStyles>
      ))}
          <MyModal
          isOpen= {isOpen}
          onClose= {closeModal}
          noteToEdit= {noteToEdit}
          viewing = {isView}
          />
     </>
    )
  }