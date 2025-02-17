import { useState } from 'react';
import Modal from 'react-modal'
import { CommonBasicButtonStyles, CommonButtonGroup, CommonDeleteButtonStyles } from '../styles/MyButtonStyles.styled';
import { CommonStylesTitles } from '../styles/CommonStyles.styled';
import { CommonStylesInput, CommonStylesOption, CommonStylesSelect } from '../styles/CommonStyles.styled';
import { v4 } from 'uuid'
import { useDispatch, useSelector } from "react-redux"
import { showNewNote, addNote } from "../slices/componentsSlice"

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


export default function MyModal() {
  const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    // const [id, setId] = useState(v4().slice(0, 4))
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [tagId, setTagId] = useState('');

    function openModal() {
        setIsOpen(true)
        // if (noteToEdit) {
        //   setTitle(noteToEdit.title);
        //   setText(noteToEdit.text);
        //   setTagId(noteToEdit.tagId);
        // }
    }
    function closeModal() {
        setIsOpen(false)
        setTitle('');
        setText('');
        setTagId('')
    }

    function addNewTask() {
      if(text) {
          const noteTitle = title || (text.length > 10 ? text.slice(0, 10) + '...' : text)
          dispatch(showNewNote(true))
          dispatch(addNote( {
          id: v4().slice(0, 4),
          tagId: tagId,
          title: noteTitle,
          created: new Date(),
          text: text,
        }))
      closeModal()
      }
    }


    return (
      <>
        <CommonBasicButtonStyles onClick={openModal}>
        Add Task
        </CommonBasicButtonStyles>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <CommonStylesTitles>Add new Note</CommonStylesTitles>
        <form style={{display:'flex', flexDirection:'column', gap:'20px', width:'100%'}}>
        <CommonStylesInput placeholder="Add title..." onChange={(e) => setTitle(e.target.value)}/>
            <CommonStylesSelect value={tagId} onChange={(e) => setTagId(e.target.value)}>
                <CommonStylesOption value="work">Work</CommonStylesOption>
                <CommonStylesOption value="shop">Shop</CommonStylesOption>
                <CommonStylesOption value="health">Health</CommonStylesOption>
                <CommonStylesOption value="family">Family</CommonStylesOption>
                <CommonStylesOption value="friends">Friends</CommonStylesOption>
            </CommonStylesSelect>
            <textarea style={{width:'90%', height: '100px',}} placeholder="Add text"  onChange={(e) => setText(e.target.value)}></textarea>
          <CommonButtonGroup>
            <CommonDeleteButtonStyles onClick={closeModal}>
            cancel
            </CommonDeleteButtonStyles>
            <CommonBasicButtonStyles onClick={addNewTask}>
            ok
            </CommonBasicButtonStyles>
          </CommonButtonGroup>
        </form>
      </Modal>
      </>
    )
}
