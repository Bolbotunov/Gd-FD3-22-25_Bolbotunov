import { CommonStylesText, NotesListStyles, CommonButtonStyles, CommonButtonGroup, CommonStylesTitles } from "../styles/CommonStyles.styled"
import { useSelector } from 'react-redux';

export default function NotesSection() {

    const storedTitle = useSelector((store:any) => store.componentsSlice.title)

    return (
        <>
            <NotesListStyles>
                    <CommonStylesTitles>
                        {storedTitle}
                    </CommonStylesTitles>
                    <CommonStylesText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Deserunt odio dolore fuga a debitis,
                        nostrum natus illum harum nam atque
                        veniam aperiam minima ad ut autem hic rem vero. Sapiente.
                    </CommonStylesText>
               <div>{Date()}</div>
               <div>
                  <CommonButtonGroup>
                    <CommonButtonStyles>View</CommonButtonStyles>
                    <CommonButtonStyles>Edit</CommonButtonStyles>
                    <CommonButtonStyles>Delete</CommonButtonStyles>
                  </CommonButtonGroup>
                </div>
            </NotesListStyles>
        </>
    )
}