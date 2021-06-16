import React from 'react'


import instagram from '../../assets/company-logo/594d4f77e5a0d74fa13993b12bfb5c13bc17ff16.png'
import twitter from '../../assets/company-logo/dcee2570ef522bfe4cec7caa994de1b30978d288.png'
import cnn from '../../assets/company-logo/e07092cdf1f84e5c3f2819bef8482ce6227e8d7c.png'
import facebook from '../../assets/company-logo/e1ae149381bd153db85adb10e9c7ddd18bd57fec.png'


export default function Spacer() {
    return (
        <div className='spacerDiv hidden'>
            <div className='spacerDiv'>
                <div className='grid-4'>
                    <div><img className='background-img' src={instagram} alt='background-img'></img></div>
                    <div><img className='background-img' src={twitter} alt='background-img'></img></div>
                    <div><img className='background-img' src={cnn} alt='background-img'></img></div>
                    <div><img className='background-img' src={facebook} alt='background-img'></img></div>
                </div>
            </div>
        </div>
    )
}
