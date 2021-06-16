import React from 'react'

import dashboards from '../../assets/images/Group_48.svg'
import calendar from '../../assets/images/Group_481.svg'
import weather from '../../assets/images/Group_482.svg'
import promotional from '../../assets/images/Group_483.svg'





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
