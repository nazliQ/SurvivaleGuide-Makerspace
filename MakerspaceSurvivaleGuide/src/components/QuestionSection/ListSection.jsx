import React from 'react';
import './ListSection.css'

const ListSection = ({ cardData, onViewDetails }) => {
  return (
    <div className='wrapper'> 
      <div className='list-cards'>
        {cardData.map((card) => (
        <div key={card.id} className='list-item'>
          <h3 className='list-title'>{card.title}</h3>
          <button className='list-button' onClick={() => onViewDetails(card)}>→</button> {/* Simple arrow button */}
        </div>
      ))}
    </div>
    </div>
  );
};

export default ListSection;