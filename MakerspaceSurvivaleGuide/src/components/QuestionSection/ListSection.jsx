import React from 'react';
import './ListSection.css'

const ListSection = ({ cardData, onViewDetails }) => {

  const buttonClass = (kategori) => {
    switch (kategori) {
      case 'yellow':
        return 'btn-yellow';
      case 'purple':
        return 'btn-purple';
      case 'green':
        return 'btn-green';
      default:
        return 'btn'; // Fallback to default button style
    }
  };

  return (
    <div className='wrapper'> 
      <div className='list-cards'>
        {cardData.map((card) => (
        <div key={card.id} className='list-item'>
          <h3 className='list-title'>{card.title}</h3>
          <button className={`card-tag'${buttonClass(card.kategori)}`} onClick={() => onViewDetails(card)}>→</button> 
        </div>
      ))}
    </div>
    </div>
  );
};

export default ListSection;