import React from 'react'
import { Icon } from 'semantic-ui-react'



export default function FooterSocial() {
    return (
        <div>

            <div className="Item grey">
                Social Media
            </div>

            <div className="Item">
                <Icon link name='facebook' />
                Facebook
            </div>

            <div className="Item">
                <Icon link name='linkedin' />
                Linkedin
            </div>

            <div className="Item">
                <Icon link name='instagram' />
                Instagram
            </div>

            <div className="Item">
                <Icon link name='twitter' />
                Twitter
            </div>
        </div >
    )
}
