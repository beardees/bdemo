import * as React from 'react'
import { observer } from 'mobx-react'

@observer
export class Page1 extends React.Component {
    render() {
        return (
            <div>
                <h1>Page1</h1>
            </div>
        )
    }
}
