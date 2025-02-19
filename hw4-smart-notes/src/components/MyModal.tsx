import { useEffect, useState } from 'react';
import Modal from 'react-modal'
import { CommonBasicButtonStyles, CommonButtonGroup, CommonDeleteButtonStyles } from '../styles/MyButtonStyles.styled';
import { CommonStylesTitles } from '../styles/CommonStyles.styled';
import { CommonStylesInput, CommonStylesOption, CommonStylesSelect, CommonStylesText } from '../styles/CommonStyles.styled';
import { v4 } from 'uuid'
import { useDispatch, useSelector } from "react-redux"
import { addNote, editNote } from "../slices/componentsSlice"
import { NoteType } from '../sections/NotesSection';

const customStyles:  Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    flexDirection: 'column',
    transform: 'translate(-50%, -50%)',
    display:'flex',
    alignItems:'flex-start',
    width:'33%',
    gap:'20px',
   justifyContent:'space-between',
  },
};

Modal.setAppElement('#root');



type ModalPropsType = {
  isOpen: boolean;
  onClose: () => void;
  noteToEdit?: NoteType | null;
  viewing: boolean;
}

export default function MyModal( { isOpen, onClose, noteToEdit, viewing }: ModalPropsType ) {
  const dispatch = useDispatch()
    // const [id, setId] = useState(v4().slice(0, 4))
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [tagId, setTagId] = useState('');


useEffect(() => {
  if (noteToEdit) {
    setTitle(noteToEdit.title)
    setText(noteToEdit.text)
    setTagId(noteToEdit.tagId)
  } else {
    setTitle('')
    setText('')
    setTagId('')
  }
}, [noteToEdit, isOpen])

   function addNewTask() {
      if(text) {
          const noteTitle = title || (text.length > 10 ? text.slice(0, 10) + '...' : text)

          if (noteToEdit) {
            dispatch(editNote({
              id: noteToEdit.id,
              tagId: tagId,
              title: noteTitle,
              created: noteToEdit.created,
              text: text,
            }))
          } else {
            dispatch(addNote( {
            id: v4().slice(0, 4),
            tagId: tagId,
            title: noteTitle,
            created: new Date(),
            text: text,
          }))
          }
      onClose()
      }
    }


    return (
      <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {viewing ? (
          <div style={{width:'100%'}}>
           <CommonStylesTitles>{title}</CommonStylesTitles>
          <p>{tagId}</p>
          <CommonStylesText>{text}</CommonStylesText>
          <div>{noteToEdit?.created.toLocaleString()}</div>
          <CommonBasicButtonStyles onClick={onClose}>Close</CommonBasicButtonStyles>
        </div>) : (
          <>
           <CommonStylesTitles>Add new Note</CommonStylesTitles>
           <form style={{display:'flex', flexDirection:'column', gap:'20px', width:'100%'}}>
           <CommonStylesInput placeholder="Add title..." value = {title}  onChange={(e) => setTitle(e.target.value)}/>
               <CommonStylesSelect value={tagId} onChange={(e) => setTagId(e.target.value)}>
                   <CommonStylesOption value="work">Work</CommonStylesOption>
                   <CommonStylesOption value="shop">Shop</CommonStylesOption>
                   <CommonStylesOption value="health">Health</CommonStylesOption>
                   <CommonStylesOption value="family">Family</CommonStylesOption>
                   <CommonStylesOption value="friends">Friends</CommonStylesOption>
               </CommonStylesSelect>
               <textarea style={{width:'90%', height: '100px',}} placeholder="Add text" value={text}  onChange={(e) => setText(e.target.value)}></textarea>
             <CommonButtonGroup>
               <CommonDeleteButtonStyles onClick={onClose}>
               cancel
               </CommonDeleteButtonStyles>
               <CommonBasicButtonStyles onClick={addNewTask}>
               ok
               </CommonBasicButtonStyles>
             </CommonButtonGroup>
           </form>
           </>
        )}
         </Modal>
      </>
    )
}
