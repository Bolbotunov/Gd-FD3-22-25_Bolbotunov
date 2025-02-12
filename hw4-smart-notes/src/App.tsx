import './App.css';
import Header from './layouts/Header';
import NotesContent from './layouts/NotesContent';
import TagsContent from './layouts/TagsContent';
import { MyWrapper, MySection} from "./styles/CommonStyles.styled"
import { ThemeProvider } from 'styled-components';
import { siteColors } from './SiteColors';

function App() {
  return (
    <ThemeProvider theme = {siteColors}>
      <MyWrapper>
        <MySection>
          <Header title = 'Notes'/>
              <NotesContent/>
        </MySection>
        <MySection>
          <Header title = 'Tags'/>
              <TagsContent/>
        </MySection>
      </MyWrapper>
    </ThemeProvider>
  );
}

export default App;



