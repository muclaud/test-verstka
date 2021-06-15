import React from 'react'

import label from '../assets/brand/Path_2.png'
import ButtonGroup from '../components/ButtonGroup'
import FooterOthers from '../components/footer/FooterOthers'
import FooterProduct from '../components/footer/FooterProduct'
import FooterSocial from '../components/footer/FooterSocial'

import './Footer.css'

export default function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='padding-20'>
                <div className='grid-5'>
                    <div style={{ textAlign: 'center' }}>
                        <img src={label} alt='label'></img>
                    </div>
                    <FooterProduct />
                    <FooterOthers />
                    <FooterSocial />
                    <ButtonGroup />
                </div>

                <div className='footer-end'>Copyright © 2007-2020 Binary Fortress Software</div>
            </div>
        </div>
    )
}
