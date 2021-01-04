let rerenderEntireTree = () => {
    console.log('satet idfigh');
}

let state = {
    profilePage : {
        posts: [
            { id: 1, message: 'GG', likesCount: 8 },
            { id: 2, message: 'WP', likesCount: 9 },
        ],
        newPostText: 'sdsdsd'
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimyc' },
            { id: 2, name: 'Ivan' },
            { id: 3, name: 'Sergey' },
            { id: 4, name: 'Anya' },
            { id: 5, name: 'Sveta' }
        ],
        messages: [
            { id: 1, message: 'Dimych' },
            { id: 2, message: 'Ivan' },
            { id: 3, message: 'Sergey' },
            { id: 4, message: 'Anya' },
            { id: 5, message: 'Sveta' }
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subsribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;