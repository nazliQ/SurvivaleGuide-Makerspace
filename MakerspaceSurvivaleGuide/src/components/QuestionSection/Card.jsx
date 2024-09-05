import React from 'react'
import './Card.css'

const Card = ({card}) => {

  const buttonClass = (kategori) => {
    switch (kategori) {
      case 'yellow':
        return 'btn-yellow';
      case 'purple':
        return 'btn-purple';
      case 'green':
        return 'btn-green';
      default:
        return 'btn'; // Fallback til orginal btn i index.css
    }
  };
  
  return (
  
    <div className="card" key={card.id}>
    <div className='card-header'>
            <h1 className="card-title">{card.title}</h1>
        </div>
        <div className='card-body'>
            <p className="card-description">{card.utitle}</p>
            <button className={`card-tag ${buttonClass(card.kategori)}`}>Read More</button>
        </div>
      </div>
  )
}

export default Card