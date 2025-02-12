import { CommonStylesText, NotesListStyles, CommonButtonStyles, CommonButtonGroup, CommonStylesTitles } from "../styles/CommonStyles.styled"

export default function NotesSection() {
    return (
        <>
            <NotesListStyles>
                    <CommonStylesTitles>
                    Note title 1
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