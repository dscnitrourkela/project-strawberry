import { createContext } from 'react';

//context to control nav opening

export const MenuContext = createContext({
  menuOpen: null,
  toggleMenuOpen: null,
});