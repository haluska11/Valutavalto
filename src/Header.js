import React, { useContext } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from './theme-context';

const Header = () => {
  const { theme, toggle,} = useContext(ThemeContext);

  return (
      <Navbar bg="DarkGrey" variant="dark" sticky="top" expand="lg">
        <h3>Currency Exchanger</h3>
        <Button
          as={Link}
          to={'/converter'}
          variant="outline-secondary"
          style={{ marginLeft: '5rem',
            backgroundColor: theme.backgroundColor,
            color: theme.color, }}
        >
          <h5>Váltó</h5>
        </Button>
        <Button
          as={Link}
          to={'/ratelist'}
          variant="outline-secondary"
          style={{ marginLeft: '1rem',
            backgroundColor: theme.backgroundColor,
            color: theme.color, }}
        >
          <h5>Árfolyamok</h5>
        </Button>
        <Button
          variant="outline-secondary"
          onClick={toggle}
          style={{marginLeft: '2rem',
            backgroundColor: theme.backgroundColor,
            color: theme.color,
          }}
        >
          <h5>Témaváltás</h5>
        </Button>
      </Navbar>
  );
};
export default Header;
