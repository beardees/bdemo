import * as React from 'react'
import { observer } from 'mobx-react'
import { store } from '../store'
import { BeardCard } from './beardCard'

@observer
export class Feed extends React.Component {
    render() {
        const beards = Array.from(store.beards.values())
        return (
            <div>
                <h1>Page2</h1>
                {beards.map(beard => {
                    return <BeardCard beard={beard} />
                })}
            </div>
        )
    }
}
