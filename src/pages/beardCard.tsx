import * as React from 'react'
import { observer } from 'mobx-react'
import { store, Beard } from '../store'

type P = { beard: Beard }
@observer
export class BeardCard extends React.Component<P> {
    render() {
        const beard = this.props.beard
        return (
            <div className="beardCard">
                <img src={beard.url} />
                {/* <pre>{JSON.stringify(beard, null, 4)}</pre> */}
                <button
                    onClick={() => {
                        store.goToPage({
                            name: 'profile',
                            userId: beard.userId
                        })
                    }}
                >
                    Go to user
                </button>
            </div>
        )
    }
}
