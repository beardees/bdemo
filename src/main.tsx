import * as React from 'react'
import { render } from 'react-dom'
import { observer } from 'mobx-react'

import { store } from './store'

import { Feed } from './pages/feed'
import { MyProfile } from './pages/myProfile'
import { Profile } from './pages/profile'
import { Shops } from './pages/shops'

@observer
class App extends React.Component {
    render() {
        const page = store.page
        let pageContent = null
        if (page.name === 'myProfile') {
            pageContent = <MyProfile />
        } else if (page.name === 'feed') {
            pageContent = <Feed />
        } else if (page.name === 'profile') {
            pageContent = <Profile userId={page.userId} />
        } else if (page.name === 'shops') {
            pageContent = <Shops />
        }

        return (
            <div className="layout">
                <div className="contentPane">
                    <div className="contentWrapper">{pageContent}</div>
                </div>
                <div className="menuPane">
                    <button onClick={() => store.goToPage({ name: 'myProfile' })}>
                        My profile
                    </button>
                    <button onClick={() => store.goToPage({ name: 'feed' })}>Feed</button>
                    <button onClick={() => store.goToPage({ name: 'shops' })}>
                        Shops
                    </button>
                </div>
            </div>
        )
    }
}

const $root = document.getElementById('root')
render(<App />, $root)
