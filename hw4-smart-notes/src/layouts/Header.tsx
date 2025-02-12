import { MyHeader } from "../styles/MyHeader.styled"
import { CommonStylesTitlesHeader } from "../styles/CommonStyles.styled"
import { CommonButtonStyles } from "../styles/CommonStyles.styled"


type PropsTitleType = {
    title: string;
}

export default function Header({ title } : PropsTitleType) {

    function addNewTask() {
      let task = prompt('task...')
      if(task) {
        console.log(task)
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