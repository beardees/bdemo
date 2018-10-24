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
}
@observer
export class Shops extends React.Component<{}, State> {
    state = {
        center: { lat: 51.505, lng: -0.09 },
        marker: { lat: 51.505, lng: -0.09 },
        zoom: 13
    }
    refmarker = React.createRef()

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
        const addresses = Array.from(store.addresses.values())

        return (
            <div style={{ height: '430px' }}>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {addresses.map(a => {
                        console.log(toJS(a.pos))
                        return (
                            <Marker
                                key={a.id}
                                draggable={false}
                                position={[a.pos[0], a.pos[1]]}
                                zIndexOffset={1}
                            >
                                <Popup minWidth={90}>{JSON.stringify(a)}</Popup>
                            </Marker>
                        )
                    })}
                    <Marker
                        draggable={true}
                        onDragend={this.updatePosition}
                        position={markerPosition}
                        zIndexOffset={2}
                        ref={this.refmarker as any}
                    >
                        <Popup minWidth={90}>
                            <span>
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
