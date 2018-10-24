import { observable, action } from 'mobx'

export type UserId = string
export type BeardId = string
export type URL = string

export type Beard = {
    id: BeardId
    userId: UserId
    likes: UserId[] // tableau de userId
    url: URL
}
export type User = {
    id: string
    name: string
    photoId: string | null
}

export type AddressId = string
type Lat = number
type Lon = number
export type Address = {
    id: AddressId
    owner: UserId
    pos: [Lat, Lon]
}

type Page =
    | { name: 'profile'; userId: UserId } // login quand pas connecté, profile auqnd conencté
    | { name: 'myProfile' } // login quand pas connecté, profile auqnd conencté
    | { name: 'feed' } // liste des photos
    | { name: 'addShop' } //
    | { name: 'shops' } //

export class Store {
    @observable
    page: Page = { name: 'myProfile' }

    @action
    goToPage(page: Page) {
        this.page = page
    }

    @observable
    currentUserId: UserId | null = null

    @observable
    beards: Map<BeardId, Beard> = new Map()

    @observable
    users: Map<UserId, User> = new Map()

    @observable
    addresses: Map<AddressId, Address> = new Map()

    @action
    login(userId: string, _pass: string) {
        this.currentUserId = userId
        let currentUser = this.users.get(userId)
        if (currentUser == null) {
            this.createUser({
                id: userId,
                name: userId,
                photoId: null
            })
        }
    }
    constructor() {
        this.users.set('paul', {
            id: 'paul',
            name: 'Paul',
            photoId: 'paul_photo1'
        })
        this.addresses.set('test1', {
            owner: 'paul',
            id: 'test1',
            pos: [48.9, 2.3]
        })
        this.users.set('michou', {
            id: 'michou',
            name: 'Michou',
            photoId: 'michou_photo1'
        })
        this.beards.set('paul_photo1', {
            id: 'paul_photo1',
            userId: 'paul',
            url:
                'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            likes: []
        })
        this.beards.set('michou_photo1', {
            id: 'michou_photo1',
            userId: 'michou',
            url:
                'https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            likes: []
        })
        this.beards.set('michou_photo2', {
            id: 'michou_photo2',
            userId: 'michou',
            url:
                'https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            likes: []
        })
    }
    @action
    logout() {
        this.currentUserId = null
    }

    createBeard(beard: Beard) {
        this.beards.set(beard.id, beard)
    }
    createUser(user: User) {
        this.users.set(user.id, user)
    }
    createAddress(address: Address) {
        this.addresses.set(address.id, address)
    }
}

export const store = new Store()
