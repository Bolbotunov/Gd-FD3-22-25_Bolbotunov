import { MyHeader } from "../styles/MyHeader.styled"
import { CommonStylesTitlesHeader } from "../styles/CommonStyles.styled"
import { CommonButtonStyles } from "../styles/CommonStyles.styled"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../stores/store"
import { showNewNote } from "../slices/componentsSlice"


type PropsTitleType = {
  title: string;
}

export default function Header({ title } : PropsTitleType) {
  const dispatch = useDispatch()

    function addNewTask() {
      let task = prompt('task...')
      if(task) {
        dispatch(showNewNote(true))
        dispatch( actions.componentsSlice.addNote( {
          id: 555,
          title: task,
        }))
      
      }
    }

    return (
      <>
        <MyHeader>
          <CommonStylesTitlesHeader>
            {title}
          </CommonStylesTitlesHeader>
          <CommonButtonStyles onClick={addNewTask}>
            ADD TASK
          </CommonButtonStyles>
        </MyHeader>
      </>
    )
}