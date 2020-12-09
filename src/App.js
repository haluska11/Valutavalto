import React, {useContext} from "react";
import {
    Route,
    Link,
    HashRouter
  } from "react-router-dom";
import Converter from "./Converter";
import RateList from "./RateList";
import { ThemeContext } from './theme-context'
import {Card, Button} from 'react-bootstrap'

const App = () => {
  const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <HashRouter>
              
                <Card className="text-center" style={{backgroundColor: theme.backgroundColor}}>
                  <Card.Header>GAIN Valutaváltó Weboldal</Card.Header>
                  <Card.Body>
                  <Button variant={theme} onClick={toggle}>
                    Témaváltás
                  </Button>
                  <Button as={Link} to={'/converter'} variant="info">
                    Valutaváltó
                  </Button>{''}
                  <Button as={Link} to={'/ratelist'} variant="info">
                    Árfolyamok
                  </Button>
                  </Card.Body>

                  <Route exact path="/converter" component={Converter} />
                  <Route path="/ratelist" component={RateList} />
                </Card>
        </HashRouter> 
    );
}
export default App;