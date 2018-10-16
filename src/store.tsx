import { observable, action } from 'mobx'
import { ajax } from './utils'

export class Store {
    @observable
    page: string = 'page1'

    @observable
    auth: { user: Object; jwt: string } | null = null

    @action
    setPage = (page: string) => {
        this.page = page
        console.log('this.page=', this.page)
    }

    @action
    login(identifier: string, password: string) {
        ajax({
            type: 'POST',
            url: `http://${window.location.hostname}:1337/auth/local`,
            data: { identifier, password },
            done: function(auth) {
                console.log('authentication success:', { auth })
                // @ts-ignore
                store.auth = auth
            }
        })
    }
}

export const store = new Store()
