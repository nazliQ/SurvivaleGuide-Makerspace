import React from 'react';
import './NavView.css';


const NavView = ({ setView }) => {

  return (
    <div className="navCrum container">
      <div className='senter'>
      <button className='btn-yellow' onClick={() => setView('gallery')}>Gallery View</button>
      <button className='btn-purple' onClick={() => setView('list')}>List View</button>
      <div className='border-bottom'></div>
    </div>
    </div>
  );
};

export default NavView;
