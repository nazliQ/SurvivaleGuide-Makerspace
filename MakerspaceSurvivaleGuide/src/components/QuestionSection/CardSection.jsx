import React, { useState } from 'react';
import Card from './Card';
import NavView from './NavView.jsx';
import './CardSection.css';
import ListSection from './ListSection.jsx';
import './ListSection.css';
import ArtikkelView from './ArtikkelView.jsx';
import './ArtikkelView.css';
import { cardData } from '../../data/data.js';

const CardSection = () => {
  const [view, setView] = useState('gallery');
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setView('details'); // Switch til artikkel view
  };


  return (
    <div>
      <NavView setView={setView} />
      
      {view === 'details' && selectedCard ? (
        <ArtikkelView card={selectedCard} />
      ) : (
        <div className="section container">
          {view === 'gallery' ? (
            <div className="grid-cards">
              {cardData.map((card) => (
                <Card 
                  key={card.id} 
                  card={card} 
                  onViewDetails={() => handleCardClick(card)} // Pass the correct prop
                />
              ))}
            </div>
          ) : (
            <div className="list-cards">
              <ListSection 
                cardData={cardData} 
                onViewDetails={handleCardClick} // Pass the handler to the list as well
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CardSection;