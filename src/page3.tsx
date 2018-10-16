import * as React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { store } from './store'

@observer
export class Page3 extends React.Component {
    @observable
    login: string = ''

    @observable
    password: string = ''

    render() {
        return (
            <div>
                <pre>{JSON.stringify(store.auth, null, 4)}</pre>
                <label>
                    login
                    <input
                        type="text"
                        onChange={ev => {
                            this.login = ev.target.value
                        }}
                    />
                </label>

                <label>
                    password
                    <input
                        type="password"
                        onChange={ev => {
                            this.password = ev.target.value
                        }}
                    />
                </label>

                <button
                    onClick={() => {
                        console.log(
                            `trying to login with login ${this.login} and password ${
                                this.password
                            }`
                        )
                        store.login(this.login, this.password)
                    }}
                >
                    Login
                </button>
            </div>
        )
    }
}
