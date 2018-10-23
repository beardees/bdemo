import * as React from 'react'
import { observer } from 'mobx-react'

@observer
export class Page404 extends React.Component {
    render() {
        return (
            <div>
                <h1>404 not found</h1>
            </div>
        )
    }
}
