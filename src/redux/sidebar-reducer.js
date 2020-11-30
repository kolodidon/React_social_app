import Ava from "../assets/Ava.png";

let initialState = {
    friends: [
        {id: 1, name: 'Viktor', surname: 'Doodiev', avatar: Ava },
        {id: 2, name: 'Piter', surname: 'Parker', avatar: Ava },
        {id: 3, name: 'Woodie', surname: 'Bamboozle', avatar: Ava },
        {id: 4, name: 'Vlad', surname: 'Goonie', avatar: Ava },
        {id: 5, name: 'Josef', surname: 'Tiki', avatar: Ava }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer