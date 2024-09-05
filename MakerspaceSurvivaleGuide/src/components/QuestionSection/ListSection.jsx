import React from 'react';
import './ListSection.css'

const ListSection = ({ cardData }) => {
  return (
    <div className='list-cards'>
      {cardData.map((card) => (
        <div key={card.id} className='list-item'>
          <h2 className='list-title'>{card.title}</h2>
          <button className='list-button'>→</button> {/* Simple arrow button */}
        </div>
      ))}
    </div>
  );
};

export default ListSection;