import React from 'react'
import { Link } from 'react-router-dom'

import GridCard from './GridCard'
import toolset from '../../assets/icons/Group_9.png'
import apps from '../../assets/icons/Group_91.png'
import calendar from '../../assets/icons/Group_92.png'
import layers from '../../assets/icons/Group_93.png'
import widgets from '../../assets/icons/Group_94.png'
import thunder from '../../assets/icons/Group_95.png'

import './CloudShow.css'


export default function CloudShow() {

    const cardInfo = [{
        id: 1,
        header: 'Flexible & Easy to Setup',
        text: 'Use CloudShow to power a menu board at your restaurant, a promo screen in reception, an analytics dashboard for production, or anything else you can think of.',
        icon: toolset,

    },
    {
        id: 2,
        header: '60+ Apps and Counting',
        text: 'Choose from over 60 apps to get started in no time. Pick from image slideshows, video streaming, social apps, and much more!',
        icon: apps,
    }, {
        id: 3,
        header: 'Scheduling',
        text: 'Use detailed schedules to show different content at different times of the day, or different days of the week.',
        icon: calendar,
    }, {
        id: 4,
        header: 'Templates',
        text: 'Use templates to simplify your device management. Create a template and use it on multiple devices with one-click.',
        icon: layers,
    }, {
        id: 5,
        header: 'Widgets',
        text: "Extend your sign's layout with widgets.Widgets can overlay extra information on your sign, like the time, date, weather, and more!",
        icon: widgets,
    }, {
        id: 6,
        header: 'Realtime Sign Updates',
        text: "Update your device's configuration and your digital sign is updated automatically. There's nothing to update or install each time, it works like magic!",
        icon: thunder,
    }]
    return (
        <div className='padding-50'>
            <div>
                <h2 className='header-2'>CloudShow Features</h2>
                <h4 className='paragraph-text text-center'>Discover our unique features and learn more about them.</h4>
            </div>
            <div className='grid-3x2'>
                {cardInfo.map((card) => (
                    <GridCard key={card.id} icon={card.icon} text={card.text} header={card.header} />
                ))}
            </div>
            <Link to='#' className='margin-auto block'><span className='linkView text-center'>View all features</span></Link>
        </div>
    )
}
