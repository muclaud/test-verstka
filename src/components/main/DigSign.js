import React from 'react'



import digSignImage from '../../assets/images/Group_28_Copy.png'
import check from '../../assets/icons/checkmark-circle-2.png'


export default function DigSign() {
    return (
        <div className='wrapper-2 padding-5' >
            <div className='margin-auto'>
                <div className='container-1'>
                    <h2 className='header-1'>Digital Signage</h2>
                    <h2 className='header-1'>Made Easy</h2>
                    <p className='paragraph-text'>Turn any screen into a digital sign in minutes with CloudShow. Trusted by businesses worldwide, see how CloudShow can help your business today</p>
                    <div className='grid-3'>
                        <div className='button-blue button' style={{ height: 15, width: 70 }}>Try it free</div>
                        <div>
                            <div className='flex'><img src={check} alt='icon'></img>
                                <span className='freetreealtext'>60-day Enterprise free trial</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='margin-auto hidden'><img src={digSignImage} alt='digSignImage'></img></div>
        </div>
    )
}
