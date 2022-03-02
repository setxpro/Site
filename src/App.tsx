import usePersistedState from './utils/usePersistedState';

import Header from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";

import { ThemeProvider, DefaultTheme } from 'styled-components';
import  light  from './styles/themes/light';
import  dark  from './styles/themes/dark';
import Footer from './components/Footer/Footer';
import RouteArea from './routes';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Header toggleTheme={toggleTheme}/>
          <RouteArea/>
          <Footer/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
