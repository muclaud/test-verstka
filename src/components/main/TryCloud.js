import React from 'react'

import label from '../../assets/brand/Path_2.png'
import check from '../../assets/icons/checkmark-circle-2.png'


export default function TryCloud() {
    return (
        <div className='wrapper-trycloud'>

            <div className='flex-trycloud'>
                <div>
                    <img style={{ paddingTop: 20 }} src={label} alt='label'></img>
                    <h2 className='try-header'>Try CloudShow Today!</h2>
                </div>
                <div>
                    <p className='try-text'>Try CloudShow today, it's completely free for one device!
                    </p>
                    <p className='try-text'>Need more devices? </p>
                </div>
                <div className='padding-5'>
                    <div style={{margin: 5}} className='button-blue button'>View Demo</div>
                    <div style={{margin: 5}} className='button-white button'><span className='button-text'>Create Free Account</span></div>

                </div>
                <div>
                    <div className='flex' ><img src={check} alt='icon'></img>
                        <span className='freetreealtext' style={{ color: 'white' }}>60-day Enterprise free trial</span></div>
                </div>
            </div>


        </div>
    )
}
