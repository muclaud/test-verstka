import React from 'react'

import label from '../assets/brand/Path_2.png'
import ButtonGroup from '../components/ButtonGroup'
import FooterOthers from '../components/footer/FooterOthers'
import FooterProduct from '../components/footer/FooterProduct'
import FooterSocial from '../components/footer/FooterSocial'


export default function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='padding-20'>
                <div className='grid-5'>
                    <div className='hidden' style={{ textAlign: 'center' }}>
                        <img src={label} alt='label'></img>
                    </div>
                    <FooterProduct />
                    <FooterOthers />
                    <FooterSocial />
                    <div className='hidden'>
                        <ButtonGroup />
                    </div>
                </div>

                <div className='footer-end'>Copyright © 2007-2020 Binary Fortress Software</div>
            </div>
        </div>
    )
}
