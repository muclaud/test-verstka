import React from 'react'
import { Link } from 'react-router-dom'


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
                    <div className='grid-5'>
                        <div>
                            <Link to="#" >
                                <div >
                                    Features
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="#" >

                                <div >
                                    <span>How it Works</span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="#" >
                                <div >

                                    <span>Devices & Downloads</span>
                                </div>

                            </Link>
                        </div>
                        <div>
                            <Link to="#" >
                                <div >

                                    <span>Apps & Content</span>
                                </div>

                            </Link>
                        </div>
                        <div>
                            <Link to="#" >
                                <div >

                                    <span>Pricing</span>
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className='margin-auto'><ButtonGroup /></div>
            </div>
        </div>
    )
}
