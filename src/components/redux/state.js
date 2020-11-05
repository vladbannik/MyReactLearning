let renderEntireTree = () => {
    console.log("state is changed")
}

let state = {
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'vovo' },
            { id: 2, name: 'vlad2' },
            { id: 3, name: 'vlad3' },
            { id: 4, name: 'vlad4' },
            { id: 5, name: 'vlad5' },
            { id: 6, name: 'vlad6' }
        ],
        messages: [
            { id: 1, message: 'hi, its mee...' },
            { id: 2, message: 'hi, its mee...' },
            { id: 3, message: 'hi, its mee...' },
            { id: 4, message: 'hi, what is...' },
            { id: 5, message: 'take me a photo...' }

        ]
    },
    profilePage: {
        posts: [
            { id: 1, text: 'hahaha', like: 10 },
            { id: 2, text: 'this is posted from you:)', like: 99 },
            { id: 3, text: 'Let her go...', like: 4000 },
            { id: 3, text: 'Hey brother', like: 1999 }
        ],
        newPostText: ""
    },
    navBarPage: {
        sidebar: { text: "sideBar text" }
    }
}
export let addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        like: 0
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText

    renderEntireTree(state)
}
export default state;