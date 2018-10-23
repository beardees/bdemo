import * as React from 'react'
import { store, UserId } from '../store'

type P = { uid: UserId }
type S = { photoUrl: string }

export class BeardForm extends React.Component<P, S> {
    render() {
        return (
            <div>
                <label>
                    photo url
                    <input
                        onChange={ev => {
                            this.setState({ photoUrl: ev.target.value })
                        }}
                    />
                </label>
                <button
                    onClick={() =>
                        store.createBeard({
                            id: String(Math.random()),
                            url: this.state.photoUrl,
                            userId: this.props.uid,
                            likes: []
                        })
                    }
                >
                    Add
                </button>
            </div>
        )
    }
}
