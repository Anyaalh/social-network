import {v1} from "uuid";
import {rerenderEmpireTree} from "../render";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


export type PostsDataType = {
    id: string
    message: string
    likeCount: number
}

export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}



export type ProfilePageType = {
    posts: PostsDataType[]
    newPostText: string
}
export type DialogsPageType = {
    messages: MessagesDataType[]
    dialogs: DialogsDataType[]

}

export type SidebarType = {
    paths: PathType[]
}

export type PathType = {
    title: string
    path: string
    id: string
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hello? how are you?", likeCount: 1},
            {id: v1(), message: `It's my first post`, likeCount: 4}
        ],
        newPostText: ""
    },
    dialogsPage: {
        messages: [
            {id: v1(), message: "Hi"},
            {id: v1(), message: "Hello"},
            {id: v1(), message: "Yo"},
            {id: v1(), message: "Heeeey"},
            {id: v1(), message: "Hi"}
        ],
        dialogs: [
            {id: v1(), name: "Ann"},
            {id: v1(), name: "Nadya"},
            {id: v1(), name: "Olga"},
            {id: v1(), name: "Mikhail"},
            {id: v1(), name: "Ilya"},
            {id: v1(), name: "Daniil"},
        ]
    },
    sidebar: {
        paths: [
            {id: v1(), title: "Profile", path: "/profile" },
            {id: v1(), title: "Dialogs", path: "/dialogs" },
            {id: v1(), title: "News", path: "/news" },
            {id: v1(), title: "Music", path: "/music" },
            {id: v1(), title: "Friends", path: "/friends" },
        ]
    },

}

export const addPost = () => {
    let newPost: PostsDataType = {id: v1(), message: state.profilePage.newPostText, likeCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEmpireTree(state)
}

export const updatePostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEmpireTree(state)
}