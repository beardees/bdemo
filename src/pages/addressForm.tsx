import * as React from 'react'
import { store, UserId } from '../store'

type P = { uid: UserId }
type S = { photoUrl: string }

export class addressForm extends React.Component<P, S> {
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
                        store.createAddress({
                            id: String(Math.random()),
                            url: this.state.addressurl,
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
