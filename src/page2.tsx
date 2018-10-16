import * as React from 'react'
import { Beard } from './beard'
import { observer } from 'mobx-react'

@observer
export class Page2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Page2</h1>
                list of all beards
                <Beard />
                <Beard />
                <Beard />
                carte
            </div>
        )
    }
}
