import * as React from 'react'
import { observer } from 'mobx-react'
import { store } from './store'

@observer
export class Page2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Page2</h1>
                <button onClick={() => store.fetchBeards()}>fetch</button>
                {store.beards.map((b: any) => {
                    return <div className="beard">{JSON.stringify(b)}</div>
                })}
            </div>
        )
    }
}
