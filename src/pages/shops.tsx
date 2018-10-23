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

import GoogleMapReact from 'google-map-react'
import CONFIG from '../../../config.json'
import { markers, mapConfig } from '../../helper/utils'

import './style.styl'

const CustomMarker = ({ text }) => (
    <div className="custom-marker">
        <p>{text}</p>
    </div>
)

class GoogleMapReactComponent extends PureComponent {
    render() {
        const GoogleMapsMarkers = markers.map(marker => (
            <CustomMarker
                key={`marker_${marker.name}`}
                lat={marker.latlng[0]}
                lng={marker.latlng[1]}
                text={marker.name}
            />
        ))

        return (
            <GoogleMapReact
                defaultCenter={mapConfig.center}
                defaultZoom={mapConfig.zoom}
                layerTypes={['TrafficLayer', 'TransitLayer']}
                bootstrapURLKeys={{
                    key: CONFIG.GOOGLE_MAPS_API_KEY,
                    language: 'de'
                }}
            >
                {GoogleMapsMarkers}
            </GoogleMapReact>
        )
    }
}

export default GoogleMapReactComponent
