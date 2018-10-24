import * as React from 'react'
import { observer } from 'mobx-react'
import { store } from '../store'
import { BeardCard } from './beardCard'

@observer
export class Feed extends React.Component {
    render() {
        const beards = Array.from(store.beards.values())
        const addresses = Array.from(store.addresses.values())
        return (
            <div>
                <h1>Page2</h1>
                {beards.map(beard => {
                    return <BeardCard beard={beard} />
                })}
                {addresses.map(a => {
                    return (
                        <div>
                            [lat:
                            {a.pos[0]}
                            ,lon:
                            {a.pos[1]}]
                            {/* <img
                                className="static-gmap"
                                src={`//maps.googleapis.com/maps/api/staticmap?center=${
                                    a.pos[0]
                                },${
                                    a.pos[1]
                                }&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyBNFwJ5SQRHwpnnhxUjFfSGm9Q8wl2-XuI`}
                            /> */}
                        </div>
                    )
                })}
            </div>
        )
    }
}
