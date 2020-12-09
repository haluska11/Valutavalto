import React, {useContext} from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Converter from './Converter';
import RateList from './RateList';
import { ThemeContext } from './theme-context';
import Header from './Header';
import { Container } from 'react-bootstrap';


const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <body style={{ backgroundColor: theme.backgroundColor,
    color: theme.color, }}>

      <HashRouter>
        <Container fluid>
        <Header />
        </Container>
        <div>
          <div className="content">
            <Route exact path="/converter" component={Converter} />
            <Route path="/ratelist" component={RateList} />
          </div>
        </div>
      </HashRouter>
      </body>
  );
};
export default App;
