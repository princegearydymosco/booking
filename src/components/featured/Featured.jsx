// import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img 
                src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilPEtUi95xZc/v1/1200x-1.jpg"
                alt="" 
                className="featuredImg" />
            <div 
                className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iyyuSE2uXRdA/v1/1200x-1.jpg"
                alt="" 
                className="featuredImg" />
            <div 
                className="featuredTitles">
                <h1>Austin</h1>
                <h2>532 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioMsCpw5eW4M/v1/1200x-1.jpg"
                alt="" 
                className="featuredImg" />
            <div 
                className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured