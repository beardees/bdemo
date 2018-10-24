import * as React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { store } from '../store'

type Position = { lat: number; lng: number }

type State = {
    center: Position
    marker: Position
    zoom: number
    draggable: boolean
}

export class Shops extends React.Component<{}, State> {
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
        const markerPosition: [number, number] = [
            this.state.marker.lat,
            this.state.marker.lng
        ]
        return (
            <div style={{ height: '430px' }}>
                <div>
                    <input type="text" placeholder="address" />
                    {/* <button onClick={() => {
                        store.add
                    }}>add</button> */}
                </div>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        draggable={this.state.draggable}
                        onDragend={this.updatePosition}
                        position={markerPosition}
                        ref={this.refmarker as any}
                    >
                        <Popup minWidth={90}>
                            <span onClick={this.toggleDraggable}>
                                {this.state.draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
                                <button
                                    onClick={() => {
                                        store.createAddress({
                                            id: String(Math.random()),
                                            owner: store.currentUserId || 'u1',
                                            pos: [
                                                this.state.marker.lat,
                                                this.state.marker.lng
                                            ]
                                        })
                                    }}
                                >
                                    Add to feed
                                </button>
                            </span>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}
