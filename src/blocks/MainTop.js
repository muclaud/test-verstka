import React from 'react'

import HeaderNavigation from '../components/header/HeaderNavigation'
import DigSign from '../components/main/DigSign'
import './MainTop.css'


export default function MainTop() {
    return (
        <div className='color-gradient-top'>
            <HeaderNavigation />
            <DigSign />
        </div>
    )
}
