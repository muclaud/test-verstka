import React from 'react'
import { Link } from 'react-router-dom'


import binaryFort from '../../assets/icons/BinaryFortressLight.png'
import displayFusion from '../../assets/icons/DisplayFusion.png'
import checkCenter from '../../assets/icons/CheckCentral.png'
import clipboardFusion from '../../assets/icons/ClipboardFusion.png'
import fileSeek from '../../assets/icons/FileSeek.png'
import voiceBot from '../../assets/icons/VoiceBot.png'
import wallpaperFusion from '../../assets/icons/WallpaperFusion.png'
import path from '../../assets/icons/Path.png'

import './HeaderBarProducts.css'

export default function HeaderBarProducts() {
    return (

        <div className='height-52'>

            <div className='wrapper-7' >
                <div className="">
                    <Link to='#' className="">
                        <div className="">
                            <img src={binaryFort} alt='Binary Fortress'></img>
                            Binary Fortress
                            <img src={path} alt='path'></img>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="#">

                        <div className="">
                            <img src={displayFusion} alt='DisplayFusion'></img>
                            DisplayFusion
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="#" >
                        <div className="">
                            <img src={checkCenter} alt='CheckCentral'></img>
                            <span>CheckCentral</span>
                        </div>

                    </Link>
                </div>
                <div>
                    <Link to="#">
                        <div className="">
                            <img src={clipboardFusion} alt='ClipboardFusion'></img>
                            <span>ClipboardFusion</span>
                        </div>

                    </Link>
                </div>
                <div>
                    <Link to="#" >
                        <div className="">
                            <img src={fileSeek} alt='FileSeek'></img>
                            <span>FileSeek</span>
                        </div>

                    </Link>
                </div>
                <div>
                    <Link to="#">
                        <div className="">
                            <img src={voiceBot} alt='VoiceBot'></img>
                            <span>VoiceBot</span>
                        </div>

                    </Link>
                </div>
                <div>
                    <Link to="#" >
                        <div className="">
                            <img src={wallpaperFusion} alt='WallpaperFusion'></img>
                            <span>WallpaperFusion</span>
                        </div>
                    </Link>
                </div>
            </div>

        </div>

    )
}
