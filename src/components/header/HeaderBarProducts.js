import React from 'react'



import binaryFort from '../../assets/icons/BinaryFortressLight.png'
import displayFusion from '../../assets/icons/DisplayFusion.png'
import checkCenter from '../../assets/icons/CheckCentral.png'
import clipboardFusion from '../../assets/icons/ClipboardFusion.png'
import fileSeek from '../../assets/icons/FileSeek.png'
import voiceBot from '../../assets/icons/VoiceBot.png'
import wallpaperFusion from '../../assets/icons/WallpaperFusion.png'
import path from '../../assets/icons/Path.png'


export default function HeaderBarProducts() {
    return (
        <div className='padding-5 flex-header' >

            <div className="flex-item">
                <img src={binaryFort} alt='Binary Fortress'></img>
                <span className="hidden">Binary Fortress</span>
                <img className="hidden" src={path} alt='path'></img>
            </div>

            <div className="flex-item">
                <img src={displayFusion} alt='DisplayFusion'></img>
                <span className="hidden">DisplayFusion</span>
            </div>

            <div className="flex-item">
                <img src={checkCenter} alt='CheckCentral'></img>
                <span className="hidden">CheckCentral</span>
            </div>

            <div className="flex-item">
                <img src={clipboardFusion} alt='ClipboardFusion'></img>
                <span className="hidden">ClipboardFusion</span>
            </div>

            <div className="flex-item">
                <img src={fileSeek} alt='FileSeek'></img>
                <span className="hidden">FileSeek</span>
            </div>

            <div className="flex-item">
                <img src={voiceBot} alt='VoiceBot'></img>
                <span className="hidden">VoiceBot</span>
            </div>

            <div className="flex-item">
                <img src={wallpaperFusion} alt='WallpaperFusion'></img>
                <span className="hidden">WallpaperFusion</span>
            </div>

        </div>

    )
}
