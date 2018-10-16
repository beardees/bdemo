import { observable, action } from 'mobx'

export class Store {
    @observable
    page: string = 'page1'

    @action
    setPage = (page: string) => {
        this.page = page
        console.log('this.page=', this.page)
    }
}

export const store = new Store()
