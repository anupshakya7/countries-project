import React from 'react'
import './CountryDetailShimmer.css';

const CountryDetailShimmer = () => {
  return (
    <div className='country-details shimmer' style={{maxWidth: "1200px",marginInline:'auto'}}>
      <div className='flag'></div>
      <div className="details-text-container">
        <h1 className='title'></h1>
        <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
      </div>
    </div>
  )
}

export default CountryDetailShimmer
