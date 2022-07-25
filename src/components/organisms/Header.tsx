import React from 'react'

interface PropsTypes {
  children: React.ReactElement;
}

const Header:React.FC<PropsTypes> = ({children}) => {
  return (
  <header>
    <h1>header</h1>
    {children}
  </header>
  );
};

export default Header;
