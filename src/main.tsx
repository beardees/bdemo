import * as React from 'react'
import { render } from 'react-dom'
import { observer } from 'mobx-react'

import { store } from './store'

import { Page2 } from './page2'
import { Page1 } from './page1'
import { Page3 } from './page3'

@observer
class App extends React.Component {
    render() {
        let pageContent = null
        if (store.page === 'page1') {
            pageContent = <Page1 />
        } else if (store.page === 'page2') {
            pageContent = <Page2 />
        } else if (store.page === 'page3') {
            pageContent = <Page3 />
        }

        return (
            <div>
                <div className="menu">
                    <button onClick={() => store.setPage('page1')}>Page1</button>
                    <button onClick={() => store.setPage('page2')}>Page2</button>
                    <button onClick={() => store.setPage('page3')}>Page3</button>
                </div>
                {pageContent}
            </div>
        )
    }
}

const $root = document.getElementById('root')
render(<App />, $root)
