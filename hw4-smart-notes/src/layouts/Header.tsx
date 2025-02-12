import { MyHeader } from "../styles/MyHeader.styled"
import { CommonStylesTitlesHeader } from "../styles/CommonStyles.styled"
import { CommonButtonStyles } from "../styles/CommonStyles.styled"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../stores/store"


type PropsTitleType = {
    title: string;
}

export default function Header({ title } : PropsTitleType) {
  const storedTitle = useSelector((store:any) => store.componentsSlice.title)
  const dispatch = useDispatch()

    function addNewTask() {
      let task = prompt('task...')
      if(task) {
        dispatch(actions.componentsSlice.addNote(task))
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