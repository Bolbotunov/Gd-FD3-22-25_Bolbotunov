import './App.css';
import { Header } from './layouts/Header';
import NotesContent from './layouts/NotesContent';
import TagsContent from './layouts/TagsContent';
import { MyWrapper, MySection} from "./styles/CommonStyles.styled"
import { ThemeProvider } from 'styled-components';
import { siteColors } from './SiteColors';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import store from './stores/store';
import { useEffect } from 'react';
import { setTags } from './slices/tagsSlice';



function App() {
  
  return (
    <Provider store = {store}>
      <ThemeProvider theme = {siteColors}>
        <MyWrapper >
          <Header title = 'Notes'/>
          <div style={{display:'flex'}}>
            <MySection>
              <NotesContent/>
            </MySection>
            <MySection>
                <TagsContent/>
            </MySection>
            </div>
        </MyWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;



