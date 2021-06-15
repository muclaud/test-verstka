import React from 'react'

import dashboards from '../../assets/images/5d0a907169d4aa19dc547fb6e04867a6e1255f3d.png'
import calendar from '../../assets/images/b3993cf8a93ed2d3c1e78d35b8f0e41e40cdefad.png'
import weather from '../../assets/images/a9e79f28983733175f92a48d4585871194211a87.png'
import promotional from '../../assets/images/bec8861f4ba08741024d53ba71ec95a675249dfb.png'

import './CloudShow.css'



export default function DigitalSignage() {
    return (
        <div className='padding-50'>
            <div>
                <h2 className='header-2'>Digital Signage that grow your business</h2>
                <h4 className='paragraph-text text-center'>Discover our unique features and learn more about them.</h4>
            </div>
            <div className='grid-2x2'>
                <div className='grid-container-digital'>
                    <div className='center-content'><img className='card-image shadow-1' src={dashboards} alt='dashboards'></img>
                        <h2 className='card-header'>Dashboards</h2></div>
                </div>
                <div className='grid-container-digital'>
                    <div className='center-content'><img className='card-image shadow-2' src={calendar} alt='calendar'></img>
                        <h2 className='card-header'>Calendars</h2></div>
                </div>
                <div className='grid-container-digital'>
                    <div className='center-content'><img className='card-image shadow-3' src={weather} alt='weather'></img>
                        <h2 className='card-header'>Weather</h2></div>
                </div>
                <div className='grid-container-digital'>
                    <div className='center-content'> <img className='card-image shadow-4' src={promotional} alt='promotional'></img>
                        <h2 className='card-header'>Promotional</h2></div>
                </div>
            </div>
        </div>
    )
}
