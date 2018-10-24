import * as React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { store } from '../store'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

type Position = { lat: number; lng: number }

type State = {
    center: Position
    marker: Position
    zoom: number
    draggable: boolean
}
@observer
export class ShopList extends React.Component<{}, State> {
    state = {
        center: {
            lat: 51.505,
            lng: -0.09
        },
        marker: {
            lat: 51.505,
            lng: -0.09
        },
        zoom: 13,
        draggable: true
    }
    refmarker = React.createRef()

    toggleDraggable = () => {
        this.setState({ draggable: !this.state.draggable })
    }

    updatePosition = () => {
        const marker = this.refmarker.current
        if (marker != null) {
            this.setState({
                //@ts-ignore
                marker: marker.leafletElement.getLatLng()
            })
        }
    }

    render() {
        const position: [number, number] = [this.state.center.lat, this.state.center.lng]
        const addresses = Array.from(store.addresses.values())
        console.log(addresses)
        return (
            <div style={{ height: '430px' }}>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    >
                        {addresses.map(a => {
                            console.log(toJS(a.pos))
                            return (
                                <Marker key={a.id} draggable={false} position={a.pos}>
                                    <Popup minWidth={90}>{JSON.stringify(a)}</Popup>
                                </Marker>
                            )
                        })}
                    </TileLayer>
                </Map>
            </div>
        )
    }
}
