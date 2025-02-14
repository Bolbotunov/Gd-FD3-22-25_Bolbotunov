import { CommonStylesText, NotesListStyles, CommonButtonStyles, CommonButtonGroup, CommonStylesTitles } from "../styles/CommonStyles.styled"
import { useSelector } from 'react-redux';
import NavigationSection from "./NavigationSection";

export default function NotesSection() {
    const storedData = useSelector((store: any) => store.componentsSlice.notes)

    return (
        <>
        <NavigationSection/>
              {storedData.map((note:any) => (
                 <NotesListStyles>
                <div key={note.id}>
                    <CommonStylesTitles>
                        {note.title} - ID:{note.id}
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
                </div>
                </NotesListStyles>
                ))}
            
        </>
    )
}