import { MyHeader } from "../styles/MyHeader.styled"
import { CommonStylesTitlesHeader } from "../styles/CommonStyles.styled"
import MyModal from "../components/MyModal"
import { useState } from "react";
import { CommonBasicButtonStyles } from "../styles/MyButtonStyles.styled";

type PropsTitleType = {
  title: string;
}

export function Header({ title } : PropsTitleType) {
   const [isOpen, setIsOpen] = useState(false)
   const [isView, setIsView] = useState(false)

   
   function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

    return (
      <>
        <MyHeader>
          <CommonStylesTitlesHeader>
            {title}
          </CommonStylesTitlesHeader>
          <CommonBasicButtonStyles onClick={openModal}>
            Add Task
          </CommonBasicButtonStyles>
        </MyHeader>
        <MyModal isOpen={isOpen} onClose={closeModal} viewing={isView}/>
      </>
    )
}