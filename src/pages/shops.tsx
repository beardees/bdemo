import * as React from 'react'
import { observer } from 'mobx-react'
import { store } from '../store'

@observer
export class Shops extends React.Component {
    render() {
        const addresses = Array.from(store.addresses.values())
        return (
            <div>
                <h1>Page2</h1>
                {addresses.map(shop => {
                    return <div className="beard">{JSON.stringify(shop)}</div>
                })}
            </div>
        )
    }
}
