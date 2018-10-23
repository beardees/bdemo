import * as React from 'react'
import { observer } from 'mobx-react'
import { store, UserId } from '../store'
import { Page404 } from './page404'
import { BeardCard } from './beardCard'

type Props = {
    userId: UserId
}
@observer
export class Profile extends React.Component<Props> {
    render() {
        const uid = this.props.userId
        const user = store.users.get(uid)
        if (user == null) return <Page404 />
        const beards = Array.from(store.beards.values()).filter(
            beard => beard.userId === uid
        )
        return (
            <div>
                <h1>User {user.name}</h1>
                {beards.map(beard => (
                    <BeardCard beard={beard} />
                ))}
            </div>
        )
    }
}
