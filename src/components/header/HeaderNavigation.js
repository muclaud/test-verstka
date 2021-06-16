import React from 'react'


import cloudShow from '../../assets/brand/Group_23.png'
import ButtonGroup from '../ButtonGroup'

import './HeaderNavigation.css'

export default function HeaderNavigation() {
    return (
        <div>
            <div className='grid-3 padding-20'>
                <div className='margin-auto'>
                    <img src={cloudShow} alt='cloudShow'></img>
                </div>
                <div className='margin-auto'>
                    <div className='flex-header'>

                        <div className='flex-item'>
                            Features
                        </div>
                        <div className='flex-item'>
                            <span>How it Works</span>
                        </div>
                        <div className='flex-item'>
                            <span>Devices & Downloads</span>
                        </div>
                        <div className='flex-item'>
                            <span>Apps & Content</span>
                        </div>
                        <div className='flex-item'>
                            <span>Pricing</span>
                        </div>
                    </div>
                </div>
                <div className='margin-auto'><ButtonGroup /></div>
            </div>
        </div>
    )
}
