import { useEffect, useState } from 'react';
import Modal from 'react-modal'
import { CommonBasicButtonStyles, CommonButtonGroup, CommonDeleteButtonStyles } from '../styles/MyButtonStyles.styled';
import { CommonStylesTitles } from '../styles/CommonStyles.styled';
import { CommonStylesInput, CommonStylesOption, CommonStylesSelect, CommonStylesText } from '../styles/CommonStyles.styled';
import { v4 } from 'uuid'
import { useDispatch, useSelector } from "react-redux"
import { TagType } from '../slices/TagsData';
import { addTag, editTag, deleteTag } from '../slices/tagsSlice';


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
  tagToEdit?: TagType | null;
};

export default function MyTagModal({ isOpen, onClose, tagToEdit }: ModalPropsType) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const tags = useSelector((state: any) => state.tags);

  useEffect(() => {
    if (tagToEdit) {
      setTitle(tagToEdit.title);
    } else {
      setTitle('');
    }
  }, [tagToEdit]);


  function handleSaveTag() {
    if (title) {
      if (tagToEdit) {
        dispatch(
          editTag({
            ...tagToEdit,
            title: title,
          })
        );
      } else {
        dispatch(
          addTag({
            id: v4(),
            title: title,
            count: 0,
          })
        );
      }
      onClose();
    }
  }

  function deleteTagHandler() {
    if (tagToEdit && tagToEdit.id) {
      dispatch(deleteTag(tagToEdit.id));
      onClose();
    }
  }
  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel={'tags'}
    >
      <CommonStylesTitles>{tagToEdit ? 'Edit tag' : 'Add new tag'}</CommonStylesTitles>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
        <CommonStylesInput
          placeholder="Tag name..."
          value={title}
          onChange={(e) =>  setTitle(e.target.value)}
        />
        <CommonButtonGroup>
          <CommonDeleteButtonStyles onClick={onClose}>
            Cancel
          </CommonDeleteButtonStyles>
          {tagToEdit ? (
            <CommonDeleteButtonStyles onClick={deleteTagHandler}>
              Delete
            </CommonDeleteButtonStyles>
          ) : (
            ''
          )}
          <CommonBasicButtonStyles onClick={handleSaveTag}>
            {tagToEdit ? 'Edit' : 'Add'}
          </CommonBasicButtonStyles>
        </CommonButtonGroup>
      </div>
    </Modal>
  );
}
