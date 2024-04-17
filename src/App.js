import './App.scss';
import React from 'react';
import Header from './components/Header/header';

import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <Header />

      <div>
        <button>
          <Link className='nav-link' to='/users'>Go to Users page</Link>
        </button>

        <button>
          <Link className='nav-link' to='/admins'>Go to Admins page</Link>
        </button>

      </div>

    </div>
  );
}


export default App;
