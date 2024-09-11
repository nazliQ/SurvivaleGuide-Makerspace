import React from 'react'


const ArtikkelView = ({card}) => {
  return (
    <div className="container detailed-view">
      <h1>{card.title}</h1>
      <p>{card.description}</p>
      <p>{card.svar}</p>
    </div>
  );
};


export default ArtikkelView