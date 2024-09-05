import React, {useState} from 'react'
import Card from './Card'
import NavView from './NavView.jsx'
import './CardSection.css'
import ListSection from './ListSection.jsx'
import './ListSection.css'
import {cardData} from '../../data/data.js'

 
const CardSection = () => {
  const [view, setView] = useState('gallery');


  return (
  <div>
    {/* Include NavView component for switching views */}
    <div><NavView setView={setView} /></div>

    <div className="section container">
      {view === 'gallery' ? (
        <div className="grid-cards">
          {cardData.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <div className="list-cards">
          <ListSection cardData={cardData} />
        </div>
      )}
    </div>
  </div>
  )
}

export default CardSection