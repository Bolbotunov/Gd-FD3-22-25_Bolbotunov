import './App.css';
import Header from './layouts/Header';
import NotesContent from './layouts/NotesContent';
import TagsContent from './layouts/TagsContent';
import { MyWrapper, MySection} from "./styles/CommonStyles.styled"
import { ThemeProvider } from 'styled-components';
import { siteColors } from './SiteColors';
import { Provider } from 'react-redux';
import store from './stores/store';


function App() {
  return (
    <Provider store = {store}>
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
    </Provider>
  );
}

export default App;



