import * as React from 'react'
import { observer } from 'mobx-react'
import { store } from '../store'

@observer
export class Shops extends React.Component {
    render() {
        const addresses = Array.from(store.addresses.values())
        return (
            <div>
                <h1>My Barber Shops</h1>
                {addresses.map(shop => {
                    return <div className="beard">{JSON.stringify(shop)}</div>
                })}
            </div>
        )
    }
}

import React from 'react'

let __loaded: boolean = false

export default class GoogleMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mapIsReady: __loaded
        }
    }

    componentDidMount() {
        if (__loaded) return
        const ApiKey = 'AIzaSyDa9smvZCA0L8-KlZ7Z2ioCL1ipRP6XZtI'
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}`
        script.async = true
        script.defer = true
        script.addEventListener('load', () => {
            __loaded = true
            this.setState({ mapIsReady: true })
        })

        document.body.appendChild(script)
    }

    componentDidUpdate() {
        if (this.state.mapIsReady) {
            // Display the map
            this.map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 12,
                mapTypeId: 'roadmap'
            })
            // You also can add markers on the map below
        }
    }

    render() {
        return <div id="map" />
    }
}
