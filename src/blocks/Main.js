import React from 'react'

import CloudShow from '../components/main/CloudShow'
import Sysops from '../components/main/Sysops'
import DigitalSignage from '../components/main/DigitalSignage'
import Spacer from '../components/main/Spacer'
import TryCloud from '../components/main/TryCloud'

export default function Main() {
    return (
        <div>
            <Spacer />
            <CloudShow />
            <Sysops />
            <DigitalSignage />
            <TryCloud />
        </div>
    )
}
