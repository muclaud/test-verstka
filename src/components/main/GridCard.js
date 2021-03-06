import React from 'react'


export default function GridCard(props) {
    return (
        <div className='grid-container padding-5'>
            <div className='flex-stars'>
                <img src={props.icon} alt='icon'></img>
                <h3 className='card-descr'>{props.header}</h3>
            </div>
            <div>
                <span className='card-text'>{props.text}</span>
            </div>
        </div>
    )
}
