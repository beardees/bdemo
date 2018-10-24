import * as React from 'react'
import { observer } from 'mobx-react'
import { store } from '../store'
import { LoginWidget } from './loginWidget'
import { Profile } from './profile'
import { BeardForm } from './beardForm'

@observer
export class MyProfile extends React.Component {
    render() {
        const uid = store.currentUserId
        //pas connecté
        if (uid == null) {
            return (
                <div className="loginPage">
                    please login
                    <LoginWidget />
                </div>
            )
        }
        const user = store.users.get(uid)
        if (user == null) return <div>Error, user missing in database</div>

        return (
            <div>
                <h1>My Profile</h1>

                <BeardForm uid={uid} />
                <button onClick={() => store.logout()}>Logout</button>
                <Profile userId={uid} />
            </div>
        )
    }
}
