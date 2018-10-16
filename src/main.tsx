import * as React from 'react'
import { store } from './store'
import { render } from 'react-dom'

import { Page2 } from './page2'
import { Page1 } from './page1'
import { observer } from 'mobx-react'

@observer
class App extends React.Component {
    render() {
        let pageContent = null
        if (store.page === 'page1') {
            pageContent = <Page1 />
        } else if (store.page === 'page2') {
            pageContent = <Page2 />
        }

        return (
            <div>
                <div className="menu">
                    <button onClick={() => store.setPage('page1')}>Page1</button>
                    <button onClick={() => store.setPage('page2')}>Page2</button>
                </div>
                {pageContent}
            </div>
        )
    }
}

const $root = document.getElementById('root')
render(<App />, $root)
