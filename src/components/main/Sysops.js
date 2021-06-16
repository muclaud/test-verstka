import React from 'react'

import star from '../../assets/icons/star.png'
import sysops from '../../assets/brand/443c0f388e5b2e5c51e293d47400c9478d4dcf54.png'
import label from '../../assets/brand/Path_2.svg'

import './Sysops.css'

export default function Sysops() {
    return (
        <div className='wrapper-sys'>
            <div className='padding-20'>
                <div><img style={{
                    width: 125,
                    height: 48
                }} src={sysops} alt='4sysops'></img></div>
                <div>
                    <p className='sysops-text'>I use CloudShow on a TV in my ice cream shop to show what flavors we’re currently scooping through a Google spreadsheet.</p>
                    <p className='sysops-text'>I’ve worked up a system to turn each flavor on and off using an Android phone by scanning an NFC tag on the back of each specific flavor title card that sits in the ice cream display that then triggers the Tasker app to update the background color of the cell associated with that flavor using Google Sheets APIs and on/off state tracking and some limited error handling through Tasker itself.</p>
                    <p className='sysops-text'>I also run a Google Slideshow overlaid on the spreadsheet using the picture-in-picture function to cycle in-store ads.</p>
                </div>
                <div >
                    <div className='flex'><span className='author-name'>Brandon H</span>
                        <img className='star-style' src={star} alt='star'></img><img className='star-style' src={star} alt='star'></img><img className='star-style' src={star} alt='star'></img><img className='star-style' src={star} alt='star'></img><img className='star-style' src={star} alt='star'></img></div>
                    <div>
                        <img className='label' src={label} alt='label'></img>
                    </div>
                </div>

            </div>

        </div>
    )
}
