import { MyHeader } from "../styles/MyHeader.styled"
import { CommonStylesTitlesHeader } from "../styles/CommonStyles.styled"
import MyModal from "../components/MyModal"
import { useState } from "react";
import { CommonBasicButtonStyles } from "../styles/MyButtonStyles.styled";
import MyTagModal from "../components/MyTagModal";

type PropsTitleType = {
  title: string;
}

export function Header({ title } : PropsTitleType) {
   const [isOpen, setIsOpen] = useState(false)
   const [isView, setIsView] = useState(false)

   const [isOpenTagModal, setIsOpenTagModal] = useState(false)
   const [isToEdit, setIsToEdit] = useState(false)

   
   function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openTagModal() {
    setIsOpenTagModal(true);
  }

  function closeTagModal() {
    setIsOpenTagModal(false);
  }



    return (
      <>
        <MyHeader>
          <CommonStylesTitlesHeader>
            Notes
          </CommonStylesTitlesHeader>
        <div style={{ display: 'flex', gap: '10px' }}>
          <CommonBasicButtonStyles onClick={openModal}>
            Add Task
          </CommonBasicButtonStyles>
        </div>




          <CommonStylesTitlesHeader>
           Tags
          </CommonStylesTitlesHeader>

        <div style={{ display: 'flex', gap: '10px' }}>
          <CommonBasicButtonStyles onClick={openTagModal}>
            Add Tag
          </CommonBasicButtonStyles>
        </div>
        </MyHeader>


        <MyModal isOpen={isOpen} onClose={closeModal} viewing={isView}/>
        <MyTagModal isOpen={isOpenTagModal} onClose={closeTagModal}/>
      </>
    )
}