import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
        <Link to="/"><span>Home</span></Link>
        <Link to="../create-exercise"><span>Create</span></Link>
    </nav>
  );
}

export default Navigation;
